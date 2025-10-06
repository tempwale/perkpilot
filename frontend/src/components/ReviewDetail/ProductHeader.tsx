interface ProductHeaderProps {
  logoComponent: React.ReactNode;
  title: string;
  category: string;
  shortDescription: string;
  rating: string;
  totalReviews: number;
}

export default function ProductHeader({
  logoComponent,
  title,
  category,
  shortDescription,
  rating,
  totalReviews,
}: ProductHeaderProps) {
  return (
    <div className="flex items-start gap-4 lg:gap-10" data-node-id="250:3625">
      {/* Logo Container */}
      <div
        className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] relative shrink-0"
        data-node-id="250:3626"
      >
        <div
          className="bg-white col-[1] ml-0 mt-0 rounded-[1000px] row-[1] size-[56px] lg:size-[100px]"
          data-node-id="250:3627"
        />
        <div
          className="col-[1] ml-[12px] mt-[12px] lg:ml-[24px] lg:mt-[24px] relative row-[1] size-[32px] lg:size-[52px]"
          data-node-id="250:3628"
        >
          {logoComponent}
        </div>
      </div>

      {/* Content Container */}
      <div
        className="flex flex-1 flex-col gap-3 lg:gap-4 items-start min-h-px min-w-px relative shrink-0"
        data-node-id="250:3634"
      >
        {/* Title and Category */}
        <div
          className="flex gap-4 items-center relative shrink-0"
          data-node-id="250:3635"
        >
          <h1
            className="font-['Plus_Jakarta_Sans'] font-medium leading-[26px] lg:leading-[52px] relative shrink-0 text-[20px] lg:text-[40px] text-neutral-50"
            data-node-id="250:3636"
          >
            {title}
          </h1>
          <div
            className="bg-[rgba(255,255,255,0.08)] box-border flex gap-[8px] h-[24px] lg:h-[32px] items-center justify-center px-[12px] lg:px-[16px] py-[11px] relative rounded-[100px] shrink-0"
            data-node-id="250:3637"
          >
            <span
              className="font-['Poppins'] font-medium leading-normal text-[12px] lg:text-[14px] text-center text-neutral-50"
              data-node-id="250:3638"
            >
              {category}
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          className="font-['Plus_Jakarta_Sans'] font-normal leading-[24px] lg:leading-loose min-w-full relative shrink-0 text-[16px] lg:text-[20px] text-zinc-400 w-[min-content] whitespace-pre-wrap"
          data-node-id="250:3639"
        >
          {shortDescription}
        </p>

        {/* Rating Section */}
        <div
          className="flex gap-2 lg:gap-4 items-center relative shrink-0"
          data-node-id="250:3640"
        >
          {/* Stars Container */}
          <div
            className="flex h-[20px] lg:h-[24px] items-center relative shrink-0 w-[100px] lg:w-[121px]"
            data-node-id="250:3641"
          >
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="relative shrink-0 size-[20px] lg:size-[24px]"
                data-node-id={`250:364${2 + i}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  className="w-full h-full"
                >
                  <path
                    d="M4.22561 19.3207L5.8743 12.1933L0.344849 7.39942L7.64981 6.76531L10.4906 0.0437317L13.3314 6.76531L20.6364 7.39942L15.1069 12.1933L16.7556 19.3207L10.4906 15.5414L4.22561 19.3207Z"
                    fill="#FFDD33"
                  />
                </svg>
              </div>
            ))}
          </div>

          {/* Rating Text */}
          <span
            className="font-['Plus_Jakarta_Sans'] font-medium leading-[21px] lg:leading-normal relative shrink-0 text-[14px] lg:text-[16px] text-neutral-50"
            data-node-id="250:3647"
          >
            {rating}
          </span>

          {/* Reviews Count */}
          <span
            className="font-['Plus_Jakarta_Sans'] font-medium leading-[18px] lg:leading-normal relative shrink-0 text-[12px] lg:text-[16px] text-zinc-400"
            data-node-id="250:3648"
          >
            ( {totalReviews} Reviews )
          </span>
        </div>
      </div>
    </div>
  );
}
