import React from "react";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-28 pb-14 flex justify-between">
      <div
        id="footer-left "
        className="flex flex-col h-full gap-80 justify-between"
      >
        <div>
          <Image
            className="max-w-42"
            width={1000}
            height={1000}
            src={"https://www.mpokket.in/logo.svg"}
            alt="logo"
          />
          <span className="text-sm mt-2 inline-block">
            CIN: U65999WB2019PTC233120
          </span>
          <div className="flex items-center gap-4 text-2xl opacity-70 mt-8">
            <FaFacebook />
            <AiFillTwitterCircle />
            <FaInstagram />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Image
              className="max-w-20 pl-2"
              width={1000}
              height={1000}
              src={"https://www.mpokket.in/mia.png"}
              alt="logo"
            />
            <span className="font-semibold text-black/80">for India</span>
          </div>
          <p>© 2025 mPokket v1.0.0 All rights reserved</p>
        </div>
      </div>
      <div id="footer-right" className="flex flex-col justify-between">
        <div className="flex justify-between gap-20">
          <div className="flex flex-col">
            <span className="text-sm inline-block mb-4 text-blue-600 font-semibold">
              Loans
            </span>
            <div className="flex flex-col gap-1.5 text-[1rem]">
              <a href="">Freshers/Interns</a>
              <a href="">Working Professionals</a>
              <a href="">Self Employed</a>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm inline-block mb-4 text-blue-600 font-semibold">
              Company
            </span>

            <div className="flex gap-10">
              <div className="flex flex-col gap-1.5 text-[1rem]">
                <a href="">About</a>
                <a href="">LSP & DLA</a>
                <a href="">Blogs</a>
                <a href="">Career</a>
                <a href="">Contact</a>
              </div>
              <div className="flex flex-col gap-1.5 text-[1rem]">
                <a href="">Digital Lending</a>
                <a href="">Disclosures</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm inline-block mb-4 text-blue-600 font-semibold">
              Legal
            </span>
            <div className="flex gap-10">
              <div className="flex flex-col gap-1.5 text-[1rem]">
                <a href="">Terms & Conditions</a>
                <a href="">Privacy & Data Storage Policy</a>
                <a href="">Data Deletion Policy</a>
                <a href="">Interest Rate Policy</a>
                <a href="">Grievance Redressal Policy</a>
              </div>
              <div className="flex flex-col gap-1.5 text-[1rem]">
                <a href="">Ombudsman Scheme</a>
                <a href="">CSR Policy</a>
                <a href="">Other Policies</a>
                <a href="">Services Charges</a>
                <a href="">Disclaimer</a>
                <a href="">Code of Conduct</a>
                <a href="">Fair Practice Code</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="text-sm inline-block mb-4 text-blue-600 font-semibold">
            Explore by City
          </span>
          <div className="flex gap-3 text-[1rem]">
            <a href="">Mumbai</a> |<a href="">Delhi</a> |
            <a href="">Bangalore</a> |<a href="">Hyderabad</a> |
            <a href="">Chennai</a> |<a href="">Pondicherry</a> |
            <a href="">Jodhpur</a> |<a href="">Agra</a>
          </div>
        </div>
        <div>
          <span className="text-sm inline-block mb-4 text-blue-600 font-semibold">
            Loans by Ticket Size
          </span>
          <div className="flex gap-3 text-[1rem]">
            <a href="">₹ 1000 Personal loan</a> |
            <a href="">₹ 2000 Personal loan</a> |
            <a href="">₹ 5000 Personal loan</a> |
            <a href="">₹ 10000 Personal loan</a> |
            <a href="">₹ 30000 Personal loan</a>
          </div>
        </div>
        <div>
          <span className="text-sm inline-block mb-4 text-blue-600 font-semibold">
            Other Loans
          </span>
          <div className="flex gap-3 text-[1rem]">
            <a href="">Loans for Business</a> |
            <a href="">Instant Flexi Personal Loan</a> |
            <a href="">Personal Loan for women</a> |
            <a href="">Loans for Housewife</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
