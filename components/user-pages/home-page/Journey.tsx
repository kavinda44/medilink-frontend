import Link from "next/link";

import GradientText from "@/components/ui/GradientText";
import PrimaryButton from "@/components/ui/PrimaryButton";

const Journey = () => {
  return (
    <section className="px-container container mx-auto mt-[5em] lg:mt-[10em]">
      <div className="bg-background/70 border-background/30 mx-auto flex flex-col items-center rounded-[1em] border p-[2em] md:p-[3em] lg:p-[4em] text-center shadow backdrop-blur-xs 2xl:max-w-6xl">
        
        <div className="bg-primary/10 text-primary mb-[1.5em] md:mb-[2em] flex w-fit items-center gap-[0.4em] rounded-full px-[0.75em] py-[0.4em] md:px-[1em] md:py-[0.6em] text-[0.75em] md:text-[0.875em] font-medium">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[12px] h-[12px] md:w-[16px] md:h-[16px]"
          >
            <path
              d="M6.6243 10.3332C6.56478 10.1025 6.44453 9.89191 6.27605 9.72343C6.10757 9.55495 5.89702 9.43469 5.6663 9.37517L1.5763 8.32051C1.50652 8.3007 1.44511 8.25867 1.40138 8.2008C1.35765 8.14293 1.33398 8.07238 1.33398 7.99984C1.33398 7.9273 1.35765 7.85675 1.40138 7.79888C1.44511 7.74101 1.50652 7.69898 1.5763 7.67917L5.6663 6.62384C5.89693 6.56438 6.10743 6.44422 6.2759 6.27587C6.44438 6.10751 6.56468 5.8971 6.6243 5.66651L7.67897 1.57651C7.69857 1.50645 7.74056 1.44474 7.79851 1.40077C7.85647 1.35681 7.92722 1.33301 7.99997 1.33301C8.07271 1.33301 8.14346 1.35681 8.20142 1.40077C8.25938 1.44474 8.30136 1.50645 8.32097 1.57651L9.37497 5.66651C9.43449 5.89722 9.55474 6.10777 9.72322 6.27625C9.8917 6.44473 10.1023 6.56499 10.333 6.62451L14.423 7.67851C14.4933 7.69791 14.5553 7.73985 14.5995 7.79789C14.6437 7.85594 14.6677 7.92688 14.6677 7.99984C14.6677 8.0728 14.6437 8.14374 14.5995 8.20179C14.5553 8.25983 14.4933 8.30177 14.423 8.32117L10.333 9.37517C10.1023 9.43469 9.8917 9.55495 9.72322 9.72343C9.55474 9.89191 9.43449 10.1025 9.37497 10.3332L8.3203 14.4232C8.3007 14.4932 8.25871 14.5549 8.20075 14.5989C8.1428 14.6429 8.07205 14.6667 7.9993 14.6667C7.92656 14.6667 7.85581 14.6429 7.79785 14.5989C7.73989 14.5549 7.69791 14.4932 7.6783 14.4232L6.6243 10.3332Z"
              stroke="#0062FF"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.334 2V4.66667"
              stroke="#0062FF"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.6667 3.33301H12"
              stroke="#0062FF"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.66602 11.333V12.6663"
              stroke="#0062FF"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.33333 12H2"
              stroke="#0062FF"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p>Start Your Health Journey</p>
        </div>

        <h2 className="text-[2em] md:text-[2.5em] lg:text-[3em] font-bold leading-tight">
          Ready to Take Control of
          <br className="hidden md:block" />
          <GradientText text="Your Health?" />
        </h2>

        <p className="text-secondary mt-[1em] md:mt-[1.5em] max-w-[43ch] text-center text-[0.9375em] md:text-[1.125em] leading-normal">
          Join over 500,000 patients who trust MediLink for their healthcare
          needs. Get started with a free symptom check today.
        </p>

        <Link href="/symptom-assessment">
          <PrimaryButton className="mt-[1.5em] md:mt-[2.2em] px-[1.25em] py-[0.75em] md:px-[1.5em] md:py-[0.9em] text-[0.9375em] md:text-[1.125em] font-medium">
            <span>Get Started Free</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]"
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
      </div>
    </section>
  );
};

export default Journey;