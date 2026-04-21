import Image from "next/image";
import Link from "next/link";

import PrimaryButton from "@/components/ui/PrimaryButton";
import doctorImg from "@/public/images/symptom-assessment-page/doctor.svg";

interface Doctor {
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  reviews: number;
  location: string;
  nextAvailable: string;
  languages: string;
}

interface DetailsCardsProps {
  doctor: Doctor;
}

const DetailsCards: React.FC<DetailsCardsProps> = ({ doctor }) => {
  return (
    <div className="bg-background/60 border-background font-secondary rounded-[1.5em] md:rounded-[2em] border p-[1.25em] md:p-[1.5em] shadow backdrop-blur-xs w-full sm:max-w-[22.5em] mx-auto">
      <div className="bg-background/50 border-background/40 mx-auto mb-[1.25em] md:mb-[1.5em] w-fit rounded-full border px-[0.75em] md:px-[1em] py-[0.5em] md:py-[0.75em]">
        <p className="text-primary text-[0.65em] md:text-[0.75em] font-semibold uppercase">
          Highly Recommended
        </p>
      </div>

      <div className="relative mx-auto size-[6em] md:size-[7em] rounded-full">
        <div className="bg-primary/30 absolute inset-0 m-auto size-[5.25em] md:size-[6.25em] rounded-full blur-sm"></div>
        <div className="relative size-full rounded-full bg-linear-to-tr from-[#DBEAFE] to-white p-[0.5em]">
          <div className="border-background relative size-full rounded-full border-[0.125em]">
            <Image
              src={doctorImg}
              alt={doctor.name}
              fill
              className="rounded-full object-contain"
            />
          </div>
        </div>
      </div>

      <h2 className="text-primary mt-[0.75em] md:mt-[1em] text-center text-[1.125em] md:text-[1.25em] font-bold">
        {doctor.name}
      </h2>

      <p className="text-secondary mt-[0.25em] text-center text-[0.875em] font-medium">
        {doctor.specialization} • {doctor.experience} Yrs Exp
      </p>

      <div className="mx-auto mt-[0.5em] flex w-fit items-end justify-center gap-[0.25em] rounded-full border border-[#FEF9C3] bg-[#FEFCE8] px-[0.75em] md:px-[0.875em] py-[0.5em] md:py-[0.75em]">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.1375 11.1187L7.5 9.69375L9.8625 11.1375L9.24375 8.4375L11.325 6.6375L8.5875 6.39375L7.5 3.84375L6.4125 6.375L3.675 6.61875L5.75625 8.4375L5.1375 11.1187ZM2.86875 14.25L4.0875 8.98125L0 5.4375L5.4 4.96875L7.5 -5.66244e-07L9.6 4.96875L15 5.4375L10.9125 8.98125L12.1313 14.25L7.5 11.4562L2.86875 14.25Z"
            fill="#EAB308"
          />
        </svg>
        <p className="text-[0.875em] font-bold">{doctor.rating}</p>
        <p className="text-secondary text-[0.75em]">
          ({doctor.reviews} reviews)
        </p>
      </div>

      <div className="mt-[1.25em] md:mt-[1.5em] mb-[1.5em] md:mb-[2em] flex flex-col gap-[0.75em] md:gap-[1em]">
        <hr className="border-t-secondary/20" />

        <div className="flex items-center gap-[0.75em]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <rect width="32" height="32" rx="16" fill="#EFF6FF" />
            <path
              d="M16 16C16.4125 16 16.7656 15.8531 17.0594 15.5594C17.3531 15.2656 17.5 14.9125 17.5 14.5C17.5 14.0875 17.3531 13.7344 17.0594 13.4406C16.7656 13.1469 16.4125 13 16 13C15.5875 13 15.2344 13.1469 14.9406 13.4406C14.6469 13.7344 14.5 14.0875 14.5 14.5C14.5 14.9125 14.6469 15.2656 14.9406 15.5594C15.2344 15.8531 15.5875 16 16 16ZM16 21.5125C17.525 20.1125 18.6562 18.8406 19.3938 17.6969C20.1313 16.5531 20.5 15.5375 20.5 14.65C20.5 13.2875 20.0656 12.1719 19.1969 11.3031C18.3281 10.4344 17.2625 10 16 10C14.7375 10 13.6719 10.4344 12.8031 11.3031C11.9344 12.1719 11.5 13.2875 11.5 14.65C11.5 15.5375 11.8688 16.5531 12.6063 17.6969C13.3438 18.8406 14.475 20.1125 16 21.5125ZM16 23.5C13.9875 21.7875 12.4844 20.1969 11.4906 18.7281C10.4969 17.2594 10 15.9 10 14.65C10 12.775 10.6031 11.2812 11.8094 10.1687C13.0156 9.05625 14.4125 8.5 16 8.5C17.5875 8.5 18.9844 9.05625 20.1906 10.1687C21.3969 11.2812 22 12.775 22 14.65C22 15.9 21.5031 17.2594 20.5094 18.7281C19.5156 20.1969 18.0125 21.7875 16 23.5Z"
              fill="var(--primary)"
            />
          </svg>

          <div>
            <p className="text-[0.75em] font-semibold text-[#94A3B8] uppercase">
              Location
            </p>
            <p className="text-[0.875em] font-medium leading-tight md:leading-normal">{doctor.location}</p>
          </div>
        </div>

        <div className="flex items-center gap-[0.75em]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <rect width="32" height="32" rx="16" fill="#EFF6FF" />
            <path
              d="M10.75 23.5C10.3375 23.5 9.98438 23.3531 9.69063 23.0594C9.39687 22.7656 9.25 22.4125 9.25 22V11.5C9.25 11.0875 9.39687 10.7344 9.69063 10.4406C9.98438 10.1469 10.3375 10 10.75 10H11.5V8.5H13V10H19V8.5H20.5V10H21.25C21.6625 10 22.0156 10.1469 22.3094 10.4406C22.6031 10.7344 22.75 11.0875 22.75 11.5V22C22.75 22.4125 22.6031 22.7656 22.3094 23.0594C22.0156 23.3531 21.6625 23.5 21.25 23.5H10.75ZM10.75 22H21.25V14.5H10.75V22ZM10.75 13H21.25V11.5H10.75V13ZM16 17.5C15.7875 17.5 15.6094 17.4281 15.4656 17.2844C15.3219 17.1406 15.25 16.9625 15.25 16.75C15.25 16.5375 15.3219 16.3594 15.4656 16.2156C15.6094 16.0719 15.7875 16 16 16C16.2125 16 16.3906 16.0719 16.5344 16.2156C16.6781 16.3594 16.75 16.5375 16.75 16.75C16.75 16.9625 16.6781 17.1406 16.5344 17.2844C16.3906 17.4281 16.2125 17.5 16 17.5ZM13 17.5C12.7875 17.5 12.6094 17.4281 12.4656 17.2844C12.3219 17.1406 12.25 16.9625 12.25 16.75C12.25 16.5375 12.3219 16.3594 12.4656 16.2156C12.6094 16.0719 12.7875 16 13 16C13.2125 16 13.3906 16.0719 13.5344 16.2156C13.6781 16.3594 13.75 16.5375 13.75 16.75C13.75 16.9625 13.6781 17.1406 13.5344 17.2844C13.3906 17.4281 13.2125 17.5 13 17.5ZM19 17.5C18.7875 17.5 18.6094 17.4281 18.4656 17.2844C18.3219 17.1406 18.25 16.9625 18.25 16.75C18.25 16.5375 18.3219 16.3594 18.4656 16.2156C18.6094 16.0719 18.7875 16 19 16C19.2125 16 19.3906 16.0719 19.5344 16.2156C19.6781 16.3594 19.75 16.5375 19.75 16.75C19.75 16.9625 19.6781 17.1406 19.5344 17.2844C19.3906 17.4281 19.2125 17.5 19 17.5ZM16 20.5C15.7875 20.5 15.6094 20.4281 15.4656 20.2844C15.3219 20.1406 15.25 19.9625 15.25 19.75C15.25 19.5375 15.3219 19.3594 15.4656 19.2156C15.6094 19.0719 15.7875 19 16 19C16.2125 19 16.3906 19.0719 16.5344 19.2156C16.6781 19.3594 16.75 19.5375 16.75 19.75C16.75 19.9625 16.6781 20.1406 16.5344 20.2844C16.3906 20.4281 16.2125 20.5 16 20.5ZM13 20.5C12.7875 20.5 12.6094 20.4281 12.4656 20.2844C12.3219 20.1406 12.25 19.9625 12.25 19.75C12.25 19.5375 12.3219 19.3594 12.4656 19.2156C12.6094 19.0719 12.7875 19 13 19C13.2125 19 13.3906 19.0719 13.5344 19.2156C13.6781 19.3594 13.75 19.5375 13.75 19.75C13.75 19.9625 13.6781 20.1406 13.5344 20.2844C13.3906 20.4281 13.2125 20.5 13 20.5ZM19 20.5C18.7875 20.5 18.6094 20.4281 18.4656 20.2844C18.3219 20.1406 18.25 19.9625 18.25 19.75C18.25 19.5375 18.3219 19.3594 18.4656 19.2156C18.6094 19.0719 18.7875 19 19 19C19.2125 19 19.3906 19.0719 19.5344 19.2156C19.6781 19.3594 19.75 19.5375 19.75 19.75C19.75 19.9625 19.6781 20.1406 19.5344 20.2844C19.3906 20.4281 19.2125 20.5 19 20.5Z"
              fill="var(--primary)"
            />
          </svg>

          <div>
            <p className="text-[0.75em] font-semibold text-[#94A3B8] uppercase">
              Next Available
            </p>
            <p className="text-[0.875em] font-medium leading-tight md:leading-normal">{doctor.nextAvailable}</p>
          </div>
        </div>

        <div className="flex items-center gap-[0.75em]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <rect width="32" height="32" rx="16" fill="#EFF6FF" />
            <path
              d="M15.925 23.5L19.3375 14.5H20.9125L24.325 23.5H22.75L21.9438 21.2125H18.3063L17.5 23.5H15.925ZM10 21.25L8.95 20.2L12.7375 16.4125C12.3 15.975 11.9031 15.475 11.5469 14.9125C11.1906 14.35 10.8625 13.7125 10.5625 13H12.1375C12.3875 13.4875 12.6375 13.9125 12.8875 14.275C13.1375 14.6375 13.4375 15 13.7875 15.3625C14.2 14.95 14.6281 14.3719 15.0719 13.6281C15.5156 12.8844 15.85 12.175 16.075 11.5H7.75V10H13V8.5H14.5V10H19.75V11.5H17.575C17.3125 12.4 16.9188 13.325 16.3938 14.275C15.8688 15.225 15.35 15.95 14.8375 16.45L16.6375 18.2875L16.075 19.825L13.7875 17.4812L10 21.25ZM18.775 19.9H21.475L20.125 16.075L18.775 19.9Z"
              fill="var(--primary)"
            />
          </svg>

          <div>
            <p className="text-[0.75em] font-semibold text-[#94A3B8] uppercase">
              Languages
            </p>
            <p className="text-[0.875em] font-medium leading-tight md:leading-normal">{doctor.languages}</p>
          </div>
        </div>
        <hr className="border-t-secondary/20" />
      </div>

      <PrimaryButton className="w-full rounded-full py-[0.75em] md:py-[0.875em]">
        <svg
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.875 15.5C10.35 15.5 9.90625 15.3187 9.54375 14.9562C9.18125 14.5937 9 14.15 9 13.625C9 13.1 9.18125 12.6562 9.54375 12.2937C9.90625 11.9312 10.35 11.75 10.875 11.75C11.4 11.75 11.8438 11.9312 12.2063 12.2937C12.5688 12.6562 12.75 13.1 12.75 13.625C12.75 14.15 12.5688 14.5937 12.2063 14.9562C11.8438 15.3187 11.4 15.5 10.875 15.5ZM3.75 18.5C3.3375 18.5 2.98438 18.3531 2.69063 18.0594C2.39687 17.7656 2.25 17.4125 2.25 17V6.5C2.25 6.0875 2.39687 5.73437 2.69063 5.44062C2.98438 5.14687 3.3375 5 3.75 5H4.5V3.5H6V5H12V3.5H13.5V5H14.25C14.6625 5 15.0156 5.14687 15.3094 5.44062C15.6031 5.73437 15.75 6.0875 15.75 6.5V17C15.75 17.4125 15.6031 17.7656 15.3094 18.0594C15.0156 18.3531 14.6625 18.5 14.25 18.5H3.75ZM3.75 17H14.25V9.5H3.75V17ZM3.75 8H14.25V6.5H3.75V8Z"
            fill="white"
          />
        </svg>
        <span className="text-[0.9375em] md:text-[1em]">Book Appointment</span>
      </PrimaryButton>
      <Link href="#" className="mx-auto block w-fit">
        <p className="text-secondary hover:text-primary mt-[0.75em] md:mt-[1em] text-center text-[13px] md:text-[14px] font-medium">
          View full profile
        </p>
      </Link>
    </div>
  );
};

export default DetailsCards;