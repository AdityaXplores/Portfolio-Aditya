import { Fragment } from "react";
import Image from "next/image";

// Icons
import openai from "@/assets/icons/openai.png";
import html from "@/assets/icons/html.png";
import css from "@/assets/icons/css.png";
import javascript from "@/assets/icons/javascript.png";
import typescript from "@/assets/icons/typescript.png";
import react from "@/assets/icons/react.png";
import nextjs from "@/assets/icons/nextjs.png";
import redux from "@/assets/icons/redux.png";
import nodejs from "@/assets/icons/nodejs.png";
import express from "@/assets/icons/express (2).png";
import mysql from "@/assets/icons/mysql.png";
import mongodb from "@/assets/icons/mongodb.png";
import gsap from "@/assets/icons/gsap.png";
import framer from "@/assets/icons/framer.png";
import figma from "@/assets/icons/figma.png";
import tailwindcss from "@/assets/icons/tailwindcss.png";
import git from "@/assets/icons/git.png";
import githubIcon from "@/assets/icons/github.png";
import java from "@/assets/icons/java.png";
import cpp from "@/assets/icons/c++.png";
import python from "@/assets/icons/python.png";
import appwrite from "@/assets/icons/appwrite.png";
//import firebase from "@/assets/icons/firebase.png";
import postman from "@/assets/icons/postman.png";
import vscode from "@/assets/icons/vscode (2).png";
import vercel from "@/assets/icons/vercel.png";

const techStack = [
  // 💻 Frontend
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React.js", icon: react },
  { name: "Next.js", icon: nextjs },
  { name: "Redux", icon: redux },
  { name: "Tailwind CSS", icon: tailwindcss },

  // 🔧 Backend & APIs
  { name: "Node.js", icon: nodejs },
  { name: "Express.js", icon: express },
  { name: "Appwrite", icon: appwrite },
  //{ name: "Firebase", icon: firebase },
  { name: "OpenAI", icon: openai },

  // 🗄️ Databases
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },

  // 🧰 DevTools
  { name: "GIT", icon: git },
  { name: "Github", icon: githubIcon, link: "https://github.com/AdityaXplores" },
  { name: "Postman", icon: postman },
  { name: "VS Code", icon: vscode },
  { name: "Vercel", icon: vercel },

  // 🔤 Programming Languages
  { name: "Java", icon: java },
  { name: "C++", icon: cpp },
  { name: "Python", icon: python },

  // 🎨 UI & Animation
  { name: "Figma", icon: figma },
  { name: "GSAP", icon: gsap },
  { name: "Framer Motion", icon: framer },
];

export const TechSection = () => {
  return (
    <div className="mt-20 sm:mt-10">
      <h1 className="font-host-grotesk font-semibold text-3xl md:text-5xl text-center">
        My TechStack
      </h1>
      <div className="py-16 lg:py-24 overflow-x-clip">
        <div className="border-t-[1px] py-10 border-b-[1px] border-white/30 -mx-1">
          <div className="flex">
            <div className="flex flex-none gap-4 pr-4 py-3 animate-[move-left_30s_linear_infinite]">
              {[...new Array(2)].fill(0).map((_, index) => (
                <Fragment key={index}>
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="inline-flex bg-gray-900 rounded-full px-4 py-2 items-center gap-4"
                    >
                      {tech.link ? (
                        <a
                          href={tech.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            className="w-8 h-8 object-contain"
                            width={32}
                            height={32}
                            loading="lazy"
                          />
                        </a>
                      ) : (
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          className="w-8 h-8 object-contain"
                          width={32}
                          height={32}
                          loading="lazy"
                        />
                      )}
                      <span className="text-gray-300 font-host-grotesk font-medium tracking-widest">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
