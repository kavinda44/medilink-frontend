"use client";

import React, { useState, useRef, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";
import PrimaryButton from "../ui/PrimaryButton";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hello! I am MediLink AI. Describe your symptoms, and I can help you.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [sessionId] = useState(
    () => `user_${Math.random().toString(36).substr(2, 9)}`,
  );
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_CHAT_API_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.text,
          session_id: sessionId,
        }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.response }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: " I’m having trouble connecting to the server right now. Please try again shortly.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed right-[1em] bottom-[1em] md:right-[2em] md:bottom-[2em] z-50">
      {isOpen && (
        <div className="border-background/30 from-background/50 to-primary-light/20 absolute right-0 bottom-[4.5em] md:bottom-[5em] flex h-[24em] md:h-[26em] w-[calc(100vw-2em)] sm:w-[22em] flex-col overflow-hidden rounded-[1em] border bg-linear-to-tl shadow backdrop-blur-xs">
          <div className="border-b-secondary/15 bg-background/40 flex items-center gap-[0.7em] border-b p-[0.7em]">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-[2em] md:size-[2.5em]"
            >
              <rect
                width="40"
                height="40"
                rx="20"
                fill="url(#paint0_linear_190_18)"
              />
              <path
                d="M28.3327 19.9998H26.266C25.9018 19.9991 25.5474 20.1176 25.2569 20.3373C24.9665 20.557 24.756 20.8658 24.6577 21.2165L22.6993 28.1832C22.6867 28.2264 22.6604 28.2645 22.6243 28.2915C22.5883 28.3186 22.5444 28.3332 22.4993 28.3332C22.4543 28.3332 22.4104 28.3186 22.3743 28.2915C22.3383 28.2645 22.312 28.2264 22.2993 28.1832L17.6993 11.8165C17.6867 11.7732 17.6604 11.7352 17.6243 11.7082C17.5883 11.6811 17.5444 11.6665 17.4993 11.6665C17.4543 11.6665 17.4104 11.6811 17.3743 11.7082C17.3383 11.7352 17.312 11.7732 17.2993 11.8165L15.341 18.7832C15.2431 19.1325 15.0338 19.4403 14.7451 19.6598C14.4563 19.8794 14.1038 19.9988 13.741 19.9998H11.666"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_190_18"
                  x1="0"
                  y1="0"
                  x2="40"
                  y2="40"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0062FF" />
                  <stop offset="1" stopColor="#00E6FF" />
                </linearGradient>
              </defs>
            </svg>

            <span className="font-medium text-[0.9375em] md:text-[1em]">MediLink Assistant</span>
          </div>

          <div className="flex-1 overflow-y-auto p-[1em]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={cn(
                  "mb-[1em] flex items-end gap-[0.5em]",
                  msg.role === "user" ? "justify-end" : "justify-start",
                )}
              >
                {msg.role === "bot" && (
                  <svg
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-[1.75em] md:size-[2em] shrink-0"
                  >
                    <rect
                      width="40"
                      height="40"
                      rx="20"
                      fill="url(#paint0_linear_190_18)"
                    />
                    <path
                      d="M28.3327 19.9998H26.266C25.9018 19.9991 25.5474 20.1176 25.2569 20.3373C24.9665 20.557 24.756 20.8658 24.6577 21.2165L22.6993 28.1832C22.6867 28.2264 22.6604 28.2645 22.6243 28.2915C22.5883 28.3186 22.5444 28.3332 22.4993 28.3332C22.4543 28.3332 22.4104 28.3186 22.3743 28.2915C22.3383 28.2645 22.312 28.2264 22.2993 28.1832L17.6993 11.8165C17.6867 11.7732 17.6604 11.7352 17.6243 11.7082C17.5883 11.6811 17.5444 11.6665 17.4993 11.6665C17.4543 11.6665 17.4104 11.6811 17.3743 11.7082C17.3383 11.7352 17.312 11.7732 17.2993 11.8165L15.341 18.7832C15.2431 19.1325 15.0338 19.4403 14.7451 19.6598C14.4563 19.8794 14.1038 19.9988 13.741 19.9998H11.666"
                      stroke="white"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_190_18"
                        x1="0"
                        y1="0"
                        x2="40"
                        y2="40"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0062FF" />
                        <stop offset="1" stopColor="#00E6FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}

                <div
                  className={cn(
                    "max-w-[85%] md:max-w-[75%] rounded-[1em] px-[0.8em] py-[0.6em] leading-snug wrap-break-word whitespace-pre-wrap text-[0.875em] md:text-[1em] [&_ol]:-my-[1.5em] [&_ul]:-my-[1em]",
                    msg.role === "user"
                      ? "bg-primary-light/30 rounded-br-none"
                      : "bg-background/50 border-secondary/15 rounded-bl-none border",
                  )}
                >
                  <Markdown remarkPlugins={[remarkGfm]}>{msg.text}</Markdown>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-secondary mt-[1em] animate-pulse text-[0.875em]">
                Thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t-secondary/15 bg-background/40 border-t p-[0.7em]">
            <div className="border-secondary/15 flex gap-[0.5em] rounded-[0.5em] border p-[0.5em]">
              <input
                className="flex-1 text-[0.875em] md:text-[1em] focus:outline-none bg-transparent"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
              />
              <button
                title="Send message"
                onClick={handleSend}
                disabled={isLoading}
                className="transition-all duration-300 ease-in enabled:hover:brightness-110 enabled:focus:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale shrink-0"
              >
                <svg
                  viewBox="0 0 51 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-[1.5em]"
                >
                  <path
                    d="M49.9828 6.90012L35.7828 46.7001C35.4432 47.6886 34.8023 48.5457 33.9503 49.1511C33.0983 49.7564 32.078 50.0796 31.0328 50.0751C29.9997 50.0869 28.9884 49.7783 28.1378 49.1919C27.2872 48.6054 26.6392 47.7699 26.2828 46.8001L20.9828 33.0001L24.8328 29.1501L31.0578 22.9251C31.5286 22.4544 31.7931 21.8159 31.7931 21.1501C31.7931 20.4844 31.5286 19.8459 31.0578 19.3751C30.5871 18.9044 29.9486 18.6399 29.2828 18.6399C28.6171 18.6399 27.9786 18.9044 27.5078 19.3751L21.2828 25.6001L17.3328 29.4751L3.55783 24.1501C2.52916 23.8402 1.62766 23.2073 0.986844 22.345C0.346033 21.4827 0 20.4369 0 19.3626C0 18.2883 0.346033 17.2425 0.986844 16.3802C1.62766 15.5179 2.52916 14.885 3.55783 14.5751L43.4578 0.375117C44.3703 0.000240728 45.3732 -0.0963554 46.3405 0.0974846C47.3077 0.291325 48.196 0.766939 48.8935 1.46447C49.591 2.162 50.0666 3.05027 50.2605 4.01749C50.4543 4.98472 50.3577 5.98767 49.9828 6.90012Z"
                    fill="url(#paint0_linear_193_24)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_193_24"
                      x1="0"
                      y1="0"
                      x2="50.0746"
                      y2="50.3572"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0062FF" />
                      <stop offset="1" stopColor="#00E6FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <PrimaryButton
        title={isOpen ? "Close chat" : "Open chat"}
        onClick={() => setIsOpen(!isOpen)}
        className="size-[3.5em] md:size-[4em] rounded-full p-0 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        {isOpen ? (
          <svg
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[1.2em]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.753147 0.753147C1.75737 -0.251049 3.3855 -0.251049 4.38972 0.753147L18 14.3635L31.6104 0.753147C32.6145 -0.251049 34.2427 -0.251049 35.2469 0.753147C36.251 1.75737 36.251 3.3855 35.2469 4.38972L21.6366 18L35.2469 31.6104C36.251 32.6145 36.251 34.2427 35.2469 35.2469C34.2427 36.251 32.6145 36.251 31.6104 35.2469L18 21.6366L4.38972 35.2469C3.3855 36.251 1.75737 36.251 0.753147 35.2469C-0.251049 34.2427 -0.251049 32.6145 0.753147 31.6104L14.3635 18L0.753147 4.38972C-0.251049 3.3855 -0.251049 1.75737 0.753147 0.753147Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[1.8em]"
          >
            <path
              d="M11.25 11.25H27.25M11.25 19.25H21.25M1.25 15.25C1.25 4.54412 5.4853 1.25 19.25 1.25C33.0148 1.25 37.25 4.54412 37.25 15.25C37.25 25.9558 33.0148 29.25 19.25 29.25C18.5684 29.25 17.9102 29.242 17.2748 29.2252L9.25 37.25V28.2378C3.3156 26.5884 1.25 22.7266 1.25 15.25Z"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </PrimaryButton>
    </div>
  );
}