import { useState } from "react";

export default function GeneratePassword() {
  const [password, setPassword] = useState<string>("Passsword34453hh!!");
  const [copied, setCopied] = useState<boolean>(false);

  const generatePassword = (length = 16) => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let out = "";
    for (let i = 0; i < length; i++) {
      out += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(out);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-6 px-4 sm:px-6">
      <div className="w-full sm:w-[608px] p-4 sm:p-6 bg-white/10 rounded-2xl sm:rounded-3xl backdrop-blur-md inline-flex flex-col justify-start items-start gap-4 sm:gap-6">
        <div className="w-full sm:w-[560px] inline-flex justify-between items-end">
          <div className="text-center justify-start text-neutral-50 text-lg sm:text-xl font-medium font-['Plus_Jakarta_Sans'] leading-loose">
            Generated Password
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="flex-shrink-0"
          >
            <path
              d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
              stroke="#FAFAFA"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 12C19.1114 14.991 15.7183 18 12 18C8.2817 18 4.88856 14.991 3 12C5.29855 9.15825 7.99163 6 12 6C16.0084 6 18.7015 9.1582 21 12Z"
              stroke="#FAFAFA"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="w-full h-12 sm:h-14 px-3 sm:px-4 py-2 relative bg-white/5 rounded-[100px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.10)] outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[20px] inline-flex justify-between items-center flex-wrap content-center overflow-hidden">
          <div className="left-[12px] sm:left-[16px] top-[12px] sm:top-[16px] absolute flex justify-start items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 22L20 20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex justify-start items-center">
              <input
                aria-label="generated-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent outline-none text-zinc-300 text-sm sm:text-base font-normal font-['Plus_Jakarta_Sans'] capitalize leading-normal w-full"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch inline-flex flex-row sm:flex-row justify-start items-start gap-3 sm:gap-6 w-full">
          <button
            type="button"
            onClick={handleCopy}
            className="flex-1 h-12 sm:h-14 pl-4 sm:pl-6 pr-4 py-2 sm:py-3 bg-neutral-50 rounded-[100px] flex justify-center items-center gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 1.25H10.944C9.106 1.25 7.65 1.25 6.511 1.403C5.339 1.561 4.39 1.893 3.641 2.641C2.893 3.39 2.561 4.339 2.403 5.511C2.25 6.651 2.25 8.106 2.25 9.944V16C2.24982 16.8935 2.56866 17.7577 3.1491 18.4369C3.72954 19.1162 4.53343 19.5659 5.416 19.705C5.553 20.469 5.818 21.121 6.348 21.652C6.95 22.254 7.708 22.512 8.608 22.634C9.475 22.75 10.578 22.75 11.945 22.75H15.055C16.422 22.75 17.525 22.75 18.392 22.634C19.292 22.512 20.05 22.254 20.652 21.652C21.254 21.05 21.512 20.292 21.634 19.392C21.75 18.525 21.75 17.422 21.75 16.055V10.945C21.75 9.578 21.75 8.475 21.634 7.608C21.512 6.708 21.254 5.95 20.652 5.348C20.121 4.818 19.469 4.553 18.705 4.416C18.5659 3.53343 18.1162 2.72954 17.4369 2.1491C16.7577 1.56866 15.8935 1.24982 15 1.25ZM17.13 4.271C16.9779 3.827 16.6909 3.44166 16.3089 3.16893C15.927 2.89619 15.4693 2.74971 15 2.75H11C9.093 2.75 7.739 2.752 6.71 2.89C5.705 3.025 5.125 3.279 4.702 3.702C4.279 4.125 4.025 4.705 3.89 5.71C3.752 6.739 3.75 8.093 3.75 10V16C3.74971 16.4693 3.89619 16.927 4.16892 17.3089C4.44166 17.6908 4.827 17.9779 5.271 18.13C5.25 17.52 5.25 16.83 5.25 16.055V10.945C5.25 9.578 5.25 8.475 5.367 7.608C5.487 6.708 5.747 5.95 6.348 5.348C6.95 4.746 7.708 4.488 8.608 4.367C9.475 4.25 10.578 4.25 11.945 4.25H15.055C15.83 4.25 16.52 4.25 17.13 4.271ZM7.408 6.41C7.685 6.133 8.073 5.953 8.808 5.854C9.562 5.753 10.564 5.751 11.999 5.751H14.999C16.434 5.751 17.435 5.753 18.191 5.854C18.925 5.953 19.313 6.134 19.59 6.41C19.867 6.687 20.047 7.075 20.146 7.81C20.247 8.564 20.249 9.566 20.249 11.001V16.001C20.249 17.436 20.247 18.437 20.146 19.193C20.047 19.927 19.866 20.315 19.59 20.592C19.313 20.869 18.925 21.049 18.19 21.148C17.435 21.249 16.434 21.251 14.999 21.251H11.999C10.564 21.251 9.562 21.249 8.807 21.148C8.073 21.049 7.685 20.868 7.408 20.592C7.131 20.315 6.951 19.927 6.852 19.192C6.751 18.437 6.749 17.436 6.749 16.001V11.001C6.749 9.566 6.751 8.564 6.852 7.809C6.951 7.075 7.132 6.687 7.408 6.41Z"
                fill="black"
              />
            </svg>
            <div className="text-center justify-start text-zinc-950 text-sm sm:text-base font-medium font-['Plus_Jakarta_Sans'] leading-normal">
              {copied ? "Copied!" : "Copy Password"}
            </div>
          </button>
          <button
            type="button"
            onClick={() => generatePassword()}
            title="Regenerate password"
            className="w-12 h-12 sm:w-14 sm:h-14 px-3 py-2 sm:py-3 bg-neutral-50 rounded-[100px] flex justify-center items-center gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.1679 8C19.6248 4.46819 16.1006 2 12 2C6.81465 2 2.5511 5.94668 2.04938 11"
                stroke="black"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 8H21.4C21.7314 8 22 7.73137 22 7.4V3"
                stroke="black"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.88146 16C4.42458 19.5318 7.94874 22 12.0494 22C17.2347 22 21.4983 18.0533 22 13"
                stroke="black"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.04932 16H2.64932C2.31795 16 2.04932 16.2686 2.04932 16.6V21"
                stroke="black"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full sm:w-[608px] p-4 sm:p-6 bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-md inline-flex justify-start items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="flex-shrink-0"
        >
          <path
            d="M7 12.5L10 15.5L17 8.5"
            stroke="#FAFAFA"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#FAFAFA"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch justify-start text-white text-sm sm:text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
            No Breaches Found
          </div>
          <div className="text-left sm:text-center justify-start text-white text-xs font-medium font-['Plus_Jakarta_Sans'] leading-[18px]">
            This password is not in known breach databases.
          </div>
        </div>
      </div>
      <div className="w-full sm:w-[608px] p-4 sm:p-6 bg-white/10 rounded-2xl sm:rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-md inline-flex flex-col justify-start items-center gap-4 sm:gap-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-neutral-50 rounded-[56px] overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 32 32"
            fill="none"
            className="w-5 h-5"
          >
            <path
              d="M15.3333 9.33331L12 16H16H20L16.6667 22.6666"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66667 24L4.13071 6.24831C4.05681 5.73103 4.39389 5.24582 4.90398 5.13247L15.5661 2.7631C15.8519 2.6996 16.1481 2.6996 16.4339 2.7631L27.096 5.13247C27.6061 5.24582 27.9432 5.73103 27.8693 6.24832L25.3333 24C25.2391 24.66 24.6667 28.6667 16 28.6667C7.33333 28.6667 6.76095 24.66 6.66667 24Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="justify-start text-neutral-50 text-base sm:text-xl font-medium font-['Plus_Jakarta_Sans'] leading-loose">
          Maximum Protection Achieved!
        </div>
        <div className="justify-start text-zinc-300 text-sm sm:text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
          Security Level 4/4
        </div>
        <div className="self-stretch flex flex-col justify-center items-start gap-1">
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="justify-start text-[#727a8e] text-xs font-medium font-['Inter'] leading-[18px]">
              Defence Strength
            </div>
            <div className="justify-start text-[#727a8e] text-xs font-medium font-['Inter'] leading-[18px]">
              100%
            </div>
          </div>
          <div className="self-stretch relative flex flex-col justify-start items-start gap-1">
            <div className="w-full h-1.5 bg-zinc-300 rounded" />
            <div className="w-[88%] h-1.5 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded absolute left-0 top-0 z-10" />
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-center items-start gap-1">
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="justify-start text-[#727a8e] text-xs font-medium font-['Inter'] leading-[18px]">
              Entropy Power
            </div>
            <div className="justify-start text-[#727a8e] text-xs font-medium font-['Inter'] leading-[18px]">
              122.6 bits
            </div>
          </div>
          <div className="self-stretch relative flex flex-col justify-start items-start gap-1">
            <div className="w-full sm:w-[560px] h-1.5 bg-zinc-300 rounded" />
            <div className="w-[88%] sm:w-[496.26px] h-1.5 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded absolute left-0 top-0 z-10" />
          </div>
        </div>
        <div className="inline-flex flex-wrap justify-center items-start gap-2 sm:gap-3">
          <div className="pl-4 pr-6 py-2 bg-zinc-100/10 rounded-[100px] backdrop-blur-blur flex justify-center items-center gap-3">
            <div className="text-center justify-start text-neutral-50 text-xs sm:text-sm font-medium font-['Plus_Jakarta_Sans']">
              Basic Shield
            </div>
          </div>
          <div className="pl-4 pr-6 py-2 bg-zinc-100/10 rounded-[100px] backdrop-blur-blur flex justify-center items-center gap-3">
            <div className="text-center justify-start text-neutral-50 text-xs sm:text-sm font-medium font-['Plus_Jakarta_Sans']">
              Advance Guard
            </div>
          </div>
          <div className="pl-4 pr-6 py-2 bg-zinc-100/10 rounded-[100px] backdrop-blur-blur flex justify-center items-center gap-3">
            <div className="text-center justify-start text-neutral-50 text-xs sm:text-sm font-medium font-['Plus_Jakarta_Sans']">
              Quantum Armour
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-[608px] p-4 sm:p-6 bg-white/10 rounded-2xl sm:rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-md inline-flex flex-col justify-center items-start gap-4 sm:gap-6">
        <div className="w-full sm:w-[560px] flex flex-col justify-start items-center gap-4">
          <div className="self-stretch inline-flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div className="flex justify-start items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 18L3.13036 4.91253C3.05646 4.39524 3.39389 3.91247 3.90398 3.79912L11.5661 2.09641C11.8519 2.03291 12.1481 2.03291 12.4339 2.09641L20.096 3.79912C20.6061 3.91247 20.9435 4.39524 20.8696 4.91252L19 18C18.9293 18.495 18.5 21.5 12 21.5C5.5 21.5 5.07071 18.495 5 18Z"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="justify-start text-neutral-50 text-sm sm:text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
                Password Strength
              </div>
            </div>
            <div className="justify-start text-neutral-50 text-sm sm:text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
              Quantum-safe
            </div>
          </div>
          <div className="self-stretch h-8 flex flex-col justify-center items-start gap-2">
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="w-full h-1.5 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded" />
            </div>
            <div className="self-stretch inline-flex justify-between items-start">
              <div className="justify-start text-neutral-50 text-xs font-medium font-['Inter'] leading-[18px]">
                0%
              </div>
              <div className="justify-start text-neutral-50 text-xs font-medium font-['Inter'] leading-[18px]">
                100%
              </div>
            </div>
            <div className="self-stretch relative flex flex-col justify-start items-start gap-1">
              <div className="w-full h-1.5 bg-zinc-300 rounded" />
              <div className="w-[88%] h-1.5 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded absolute left-0 top-0 z-10" />
            </div>
          </div>
        </div>
        <div className="self-stretch inline-flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-6">
          <div className="flex-1 w-full p-4 bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex flex-col justify-start items-start gap-4">
            <div className="inline-flex justify-start items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 6L12 12L18 12"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="text-white text-xs sm:text-sm font-medium font-['Plus_Jakarta_Sans'] leading-[21px]">
                Crack Time
              </div>
            </div>
            <div className="justify-start text-white text-sm sm:text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
              755840971 centuries
            </div>
          </div>
          <div className="flex-1 w-full p-4 bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex flex-col justify-start items-start gap-4">
            <div className="inline-flex justify-start items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.625 9.89062H12V0.75L6.375 14.1094H12V23.25L17.625 9.89062Z"
                  fill="white"
                />
              </svg>
              <div className="text-white text-xs sm:text-sm font-medium font-['Plus_Jakarta_Sans'] leading-[21px]">
                Entropy
              </div>
            </div>
            <div className="w-[67px] sm:w-[67px] justify-start text-white text-sm sm:text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
              112.7 bits
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col sm:flex-row justify-start items-start sm:items-center gap-3 sm:gap-4">
          <div className="w-6 h-6 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-full flex-shrink-0" />
          <div className="w-full sm:w-[271px] inline-flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-start text-neutral-50 text-sm sm:text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
              AI Recommendations
            </div>
            <div className="self-stretch justify-start text-zinc-300 text-xs font-medium font-['Plus_Jakarta_Sans'] leading-[18px]">
              Excellent! This password is quantum-safe ready
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
