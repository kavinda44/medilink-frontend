import GradientText from "@/components/ui/GradientText";
import DetailsCards from "./DetailsCards";
import { doctors } from "@/lib/constants";
import PrimaryButton from "@/components/ui/PrimaryButton";

interface RecommendationsProps {
  specialist: string;
  prediction: string;
  symptoms: string[];
  confidence?: number | null;
  onBack: () => void;
}

const Recommendations: React.FC<RecommendationsProps> = ({
  specialist,
  prediction,
  symptoms,
  confidence,
  onBack,
}) => {
  const matches = doctors.filter((d) =>
    d.specialization.toLowerCase().includes(specialist.toLowerCase()),
  );
  const top = (matches.length ? matches : doctors).slice(0, 3);
  const confidencePct =
    typeof confidence === "number" && confidence >= 0
      ? Math.round(confidence * 100)
      : null;

  return (
    <section className="px-container container mx-auto mb-[3em] md:mb-[5em]">
      <h1 className="text-center text-[1.75em] md:text-[2.25em] font-bold leading-tight px-[1em] md:px-0">
        Based on your symptoms, we recommend seeing a{" "}
        <GradientText text={specialist} />
      </h1>
      <p className="text-secondary border-primary-light/50 from-primary-light/30 mx-[1em] md:mx-auto mt-[1.5em] md:mt-[2em] max-w-[80ch] rounded-[1em] border bg-linear-to-br to-transparent p-[1.25em] md:p-[1.5em] text-center text-[0.9375em] md:text-[1em] leading-relaxed">
        Based on the symptoms you shared, our analysis suggests a high
        likelihood of{" "}
        <span className="text-foreground font-semibold">{prediction}</span>
        {confidencePct !== null && (
          <>
            {" "}
            (
            <span className="text-foreground font-medium">
              {confidencePct}%
            </span>{" "}
            confidence)
          </>
        )}
        . The following symptoms contributed to this result:{" "}
        {symptoms && symptoms.length > 0 ? (
          <span className="text-foreground">{symptoms.join(", ")}</span>
        ) : (
          <span className="italic">not specified</span>
        )}
        . To get the right care, we recommend seeing a{" "}
        <span className="text-foreground font-semibold">{specialist}</span>. You
        can book an appointment with a top-rated specialist below.
      </p>

      <div className="mt-[2.5em] md:mt-[3em] flex flex-col md:flex-row flex-wrap justify-center gap-[1.5em] md:gap-[2em] px-[1em] md:px-0">
        {top.map((doc) => (
          <DetailsCards key={doc.name} doctor={doc} />
        ))}
      </div>

      <div className="mt-[2.5em] md:mt-[3em] flex justify-center">
        <PrimaryButton 
          onClick={onBack} 
          className="rounded-full px-[2em] py-[0.875em] md:py-[1em] text-[0.9375em] md:text-[1em]"
        >
          Edit your symptoms
        </PrimaryButton>
      </div>
    </section>
  );
};

export default Recommendations;