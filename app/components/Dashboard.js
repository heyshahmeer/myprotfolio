"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaLinux,
    FaUserShield,
    FaBug,
    FaDocker,
    FaNetworkWired,
    FaSitemap,
    FaRobot,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiFirebase,
    SiSupabase,
    SiRedux,
    SiVercel,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiPostman,
    SiBurpsuite,
    SiGithubactions,
    SiGradio,
    SiN8N,
    SiFastapi,
    SiLangchain,
    SiGooglecloud,
    SiGooglegemini,
} from "react-icons/si";
import { IoIosColorPalette } from "react-icons/io";
import { MdGradient, MdCloud, MdMic } from "react-icons/md";
import { Button } from "./ui/button";

const allTools = [
    // ============================================================
    // TIER 1 — CORE FOUNDATION (highest value, most used daily)
    // ============================================================
    { name: "Next.js", icon: <SiNextdotjs />, color: "#cccccc", category: "Frontend", url: "https://nextjs.org/" },
    { name: "React", icon: <FaReact />, color: "#61dafb", category: "Frontend", url: "https://reactjs.org/" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a", category: "Backend", url: "https://nodejs.org/" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", category: "Database", url: "https://www.postgresql.org/" },
    { name: "Docker", icon: <FaDocker />, color: "#2496ed", category: "DevOps", url: "https://www.docker.com/" },
    { name: "Git", icon: <FaGitAlt />, color: "#f1502f", category: "DevOps", url: "https://git-scm.com/" },
    { name: "GitHub Actions", icon: <SiGithubactions />, color: "#2088ff", category: "DevOps", url: "https://github.com/features/actions" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8", category: "Frontend", url: "https://tailwindcss.com/" },

    // ============================================================
    // TIER 2 — AI / LLM ENGINEERING (high leverage, growing fast)
    // ============================================================
    { name: "Groq", icon: <SiGooglegemini />, color: "#f55036", category: "AI", url: "https://groq.com/" },
    { name: "LangChain", icon: <SiLangchain />, color: "#1c3c3c", category: "AI", url: "https://www.langchain.com/" },
    { name: "FastAPI", icon: <SiFastapi />, color: "#009688", category: "Backend", url: "https://fastapi.tiangolo.com/" },
    { name: "n8n", icon: <SiN8N />, color: "#ea4b71", category: "Automation", url: "https://n8n.io/" },
    { name: "Gradio", icon: <SiGradio />, color: "#ff7c00", category: "AI", url: "https://www.gradio.app/" },
    { name: "Vapi", icon: <MdMic />, color: "#8b5cf6", category: "AI", url: "https://vapi.ai/" },

    // ============================================================
    // TIER 3 — CLOUD, DB & AUTH (important but situational)
    // ============================================================
    { name: "Google Cloud", icon: <SiGooglecloud />, color: "#4285f4", category: "Cloud", url: "https://cloud.google.com/" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#3FA037", category: "Database", url: "https://www.mongodb.com/" },
    { name: "Supabase", icon: <SiSupabase />, color: "#22c55e", category: "Backend", url: "https://supabase.com/" },
    { name: "Firebase", icon: <SiFirebase />, color: "#fbbf24", category: "Backend", url: "https://firebase.google.com/" },
    { name: "Vercel", icon: <SiVercel />, color: "#cccccc", category: "Cloud", url: "https://vercel.com/" },
    { name: "Clerk Auth", icon: <FaUserShield />, color: "#6c47ff", category: "Backend", url: "https://clerk.com/" },
    { name: "MySQL", icon: <SiMysql />, color: "#00758f", category: "Database", url: "https://www.mysql.com/" },
    { name: "Redux", icon: <SiRedux />, color: "#764abc", category: "Backend", url: "https://redux.js.org/" },

    // ============================================================
    // TIER 4 — SECURITY, NETWORKING, TESTING & ENVIRONMENT
    // ============================================================
    { name: "Wireshark", icon: <FaNetworkWired />, color: "#1679a7", category: "Security", url: "https://www.wireshark.org/" },
    { name: "Cisco Packet Tracer", icon: <FaSitemap />, color: "#1ba0d7", category: "Security", url: "https://www.netacad.com/courses/packet-tracer" },
    { name: "Burp Suite", icon: <SiBurpsuite />, color: "#ff8c00", category: "Security", url: "https://portswigger.net/burp" },
    { name: "Nmap", icon: <FaBug />, color: "#cc0000", category: "Security", url: "https://nmap.org/" },
    { name: "Linux", icon: <FaLinux />, color: "#f0f0f0", category: "Cloud", url: "https://www.linux.org/" },
    { name: "Postman", icon: <SiPostman />, color: "#ff6c37", category: "Tools", url: "https://www.postman.com/" },

    // ============================================================
    // TIER 5 — DESIGN NICHE (nice-to-have polish)
    // ============================================================
    { name: "React Bits", icon: <IoIosColorPalette />, color: "#a855f7", category: "Frontend", url: "https://reactbits.dev/" },
    { name: "uiGradients", icon: <MdGradient />, color: "#eb3349", category: "Frontend", url: "https://uigradients.com/" },
];

export default function Dashboard() {
    const [filter, setFilter] = useState("All");

    const categories = ["All", ...new Set(allTools.map(t => t.category))];

    const filteredTools = filter === "All"
        ? allTools
        : allTools.filter(t => t.category === filter);

    const itemMotion = {
        hidden: { opacity: 0, y: 20 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.5,
            },
        }),
    };

    return (
        <div className="min-h-screen p-8 bg-transparent flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12
                            bg-clip-text text-transparent
                            bg-gradient-to-r from-[#D1D1D1] via-[#4A0E0E] to-[#1A1A1C]
                            drop-shadow-lg">
                 Tech Dashboard 🛡️
            </h1>

            {/* Category Buttons */}
            <div className="flex gap-4 mb-8 flex-wrap justify-center py-4 bg-black/40 backdrop-blur-sm rounded-2xl">
                {categories.map(cat => (
                    <Button
                        key={cat}
                        variant="ghost"
                        className={`px-8 py-2.5 rounded-xl font-bold transition-all duration-300 ${filter === cat
                            ? 'bg-gradient-to-r from-[#1A1A1C] to-[#4A0E0E] text-[#D1D1D1] shadow-[0_0_20px_rgba(74,14,14,0.3)] scale-105'
                            : 'bg-black text-[#8E8E93] hover:text-white'
                            }`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </Button>
                ))}
            </div>

            {/* Tools Grid */}
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            >
                {filteredTools.map((tool, i) => (
                    <motion.div
                        key={tool.name}
                        custom={i}
                        variants={itemMotion}
                        whileHover={{ scale: 1.1, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex flex-col items-center cursor-pointer text-center p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-[#4A0E0E]/50"
                        onClick={() => window.open(tool.url, "_blank", "noopener,noreferrer")}
                    >
                        <div
                            className="p-3 flex items-center justify-center"
                            style={{
                                fontSize: "4rem",
                                color: tool.color,
                                textShadow: `0 0 8px ${tool.color}, 0 0 15px ${tool.color}cc`,
                            }}
                        >
                            {tool.icon}
                        </div>
                        <span className="mt-2 text-lg font-semibold text-[#D1D1D1]">{tool.name}</span>
                        <span className="text-xs text-[#8E8E93] uppercase tracking-widest mt-1">
                            {tool.category}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}