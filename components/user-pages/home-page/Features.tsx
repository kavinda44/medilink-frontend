import GradientText from "@/components/ui/GradientText";

const Features = () => {
  return (
    <section className="px-container container mx-auto mt-[5em] lg:mt-[10em]">
      <div className="bg-primary/10 text-primary mx-auto mb-[1em] flex w-fit items-center gap-[0.4em] rounded-full px-[0.75em] py-[0.4em] md:px-[1em] md:py-[0.6em] text-[0.75em] md:text-[0.875em] font-medium">
        <p>Platform Features</p>
      </div>
      <h2 className="text-center text-[1.75em] md:text-[2.25em] font-bold leading-tight">
        Everything You Need for <GradientText text="Better Health" />
      </h2>
      <p className="text-secondary mx-auto mt-[0.5em] max-w-[52ch] text-center leading-normal text-[0.9375em] md:text-[1em] px-[1em] md:px-0">
        Comprehensive healthcare tools designed for the modern patient.
      </p>

      <div className="mt-[3em] lg:mt-[4em] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5em] lg:gap-[2em] px-[1em] lg:px-0">
        
        {/* Card 1 */}
        <div className="bg-background/70 border-background/30 rounded-[1em] border p-[1.5em] lg:p-[2em] shadow backdrop-blur-xs">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="12" fill="url(#paint0_linear_179_96)" />
            <path d="M24.0008 17.0001C24.002 16.6001 23.9232 16.2039 23.769 15.8348C23.6148 15.4658 23.3884 15.1313 23.1031 14.851C22.8177 14.5707 22.4792 14.3503 22.1075 14.2028C21.7357 14.0552 21.3382 13.9835 20.9383 13.9919C20.5384 14.0002 20.1442 14.0884 19.7789 14.2513C19.4137 14.4142 19.0846 14.6485 18.8112 14.9405C18.5378 15.2324 18.3255 15.576 18.1869 15.9512C18.0482 16.3264 17.986 16.7255 18.0038 17.1251C17.416 17.2762 16.8703 17.5591 16.408 17.9524C15.9458 18.3456 15.579 18.8389 15.3357 19.3949C15.0923 19.9509 14.9786 20.5549 15.0032 21.1614C15.0278 21.7678 15.1901 22.3606 15.4778 22.8951C14.972 23.306 14.5742 23.8343 14.3191 24.434C14.0641 25.0337 13.9594 25.6866 14.0142 26.336C14.069 26.9854 14.2816 27.6116 14.6336 28.1601C14.9856 28.7085 15.4663 29.1627 16.0338 29.4831C15.9637 30.0253 16.0055 30.5761 16.1567 31.1016C16.3078 31.627 16.5651 32.1159 16.9126 32.538C17.2601 32.9601 17.6904 33.3065 18.177 33.5558C18.6636 33.8051 19.1962 33.952 19.7418 33.9874C20.2874 34.0228 20.8344 33.946 21.3492 33.7617C21.8639 33.5774 22.3354 33.2895 22.7346 32.9158C23.1337 32.5421 23.452 32.0906 23.6698 31.5891C23.8876 31.0876 24.0002 30.5468 24.0008 30V17.0001Z" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 17.0001C23.9988 16.6001 24.0776 16.2039 24.2318 15.8348C24.386 15.4658 24.6124 15.1313 24.8977 14.851C25.1831 14.5707 25.5216 14.3503 25.8934 14.2028C26.2651 14.0552 26.6626 13.9835 27.0625 13.9919C27.4624 14.0002 27.8566 14.0884 28.2219 14.2513C28.5872 14.4142 28.9162 14.6485 29.1896 14.9405C29.463 15.2324 29.6753 15.576 29.814 15.9512C29.9526 16.3264 30.0149 16.7255 29.997 17.1251C30.5848 17.2762 31.1305 17.5591 31.5928 17.9524C32.0551 18.3456 32.4218 18.8389 32.6652 19.3949C32.9086 19.9509 33.0223 20.5549 32.9976 21.1614C32.973 21.7678 32.8107 22.3606 32.523 22.8951C33.0288 23.306 33.4266 23.8343 33.6817 24.434C33.9368 25.0337 34.0415 25.6866 33.9867 26.336C33.9318 26.9854 33.7192 27.6116 33.3672 28.1601C33.0152 28.7085 32.5345 29.1627 31.967 29.4831C32.0371 30.0253 31.9953 30.5761 31.8441 31.1016C31.693 31.627 31.4357 32.1159 31.0882 32.538C30.7407 32.9601 30.3104 33.3065 29.8238 33.5558C29.3372 33.8051 28.8046 33.952 28.259 33.9874C27.7134 34.0228 27.1664 33.946 26.6516 33.7617C26.1369 33.5774 25.6654 33.2895 25.2663 32.9158C24.8671 32.5421 24.5488 32.0906 24.331 31.5891C24.1133 31.0876 24.0006 30.5468 24 30V17.0001Z" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M27 25C26.1604 24.7047 25.4273 24.167 24.8933 23.455C24.3593 22.743 24.0485 21.8887 24 21C23.9515 21.8887 23.6407 22.743 23.1067 23.455C22.5727 24.167 21.8396 24.7047 21 25" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M29.5996 18.5C29.8416 18.0806 29.9785 17.6088 29.9986 17.125" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.0039 17.125C18.0237 17.6087 18.1602 18.0805 18.4019 18.5" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.4766 22.896C15.6595 22.747 15.8553 22.6145 16.0616 22.5" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M31.9375 22.5C32.1438 22.6145 32.3396 22.747 32.5225 22.896" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.0002 30.0004C17.311 30.0007 16.6335 29.823 16.0332 29.4844" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M31.967 29.4844C31.3667 29.823 30.6892 30.0007 30 30.0004" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="paint0_linear_179_96" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0062FF" stopOpacity="0.2" />
                <stop offset="1" stopColor="#00E6FF" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
          <p className="mt-[1.25em] text-[1.125em] font-semibold">AI Symptom Analysis</p>
          <p className="text-secondary mt-[0.75em] text-[0.875em] leading-normal">
            Advanced machine learning algorithms analyze your symptoms with 98% accuracy.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-background/70 border-background/30 rounded-[1em] border p-[1.5em] lg:p-[2em] shadow backdrop-blur-xs">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="12" fill="url(#paint0_linear_179_110)" />
            <path d="M28 25.0003L33.223 28.4823C33.2983 28.5324 33.3858 28.5611 33.4761 28.5654C33.5664 28.5698 33.6563 28.5495 33.736 28.5068C33.8157 28.4641 33.8824 28.4006 33.9289 28.323C33.9754 28.2454 34 28.1567 34 28.0663V19.8703C34 19.7823 33.9768 19.6959 33.9328 19.6197C33.8887 19.5436 33.8253 19.4804 33.7491 19.4366C33.6728 19.3927 33.5863 19.3698 33.4983 19.3701C33.4103 19.3704 33.324 19.3939 33.248 19.4383L28 22.5003" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26 18H16C14.8954 18 14 18.8954 14 20V28C14 29.1046 14.8954 30 16 30H26C27.1046 30 28 29.1046 28 28V20C28 18.8954 27.1046 18 26 18Z" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="paint0_linear_179_110" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0062FF" stopOpacity="0.2" />
                <stop offset="1" stopColor="#00E6FF" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
          <p className="mt-[1.25em] text-[1.125em] font-semibold">Video Consultations</p>
          <p className="text-secondary mt-[0.75em] text-[0.875em] leading-normal">
            Face-to-face appointments with certified doctors from the comfort of home.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-background/70 border-background/30 rounded-[1em] border p-[1.5em] lg:p-[2em] shadow backdrop-blur-xs">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="12" fill="url(#paint0_linear_179_117)" />
            <path d="M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 18V24L28 26" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="paint0_linear_179_117" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0062FF" stopOpacity="0.2" />
                <stop offset="1" stopColor="#00E6FF" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
          <p className="mt-[1.25em] text-[1.125em] font-semibold">24/7 Availability</p>
          <p className="text-secondary mt-[0.75em] text-[0.875em] leading-normal">
            Access healthcare support anytime, anywhere. No waiting rooms required.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-background/70 border-background/30 rounded-[1em] border p-[1.5em] lg:p-[2em] shadow backdrop-blur-xs">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="12" fill="url(#paint0_linear_179_124)" />
            <path d="M31 23H17C15.8954 23 15 23.8954 15 25V32C15 33.1046 15.8954 34 17 34H31C32.1046 34 33 33.1046 33 32V25C33 23.8954 32.1046 23 31 23Z" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 23V19C19 17.6739 19.5268 16.4021 20.4645 15.4645C21.4021 14.5268 22.6739 14 24 14C25.3261 14 26.5979 14.5268 27.5355 15.4645C28.4732 16.4021 29 17.6739 29 19V23" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="paint0_linear_179_124" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0062FF" stopOpacity="0.2" />
                <stop offset="1" stopColor="#00E6FF" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
          <p className="mt-[1.25em] text-[1.125em] font-semibold">Secure & Private</p>
          <p className="text-secondary mt-[0.75em] text-[0.875em] leading-normal">
            End-to-end encryption and HIPAA compliance protect your health data.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-background/70 border-background/30 rounded-[1em] border p-[1.5em] lg:p-[2em] shadow backdrop-blur-xs">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="12" fill="url(#paint0_linear_179_131)" />
            <path d="M28 33V31C28 29.9391 27.5786 28.9217 26.8284 28.1716C26.0783 27.4214 25.0609 27 24 27H18C16.9391 27 15.9217 27.4214 15.1716 28.1716C14.4214 28.9217 14 29.9391 14 31V33" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M34 32.9999V30.9999C33.9993 30.1136 33.7044 29.2527 33.1614 28.5522C32.6184 27.8517 31.8581 27.3515 31 27.1299" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 15.1299C28.8604 15.3502 29.623 15.8506 30.1676 16.5522C30.7122 17.2538 31.0078 18.1167 31.0078 19.0049C31.0078 19.8931 30.7122 20.756 30.1676 21.4576C29.623 22.1592 28.8604 22.6596 28 22.8799" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="paint0_linear_179_131" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0062FF" stopOpacity="0.2" />
                <stop offset="1" stopColor="#00E6FF" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
          <p className="mt-[1.25em] text-[1.125em] font-semibold">Specialist Network</p>
          <p className="text-secondary mt-[0.75em] text-[0.875em] leading-normal">
            Connect with specialists across 50+ medical fields worldwide.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-background/70 border-background/30 rounded-[1em] border p-[1.5em] lg:p-[2em] shadow backdrop-blur-xs">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="12" fill="url(#paint0_linear_179_140)" />
            <path d="M27 14H18C17.4696 14 16.9609 14.2107 16.5858 14.5858C16.2107 14.9609 16 15.4696 16 16V32C16 32.5304 16.2107 33.0391 16.5858 33.4142C16.9609 33.7893 17.4696 34 18 34H30C30.5304 34 31.0391 33.7893 31.4142 33.4142C31.7893 33.0391 32 32.5304 32 32V19L27 14Z" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26 14V18C26 18.5304 26.2107 19.0391 26.5858 19.4142C26.9609 19.7893 27.4696 20 28 20H32" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 21H20" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 25H20" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 29H20" stroke="#0062FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="paint0_linear_179_140" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0062FF" stopOpacity="0.2" />
                <stop offset="1" stopColor="#00E6FF" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
          <p className="mt-[1.25em] text-[1.125em] font-semibold">Digital Records</p>
          <p className="text-secondary mt-[0.75em] text-[0.875em] leading-normal">
            All your health records, prescriptions, and history in one place.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;