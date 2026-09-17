"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CombinedHero() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        },
    };

    return (
        <section className="relative w-full min-h-[160vh] bg-transparent flex flex-col font-sans">
            {/* Upper Content - Main Title and Info */}
            <div className="relative z-20 flex flex-col min-h-screen">
                {/* Content Overlay - Neutral */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />

                <div className="flex-grow flex flex-col md:flex-row items-center justify-between px-8 md:px-24 pt-32">
                    {/* Left Side: Large Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full md:w-1/2"
                    >
                        <h1 className="text-6xl md:text-[8vw] font-bold leading-[0.9] tracking-tighter text-[#D1D1D1]">
                            AI Automation. <br />
                            <span className="text-[#5F0A0A]">Full-Stack Apps.</span>
                        </h1>
                    </motion.div>

                    {/* Right Side: Small Description */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="w-full md:w-1/3 mt-8 md:mt-24 text-right md:text-left"
                    >
                        <p className="text-sm md:text-base text-[#8E8E93] leading-relaxed max-w-xs font-light">
                            Building AI automation systems and full-stack apps for real businesses.
                        </p>
                    </motion.div>
                </div>

                {/* Status Bar */}
                <footer className="p-8 md:px-12 md:pb-12 flex flex-col md:flex-row justify-between items-end gap-8 bg-transparent">
                    <div className="flex flex-wrap gap-12">
                        {[
                            { num: "01", label: "Full-Stack Development" },
                            { num: "02", label: "AI Automation & Agents" },
                            { num: "03", label: "Security Fundamentals (Learning)" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + (i * 0.1) }}
                                className="flex flex-col gap-1"
                            >
                                <span className="text-[10px] font-mono text-[#5F0A0A]">{item.num}</span>
                                <span className="text-[11px] uppercase tracking-widest text-[#D1D1D1]/50 font-medium">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-col items-end gap-1">
                        <span className="text-[10px] font-mono text-[#8E8E93] uppercase tracking-widest">Local Time</span>
                        <span className="text-xs text-[#D1D1D1] font-bold">{time} GMT+5</span>
                    </div>
                </footer>
            </div>

            {/* Lower Content - Secondary Info and Call to Action */}
            <div className="relative z-20 flex items-center justify-start px-8 md:px-24 py-32 md:py-48">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl text-left space-y-10"
                >
                    <motion.div variants={fadeInUp} className="space-y-4">
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                            <span className="block text-[#D1D1D1]">Building AI Automation</span>
                            <span className="block text-[#5F0A0A]">and Full-Stack Apps</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4A0E0E] via-[#D1D1D1] to-[#1A1A1C]">
                                That Ship.
                            </span>
                        </h2>
                        <p className="text-[#8E8E93] text-lg md:text-xl leading-relaxed max-w-2xl mx-0">
                            I build voice agents, automation workflows, and full-stack apps for
                            real clients, while going deep on security fundamentals on the side.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-6 justify-start">
                        <Link href="#project" className="group">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 bg-gradient-to-r from-[#1A1A1C] to-[#4A0E0E] text-[#D1D1D1] font-bold text-sm uppercase tracking-wider rounded-full border border-white/10 shadow-[0_0_40px_rgba(74,14,14,0.3)] transition-all duration-300"
                            >
                                Explore Projects
                            </motion.button>
                        </Link>

                        <Link href="#contact" className="group">
                            <motion.div
                                whileHover={{ scale: 1.1, x: 5 }}
                                className="flex items-center gap-4 text-[#8E8E93] hover:text-[#5F0A0A] transition-colors"
                            >
                                <div className="w-14 h-14 flex items-center justify-center border border-white/10 rounded-full group-hover:border-[#5F0A0A]/50 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-bold uppercase tracking-widest">
                                    Get In Touch
                                </span>
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}