import GradientText from "@/components/ui/GradientText";

const Process = () => {
  return (
    <section className="px-container container mx-auto mt-[5em] lg:mt-[10em]">
      <div className="bg-primary/10 text-primary mx-auto mb-[1em] flex w-fit items-center gap-[0.4em] rounded-full px-[0.75em] py-[0.4em] md:px-[1em] md:py-[0.6em] text-[0.75em] md:text-[0.875em] font-medium">
        <p>Simple Process</p>
      </div>
      <h2 className="text-center text-[1.75em] md:text-[2.25em] font-bold leading-tight">
        How <GradientText text="MediLink" /> Works
      </h2>
      <p className="text-secondary mx-auto mt-[0.5em] max-w-[52ch] text-center leading-normal text-[0.9375em] md:text-[1em] px-[1em] md:px-0">
        Get the care you need in three simple steps. Our AI-powered platform
        makes healthcare accessible and efficient.
      </p>

      <div className="mt-[3em] lg:mt-[4em] grid grid-cols-1 lg:grid-cols-3 gap-[1.5em] lg:gap-[2em] px-[1em] lg:px-0">
        
        {/* Step 01 */}
        <div className="bg-background/70 border-background/30 rounded-[1em] border p-[1.5em] lg:p-[2em] shadow backdrop-blur-xs">
          <div className="flex items-center justify-between">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[48px] h-[48px] md:w-[64px] md:h-[64px]"
            >
              <rect width="64" height="64" rx="16" fill="#0062FF" fillOpacity="0.1" />
              <path
                d="M44 36C44 36.7072 43.719 37.3855 43.219 37.8856C42.7189 38.3857 42.0406 38.6667 41.3333 38.6667H25.3333L20 44V22.6667C20 21.9594 20.281 21.2811 20.781 20.781C21.2811 20.281 21.9594 20 22.6667 20H41.3333C42.0406 20 42.7189 20.281 43.219 20.781C43.719 21.2811 44 21.9594 44 22.6667V36Z"
                stroke="#0062FF"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-primary/10 text-[3em] md:text-[3.75em] font-bold leading-none">01</p>
          </div>

          <p className="mt-[1.25em] md:mt-[1.5em] text-[1.125em] md:text-[1.25em] font-semibold">
            Describe Symptoms
          </p>
          <p className="text-secondary mt-[0.75em] md:mt-[1em] text-[0.875em] md:text-[0.95em] leading-normal">
            Chat with our AI to describe your symptoms in natural language. Our
            system understands context and asks follow-up questions.
          </p>
        </div>

        {/* Step 02 */}
        <div className="bg-background/70 border-background/30 rounded-[1em] border p-[1.5em] lg:p-[2em] shadow backdrop-blur-xs">
          <div className="flex items-center justify-between">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[48px] h-[48px] md:w-[64px] md:h-[64px]"
            >
              <rect width="64" height="64" rx="16" fill="#00E6FF" fillOpacity="0.1" />
              <path
                d="M30.666 18.6665V21.3332"
                stroke="#00E6FF"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.666 18.6665V21.3332"
                stroke="#00E6FF"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.666 20H21.3327C20.6254 20 19.9472 20.281 19.4471 20.781C18.947 21.2811 18.666 21.9594 18.666 22.6667V28C18.666 30.1217 19.5089 32.1566 21.0092 33.6569C22.5095 35.1571 24.5443 36 26.666 36C28.7877 36 30.8226 35.1571 32.3229 33.6569C33.8232 32.1566 34.666 30.1217 34.666 28V22.6667C34.666 21.9594 34.3851 21.2811 33.885 20.781C33.3849 20.281 32.7066 20 31.9993 20H30.666"
                stroke="#00E6FF"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.666 36C26.666 38.1217 27.5089 40.1566 29.0092 41.6569C30.5095 43.1571 32.5443 44 34.666 44C36.7877 44 38.8226 43.1571 40.3229 41.6569C41.8232 40.1566 42.666 38.1217 42.666 36V32"
                stroke="#00E6FF"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M42.6667 31.9998C44.1394 31.9998 45.3333 30.8059 45.3333 29.3332C45.3333 27.8604 44.1394 26.6665 42.6667 26.6665C41.1939 26.6665 40 27.8604 40 29.3332C40 30.8059 41.1939 31.9998 42.6667 31.9998Z"
                stroke="#00E6FF"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-primary/10 text-[3em] md:text-[3.75em] font-bold leading-none">02</p>
          </div>

          <p className="mt-[1.25em] md:mt-[1.5em] text-[1.125em] md:text-[1.25em] font-semibold">
            Get AI Analysis
          </p>
          <p className="text-secondary mt-[0.75em] md:mt-[1em] text-[0.875em] md:text-[0.95em] leading-normal">
            Our advanced AI analyzes your symptoms against millions of cases to
            provide potential conditions and urgency levels.
          </p>
        </div>

        {/* Step 03 */}
        <div className="bg-background/70 border-background/30 rounded-[1em] border p-[1.5em] lg:p-[2em] shadow backdrop-blur-xs">
          <div className="flex items-center justify-between">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[48px] h-[48px] md:w-[64px] md:h-[64px]"
            >
              <rect width="64" height="64" rx="16" fill="#8E5EED" fillOpacity="0.1" />
              <path
                d="M26.666 18.6665V23.9998"
                stroke="#8E5EED"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M37.334 18.6665V23.9998"
                stroke="#8E5EED"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M41.3333 21.3335H22.6667C21.1939 21.3335 20 22.5274 20 24.0002V42.6668C20 44.1396 21.1939 45.3335 22.6667 45.3335H41.3333C42.8061 45.3335 44 44.1396 44 42.6668V24.0002C44 22.5274 42.8061 21.3335 41.3333 21.3335Z"
                stroke="#8E5EED"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 29.3335H44"
                stroke="#8E5EED"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-primary/10 text-[3em] md:text-[3.75em] font-bold leading-none">03</p>
          </div>

          <p className="mt-[1.25em] md:mt-[1.5em] text-[1.125em] md:text-[1.25em] font-semibold">
            Connect with Doctor
          </p>
          <p className="text-secondary mt-[0.75em] md:mt-[1em] text-[0.875em] md:text-[0.95em] leading-normal">
            Book an appointment with a specialist matched to your needs, or get
            immediate care for urgent situations.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Process;