import { TextAnimate } from "@/components/magicui/text-animate";

export const AboutSection = () => {
  return (
    <>
      <section className="py-16" id="about">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
              Explore More
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
            About Me
          </h2>
          <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4">
            Know more about who I am, my skills, and what inspires me.
          </p>

          <div className="max-w-6xl mt-16 sm:mt-10 text-center">
            <div className="leading-10 font-light font-host-grotesk lg:text-2xl sm:text-lg md:text-xl tracking-wide">
              <TextAnimate animation="blurInUp" by="word" duration={3}>
                I&apos;m Aditya Lahane, a Software Developer who loves
                crafting seamless and responsive user experiences. I turn ideas
                into interactive and accessible interfaces. I enjoy building
                clean, maintainable code and constantly exploring the latest in
                web technologies. Whether it&apos;s optimizing performance or
                designing pixel-perfect layouts — I&apos;m all about delivering
                value through the web.
              </TextAnimate>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-all duration-300"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
