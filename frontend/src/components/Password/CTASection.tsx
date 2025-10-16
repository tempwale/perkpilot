import React, { useState } from "react";
import { motion } from "framer-motion";

const CTASection: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (email) {
      console.log("Subscribe clicked with email:", email);
      // Add your subscription logic here
      setEmail("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  return (
    <section className="w-full py-16 flex items-center justify-center">
      <div className="w-full max-w-7xl px-4">
        <motion.div
          className="relative bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[24px] px-4 md:px-10 py-6 md:py-12 flex flex-col gap-6 items-center justify-center text-center text-white overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* SVG Dotted Pattern Background */}
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="dotPattern"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="4" cy="4" r="2" fill="rgba(255,255,255,0.1)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>

          {/* Content - positioned above the dots */}
          <motion.div
            className="relative z-10 w-full flex flex-col gap-6 items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* Heading and Description */}
            <motion.div
              className="flex flex-col gap-4 md:gap-5 items-center text-center w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <h2
                className="text-[32px] flex flex-col md:text-[48px] leading-[42px] md:leading-[60px] font-medium md:font-semibold capitalize w-full"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                <span className="block md:inline">
                  Don't Wait for the Next Breach
                </span>
                <span className="block md:inline md:ml-2">
                  Secure Your Digital Life Now.
                </span>
              </h2>
              <div
                className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] font-normal md:font-medium w-full"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                <p className="mb-0">
                  Join 2000+ founders and get exclusive deals and discounts
                </p>
                <p>
                  directly in your inbox and save thousands on SaaS
                  subscriptions.
                </p>
              </div>
            </motion.div>

            {/* Email Input and Subscribe Button */}
            {/* Mobile Layout - Stacked */}
            <motion.div
              className="md:hidden flex flex-col gap-4 items-center w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              {/* Email Input Field */}
              <div className="w-full">
                <div className="backdrop-blur-sm bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.16)] rounded-full h-14 w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter Your Email ID"
                    className="w-full h-full px-4 py-3 bg-transparent border-none outline-none text-white placeholder-[rgba(255,255,255,0.56)] rounded-full"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  />
                </div>
              </div>

              {/* Subscribe Button */}
              <button
                onClick={handleSubscribe}
                className="bg-neutral-50 text-zinc-950 px-10 py-4 rounded-full shadow-sm hover:opacity-90 transition-opacity flex items-center justify-center w-full"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Subscribe
              </button>
            </motion.div>

            {/* Desktop Layout - Side by Side */}
            <motion.div
              className="hidden md:flex gap-6 items-center w-full max-w-[628px] justify-center mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              {/* Subscribe Button */}
              <button
                onClick={handleSubscribe}
                className="bg-neutral-50 text-zinc-950 px-10 py-4 rounded-full shadow-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-4 shrink-0"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Generate Your First Quantum-Safe Password
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { CTASection };
