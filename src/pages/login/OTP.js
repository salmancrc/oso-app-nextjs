'use client'
import Logo from '@/components/common/Logo'
import React, { useState, useRef } from 'react'

const OTP = () => {

  const [otp, setOtp] = useState(Array(6).fill(""));
  const [finalOtp, setFinalOtp] = useState("");
  const inputRefs = useRef([]);

  const handleInputChange = (index, value) => {
    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "") {
        if (inputRefs.current[index + 1]) {
          inputRefs.current[index + 1].focus();
        }
      }

      setFinalOtp(newOtp.join(""));
    }
  };
  // this code will delete the wrong input number in otp box
  const handleInputDelete = (index) => {
    const newOtp = [...otp];
    newOtp[index] = "";
    setOtp(newOtp);

    if (index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }

    setFinalOtp(newOtp.join(""));
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index]) {
      handleInputDelete(index);
      e.preventDefault();
    }
  };
  
    return (
      <section className="h-screen flex justify-center items-center">
      <div className="mx-3 flex flex-col  md:mx-auto md:max-w-[346px]">
        <Logo />
        <h2 className="text-2xl text-black font-bold mt-6">
          Enter the code sent to
        </h2>
        <p className="text-gray-100 text-base mb-6 font-semibold">
          saeidtaheri@gmail.com
        </p>

        <div className="flex gap-2 my-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              className={`w-12 py-4 h-16 text-center text-black outline-none focus:border-purple text-3xl border border-gray-500 rounded ${
                index === 3 ? "ml-6" : ""
              }`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </div>
      </div>
    </section>
    );
};

export default OTP