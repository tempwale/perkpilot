interface IntegrationItem {
  id: string;
  name: string;
}

interface PopularIntegrationsProps {
  integrations?: IntegrationItem[];
}

interface IntegrationBadgeProps {
  integration: IntegrationItem;
}

const IntegrationBadge = ({ integration }: IntegrationBadgeProps) => {
  return (
    <div
      data-layer="Buttons/main"
      className="ButtonsMain px-4 py-[11px] bg-white/10 rounded-[100px] inline-flex justify-center items-center gap-2"
    >
      <div className="text-center justify-start text-neutral-50 text-xs font-medium font-['Poppins']">
        {integration.name}
      </div>
    </div>
  );
};

export default function PopularIntegrations({
  integrations = [],
}: PopularIntegrationsProps) {
  return (
    <div className="w-full px-[20px] md:px-[100px] py-16">
      <div className="w-full max-w-[1240px] mx-auto">
        <div
          data-layer="Frame 2147206216"
          className="Frame2147206216 flex-col justify-start items-start gap-10"
        >
          <div
            data-layer="Popular Integrations"
            className="PopularIntegrations self-stretch justify-start text-neutral-50 text-[32px] font-medium font-['Plus_Jakarta_Sans'] leading-[42px]"
          >
            Popular Integrations
          </div>
          <div
            data-layer="Frame 2147205832"
            className="Frame2147205832 inline-flex justify-start items-start gap-4 flex-wrap"
          >
            {integrations.map((integration) => (
              <IntegrationBadge
                key={integration.id}
                integration={integration}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { IntegrationBadge };
