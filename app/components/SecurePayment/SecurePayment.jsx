import React from "react";

const SecurePayment = () => {
  return (
    <section className="py-[60px] xl:py-30">
      <div className="container mx-auto">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background Image with reduced brightness */}
          <div className="absolute inset-0 bg-[url('/images/secure-payment.png')] bg-center bg-no-repeat bg-cover brightness-35"></div>

          {/* Overlay content */}
          <div className="relative flex flex-col items-center justify-center text-center max-w-[580px] mx-auto py-20 sm:py-[100px] px-4">
            <h2 className="font-urbanist font-bold text-[28px] sm:text-[36px] lg:text-[40px] leading-[120%] text-white">
              Ready to experience seamless secure payments globally
            </h2>
            <p className="text-[16px] text-white font-outfit leading-[150%] mt-3">
              Ready for hassle-free, secure payments anywhere in the world?
              Start using Monks Pay today it's fast, free, and focused on
              keeping your transactions secure!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-3 mt-10">
              <button className="bg-btn-primary-color text-white font-semibold text-[16px] py-2 px-6 rounded-full cursor-pointer hover:bg-black hover:text-white transition-all duration-500 block leading-[150%]">
                Download the App
              </button>
              <button className="hover:bg-btn-primary-color hover:border hover:border-btn-primary-color border border-white text-white font-semibold text-[16px] py-2 px-6 rounded-full cursor-pointer transition-all duration-500 block leading-[150%]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurePayment;
