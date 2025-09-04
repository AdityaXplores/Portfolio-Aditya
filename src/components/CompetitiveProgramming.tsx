import Image from "next/image";
import ProfilePic from "@/assets/images/CF.png"; // Codeforces profile image
import RatingGraph from "@/assets/images/CC.png"; // CodeChef rating graph
import LeetCodePic from "@/assets/images/LC.png"; // <-- add your LeetCode profile image

export const CompetitiveProgramming = () => {
  return (
    <section className="pb-16 lg:py-24 bg-gray-900">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-300 to-pink-400 text-transparent bg-clip-text text-center">
            Competitive Programming
          </p>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          My CP Journey
        </h2>
        <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4">
          Tracking progress across platforms with consistency & problem-solving skills.
        </p>

        {/* Grid for images */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <Image
              src={ProfilePic}
              alt="Codeforces Profile"
              className="rounded-3xl border-2 border-white/20 shadow-lg max-w-xs"
            />
          </div>

          {/* Rating Graph */}
          <div className="flex justify-center">
            <Image
              src={RatingGraph}
              alt="CodeChef Rating Graph"
              className="rounded-3xl border-2 border-white/20 shadow-lg max-w-md"
            />
          </div>

          {/* LeetCode Profile */}
          <div className="flex justify-center">
            <Image
              src={LeetCodePic}
              alt="LeetCode Profile"
              className="rounded-3xl border-2 border-white/20 shadow-lg max-w-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
