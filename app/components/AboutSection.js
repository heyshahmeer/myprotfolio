"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const CheckIcon = ({ className = "w-6 h-6" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

export default function AboutSection({ id }) {
    const coreValues = [
        {
            title: "Zero-Trust AI Architecture",
            description: "Integrating identity-aware proxies and cryptographic verification into AI model layers.",
            iconColor: "text-[#4A0E0E]",
        },
        {
            title: "Autonomous Reliability",
            description: "Self-healing platforms with Kubernetes operators that scale and patch infrastructure.",
            iconColor: "text-[#1A1A1C]",
        },
        {
            title: "Supply Chain Defense",
            description: "Securing the software factory from signed commits to verified deployment artifacts.",
            iconColor: "text-[#8E8E93]",
        },
        {
            title: "Generative Innovation",
            description: "Automating documentation, testing, and security audits using advanced LLM workflows.",
            iconColor: "text-[#4A0E0E]",
        },
    ];

    const valueSectionAnimation = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true },
    };

    return (
        <section id={id} className="min-h-screen text-[#D1D1D1] font-sans overflow-x-hidden py-16" style={{ background: "linear-gradient(to bottom left, #000000 0%, transparent 100%)" }}>
            {/* 🖼️ Top Hero Image - Removed or made smaller for section */}
            {/* Keeping a version of it as a section header */}

            {/* 🧠 About Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 ">
                <div className="flex flex-col lg:flex-row gap-16 items-start bg-[linear-gradient(to_bottom_right,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.4)_40%,rgba(0,0,0,0)_75%)]">
                    <motion.header
                        className="w-full lg:w-1/3 lg:sticky lg:top-20"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-6xl sm:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#D1D1D1] to-[#4A0E0E]">
                            About Me
                        </h2>
                        <div className="w-20 border-b-4 border-[#4A0E0E]"></div>
                    </motion.header>

                    <motion.section
                        className="w-full lg:w-2/3 grid grid-cols-1 gap-12 border-l border-white/5 lg:pl-12"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                    >
                        <article>
                            <h2 className="text-2xl font-bold text-[#5F0A0A] mb-4 uppercase tracking-wider">
                                Focus: AI Automation & Full-Stack Engineering
                            </h2>
                            <div className="text-[#8E8E93] text-lg leading-relaxed space-y-4">
                                <p>
                                    I build AI automation systems and full-stack apps for real clients
                                    voice agents, workflow automation, and RAG-based tools. In parallel, I'm
                                    building cybersecurity fundamentals from the ground up, working toward a
                                    red-team specialization.
                                </p>
                            </div>
                        </article>

                        <article className="pt-8">
                            <h2 className="text-xl font-bold text-[#4A0E0E] mb-3 uppercase tracking-wider">
                                Currently Building
                            </h2>
                            <ul className="list-disc list-inside space-y-2 text-[#8E8E93] ml-4">
                                <li>An AI automation freelance practice voice agents, n8n workflows, RAG support agents, delivered to real clients.</li>
                                <li>Cybersecurity fundamentals through structured coursework and hands-on practice in networking and Linux.</li>
                                <li>A long-term path toward pentesting and a security specialization.</li>
                            </ul>
                        </article>
                    </motion.section>
                </div>
            </div>

            {/* ⚡ Engineering Strategy Section with Masked Background */}
            <div className="relative min-h-[700px] flex items-center justify-end mb-16 overflow-hidden">
                {/* Background Image Container with Alpha Mask */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        maskImage: 'linear-gradient(to bottom left, black 30%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom left, black 30%, transparent 100%)'
                    }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-no-repeat opacity-100"
                        style={{
                            backgroundImage: "url('/strategy_ultra_clear.png')",
                            backgroundPosition: 'left bottom'
                        }}
                    />
                    {/* Content support gradient */}
                    <div className="absolute inset-0 bg-gradient-to-l from-[#0A0A0B]/80 via-[#0A0A0B]/40 to-transparent" />
                </div>

                <motion.section
                    className="relative z-10 w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 text-white">
                        Engineering Strategy
                    </h2>
                    <div className="w-24 border-b-4 border-[#4A0E0E] mb-12"></div>

                    <ul className="space-y-10">
                        {[
                            "Simplifying complexity with clarity, performance, and intent.",
                            "Creating adaptive systems that blend functionality with minimalism.",
                            "Aligning user goals with technical excellence and resilience.",
                        ].map((point, i) => (
                            <li key={i} className="flex items-start space-x-6 group">
                                <span className="text-4xl font-extrabold text-[#4A0E0E] group-hover:text-white transition-colors duration-300">
                                    {i + 1 < 10 ? `0${i + 1}` : i + 1}.
                                </span>
                                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">{point}</p>
                            </li>
                        ))}
                    </ul>
                </motion.section>
            </div>

            {/* 💎 Core Values Section */}
            <div className="px-6 lg:px-12 bg-transparent py-16">
                <motion.header
                    className="max-w-4xl mx-auto text-center mb-16"
                    {...valueSectionAnimation}
                >
                    <p className="text-sm uppercase tracking-widest text-[#4A0E0E] mb-3 font-semibold">
                        Pillars of Practice
                    </p>
                    <h2 className="text-5xl sm:text-6xl font-extrabold mb-4">
                        My Core Values
                    </h2>
                    <div className="w-20 border-b-4 border-[#4A0E0E] mx-auto"></div>
                </motion.header>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {coreValues.map((value, i) => (
                        <motion.article
                            key={i}
                            className="text-center p-6 bg-white/5 backdrop-blur-md border border-white/5 rounded-lg shadow-xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.03]"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className={`mx-auto mb-4 ${value.iconColor}`}>
                                <CheckIcon className="w-8 h-8 mx-auto" />
                            </div>
                            <h2 className="text-lg font-bold mb-3 uppercase tracking-wider text-white">
                                {value.title}
                            </h2>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}