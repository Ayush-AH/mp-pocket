import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef();
  const bannerRef = useRef();
  const bannerRef2 = useRef();
  const bannerRef3 = useRef();
  const textRef1 = useRef();
  const textRef2 = useRef();
  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        edn: "top -600%",
        // markers: true,
        scrub: 1,
        pin: true,
      },
    });

    tl.to(
      textRef1.current,
      {
        y: -220,
        opacity: 0,
        duration: 0.2,
      },
      "a",
    )
      .to(
        textRef2.current,
        {
          y: 180,
          opacity: 0,
          duration: 0.2,
        },
        "a",
      )
      .to(
        bannerRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          delay: 0.01,
        },
        "a",
      )
      .from(bannerRef.current.querySelectorAll(".points"), {
        opacity: 0,
        top: "100%",
        duration: 0.3,
      })

      .to(bannerRef2.current, {
        top: "0%",
        duration:1,
      })
       .to(bannerRef3.current, {
        top: "0%",
        duration:1,
      });
  }, []);

  return (
    <div
      id="hero-section"
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h2 ref={textRef1} className="text-[5.2rem] leading-none font-semibold">
          <span className="text-[#002D6D]">easy</span>{" "}
          <span className="text-[#A0C0ED]">loans</span>
        </h2>
        <h2 ref={textRef2} className="text-[5.2rem] leading-none font-semibold">
          <span className="text-[#A0C0ED]">anytime</span>{" "}
          <span className="text-[#002D6D]">anywhere</span>
        </h2>
      </div>
      <div
        ref={bannerRef}
        className="absolute scale-0 opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full p-18"
      >
        <div className="relative  rounded-2xl w-full h-full overflow-hidden">
          <Image
            width={1000}
            height={1000}
            src={"/images/image1.webp"}
            alt="banner"
            className="w-full h-full"
          />
          <Image
            width={1000}
            height={1000}
            src={"/images/image2.webp"}
            alt="banner"
            className="w-136 left-1/2 -translate-x-1/2 absolute bottom-0"
          />
          <div className="points absolute z-20 bg-blue-600 top-[42%] left-[7%] text-white font-semibold px-6 py-3 rounded-full">
            Loans upto ₹2,00,000*
          </div>
          <div className="points absolute z-20 bg-blue-600 top-[5%] left-[21%] text-white font-semibold px-6 py-3 rounded-full">
            Flexible repayment
          </div>
          <div className="points absolute z-20 bg-blue-600 top-[14%] right-[26%] text-white font-semibold px-6 py-3 rounded-full">
            100% Online
          </div>
          <div className="points absolute z-20 bg-blue-600 top-[38%] right-[8%] text-white font-semibold px-6 py-3 rounded-full">
            Approval in 7 mins*
          </div>
        </div>
      </div>
      <div
        ref={bannerRef2}
        className="w-full h-full absolute top-full left-0 bg-[#002D6D] p-18 py-32 flex"
      >
        <div className="w-[40%] h-full flex flex-col justify-between">
          <h2 class="text-[36px] md:text-[54px] font-semibold text-white xl:text-[clamp(44px,3.9vw,64px)]! leading-[1.2]">
            from sign-up to payout in
            <span class="relative inline-block text-white px-2 py-0.5 text-[36px] md:text-[54px]">
              <svg
                class="absolute inset-0 w-full h-full -rotate-10 z-0 pointer-events-none"
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
              <span class="relative z-10">minutes</span>
            </span>
          </h2>
          <div className="flex flex-col gap-4">
            <div className="text-white">
              <h4 className="text-4xl font-semibold">Register</h4>
              <p className="w-[80%] mt-3 text-base">
                Provide bank account details, select the loan amount and tenure,
                and get the loan within a few minutes.
              </p>
            </div>
            <div className="text-white">
              <h4 className="text-4xl font-semibold">Complete Profile</h4>
              {/* <p className="w-[80%] mt-3 text-base">Provide bank account details, select the loan amount and tenure, and get the loan within a few minutes.</p> */}
            </div>
            <div className="text-white">
              <h4 className="text-4xl font-semibold">Get Loan</h4>
              {/* <p className="w-[80%] mt-3 text-base">Provide bank account details, select the loan amount and tenure, and get the loan within a few minutes.</p> */}
            </div>
          </div>
        </div>
        <div className="w-[60%] h-full flex items-center justify-center">
          <div className="h-full relative w-auto">
            <Image
              width={1000}
              height={1000}
              src="/images/banner-hero.png"
              alt="banner"
              className="h-full w-auto"
            />
            <div className="absolute w-52 top-[10%] right-[-25%] bg-white rounded-xl overflow-hidden">
              <p className="px-6 py-2 text-lg bg-red-400 text-white">
                Receive Money
              </p>
              <h3 className="px-6 py-4 text-5xl font-bold">5000</h3>
            </div>
            <div className="absolute w-52 bottom-[10%] left-[-25%] bg-white rounded-xl overflow-hidden">
              <p className="px-6 py-2 text-lg bg-[#ea9300] text-white">
                Receive Money
              </p>
              <h3 className="px-6 py-4 text-5xl font-bold">5000</h3>
            </div>
          </div>
        </div>
      </div>
      <div ref={bannerRef3} className="w-full h-full absolute z-40 left-0 top-full">
        <Image
          width={1000}
          height={1000}
          src={"https://www.mpokket.in/videos/desktop/Final_1000.webp"}
          alt="banner"
          className="w-full h-full object-cover"
        />
        <div className="w-full h-full absolute top-0 left-0 px-32">
          <div className="w-full">
            <div className="w-full flex items-center justify-between text-white">
              <h3 className="text-4xl font-bold">Swiftly Glide Through</h3>
              <h3 className="text-4xl font-bold">Our Eligibility Criteria</h3>
            </div>
            <div className="w-full flex items-center mt-32 justify-between text-white">
              <h3 className="text-4xl font-semibold">Age: 18+ Year</h3>
              <h3 className="text-4xl font-semibold">Nationality: India</h3>
              <h3 className="text-4xl font-semibold">KYC Documents</h3>
              <h3 className="text-4xl font-semibold">Proof of Income</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
