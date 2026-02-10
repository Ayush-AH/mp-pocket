import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef();
  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        end: "top 0%",
        // markers: true,
        scrub: 0.01,
      },
    });

    tl.fromTo(
      sectionRef.current.querySelectorAll("#map-section"),
      {
        opacity: 0,
        y: 300,
      },
      {
        opacity: 1,
        y: 0,
        stagger: {
          amount: 0.2,
        },
      },
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full px-52 py-40 flex flex-col items-center bg-[#002D6D] justify-center gap-32"
    >
      <h2 className="text-[36px] md:text-[54px] font-semibold leading-[120%] text-white/90 text-center w-fit mx-auto">
        <span className="hfyHeading inline-block pr-2">Transparent.</span>
        <span className="hfyHeading inline-block pr-2">
          <span className="relative inline-block text-white px-2 py-0.5 text-[36px] md:text-[54px]">
            <svg
              className="absolute inset-0 w-full h-full -rotate-10 z-0 pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <ellipse
                cx="50"
                cy="50"
                rx="48"
                ry="40"
                stroke="#FFC86B"
                stroke-width="2"
                fill="none"
                stroke-dasharray="300"
                stroke-dashoffset="0"
              ></ellipse>
            </svg>
            <span className="relative z-10 text-white/90">Reliable.</span>
          </span>
        </span>
        <span className="hfyHeading inline-block">Here for You.</span>
      </h2>

      <div
        id="map-section"
        className="hidden lg:flex flex-col lg:flex-row justify-center items-center lg:gap-y-15 gap-y-5 w-full container max-h-[80vh] p-0!"
      >
        <div className="lg:max-w-[40%] order-1 lg:order-0  ml-[unset] lg:pr-25 w-full">
          <div className="hidden lg:block">
            <div className="mb-10">
              <h4 className="text-[24px] md:text-[36px] font-semibold leading-[140%] text-white">
                {" "}
                50M+
              </h4>
              <div className="text-[12px] text-white md:text-[14px] font-normal dangerousHTMLCSS">
                <p>
                  <span>Users</span>
                </p>
              </div>
              <div className="h-px w-75 mt-5 bg-blue-700"></div>
            </div>
            <div className="mb-10">
              <h4 className="text-[24px] md:text-[36px] font-semibold leading-[140%] text-white">
                4.6+ Google
              </h4>
              <div className="text-[12px] text-white md:text-[14px] font-normal dangerousHTMLCSS">
                <p>
                  <span>
                    <span>Ratings </span>
                  </span>
                </p>
              </div>
              <div className="h-px w-75 mt-5 bg-blue-700"></div>
            </div>
            <div className="mb-10">
              <h4 className="text-[24px] md:text-[36px] font-semibold leading-[140%] text-white">
                65M+
              </h4>
              <div className="text-[12px] text-white md:text-[14px] font-normal dangerousHTMLCSS">
                <p>
                  <span>
                    <span>App Downloads</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto lg:mx-[unset] w-fit">
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.mpokket.app&amp;pcampaignid=web_share"
            >
              <button
                type="button"
                className="relative overflow-hidden group w-fit py-3.25 px-6.5 min-h-12.5 rounded-full bg-blue-600"
              >
                <p className="relative z-10 text-white font-aktiv text-[16px] font-semibold">
                  Download App
                </p>
              </button>
            </a>
          </div>
        </div>
        <div className="w-[60%] order-0 flex items-center justify-center lg:order-1 max-h-[80vh] svgLottieContainer ">
          <Image
            width={1000}
            height={1000}
            src={"/images/map.png"}
            alt="banner"
            className="w-[80%] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
