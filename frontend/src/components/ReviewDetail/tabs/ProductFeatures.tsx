interface ProductFeaturesProps {
  features?: Array<{ title: string; description?: string; _id?: string }>;
  keyFeatures?: string[];
}

export default function ProductFeatures({
  features,
  keyFeatures,
}: ProductFeaturesProps) {
  // Use features from API if available, otherwise fall back to keyFeatures or default
  const displayFeatures =
    features && features.length > 0
      ? features
      : keyFeatures && keyFeatures.length > 0
      ? keyFeatures.map((title, index) => ({
          title,
          description: "",
          _id: `${index}`,
        }))
      : [
          {
            title: "Real-time collaboration",
            description: "Multiple users can edit simultaneously.",
            _id: "1",
          },
          {
            title: "Advanced Security",
            description: "Enterprise-grade encryption and compliance.",
            _id: "2",
          },
          {
            title: "Seamless Integration",
            description: "Connects with your favorite tools and platforms.",
            _id: "3",
          },
          {
            title: "24/7 Support",
            description: "Round-the-clock assistance from our expert team.",
            _id: "4",
          },
        ];

  return (
    <div
      data-layer="Frame 2147206296"
      className="Frame2147206296 w-full flex-col justify-start items-end gap-6 "
    >
      {displayFeatures.map((feature, index) => (
        <div
          key={feature._id || index}
          data-layer="Frame 2147206310"
          className="Frame2147206310 self-stretch px-6 py-4 bg-white/10 rounded-3xl outline-1 -outline-offset-[-1px] outline-white/10 inline-flex justify-between items-center"
        >
          <div
            data-layer="Frame 2147206309"
            className="Frame2147206309 w-full flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Real-time collaboration"
              className="RealTimeCollaboration self-stretch justify-start text-white text-2xl font-medium font-['Plus_Jakarta_Sans'] leading-loose"
            >
              {feature.title}
            </div>
            {feature.description && (
              <div
                data-layer="Multiple users can edit simultaneously."
                className="MultipleUsersCanEditSimultaneously self-stretch text-left w-full justify-start text-white text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal"
              >
                {feature.description}
              </div>
            )}
          </div>
          <div
            data-layer="Perks Page"
            className="PerksPage w-14 h-14 relative bg-white rounded-[100px] overflow-hidden"
          >
            <div
              data-layer="double-check"
              className="DoubleCheck w-8 h-8 left-[12px] top-[12px] absolute overflow-hidden"
            >
              <div
                data-layer="Vector"
                className="Vector w-2.5 h-1.5 left-[2px] top-[16.67px] absolute rounded-[0.60px] outline-[1.50px] -outline-offset-[-0.75px] outline-1-black"
              />
              <div
                data-layer="Vector"
                className="Vector w-[5.33px] h-[5.33px] left-[16px] top-[9.33px] absolute outline-[1.50px] -outline-offset-[-0.75px] outline-1-black"
              />
              <div
                data-layer="Vector"
                className="Vector w-5 h-[13.33px] left-[9.33px] top-[9.33px] absolute rounded-[0.60px] outline-[1.50px] -outline-offset-[-0.75px] outline-1-black"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
