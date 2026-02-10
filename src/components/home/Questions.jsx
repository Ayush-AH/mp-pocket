import React from "react";
import { IoMdAdd } from "react-icons/io";

const Questions = () => {
  return (
    <div className="w-full h-screen px-52 flex flex-col items-center justify-center gap-16">
      <h2 className="text-5xl font-semibold">Frequently asked questions</h2>
      <div className="flex flex-col gap-4 w-full ">
        <div id="accordion" className="w-full bg-[#F5F7FB] px-6 rounded-xl ">
          <div
            id="accordion-title"
            className="w-full flex py-8  items-center justify-between "
          >
            <div class="text-base md:text-[18px] font-semibold text-darkGrey">
              How can I start borrowing money using mPokket?
            </div>
            <IoMdAdd className="text-xl text-blue-600" />
          </div>
          {/* <div>
           <p className="pb-8">
            You can start borrowing money on mPokket in a few simple steps. Sign
            up with your mobile number, complete your KYC online using your PAN
            and Aadhar, and submit your proof of employment and proof of income.
            You can start borrowing as soon as your profile gets approved.
            Download the mPokket app or click on "Get Loan" to get started!
          </p>
         </div> */}
        </div>
        <div id="accordion" className="w-full bg-[#F5F7FB] px-6 rounded-xl ">
          <div
            id="accordion-title"
            className="w-full flex py-8  items-center justify-between "
          >
            <div class="text-base md:text-[18px] font-semibold text-darkGrey">
              Will I get money in cash when I borrow from mPokket?
            </div>
            <IoMdAdd className="text-xl text-blue-600" />
          </div>
          {/* <div>
           <p className="pb-8">
            You can start borrowing money on mPokket in a few simple steps. Sign
            up with your mobile number, complete your KYC online using your PAN
            and Aadhar, and submit your proof of employment and proof of income.
            You can start borrowing as soon as your profile gets approved.
            Download the mPokket app or click on "Get Loan" to get started!
          </p>
         </div> */}
        </div>
        <div id="accordion" className="w-full bg-[#F5F7FB] px-6 rounded-xl ">
          <div
            id="accordion-title"
            className="w-full flex py-8  items-center justify-between "
          >
            <div class="text-base md:text-[18px] font-semibold text-darkGrey">
              Do I need to have a credit history and credit score to be able to
              borrow on mPokket?
            </div>
            <IoMdAdd className="text-xl text-blue-600" />
          </div>
          {/* <div>
           <p className="pb-8">
            You can start borrowing money on mPokket in a few simple steps. Sign
            up with your mobile number, complete your KYC online using your PAN
            and Aadhar, and submit your proof of employment and proof of income.
            You can start borrowing as soon as your profile gets approved.
            Download the mPokket app or click on "Get Loan" to get started!
          </p>
         </div> */}
        </div>
        <div id="accordion" className="w-full bg-[#F5F7FB] px-6 rounded-xl ">
          <div
            id="accordion-title"
            className="w-full flex py-8  items-center justify-between "
          >
            <div class="text-base md:text-[18px] font-semibold text-darkGrey">
              How often can I borrow on mPokket?
            </div>
            <IoMdAdd className="text-xl text-blue-600" />
          </div>
          {/* <div>
           <p className="pb-8">
            You can start borrowing money on mPokket in a few simple steps. Sign
            up with your mobile number, complete your KYC online using your PAN
            and Aadhar, and submit your proof of employment and proof of income.
            You can start borrowing as soon as your profile gets approved.
            Download the mPokket app or click on "Get Loan" to get started!
          </p>
         </div> */}
        </div>
        <div id="accordion" className="w-full bg-[#F5F7FB] px-6 rounded-xl ">
          <div
            id="accordion-title"
            className="w-full flex py-8  items-center justify-between "
          >
            <div class="text-base md:text-[18px] font-semibold text-darkGrey">
              How can I return or repay a loan on mPokket?
            </div>
            <IoMdAdd className="text-xl text-blue-600" />
          </div>
          {/* <div>
           <p className="pb-8">
            You can start borrowing money on mPokket in a few simple steps. Sign
            up with your mobile number, complete your KYC online using your PAN
            and Aadhar, and submit your proof of employment and proof of income.
            You can start borrowing as soon as your profile gets approved.
            Download the mPokket app or click on "Get Loan" to get started!
          </p>
         </div> */}
        </div>
      </div>
    </div>
  );
};

export default Questions;
