"use client";

import { useState } from "react";

import Navbar from "@/components/user-pages/Navbar";
import axiosInstance from "@/lib/axios";
import Loading from "@/components/ui/Loading";

import FormArea from "@/components/user-pages/symptom-assessment-page/FormArea";
import Recommendations from "@/components/user-pages/symptom-assessment-page/Recommendations";
import { cn } from "@/lib/utils";

const SymptomAssessmentPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [prediction, setPrediction] = useState("");
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [confidence, setConfidence] = useState<number | null>(null);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const trimmedDescription = description.trim();
      const res = await axiosInstance.post("/symptom-assessment", {
        description: trimmedDescription,
      });

      type AssessmentResponse = {
        prediction: string;
        specialist: string;
        symptoms: string[];
        confidence: number; // 0.0 - 1.0
      };

      const {
        prediction: predictedDisease,
        specialist: suggestedSpecialist,
        symptoms: matchedSymptoms,
        confidence,
      } = res.data as AssessmentResponse;

      setSpecialist(suggestedSpecialist || "");
      setPrediction(predictedDisease || "");
      setSymptoms(Array.isArray(matchedSymptoms) ? matchedSymptoms : []);
      setConfidence(typeof confidence === "number" ? confidence : null);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50">
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col justify-center pt-[8.5em] pb-[3.5em]">
        <div
          className={cn(
            "fixed inset-0 -z-1 transition-opacity duration-1000",
            specialist ? "opacity-0" : "opacity-100",
          )}
          style={{
            background:
              "radial-gradient(102.96% 164.73% at 10% 20%, #E9F5FF 0%, #FFFFFF 90%), #FFFFFF",
          }}
        ></div>
        <div
          className={cn(
            "fixed inset-0 -z-1 transition-opacity duration-1000",
            !specialist ? "opacity-0" : "opacity-100",
          )}
          style={{
            background:
              "radial-gradient(127.28% 127.28% at 10% 10%, #D1E6FA 0%, rgba(209, 230, 250, 0) 50%), radial-gradient(127.28% 141.42% at 90% 0%, #BEF4F4 0%, rgba(190, 244, 244, 0) 50%), radial-gradient(113.14% 113.14% at 20% 80%, #D1F3FA 0%, rgba(209, 243, 250, 0) 50%), radial-gradient(113.14% 127.28% at 80% 90%, #DCE6F9 0%, rgba(220, 230, 249, 0) 50%), linear-gradient(0deg, #F0F4F8, #F0F4F8), #FFFFFF",
          }}
        ></div>

        {isLoading && (
          <section className="px-container container mx-auto">
            <Loading text="Analyzing your symptoms..." />
          </section>
        )}
        {!isLoading && !specialist && (
          <FormArea
            description={description}
            setDescription={setDescription}
            handleSubmit={handleSubmit}
          />
        )}
        {!isLoading && specialist && (
          <Recommendations
            specialist={specialist}
            prediction={prediction}
            symptoms={symptoms}
            confidence={confidence ?? undefined}
            onBack={() => {
              setSpecialist("");
              setPrediction("");
              setSymptoms([]);
              setConfidence(null);
            }}
          />
        )}
      </main>
    </>
  );
};

export default SymptomAssessmentPage;
