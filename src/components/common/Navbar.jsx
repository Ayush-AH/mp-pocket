import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { IoAdd } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const sectionRef = useRef();
  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        edn: "top -5%",
        // markers: true,
        scrub: 0.01,
      },
    });
    tl.to(sectionRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.2,
    });
  }, []);

  return (
    <nav ref={sectionRef} className="py-4 px-28 fixed top-0 w-full z-10">
      <div className="p-2 px-3 rounded-full flex items-center justify-between bg-[#F5F9FF]">
        <div id="left-nav" className="flex gap-8 items-center">
          <Image
            className="max-w-26 pl-2"
            width={1000}
            height={1000}
            src={"https://www.mpokket.in/logo.svg"}
            alt="logo"
          />
          <Link className="flex items-center gap-2" href="/">
            Loans <IoAdd className="text-sm text-blue-600" />
          </Link>
          <Link className="flex items-center gap-2" href="/">
            Company <IoAdd className="text-sm text-blue-600" />
          </Link>
          <Link className="flex items-center gap-2" href="/">
            Learn <MdArrowOutward className="text-sm text-blue-600" />
          </Link>
        </div>
        <div id="right-nav">
          <button
            type="button"
            class="relative overflow-hidden group py-3.25 px-6.5 min-h-12.5 rounded-full bg-[#ea9300] w-37.5 cursor-pointer"
          >
            <p class="relative z-10 text-white font-aktiv text-[16px] font-semibold">
              Get Loan
            </p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
