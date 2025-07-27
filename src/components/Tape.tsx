import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const qualities = [
  "Full Stack Developer",
  "UI/UX Focused",
  "Creative",
  "Detail-Oriented",
  "Team Player",
  "Fast Learner",
  "Problem Solver",
  "Optimized Code",
  "Tailwind Expert",
  "Responsive Design",
  "API Integration",
  "Clean Architecture",
  "Reliable",
  "Communicative",
  "Curious",
  "Passionate",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {qualities.map((quality) => (
                  <div key={quality} className="inline-flex items-center gap-4">
                    <span className="text-gray-900 uppercase font-extrabold whitespace-nowrap">
                      {quality}
                    </span>
                    <StarIcon className="size-6 animate-spin [animation-duration:5s] text-gray-900" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
