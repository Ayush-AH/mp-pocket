import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const sectionRef = useRef();
  const bannerRef = useRef();
  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "top 10%",
        // markers: true,
        scrub: 0.01,
      },
    });

    tl.fromTo(
      bannerRef.current,
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
      className="w-full h-screen px-28 flex items-center justify-center"
    >
      <div
        ref={bannerRef}
        className="relative overflow-hidden w-full rounded-2xl"
      >
        <Image
          className="w-full h-auto"
          width={1000}
          height={1000}
          src={
            "https://cdn.mpokket.in/Download_app_image_w_line_24fe18fae1.png"
          }
          alt="banner"
        />
        <div className="absolute left-0 top-0 p-16 w-full h-full pt-24 flex flex-col justify-center gap-12">
          <h2 className="text-[2.6rem] font-medium leading-normal text-white">
            Use the mPokket app to get <br /> instant personal loans!
          </h2>

          <Image
            width={1000}
            height={1000}
            src={"https://cdn.mpokket.in/icon_googleplay_22c10d4d47.png"}
            alt="banner"
            className="w-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
