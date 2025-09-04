"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CC from "@/assets/images/CC.png";
import CF from "@/assets/images/CF.png";
import LC from "@/assets/images/LC.png";

export function Profiles() {
  const cpProfiles = [
    {
      platform: "Codeforces",
      desc: "Rated Pupil, practicing contests (Div. 1) regularly to strengthen problem-solving and analytical skills.",
      img: CF,
      link: "https://codeforces.com/profile/_Lahane_Aditya_",
    },
    {
      platform: "LeetCode",
      desc: "Solved 650+ problems, learning from contests while aiming for higher consistency and growth.",
      img: LC,
      link: "https://leetcode.com/u/_Ashish_Lahane_/",
    },
    {
      platform: "CodeChef",
      desc: "4★ coder with 1840+ rating, actively participating in long and cook-off contests.",
      img: CC,
      link: "https://www.codechef.com/users/adityalahane65",
    },
  ];

  return (
    <section id="cp" className="cp-section py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-purple-400 tracking-wide uppercase">
          Competitive Programming
        </p>
        <h2 className="text-4xl font-bold mb-2 text-white">
          My CP Journey
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Tracking progress across platforms with consistency & problem-solving skills.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {cpProfiles.map((cp, i) => (
          <motion.a
            key={i}
            href={cp.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="cp-card rounded-2xl bg-gray-900 p-6 shadow-lg hover:shadow-purple-500/30 transition"
          >
            <Image
              src={cp.img}
              alt={cp.platform}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold text-white">{cp.platform}</h3>
            <p className="text-gray-400 text-sm mt-2">{cp.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
