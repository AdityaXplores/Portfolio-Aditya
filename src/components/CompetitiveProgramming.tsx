import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";

// Import profile screenshots/logos
import CodeforcesImg from "@/assets/images/CF.png";
import CodeChefImg from "@/assets/images/CC.png";
import LeetCodeImg from "@/assets/images/LC.png";

const cpProfiles = [
  {
    platform: "LeetCode",
    year: "Competitive Programming",
    title: "LeetCode Profile",
    results: [
      { title: "600+ Problems Solved" },
      { title: "Rating: 1800+ (Knight)" },
      { title: "Consistent streaks in contests" },
    ],
    link: "https://leetcode.com/your_username",
    image: LeetCodeImg,
  },
  {
    platform: "Codeforces",
    year: "Competitive Programming",
    title: "Codeforces Profile",
    results: [
      { title: "Max Rating: 1450 (Specialist)" },
      { title: "300+ Problems Solved" },
      { title: "Active in Div. 2 contests" },
    ],
    link: "https://codeforces.com/profile/your_username",
    image: CodeforcesImg,
  },
  {
    platform: "CodeChef",
    year: "Competitive Programming",
    title: "CodeChef Profile",
    results: [
      { title: "Max Rating: 1800 (4★)" },
      { title: "250+ Problems Solved" },
      { title: "Monthly contests participation" },
    ],
    link: "https://www.codechef.com/users/your_username",
    image: CodeChefImg,
  },
];

export const CompetitiveProgramming = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-300 to-pink-400 text-transparent bg-clip-text text-center">
            Competitive Programming
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          My CP Profiles
        </h2>
        <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4">
          Tracking my growth across different platforms.
        </p>

        {/* Overlapping sticky cards */}
        <div className="relative mt-10 md:mt-20">
          {cpProfiles.map((profile, index) => (
            <div
              key={`${profile.title}-${profile.platform}`}
              style={{ top: `calc(64px + ${index * 40}px)` }}
              className="bg-gray-800 rounded-3xl z-0 after:z-10 overflow-hidden 
              after:content-[''] after:absolute after:inset-0 after:outline-2 
              after:outline after:-outline-offset-2 after:rounded-3xl after:pointer-events-none 
              after:outline-white/20 md:pt-12 md:px-10 px-8 pt-8 lg:pt-16 lg:px-20 
              sticky"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${GrainImage.src})` }}
              ></div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Left side (details) */}
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-purple-300 to-pink-400 inline-flex font-bold uppercase tracking-widest gap-2 text-[12px] text-transparent bg-clip-text">
                    <span>{profile.platform}</span>
                    <span>—</span>
                    <span>{profile.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {profile.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-2 mt-4 md:mt-5">
                    {profile.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  {profile.link && (
                    <a href={profile.link} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl inline-flex items-center justify-center gap-2 md:w-auto px-6 font-semibold mt-8">
                        <span>Visit Profile</span>
                        <ArrowUpRightIcon className="size-5 ml-2" />
                      </button>
                    </a>
                  )}
                </div>

                {/* Right side (image) */}
                <div className="relative">
                  <Image
                    src={profile.image}
                    alt={profile.title}
                    className="mt-8 rounded-3xl border-2 border-white/50 
                    top-3 -mb-4 md:-mb-0 lg:mt-0 lg:h-full lg:w-auto 
                    lg:max-w-none lg:absolute"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
