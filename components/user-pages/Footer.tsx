import Logo from "@/components/icons/Logo";

const Footer = () => {
  return (
    <section className="px-container container mx-auto mt-[3em] lg:mt-[5em] pb-[2em] lg:pb-[4em]">
      <hr className="border-t-secondary/10" />

      <div className="mt-[2.5em] lg:mt-[4em] mb-[2em] lg:mb-[3em] flex flex-col lg:flex-row gap-[2.5em] lg:gap-[4em]">
        
        {/* Brand & Contact Info */}
        <div className="shrink-0 lg:max-w-[22em]">
          <Logo />
          <p className="text-secondary mt-[1em] mb-[1.5em] lg:mb-[1.625em] max-w-[31ch] text-[0.9375em] md:text-[1em]">
            AI-powered telemedicine platform connecting patients with healthcare
            professionals in Sri Lanka.
          </p>
          <ul className="text-secondary flex flex-col gap-[1em] text-[0.875em]">
            <li className="flex items-center gap-[0.5em]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M13.334 2.66699H2.66732C1.93094 2.66699 1.33398 3.26395 1.33398 4.00033V12.0003C1.33398 12.7367 1.93094 13.3337 2.66732 13.3337H13.334C14.0704 13.3337 14.6673 12.7367 14.6673 12.0003V4.00033C14.6673 3.26395 14.0704 2.66699 13.334 2.66699Z"
                  stroke="#626D84"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.6673 4.66699L8.68732 8.46699C8.4815 8.59594 8.24353 8.66433 8.00065 8.66433C7.75777 8.66433 7.5198 8.59594 7.31398 8.46699L1.33398 4.66699"
                  stroke="#626D84"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>support@medilink.ai</span>
            </li>

            <li className="flex items-center gap-[0.5em]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M14.6669 11.2797V13.2797C14.6677 13.4654 14.6297 13.6492 14.5553 13.8193C14.4809 13.9894 14.3718 14.1421 14.235 14.2676C14.0982 14.3932 13.9367 14.4887 13.7608 14.5482C13.5849 14.6077 13.3985 14.6298 13.2136 14.6131C11.1622 14.3902 9.19161 13.6892 7.46028 12.5664C5.8495 11.5428 4.48384 10.1772 3.46028 8.56641C2.3336 6.82721 1.63244 4.84707 1.41361 2.78641C1.39695 2.60205 1.41886 2.41625 1.47795 2.24082C1.53703 2.0654 1.63199 1.9042 1.75679 1.76749C1.88159 1.63077 2.03348 1.52155 2.20281 1.44675C2.37213 1.37196 2.55517 1.33325 2.74028 1.33307H4.74028C5.06382 1.32989 5.37748 1.44446 5.62279 1.65543C5.8681 1.8664 6.02833 2.15937 6.07361 2.47974C6.15803 3.11978 6.31458 3.74822 6.54028 4.35307C6.62998 4.59169 6.64939 4.85102 6.59622 5.10033C6.54305 5.34964 6.41952 5.57848 6.24028 5.75974L5.39361 6.60641C6.34265 8.27544 7.72458 9.65737 9.39361 10.6064L10.2403 9.75974C10.4215 9.5805 10.6504 9.45697 10.8997 9.4038C11.149 9.35063 11.4083 9.37004 11.6469 9.45974C12.2518 9.68544 12.8802 9.84199 13.5203 9.92641C13.8441 9.97209 14.1399 10.1352 14.3513 10.3847C14.5627 10.6343 14.6751 10.9528 14.6669 11.2797Z"
                  stroke="#626D84"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>1-800-MEDILINK</span>
            </li>

            <li className="flex items-center gap-[0.5em]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M13.3327 6.66634C13.3327 9.99501 9.64002 13.4617 8.40002 14.5323C8.2845 14.6192 8.14388 14.6662 7.99935 14.6662C7.85482 14.6662 7.7142 14.6192 7.59868 14.5323C6.35868 13.4617 2.66602 9.99501 2.66602 6.66634C2.66602 5.25185 3.22792 3.8953 4.22811 2.89511C5.22831 1.89491 6.58486 1.33301 7.99935 1.33301C9.41384 1.33301 10.7704 1.89491 11.7706 2.89511C12.7708 3.8953 13.3327 5.25185 13.3327 6.66634Z"
                  stroke="#626D84"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 8.66699C9.10457 8.66699 10 7.77156 10 6.66699C10 5.56242 9.10457 4.66699 8 4.66699C6.89543 4.66699 6 5.56242 6 6.66699C6 7.77156 6.89543 8.66699 8 8.66699Z"
                  stroke="#626D84"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Sri Lanka, Kandy</span>
            </li>
          </ul>
        </div>

        {/* Links Grid */}
        <div className="grid grow grid-cols-2 lg:grid-cols-4 gap-[2em] lg:gap-[2.5em]">
          <div>
            <p className="mb-[1em] font-semibold text-[1.05em] lg:text-[1em]">Product</p>
            <ul className="text-secondary flex flex-col gap-[1em] text-[0.875em]">
              <li>AI Symptom Checker</li>
              <li>Book Appointment</li>
              <li>Doctor Dashboard</li>
            </ul>
          </div>

          <div>
            <p className="mb-[1em] font-semibold text-[1.05em] lg:text-[1em]">Company</p>
            <ul className="text-secondary flex flex-col gap-[1em] text-[0.875em]">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <p className="mb-[1em] font-semibold text-[1.05em] lg:text-[1em]">Resources</p>
            <ul className="text-secondary flex flex-col gap-[1em] text-[0.875em]">
              <li>Blog</li>
              <li>Help Center</li>
              <li>API Docs</li>
              <li>Status</li>
            </ul>
          </div>

          <div>
            <p className="mb-[1em] font-semibold text-[1.05em] lg:text-[1em]">Legal</p>
            <ul className="text-secondary flex flex-col gap-[1em] text-[0.875em]">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-t-secondary/10" />
      <p className="text-secondary mt-[2em] lg:mt-[2.5em] text-[0.875em] text-center lg:text-left">
        © 2026 MediLink. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;