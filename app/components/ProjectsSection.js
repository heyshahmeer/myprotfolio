"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaLock, FaShieldAlt, FaTimes, FaDocker, FaCode } from "react-icons/fa";
import { SiGithubactions, SiPostgresql } from "react-icons/si";

export default function ProjectsSection({ id }) {
    const [activeModal, setActiveModal] = useState(null);

    useEffect(() => {
        if (activeModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [activeModal]);

    const projects = [
        {
            image: "/scamradar.png",
            title: "Scam Radar",
            category: "Automation & DevOps",
            description: "Paste a suspicious SMS or WhatsApp message and get a verdict with the reasons. Built around the fake JazzCash and BISP messages common in Pakistan, and shipped with a full CI/CD pipeline.",
            longDescription: `Scam Radar checks suspicious messages for common scam patterns and returns a verdict (scam, suspicious, or looks safe) with the reasons behind it. I built it to ship a small product end to end: a Next.js app, an n8n automation workflow, a Postgres database, a Dockerized stack, and a GitHub Actions pipeline that tests, builds, publishes, and deploys every change. The scoring is rule-based and unit tested; an LLM second opinion for borderline messages is next on the roadmap.`,
            highlights: [
                {
                    icon: "actions",
                    title: "4-Job CI/CD Pipeline",
                    detail: "Every push runs lint, tests and a build, validates the n8n workflow JSON, fails if a .env file is ever committed, publishes a Docker image to GHCR, and auto-deploys through a self-hosted runner. Each job only runs if the previous one passes."
                },
                {
                    icon: "docker",
                    title: "Docker Compose Stack",
                    detail: "Next.js, n8n and PostgreSQL run together in Docker Compose. The web app ships as a multi-stage production image, and n8n waits for a Postgres health check before starting."
                },
                {
                    icon: "code",
                    title: "n8n Scoring Workflow",
                    detail: "A webhook feeds a Code node that scores the message, then splits into two parallel branches: one returns the verdict immediately, the other saves the result to the database."
                },
                {
                    icon: "db",
                    title: "Privacy-Minded Storage",
                    detail: "PostgreSQL stores only the verdict, score, reasons and links for trend analysis. The raw message is never saved, and the n8n admin panel is never exposed publicly."
                }
            ],
            tech: ["Next.js", "n8n", "Docker", "Docker Compose", "GitHub Actions", "GHCR", "PostgreSQL", "Node.js"],
            github: "https://github.com/heyshahmeer/scam-radar",
            url: null,
            featured: true,
            modal: true,
            security: ["CI Blocks Committed .env", "No Raw Messages Stored", "n8n Admin Never Exposed"],
            images: ["/scamradar.png", "/scamradar2.png", "/scamradar3.png", "/scamradar4.png", "/scamradar5.png"],
        },
        {
            image: "/apptrackr.png",
            title: "AppTrackr",
            category: "Full Stack & DevOps",
            description: "Production-grade project tracker with a containerized backend, polyglot persistence, and an automated GitHub Actions CI pipeline that builds and tests on every push.",
            longDescription: `AppTrackr is a full-stack project tracking application built with a production-grade architecture from the ground up. The goal was to bridge real backend engineering with DevOps practices not just make something that works, but something that deploys reliably and automatically.`,
            highlights: [
                {
                    icon: "docker",
                    title: "Docker Compose Orchestration",
                    detail: "Four containerized services; frontend, backend, PostgreSQL, and MongoDB, all wired together with health checks. The backend waits for Postgres to be fully ready before starting, solving a real startup race condition debugged manually."
                },
                {
                    icon: "actions",
                    title: "GitHub Actions CI Pipeline",
                    detail: "Two dependent jobs: the first runs dependency audits and backend smoke tests, the second triggers Next.js and Docker builds only if tests pass. Every push is validated automatically."
                },
                {
                    icon: "db",
                    title: "Polyglot Persistence",
                    detail: "PostgreSQL handles relational data (users, projects, tokens). MongoDB handles activity logs via Mongoose. Two databases used intentionally different tools for different problems."
                },
                {
                    icon: "code",
                    title: "JWT Dual-Token Auth",
                    detail: "Access + refresh token rotation with bcrypt password hashing. Axios interceptors on the frontend handle silent token refresh automatically."
                }
            ],
            tech: ["Node.js", "Next.js", "Docker", "GitHub Actions", "PostgreSQL", "MongoDB", "Express.js", "Tailwind CSS", "JWT", "bcrypt"],
            github: "https://github.com/bytesentinal/apptracker-dockerproject.git",
            url: null,
            featured: true,
            modal: true,
            security: ["JWT Token Rotation", "bcrypt Hashing", "Health Check Guards"],
            images: ["/apptrackr.png", "/apptrackr2.png", "/apptrackr3.png"],
        },
        {
            image: "/p9.png",
            title: "NeuroGastronomy AI",
            category: "AI & Automation",
            description: "A RAG-based recipe assistant exploring retrieval-augmented generation with LangChain and a vector database.",
            tech: ["Next.js", "OpenAI / LangChain", "Vector DB", "Prompt Eng."],
            url: "https://foodgenie-five.vercel.app/",
            github: null,
            featured: true,
            modal: false,
            security: [],
        },
        {
            image: "/p7.png",
            title: "Lumix Commerce",
            category: "E-Commerce Template",
            description: "A headless e-commerce template exploring Next.js edge functions and Stripe UI integration. Demo project — not a live payment system.",
            tech: ["Next.js 15", "Edge Functions"],
            url: "https://shoestore-9yb9.vercel.app/",
            github: null,
            featured: false,
            modal: false,
            security: [],
        },
        {
            image: "/p1.png",
            title: "Pak Tourism",
            category: "Demo Project",
            description: "Responsive travel platform showcasing nature and cultural heritage.",
            tech: ["Next.js", "React", "Responsive Design"],
            url: "https://paktourism.vercel.app/",
            github: null,
            featured: false,
            modal: false,
            security: [],
        },
        {
            image: "/docsummarizer.png",
            title: "Document Summarizer",
            category: "AI & Automation",
            description: "Paste any document, get the key points back in seconds. No fluff, no filler. Powered by Groq + LLaMA 3.3 70B.",
            longDescription: `We all have that one PDF we opened, scrolled through, and quietly gave up on. This handles it for you. Paste any document and get the key points back in seconds no fluff, no filler. Powered by Groq + LLaMA 3.3 70B with n8n for automation.`,
            highlights: [
                {
                    icon: "code",
                    title: "Python UI",
                    detail: "Built with a Python UI library for a clean, responsive interface that makes document summarization effortless."
                },
                {
                    icon: "actions",
                    title: "n8n Automation",
                    detail: "n8n workflows handle the document processing pipeline, from ingestion to LLM inference to output formatting."
                },
                {
                    icon: "db",
                    title: "Groq + LLaMA 3.3 70B",
                    detail: "Leverages Groq's ultra-fast inference with LLaMA 3.3 70B for accurate, concise summaries in seconds."
                }
            ],
            tech: ["Python", "Groq API", "LLaMA 3.3 70B", "n8n", "Python UI Library"],
            github: null,
            url: null,
            featured: true,
            modal: true,
            security: [],
            images: ["/apptoolkit.png", "/docsummarizer.png", "/docsummarizer2.png", "/docsummarizer3.png"],
        },
        {
            image: "/emailassistant.png",
            title: "AI Email Assistant",
            category: "AI & Automation",
            description: "Analyzes tone, summarizes messages, and suggests the right reply all in seconds. Powered by LLaMA 3.3 70B via Groq API.",
            longDescription: `We spend hours reading and replying to emails every day. I spent that time building a tool that does it for you. My AI Email Assistant analyzes tone, summarizes the message, and suggests the right reply — all in seconds, powered by LLaMA 3.3 70B via Groq API. Work smarter. Ship faster. 🚀`,
            highlights: [
                {
                    icon: "code",
                    title: "Python UI",
                    detail: "Built with a Python UI library for a smooth, intuitive email management experience."
                },
                {
                    icon: "actions",
                    title: "n8n Automation",
                    detail: "n8n orchestrates the email processing pipeline, from inbox monitoring to AI analysis to reply suggestions."
                },
                {
                    icon: "db",
                    title: "Tone Analysis & Summarization",
                    detail: "Analyzes email tone, summarizes the message, and suggests contextually appropriate replies using LLaMA 3.3 70B via Groq API."
                }
            ],
            tech: ["Python", "Groq API", "LLaMA 3.3 70B", "n8n", "Python UI Library"],
            github: null,
            url: null,
            featured: true,
            modal: true,
            security: [],
            images: ["/emailassistant.png", "/emailassistant2.png", "/emailassistant3.png"],
        },
    ];

    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <>
            <section id={id} className="min-h-screen bg-transparent text-[#D1D1D1] py-16">
                {/* Header */}
                <div className="relative px-6 overflow-hidden mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative z-10 max-w-7xl mx-auto text-center"
                    >
                        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#D1D1D1] via-[#4A0E0E] to-[#1A1A1C] bg-clip-text text-transparent pb-2 leading-tight">
                            My Projects
                        </h2>
                        <div className="w-24 h-1 bg-[#4A0E0E] mx-auto mb-8"></div>
                        <p className="text-xl md:text-2xl text-[#8E8E93] max-w-3xl mx-auto leading-relaxed">
                            Full-stack apps and AI automation systems, built end to end.
                        </p>
                    </motion.div>
                </div>

                {/* Featured */}
                {featuredProjects.length > 0 && (
                    <div className="px-6 mb-20">
                        <div className="max-w-7xl mx-auto">
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3"
                            >
                                <FaShieldAlt className="text-[#4A0E0E]" />
                                Featured Secure Projects
                            </motion.h2>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {featuredProjects.map((project, idx) => (
                                    <ProjectCard
                                        key={idx}
                                        project={project}
                                        variants={itemVariants}
                                        onOpenModal={() => setActiveModal(project)}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </div>
                )}

                {/* Other Projects */}
                {otherProjects.length > 0 && (
                    <div className="px-6 py-12 bg-transparent">
                        <div className="max-w-7xl mx-auto">
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-bold mb-12"
                            >
                                Additional Projects
                            </motion.h2>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            >
                                {otherProjects.map((project, idx) => (
                                    <ProjectCard
                                        key={idx}
                                        project={project}
                                        variants={itemVariants}
                                        compact
                                        onOpenModal={() => setActiveModal(project)}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </div>
                )}
            </section>

            {/* Modal */}
            <AnimatePresence>
                {activeModal && (
                    <ProjectModal project={activeModal} onClose={() => setActiveModal(null)} />
                )}
            </AnimatePresence>
        </>
    );
}

function ProjectCard({ project, variants, compact = false, onOpenModal }) {
    return (
        <motion.article
            variants={variants}
            whileHover={{ scale: 1.02, y: -5 }}
            className={`group relative bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-[#4A0E0E]/50 transition-all duration-300 ${compact ? "h-full" : ""}`}
            role="article"
            aria-label={`Project: ${project.title}`}
        >
            {/* Image */}
            <div className="relative h-48 md:h-64 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#1A1A1C] backdrop-blur-sm text-[#D1D1D1] text-xs font-bold rounded-full border border-white/5">
                        {project.category}
                    </span>
                </div>
                {project.security.length > 0 && (
                    <div className="absolute top-4 right-4">
                        <div className="px-3 py-1 bg-[#4A0E0E]/40 backdrop-blur-sm text-[#D1D1D1] text-xs font-semibold rounded-full flex items-center gap-1 border border-[#4A0E0E]/20">
                            <FaLock className="text-xs" />
                            Secure
                        </div>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-[#8E8E93] text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                </p>

                {project.security.length > 0 && !compact && (
                    <div className="mb-4">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Security Features:</p>
                        <div className="flex flex-wrap gap-2">
                            {project.security.map((feature, i) => (
                                <span key={i} className="px-2 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs rounded">
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, compact ? 3 : 5).map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                                {tech}
                            </span>
                        ))}
                        {project.tech.length > (compact ? 3 : 5) && (
                            <span className="px-2 py-1 bg-gray-800 text-gray-500 text-xs rounded">
                                +{project.tech.length - (compact ? 3 : 5)}
                            </span>
                        )}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                    {project.modal ? (
                        <button
                            onClick={onOpenModal}
                            className="flex-1 bg-gradient-to-r from-[#1A1A1C] to-[#4A0E0E] text-[#D1D1D1] text-center py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2 text-sm font-bold border border-white/5 shadow-lg hover:opacity-90"
                        >
                            <FaCode className="text-xs" />
                            View Project
                        </button>
                    ) : (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gradient-to-r from-[#1A1A1C] to-[#4A0E0E] text-[#D1D1D1] text-center py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2 text-sm font-bold border border-white/5 shadow-lg hover:opacity-90"
                        >
                            <FaExternalLinkAlt className="text-xs" />
                            View Live
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all flex items-center justify-center"
                        >
                            <FaGithub />
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
}

function ProjectModal({ project, onClose }) {
    const [activeImage, setActiveImage] = useState(0);

    const paginate = (direction) => {
        if (!project.images?.length) return;

        const newIndex =
            (activeImage + direction + project.images.length) %
            project.images.length;

        setActiveImage(newIndex);
    };

    const iconMap = {
        docker: <FaDocker className="text-[#4A0E0E] text-xl" />,
        actions: <SiGithubactions className="text-[#4A0E0E] text-xl" />,
        db: <SiPostgresql className="text-[#4A0E0E] text-xl" />,
        code: <FaCode className="text-[#4A0E0E] text-xl" />,
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-x-hidden"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Modal */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.97 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative bg-[#111113] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#8E8E93] hover:text-white transition-all"
                >
                    <FaTimes />
                </button>

                {/* Hero Image */}
                <div className="relative h-56 md:h-80 overflow-hidden rounded-t-3xl">
                    {/* Swipeable Image */}
                    <motion.div
                        key={activeImage}
                        className="relative w-full h-full cursor-grab active:cursor-grabbing"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.15}
                        onDragEnd={(e, info) => {
                            if (info.offset.x < -100) paginate(1);
                            else if (info.offset.x > 100) paginate(-1);
                        }}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -60 }}
                        transition={{ duration: 0.35 }}
                    >
                        <Image
                            src={
                                project.images?.[activeImage] ??
                                project.image
                            }
                            alt={project.title}
                            fill
                            className="object-cover pointer-events-none select-none"
                            draggable={false}
                        />
                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent" />

                    {/* Dots */}
                    {project.images?.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {project.images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImage(i)}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === activeImage
                                            ? "w-6 bg-[#4A0E0E]"
                                            : "w-2 bg-white/30"
                                        }`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Category */}
                    <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-[#1A1A1C]/80 backdrop-blur-sm text-[#D1D1D1] text-xs font-bold rounded-full border border-white/10">
                            {project.category}
                        </span>
                    </div>

                    {/* Secure */}
                    {project.security?.length > 0 && (
                        <div className="absolute top-4 right-16 z-10">
                            <div className="px-3 py-1 bg-[#4A0E0E]/60 backdrop-blur-sm text-[#D1D1D1] text-xs font-semibold rounded-full flex items-center gap-1 border border-[#4A0E0E]/30">
                                <FaLock className="text-xs" />
                                Secure
                            </div>
                        </div>
                    )}
                </div>

                {/* Body */}
                <div className="p-6 md:p-8">

                    {/* Title + Actions */}
                    <div className="flex items-start justify-between gap-4 mb-6 min-w-0">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white flex-1 min-w-0 break-words whitespace-normal">
                            {project.title}
                        </h2>

                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-[#D1D1D1] text-sm font-semibold rounded-xl transition-all shrink-0"
                            >
                                <FaGithub />
                                GitHub
                            </a>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-[#8E8E93] text-base leading-relaxed mb-8 break-words whitespace-normal">
                        {project.longDescription ?? project.description}
                    </p>

                    {/* Highlights */}
                    {project.highlights && (
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-1 h-5 bg-[#4A0E0E] rounded-full inline-block" />
                                Under the Hood
                            </h3>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {project.highlights.map((h, i) => (
                                    <div
                                        key={i}
                                        className="bg-white/3 border border-white/5 rounded-2xl p-4 hover:border-[#4A0E0E]/30 transition-all"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            {iconMap[h.icon]}
                                            <span className="text-white font-semibold text-sm">
                                                {h.title}
                                            </span>
                                        </div>

                                        <p className="text-[#8E8E93] text-xs leading-relaxed break-words">
                                            {h.detail}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Security */}
                    {project.security?.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-1 h-5 bg-[#4A0E0E] rounded-full inline-block" />
                                Security Features
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {project.security.map((f, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium rounded-lg"
                                    >
                                        {f}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-1 h-5 bg-[#4A0E0E] rounded-full inline-block" />
                            Tech Stack
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1.5 bg-gray-800 text-gray-300 text-xs font-medium rounded-lg border border-white/5"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}