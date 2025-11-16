export default function Popular() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col justify-start items-center gap-10">
        <div className="w-full">
          <div className="text-center w-full">
            <h2 className="text-neutral-50 text-2xl sm:text-4xl font-semibold font-['Plus_Jakarta_Sans'] capitalize leading-tight">
              Popular right now
            </h2>
            <p className="mt-2 text-zinc-300 text-sm sm:text-base max-w-3xl mx-auto">
              Tools our community uses most often.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Card 1 */}
            <div className="p-4 sm:p-6 bg-white/5 rounded-3xl outline-1 -outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-4">
              <div className="w-12 h-12 p-0.5 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[100px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-white"
                >
                  <path
                    d="M3 6H22L19 16H6L3 6ZM3 6L2.25 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.99219 11H13.9922"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-left gap-3 w-full">
                <div className="text-white text-2xl text-left font-medium font-['Inter'] leading-9">
                  Amazon Scraper
                </div>
                <div className="text-zinc-400 text-base font-normal font-['Poppins'] leading-normal">
                  Get Price, titles & reviews.
                </div>
              </div>
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="h-8 px-3 py-2.5 bg-white/5 rounded-[100px] flex justify-center items-center gap-2.5">
                  <div className="text-neutral-50 text-xs font-medium font-['Plus_Jakarta_Sans']">
                    Hot Right Now
                  </div>
                </div>
                <div className="w-6 h-6 relative overflow-hidden" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-4 sm:p-6 bg-white/5 rounded-3xl outline-1 -outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-4">
              <div className="w-12 h-12 p-0.5 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[100px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-white"
                >
                  <path
                    d="M8 10L12 10L16 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14L10 14L12 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-left gap-3 w-full">
                <div className="text-white text-2xl font-medium font-['Inter'] leading-9">
                  Reddit Scraper
                </div>
                <div className="text-zinc-400 text-base font-normal font-['Poppins'] leading-normal">
                  Post, comments, votes.
                </div>
              </div>
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="h-8 px-3 py-2.5 bg-white/5 rounded-[100px] flex justify-center items-center gap-2.5">
                  <div className="text-neutral-50 text-xs font-medium font-['Plus_Jakarta_Sans']">
                    Trending
                  </div>
                </div>
                <div className="w-6 h-6 relative overflow-hidden" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 sm:p-6 bg-white/5 rounded-3xl outline-1 -outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-4">
              <div className="w-12 h-12 p-0.5 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[100px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-white"
                >
                  <path
                    d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.89768 8.51296C9.49769 8.28439 9 8.57321 9 9.03391V14.9661C9 15.4268 9.49769 15.7156 9.89768 15.487L15.0883 12.5209C15.4914 12.2906 15.4914 11.7094 15.0883 11.4791L9.89768 8.51296Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-left gap-3 w-full">
                <div className="text-white text-2xl font-medium font-['Inter'] leading-9">
                  Youtube Stats
                </div>
                <div className="text-zinc-400 text-base font-normal font-['Poppins'] leading-normal">
                  Views, likes, channel info.
                </div>
              </div>
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="h-8 px-3 py-2.5 bg-white/5 rounded-[100px] flex justify-center items-center gap-2.5">
                  <div className="text-neutral-50 text-xs font-medium font-['Plus_Jakarta_Sans']">
                    Popular
                  </div>
                </div>
                <div className="w-6 h-6 relative overflow-hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
