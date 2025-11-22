import type { ReactNode } from "react";
import type { Author as AuthorData } from "../../hooks/useAuthor";

type Social = {
  href?: string;
  icon?: ReactNode;
  label?: string;
};

type Props = {
  authorData?: AuthorData;
  imageSrc?: string;
  name?: string;
  role?: string;
  bio?: string;
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
  authorData,
  imageSrc = "https://placehold.co/256x225",
  name = "John Doe",
  role = "SaaS Industry Veteran & Growth Strategist",
  bio = `John Doe is a SaaS industry veteran and a growth hacker with 10+ years experience helping startups scale efficiently. He specializes in AI integration, productivity optimization, and building sustainable growth systems.`,
  aboutTitle = "About the Author",
  viewProfileText = "View Profile >",
}: Props) {
  const displayImage = authorData?.authorImageURL || imageSrc;
  const displayName = authorData?.authorName || name;
  const displayRole = authorData?.authorIndustry || role;
  const displayBio = authorData?.authorDescription || bio;
  const displayAboutTitle = authorData?.authorTitle || aboutTitle;
  const displayProfileURL = authorData?.authorViewProfileURL || "#";

  const formatSocialUrl = (url: string | undefined): string => {
    if (!url || !url.trim()) return "#";
    const trimmedUrl = url.trim();
    if (!trimmedUrl.startsWith("http://") && !trimmedUrl.startsWith("https://")) {
      return `https://${trimmedUrl}`;
    }
    return trimmedUrl;
  };

  const displaySocials: Social[] = [
    {
      href: formatSocialUrl(authorData?.authorXAccount),
          icon: DefaultX,
          label: "X",
        },
    {
      href: formatSocialUrl(authorData?.authorIGAccount),
          icon: DefaultInstagram,
          label: "Instagram",
        },
    {
      href: formatSocialUrl(authorData?.authorLinkedinAccount),
          icon: DefaultLinkedIn,
          label: "LinkedIn",
        },
  ];

  return (
    <div className="w-full max-w-[821px] mx-auto">
    <div
      data-layer="Frame 2147206154"
        className="box-border flex flex-col md:flex-row items-start p-4 gap-6 w-full md:w-[821px] h-auto md:h-[257px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.08)] rounded-[24px]"
    >
        {/* Author Image */}
      <img
        data-layer="Rectangle 39982"
          className="w-full md:w-[256px] h-[225px] md:h-[225px] rounded-[24px] object-cover flex-none"
        src={displayImage}
        alt={displayName}
      />

      <div
        data-layer="Frame 2147206153"
          className="flex flex-col items-start gap-4 flex-1 min-w-0 w-full md:w-[509px] h-auto md:h-[209px]"
      >
          {/* About the Author Title */}
        <div
          data-layer="About the Author"
            className="w-full text-[#FAFAFA] text-xl font-medium font-['Poppins'] leading-8"
        >
          {displayAboutTitle}
        </div>

          {/* Name, Role Badge, and View Profile Button */}
        <div
          data-layer="Frame 2147206152"
            className="flex flex-row flex-nowrap items-center gap-4 w-full h-auto min-w-0 overflow-hidden"
        >
            {/* Author Name */}
          <div
            data-layer="John Doe"
              className="text-[#FAFAFA] text-lg font-medium font-['Poppins'] leading-[27px] flex-none whitespace-nowrap shrink-0"
          >
            {displayName}
          </div>

            {/* Role Badge */}
            <div
              data-layer="Container"
              className="flex flex-row items-center justify-center px-4 py-1 h-[26px] bg-[rgba(255,255,255,0.08)] rounded-lg flex-1 min-w-0 overflow-hidden"
            >
              <div
                data-layer="SaaS Industry Veteran & Growth Strategist"
                className="text-[#FAFAFA] text-xs font-medium font-['Poppins'] leading-[18px] text-center truncate w-full"
              >
                {displayRole}
              </div>
            </div>

            {/* View Profile Button */}
            <a
              href={displayProfileURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none whitespace-nowrap shrink-0"
            >
            <div
              data-layer="Container"
                className="flex flex-row items-center justify-center px-4 py-1 h-[26px] bg-gradient-to-b from-[#501BD6] to-[#7F57E2] rounded-lg"
            >
              <div
                data-layer="View Profile >"
                  className="text-white text-xs font-medium font-['Poppins'] leading-[18px] text-center whitespace-nowrap"
              >
                {viewProfileText}
              </div>
            </div>
          </a>
        </div>

          {/* Bio */}
        <div
          data-layer="bio"
            className="w-full text-[#F4F4F5] text-xs font-normal font-['Poppins'] leading-[18px] line-clamp-3 overflow-hidden text-ellipsis"
        >
          {displayBio}
        </div>

          {/* Social Icons */}
        <div
          data-layer="Button List"
            className="flex flex-row items-center gap-4 w-auto h-12"
        >
          {displaySocials.map((s, i) => {
            const hasValidLink = s.href && s.href !== "#";
            const content = (
              <div className="flex flex-row justify-center items-center w-12 h-12 bg-[#EBF2FD] rounded-[100px]">
                <div className="w-6 h-6 relative">
                  {s.icon}
                </div>
              </div>
            );

            return hasValidLink ? (
              <a
                key={i}
                href={s.href}
                aria-label={s.label || `${displayName} social`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none"
              >
                {content}
            </a>
            ) : (
              <div key={i} className="flex-none opacity-50 cursor-not-allowed">
                {content}
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}
