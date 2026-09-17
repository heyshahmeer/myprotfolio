"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaInstagram
} from "react-icons/fa";
import { SiFiverr, SiUpwork, SiX } from "react-icons/si";

export default function ContactSection({ id }) {
    return (
        <div id={id} className="min-h-screen bg-transparent text-[#D1D1D1] font-sans overflow-hidden py-16">
            {/* CONTACT SECTION */}
            <div className="flex flex-col md:flex-row min-h-screen">
                {/* LEFT VECTOR PANEL */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 flex items-center justify-center py-12 md:py-0"
                >
                    <Image
                        src="/first.svg"
                        alt="Cyber Frame"
                        width={600}
                        height={600}
                        className="opacity-70 hover:opacity-100 transition duration-700 w-3/4 md:w-full max-w-[600px]"
                        priority
                    />
                </motion.div>

                {/* RIGHT CONTACT INFO */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 bg-transparent p-8 md:p-16 flex flex-col justify-center"
                >
                    <div className="max-w-md mx-auto md:mx-0 space-y-10">
                        {/* HEADER */}
                        <motion.header
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl sm:text-7xl font-extrabold mb-3 tracking-tight text-[#D1D1D1]">
                                Contact Me
                            </h2>
                            <div className="w-24 border-b-4 border-[#4A0E0E] mb-10"></div>
                        </motion.header>

                        {/* DESCRIPTION */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-[#8E8E93] leading-relaxed"
                        >
                            Open for freelance projects and collaborations in <b>AI automation</b>,{" "}
                            <b>full-stack development</b>, and <b>workflow systems</b>.
                            Let's build something that actually works.
                        </motion.p>

                        {/* CONTACT LIST */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="space-y-5 text-gray-300"
                        >





                            {/* GITHUB */}
                            <a
                                href="https://github.com/heyshahmeer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 hover:opacity-80 transition"
                            >
                                <FaGithub className="text-gray-200" />
                                <span className="bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent font-semibold">
                                    GitHub
                                </span>
                            </a>

                            {/* LINKEDIN */}
                            <a
                                href="https://linkedin.com/in/shahmeershahid"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 hover:opacity-80 transition"
                            >
                                <FaLinkedin className="text-[#0A66C2]" />
                                <span className="bg-gradient-to-r from-[#0A66C2] to-[#0077B5] bg-clip-text text-transparent font-semibold">
                                    LinkedIn
                                </span>
                            </a>

                            {/* X (formerly Twitter) */}
                            <a
                                href="https://x.com/heyshahmeer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 hover:opacity-80 transition"
                            >
                                <SiX className="text-white bg-black rounded-sm p-0.5" />
                                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-semibold">
                                    Twitter
                                </span>
                            </a>

                            {/* INSTAGRAM */}
                            <a
                                href="https://instagram.com/heyshahmeer_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 hover:opacity-80 transition"
                            >
                                <FaInstagram className="text-[#E4405F]" />
                                <span className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] bg-clip-text text-transparent font-semibold">
                                    Instagram
                                </span>
                            </a>


                            {/* FIVERR */}
                            <a
                                href="https://www.fiverr.com/sellers/theshahmeer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 hover:opacity-80 transition"
                            >
                                <SiFiverr className="text-[#1DBF73]" />
                                <span className="bg-gradient-to-r from-[#1DBF73] to-[#0ACF83] bg-clip-text text-transparent font-semibold">
                                    Fiverr
                                </span>
                            </a>

                            {/* UPWORK */}
                            <a
                                href="https://www.upwork.com/freelancers/~01cf0ddf9b8b985b15"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 hover:opacity-80 transition"
                            >
                                <SiUpwork className="text-[#6FDA44]" />
                                <span className="bg-gradient-to-r from-[#6FDA44] to-[#2BB673] bg-clip-text text-transparent font-semibold">
                                    Upwork
                                </span>
                            </a>

                            {/* LOCATION */}
                            <div className="flex items-center space-x-3">
                                <FaMapMarkerAlt className="text-[#8E8E93]" />
                                <span className="text-[#8E8E93]">Islamabad, Pakistan</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* THANK YOU SECTION */}
            <div className="flex flex-col md:flex-row min-h-screen">
                {/* TEXT SECTION */}
                <div className="w-full md:w-1/2 bg-transparent p-8 md:p-16 flex flex-col justify-center order-2 md:order-1">
                    <motion.div
                        className="max-w-xl mx-auto md:mx-0"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl sm:text-7xl font-extrabold mb-3 tracking-tight text-[#D1D1D1]">
                            Thank You
                        </h2>
                        <div className="w-24 border-b-4 border-[#4A0E0E] mb-10"></div>
                        <p className="text-[#8E8E93] leading-relaxed mb-6">
                            I appreciate you taking the time to explore my work. If you're
                            looking for someone who builds practical AI automation and solid
                            full-stack apps, let's talk.
                        </p>
                        <p className="text-[#8E8E93] leading-relaxed">
                            Let's connect and build something real, one project at a time.
                        </p>
                    </motion.div>
                </div>

                {/* RIGHT VECTOR PANEL */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 flex items-center justify-center py-12 md:py-0 order-1 md:order-2"
                >
                    <Image
                        src="/second.svg"
                        alt="Cyber Frame 2"
                        width={600}
                        height={600}
                        className="opacity-70 hover:opacity-100 transition duration-700 w-3/4 md:w-full max-w-[600px]"
                        priority
                    />
                </motion.div>
            </div>
        </div>
    );
}