import type { ReactNode } from "react";

type Social = {
  href?: string;
  icon?: ReactNode;
  label?: string;
};

type Props = {
  imageSrc?: string;
  name?: string;
  role?: string;
  badges?: string[];
  bio?: string;
  socials?: Social[];
  aboutTitle?: string;
  viewProfileText?: string;
};

const DefaultX = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M14.2737 10.1635L23.2023 0H21.0872L13.3313 8.82305L7.14125 0H0L9.3626 13.3433L0 24H2.11504L10.3002 14.6806L16.8388 24H23.98M2.8784 1.5619H6.12769L21.0856 22.5148H17.8355"
      fill="url(#pp_x_grad)"
    />
    <defs>
      <linearGradient
        id="pp_x_grad"
        x1="11.99"
        y1="0"
        x2="11.99"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#501BD6" />
        <stop offset="1" stopColor="#7F57E2" />
      </linearGradient>
    </defs>
  </svg>
);

const DefaultInstagram = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <g clipPath="url(#pp_inst_clip)">
      <path
        d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z"
        fill="url(#pp_inst_grad)"
      />
    </g>
    <defs>
      <linearGradient
        id="pp_inst_grad"
        x1="12"
        y1="0"
        x2="12"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#501BD6" />
        <stop offset="1" stopColor="#7F57E2" />
      </linearGradient>
      <clipPath id="pp_inst_clip">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const DefaultLinkedIn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <g clipPath="url(#pp_li_clip)">
      <path
        d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z"
        fill="url(#pp_li_grad)"
      />
    </g>
    <defs>
      <linearGradient
        id="pp_li_grad"
        x1="12"
        y1="0"
        x2="12"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#501BD6" />
        <stop offset="1" stopColor="#7F57E2" />
      </linearGradient>
      <clipPath id="pp_li_clip">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default function Author({
  imageSrc = "https://placehold.co/256x225",
  name = "John Doe",
  role = "SaaS Industry Veteran & Growth Strategist",
  badges = [],
  bio = `John Doe is a SaaS industry veteran and a growth hacker with 10+ years\n          experience helping startups scale efficiently. He specializes in AI\n          integration, productivity optimization, and building sustainable\n          growth systems.`,
  aboutTitle = "About the Author",
  viewProfileText = "View Profile",
  socials = [
    { href: "#", icon: DefaultX, label: "X" },
    { href: "#", icon: DefaultInstagram, label: "Instagram" },
    { href: "#", icon: DefaultLinkedIn, label: "LinkedIn" },
  ],
}: Props) {
  return (
    <div
      data-layer="Frame 2147206154"
      className="Frame2147206154 h-[800px] md:h-[257px] p-4 bg-white/10 rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex justify-start items-start gap-6 flex flex-col md:flex-row"
    >
      <img
        data-layer="Rectangle 39982"
        className="Rectangle39982 w-full md:w-64 self-stretch rounded-3xl"
        src={imageSrc}
        alt={name}
      />
      <div
        data-layer="Frame 2147206153"
        className="Frame2147206153 flex-1 inline-flex flex-col justify-start items-start gap-6"
      >
        <div
          data-layer="About the Author"
          className="AboutTheAuthor self-stretch justify-start text-neutral-50 text-xl font-medium font-['Poppins'] leading-loose "
        >
          {aboutTitle}
        </div>
        <div
          data-layer="Frame 2147206152"
          className="Frame2147206152 self-stretch inline-flex gap-5 md:gap-4 flex-col md:flex-row items-start md:items-center content-center"
        >
          <div
            data-layer="John Doe"
            className="JohnDoe text-left md:text-center justify-start text-neutral-50 text-lg font-medium font-['Poppins']"
          >
            {name}
          </div>

          {badges.length > 0 ? (
            badges.map((b, i) => (
              <div
                key={i}
                data-layer={`Badge-${i}`}
                className="Container px-4 py-1 bg-white/10 rounded-lg flex justify-start items-start gap-4"
              >
                <div className="SaasIndustryVeteranGrowthStrategist text-center justify-start text-neutral-50 text-xs font-medium font-['Poppins']">
                  {b}
                </div>
              </div>
            ))
          ) : (
            <div
              data-layer="Container"
              className="Container px-4 py-1 bg-white/10 rounded-lg flex justify-start items-start gap-4"
            >
              <div
                data-layer="SaaS Industry Veteran & Growth Strategist"
                className="SaasIndustryVeteranGrowthStrategist text-left md:text-center justify-start text-neutral-50 text-xs font-medium font-['Poppins']"
              >
                {role}
              </div>
            </div>
          )}

          <div
            data-layer="Container"
            className="Container px-4 py-1 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-lg flex justify-start items-start gap-4"
          >
            <div
              data-layer="View Profile >"
              className="ViewProfile text-left md:text-center justify-start text-white text-xs font-medium font-['Poppins']"
            >
              {viewProfileText}
            </div>
          </div>
        </div>
        <div
          data-layer="bio"
          className="JohnDoeIsASaasIndustryVeteranAndAGrowthHackerWith10YearsExperienceHelpingStartupsScaleEfficientlyHeSpecializesInAiIntegrationProductivityOptimizationAndBuildingSustainableGrowthSystems self-stretch justify-start text-zinc-100 text-xs font-normal font-['Poppins'] whitespace-pre-line"
        >
          {bio}
        </div>
        <div
          data-layer="Button List"
          className="ButtonList inline-flex justify-start items-center gap-4"
        >
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href || "#"}
              aria-label={s.label || `${name} social`}
            >
              <div className="XLogo w-12 h-12 bg-[#ebf2fd] rounded-[100px] flex justify-center items-center gap-2.5">
                <div className="Icon w-6 h-6 relative overflow-hidden">
                  {s.icon}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
