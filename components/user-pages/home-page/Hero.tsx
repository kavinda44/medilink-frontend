import Link from "next/link";
import Image from "next/image";

import GradientText from "@/components/ui/GradientText";
import PrimaryButton from "@/components/ui/PrimaryButton";
import hero from "@/public/images/home-page/hero/hero.png";

const Hero = () => {
  return (
    <section className="px-container container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[2em] lg:gap-[3em] items-center">
      
      {/* TEXT CONTENT - Moves to bottom on mobile, stays left on desktop */}
      <div className="order-2 lg:order-1 bg-background/70 border-background/30 rounded-[1em] border p-[1.5em] md:p-[2.5em] lg:p-[3em] shadow backdrop-blur-xs">
        <div className="bg-primary/10 text-primary mb-[1em] flex w-fit items-center gap-[0.4em] rounded-full px-[0.75em] py-[0.4em] md:px-[1em] md:py-[0.6em] text-[0.75em] md:text-[0.875em] font-medium">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[12px] h-[12px] md:w-[16px] md:h-[16px]"
          >
            <path
              d="M2.66699 9.33328C2.54083 9.33371 2.41714 9.29833 2.31029 9.23126C2.20344 9.1642 2.11781 9.06818 2.06335 8.95438C2.0089 8.84059 1.98785 8.71367 2.00265 8.58838C2.01746 8.4631 2.06751 8.34459 2.14699 8.24661L8.74699 1.44661C8.7965 1.38947 8.86396 1.35085 8.93831 1.3371C9.01266 1.32335 9.08947 1.33529 9.15614 1.37095C9.22281 1.40661 9.27538 1.46388 9.30521 1.53335C9.33504 1.60283 9.34037 1.68038 9.32032 1.75328L8.04032 5.76661C8.00258 5.86763 7.9899 5.97629 8.00338 6.08328C8.01686 6.19028 8.05609 6.2924 8.11771 6.3809C8.17933 6.46939 8.2615 6.54162 8.35717 6.59139C8.45284 6.64115 8.55915 6.66696 8.66699 6.66661H13.3337C13.4598 6.66618 13.5835 6.70156 13.6904 6.76863C13.7972 6.8357 13.8828 6.93171 13.9373 7.04551C13.9917 7.15931 14.0128 7.28622 13.998 7.41151C13.9832 7.53679 13.9331 7.65531 13.8537 7.75328L7.25365 14.5533C7.20415 14.6104 7.13668 14.649 7.06233 14.6628C6.98798 14.6765 6.91117 14.6646 6.8445 14.6289C6.77783 14.5933 6.72526 14.536 6.69543 14.4665C6.6656 14.3971 6.66027 14.3195 6.68032 14.2466L7.96032 10.2333C7.99806 10.1323 8.01074 10.0236 7.99726 9.91661C7.98378 9.80962 7.94455 9.70749 7.88293 9.619C7.82131 9.5305 7.73914 9.45827 7.64347 9.40851C7.5478 9.35874 7.44149 9.33293 7.33365 9.33328H2.66699Z"
              stroke="#0062FF"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>AI-Powered Healthcare Platform</p>
        </div>

        <h1 className="text-[2.25em] md:text-[3em] lg:text-[3.75em] font-bold leading-[1.1]">
          <GradientText text="AI-Powered" /> Healthcare for Everyone
        </h1>

        <p className="text-secondary mt-[1em] mb-[1.5em] md:mb-[1.9em] text-[0.9375em] md:text-[1.125em] leading-normal 2xl:max-w-[38ch]">
          Get instant symptom analysis, connect with certified doctors, and take
          control of your health journey with our intelligent telemedicine
          platform.
        </p>

        <Link href="/symptom-assessment" className="block w-fit">
          <PrimaryButton className="px-[1.5em] py-[0.875em] md:px-[2em] md:py-[1em] text-[0.875em] font-medium">
            <span>Check Symptoms Now</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33398 8H12.6673"
                stroke="white"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 3.3335L12.6667 8.00016L8 12.6668"
                stroke="white"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </PrimaryButton>
        </Link>

        <hr className="border-t-secondary/20 mt-[2em] mb-[1.5em] md:mt-[2.5em] md:mb-[2em]"></hr>
        <div className="flex flex-wrap items-center gap-[1em] md:gap-[1.5em]">
          <div className="flex items-center gap-[0.5em] text-[0.875em]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
            >
              <path
                d="M16.6673 10.8335C16.6673 15.0002 13.7507 17.0835 10.284 18.2919C10.1025 18.3534 9.90527 18.3505 9.72565 18.2835C6.25065 17.0835 3.33398 15.0002 3.33398 10.8335V5.00021C3.33398 4.7792 3.42178 4.56724 3.57806 4.41096C3.73434 4.25468 3.9463 4.16688 4.16732 4.16688C5.83398 4.16688 7.91732 3.16688 9.36732 1.90021C9.54386 1.74938 9.76845 1.6665 10.0007 1.6665C10.2329 1.6665 10.4574 1.74938 10.634 1.90021C12.0923 3.17521 14.1673 4.16688 15.834 4.16688C16.055 4.16688 16.267 4.25468 16.4232 4.41096C16.5795 4.56724 16.6673 4.7792 16.6673 5.00021V10.8335Z"
                stroke="#0062FF"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-secondary">50+ Doctors</p>
          </div>

          <div className="flex items-center gap-[0.5em] text-[0.875em]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
            >
              <path
                d="M15.8327 11.6667C17.0743 10.45 18.3327 8.99167 18.3327 7.08333C18.3327 5.86776 17.8498 4.70197 16.9903 3.84243C16.1307 2.98289 14.9649 2.5 13.7493 2.5C12.2827 2.5 11.2493 2.91667 9.99935 4.16667C8.74935 2.91667 7.71602 2.5 6.24935 2.5C5.03377 2.5 3.86798 2.98289 3.00844 3.84243C2.1489 4.70197 1.66602 5.86776 1.66602 7.08333C1.66602 9 2.91602 10.4583 4.16602 11.6667L9.99935 17.5L15.8327 11.6667Z"
                stroke="#EF4343"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-secondary">100+ Patients</p>
          </div>
        </div>
      </div>

      {/* IMAGE CONTENT - Moves to top on mobile, stays right on desktop */}
      <div className="order-1 lg:order-2 relative flex items-center justify-center px-[1em] lg:px-0">
        <Image
          src={hero}
          alt="Hero Image"
          className="size-[90%] lg:size-[85%] rounded-[1em] object-cover object-center shadow"
        />

        {/* Top Right Badge */}
        <div className="bg-background/70 border-background/30 absolute top-[-1.5em] right-0 lg:top-0 lg:right-0 flex w-fit translate-y-0 lg:translate-y-1/3 items-center gap-[0.5em] md:gap-[0.75em] rounded-[1em] border px-[1em] py-[0.75em] lg:px-[1.5em] lg:py-[1em] backdrop-blur-xs">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[28px] h-[28px] md:w-[40px] md:h-[40px]"
          >
            <rect
              width="40"
              height="40"
              rx="20"
              fill="#0062FF"
              fillOpacity="0.2"
            />
            <path
              d="M21 9C19.6868 9 18.3864 9.25866 17.1732 9.7612C15.9599 10.2638 14.8575 11.0003 13.9289 11.9289C12.0536 13.8043 11 16.3478 11 19C11 21.6522 12.0536 24.1957 13.9289 26.0711C14.8575 26.9997 15.9599 27.7362 17.1732 28.2388C18.3864 28.7413 19.6868 29 21 29C23.6522 29 26.1957 27.9464 28.0711 26.0711C29.9464 24.1957 31 21.6522 31 19C31 17.6868 30.7413 16.3864 30.2388 15.1732C29.7362 13.9599 28.9997 12.8575 28.0711 11.9289C27.1425 11.0003 26.0401 10.2638 24.8268 9.7612C23.6136 9.25866 22.3132 9 21 9ZM25.2 23.2L20 20V14H21.5V19.2L26 21.9L25.2 23.2Z"
              fill="#3B77D9"
            />
          </svg>
          <p className="text-[0.75em] md:text-[0.875em] font-semibold">24/7 Available</p>
        </div>

        {/* Bottom Left Badge */}
        <div className="bg-background/70 border-background/30 absolute bottom-[-1.5em] left-0 lg:bottom-0 lg:left-0 flex w-fit translate-y-0 lg:-translate-y-1/3 items-center gap-[0.5em] md:gap-[0.75em] rounded-[1em] border px-[1em] py-[0.75em] lg:px-[1.5em] lg:py-[1em] backdrop-blur-xs">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[28px] h-[28px] md:w-[40px] md:h-[40px]"
          >
            <rect
              width="40"
              height="40"
              rx="20"
              fill="#22C55E"
              fillOpacity="0.2"
            />
            <path
              d="M16.762 26.792C16.762 26.636 16.732 26.558 16.672 26.558L16.258 26.756C16.258 26.672 16.21 26.612 16.114 26.576L15.97 26.558C15.874 26.558 15.754 26.6 15.61 26.684C15.586 26.624 15.556 26.564 15.52 26.504C15.484 26.444 15.454 26.39 15.43 26.342C15.274 26.042 15.118 25.712 14.962 25.352C14.818 24.98 14.68 24.626 14.548 24.29C14.428 23.954 14.332 23.69 14.26 23.498C14.212 23.342 14.158 23.108 14.098 22.796C14.038 22.484 13.978 22.088 13.918 21.608C14.05 21.692 14.152 21.734 14.224 21.734C14.308 21.734 14.386 21.608 14.458 21.356C14.494 21.404 14.56 21.428 14.656 21.428C14.728 21.428 14.782 21.404 14.818 21.356L15.106 20.924L15.43 21.032H15.448C15.472 21.032 15.496 21.02 15.52 20.996C15.544 20.972 15.58 20.948 15.628 20.924C15.724 20.864 15.796 20.834 15.844 20.834L15.898 20.852C16.198 20.996 16.39 21.26 16.474 21.644C16.69 22.556 16.906 23.012 17.122 23.012C17.338 23.012 17.59 22.784 17.878 22.328C18.022 22.1 18.166 21.836 18.31 21.536C18.466 21.236 18.622 20.9 18.778 20.528C18.802 20.672 18.826 20.744 18.85 20.744C18.91 20.744 19.012 20.594 19.156 20.294C19.312 19.994 19.558 19.58 19.894 19.052C20.086 18.728 20.326 18.362 20.614 17.954C20.914 17.546 21.232 17.126 21.568 16.694C21.904 16.262 22.228 15.854 22.54 15.47C22.864 15.086 23.152 14.756 23.404 14.48C23.656 14.204 23.842 14.024 23.962 13.94C24.418 13.628 24.778 13.328 25.042 13.04C25.03 13.124 25.012 13.202 24.988 13.274C24.976 13.334 24.97 13.376 24.97 13.4C24.97 13.448 24.994 13.472 25.042 13.472L25.546 13.22V13.292C25.546 13.388 25.57 13.436 25.618 13.436C25.654 13.436 25.726 13.382 25.834 13.274C25.942 13.166 26.002 13.088 26.014 13.04L25.978 13.292L26.59 12.932L26.446 13.256C26.638 13.124 26.776 13.058 26.86 13.058C26.908 13.058 26.944 13.088 26.968 13.148C26.992 13.196 27.004 13.244 27.004 13.292C27.004 13.364 26.974 13.448 26.914 13.544C26.854 13.64 26.776 13.754 26.68 13.886C26.608 13.982 26.488 14.126 26.32 14.318C26.164 14.498 25.924 14.768 25.6 15.128C25.276 15.476 24.844 15.962 24.304 16.586C24.16 16.742 23.938 17.018 23.638 17.414C23.338 17.798 22.996 18.248 22.612 18.764C22.24 19.268 21.868 19.778 21.496 20.294C21.124 20.81 20.794 21.278 20.506 21.698C20.218 22.106 20.014 22.412 19.894 22.616L18.778 24.506C18.538 24.914 18.34 25.25 18.184 25.514C18.028 25.766 17.908 25.94 17.824 26.036C17.644 26.252 17.446 26.444 17.23 26.612L17.068 26.522L16.924 26.612L16.762 26.792Z"
              fill="#22C55E"
            />
          </svg>
          <p className="text-[0.75em] md:text-[0.875em] font-semibold">AI Powered</p>
        </div>
      </div>

    </section>
  );
};

export default Hero;