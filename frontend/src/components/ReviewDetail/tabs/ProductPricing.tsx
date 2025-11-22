interface PricingCardProps {
  planName: string;
  price: string;
  buttonText: string;
}

const PricingCard = ({ planName, price, buttonText }: PricingCardProps) => (
  <div
    data-layer="Frame 2147206305"
    className="Frame2147206305 w-[350px] md:w-[292px] p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center gap-6"
  >
    <div
      data-layer="Professional"
      className="Professional self-stretch text-center text-neutral-50 text-base font-normal font-['Plus_Jakarta_Sans'] leading-6"
    >
      {planName}
    </div>
    <div
      data-layer="$12/Month"
      className="12Month self-stretch text-center text-neutral-50 text-2xl md:text-[32px] font-medium font-['Plus_Jakarta_Sans'] leading-8 md:leading-[42px]"
    >
      {price}
    </div>
    <div
      data-layer="Buttons/main"
      className="ButtonsMain self-stretch h-12 px-6 py-4 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[100px] flex justify-center items-center"
    >
      <div
        data-layer="Product Reviews"
        className="ProductReviews text-center text-white text-base font-normal font-['Poppins'] leading-6"
      >
        {buttonText}
      </div>
    </div>
  </div>
);

interface ProductPricingProps {
  pricing?: Array<{
    plan: string;
    amount: string;
    note?: string;
    _id?: string;
  }>;
}

export default function ProductPricing({ pricing }: ProductPricingProps) {
  const defaultPricingData = [
    {
      planName: "Starter",
      price: "$9/Month",
      buttonText: "Get Started",
    },
    {
      planName: "Professional",
      price: "$12/Month",
      buttonText: "Most Popular",
    },
    {
      planName: "Business",
      price: "$19/Month",
      buttonText: "For Teams",
    },
    {
      planName: "Enterprise",
      price: "$29/Month",
      buttonText: "Contact Sales",
    },
  ];

  // Transform API pricing to component format
  const pricingData =
    pricing && pricing.length > 0
      ? pricing.map((p) => ({
          planName: p.plan,
          price: p.amount,
          buttonText: p.note || "Get Started",
        }))
      : defaultPricingData;

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 md:justify-center">
        {pricingData.map((plan, index) => (
          <PricingCard
            key={index}
            planName={plan.planName}
            price={plan.price}
            buttonText={plan.buttonText}
          />
        ))}
      </div>
    </div>
  );
}
