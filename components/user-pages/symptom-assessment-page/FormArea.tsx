import React from "react";
import PrimaryButton from "@/components/ui/PrimaryButton";

interface FormAreaProps {
  description: string;
  setDescription: (desc: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const FormArea: React.FC<FormAreaProps> = ({
  description,
  setDescription,
  handleSubmit,
}) => {
  return (
    <section className="px-container container mx-auto 2xl:max-w-6xl">
      <h1 className="text-[1.75em] md:text-[2.25em] font-bold leading-tight">
        Symptom Assessment
      </h1>
      <p className="mt-[0.5em] text-[#64748B] text-[0.9375em] md:text-[1em] leading-normal">
        Please describe your symptoms in detail to help us provide accurate
        recommendations.
      </p>

      <div className="mt-[2em] md:mt-[3em] rounded-[1em] bg-white p-[1.25em] md:p-[2em] shadow">
        <form className="flex flex-col gap-[1.25em] md:gap-[1.5em]" onSubmit={handleSubmit}>
          <div className="font-secondary rounded-[0.5em] border border-[#94A3B8] p-[0.5em] font-light">
            <textarea
              autoFocus
              placeholder="Describe your symptoms here..."
              rows={6}
              className="w-full resize-none rounded-[0.5em] p-[0.5em] focus:outline-none text-[0.9375em] md:text-[1em]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <p className="font-secondary rounded-[0.5em] bg-[#EBF4FF] p-[1em] font-light text-[0.875em] md:text-[1em] leading-relaxed">
            <span className="font-medium">Example:</span> Lately I’ve been feeling extremely tired and weak, like I
            can’t get through the day without resting. My skin has a yellowish
            tint, and it itches constantly...
          </p>

          <PrimaryButton
            type="submit"
            title={
              description.trim().length < 5
                ? "Please provide more details"
                : "Submit for Review"
            }
            className="w-full md:w-auto md:self-end py-[0.875em] md:py-[0.6em] text-[1em]"
            disabled={description.trim().length < 5}
          >
            Submit for Review
          </PrimaryButton>
        </form>
        <p className="mt-[1.25em] md:mt-[1em] text-center text-[0.75em] md:text-[0.8em] text-[#626D84]">
          AI can make mistakes. Please consult a real doctor for emergencies.
        </p>
      </div>
    </section>
  );
};

export default FormArea;