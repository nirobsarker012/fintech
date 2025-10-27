import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import OnMarques from "./components/marquee/OnMarques";
import Navbar from "./components/Navbar/Navbar";
import Payments from "./components/payment/Payments";
import PaymentWay from "./components/PaymentWay/PaymentWay";
import Price from "./components/Price/Price";
import SecurePayment from "./components/SecurePayment/SecurePayment";
import Security from "./components/Security/Security";
import Testimonial from "./components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/images/banner-bg.png')] bg-center bg-no-repeat bg-cover m-4 rounded-2xl overflow-hidden">
        {/* Header Sections start */}
        <Navbar />
        {/* Header Sections End */}
        {/* Hero section start */}
        <Hero />
        {/* Hero section End */}
      </div>
      {/* Payment Sections start */}
      <Payments />
      {/* Payment Sections end */}
      {/* Partner Image  */}
      <OnMarques />
      {/* PaymentsWay Section */}
      <PaymentWay />
      {/* Security Section */}
      <Security />
      {/* Pricing Section */}
      <Price />
      {/* Testimonial Sections */}
      <Testimonial />
      {/* Payment Secure Sections */}
      <SecurePayment />
      {/* Footer Section */}
      <Footer />
    </>
  );
}
