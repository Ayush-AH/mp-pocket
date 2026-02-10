import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
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
      sectionRef.current.querySelectorAll(".staggerBlog"),
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
      className="w-full h-screen px-28 flex flex-col items-center justify-center gap-16"
    >
      <h2 className="text-5xl font-semibold">Featured Blogs</h2>
      <div className="grid grid-cols-4 w-full gap-3">
        <div class="staggerBlog w-full grid content-between h-95 pt-10 pb-7.5 px-6 rounded-2xl bg-[#f5f7fb]">
          <div class="text-[20px] md:text-[28px] font-medium leading-[150%] lg:leading-[140%] capitalize text-blue-600">
            5 Tips to Repay Loans on Time
          </div>
          <div class="flex gap-x-1.5 items-center">
            <p class="text-[14px] md:text-[18px] font-normal text-darkGrey">
              5 min read
            </p>
            <div class="w-1 h-1 rounded-[50%] bg-black"></div>
            <p class="text-[14px] md:text-[18px] font-normal text-darkGrey">
              31 March 2025
            </p>
          </div>
        </div>
        <div class="staggerBlog w-full grid content-between h-95 pt-10 pb-7.5 px-6 rounded-2xl bg-[#FFEFEF]">
          <div class="text-[20px] md:text-[28px] font-medium leading-[150%] lg:leading-[140%] capitalize text-red-600">
            5 Reasons Why you Should Consider a Travel Loan
          </div>
          <div class="flex gap-x-1.5 items-center">
            <p class="text-[14px] md:text-[18px] font-normal text-darkGrey">
              1 min read
            </p>
            <div class="w-1 h-1 rounded-[50%] bg-black"></div>
            <p class="text-[14px] md:text-[18px] font-normal text-darkGrey">
              6 August 2024
            </p>
          </div>
        </div>
        <div class="staggerBlog w-full grid content-between h-95 pt-10 pb-7.5 px-6 rounded-2xl bg-[#f5f7fb]">
          <div class="text-[20px] md:text-[28px] font-medium leading-[150%] lg:leading-[140%] capitalize text-[#07897E]">
            5 Things You Should Know About How Personal Loans Apps Work
          </div>
          <div class="flex gap-x-1.5 items-center">
            <p class="text-[14px] md:text-[18px] font-normal text-darkGrey">
              5 min read
            </p>
            <div class="w-1 h-1 rounded-[50%] bg-black"></div>
            <p class="text-[14px] md:text-[18px] font-normal text-darkGrey">
              31 March 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
