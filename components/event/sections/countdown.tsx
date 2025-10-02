import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function BuildathonCountdown() {
  // Set target date (you can customize this)
  const targetDate = new Date("2025-11-04T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <section
      className="min-h-[calc(50vh+20rem)] flex items-center justify-center bg-cover bg-center p-8 bg-repeat-y bg-fixed text-[120px] lg:text-[160px] xl:text-[240px]"
      style={{
        fontFamily: "var(--font-digital-7)",
        letterSpacing: "0.1em",
        backgroundImage:
          "linear-gradient(0deg, #FFB636ee, #FFB636ee), url('/assets/events/hero_bg.jpg')",
        backgroundBlendMode: "multiply",
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <TimeUnit value={formatNumber(timeLeft.days)} label="DAYS" />

            <Separator />

            {/* Hours */}
            <TimeUnit value={formatNumber(timeLeft.hours)} label="HOURS" />

            <Separator />

            {/* Minutes */}
            <TimeUnit value={formatNumber(timeLeft.minutes)} label="MINUTES" />

            <Separator />

            {/* Seconds */}
            <TimeUnit value={formatNumber(timeLeft.seconds)} label="SECONDS" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function TimeUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center -space-y-10 md:-space-y-14 justify-center w-fit p-3">
      <div className="relative">
        <div className="relative transition-all duration-300 tracking-widest xl:tracking-normal font-medium">
          {value}
        </div>
      </div>

      <div
        style={{ fontFamily: "var(--font-hanken)" }}
        className="text-2xl font-bold tracking-widest"
      >
        {label}
      </div>
    </div>
  );
}

function Separator() {
  return (
    <div className="md:flex flex-col tracking-tight xl:tracking-normal hidden">
      <div>:</div>
    </div>
  );
}
