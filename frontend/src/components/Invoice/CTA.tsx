export default function CTA() {
  return (
    <div
      data-layer="CTA"
      className="Cta w-full max-w-[1280px] mx-auto h-auto px-6 sm:px-10 py-12 sm:py-20 bg-[#737eff] rounded-3xl flex flex-col justify-center items-center gap-6 text-center"
    >
      <div
        data-layer="Frame 1321320245"
        className="flex flex-col justify-start items-center gap-5"
      >
        {/* Heading */}
        <div
          data-layer="The time you spend chasing paperwork is time you’re not spending on profit."
          className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold font-['Plus_Jakarta_Sans'] leading-snug sm:leading-[42px] md:leading-[52px] capitalize"
        >
          The time you spend chasing paperwork is
          <br className="hidden sm:block" />
          time you’re not spending on profit.
        </div>

        {/* Subtext */}
        <div
          data-layer="Generate invoices that look as credible as your work is professional..."
          className="text-white text-base sm:text-lg md:text-xl font-medium font-['Plus_Jakarta_Sans'] leading-relaxed"
        >
          Generate invoices that look as credible as your work is professional.
          It's fast, it’s free,
          <br className="hidden sm:block" />
          and it’s the easiest way to make sure you get paid on time.
        </div>
      </div>

      {/* Button */}
      <div
        data-layer="Frame 1321320248"
        className="inline-flex justify-center items-center mt-4"
      >
        <button
          data-layer="Buttons"
          className="px-6 sm:px-10 py-3 sm:py-4 bg-neutral-50 rounded-full shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] text-zinc-950 text-sm sm:text-base font-medium font-['Poppins'] transition hover:bg-white/90"
        >
          Create Your FREE Invoice Now!
        </button>
      </div>
    </div>
  );
}
