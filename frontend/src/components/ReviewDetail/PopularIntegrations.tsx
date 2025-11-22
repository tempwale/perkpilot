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
      className="ButtonsMain px-4 py-[11px] h-10 bg-white/8 rounded-[100px] flex justify-center items-center"
    >
      <div className="text-center text-neutral-50 text-xs font-medium font-['Poppins'] leading-[18px]">
        {integration.name}
      </div>
    </div>
  );
};

export default function PopularIntegrations({
  integrations = [],
}: PopularIntegrationsProps) {
  const defaultIntegrations: IntegrationItem[] = [
    { id: "slack", name: "Slack" },
    { id: "jira", name: "Jira" },
    { id: "notion", name: "Notion" },
    { id: "miro", name: "Miro" },
    { id: "zeplin", name: "Zeplin" },
    { id: "abstract", name: "Abstract" },
    { id: "principle", name: "Principle" },
    { id: "protopie", name: "Protopie" },
  ];

  const displayIntegrations =
    integrations.length > 0 ? integrations : defaultIntegrations;

  return (
    <div className="w-full px-[20px] md:px-[100px] py-16">
      <div className="w-full max-w-[1240px] mx-auto">
        <div
          data-layer="Frame 2147206216"
          className="Frame2147206216 w-full flex flex-col items-start gap-10"
        >
          <div
            data-layer="Popular Integrations"
            className="PopularIntegrations w-full text-neutral-50 text-[32px] font-medium font-['Plus_Jakarta_Sans'] leading-[42px]"
          >
            Popular Integrations
          </div>
          <div
            data-layer="Frame 2147205832"
            className="Frame2147205832 flex flex-row items-start gap-4 flex-wrap"
          >
            {displayIntegrations.map((integration) => (
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
