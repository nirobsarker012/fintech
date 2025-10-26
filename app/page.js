import Hero from "./components/Hero/Hero";
import OnMarques from "./components/marquee/OnMarques";
import Navbar from "./components/Navbar/Navbar";
import Payments from "./components/payment/Payments";
import PaymentWay from "./components/PaymentWay/PaymentWay";
import Price from "./components/Price/Price";
import Security from "./components/Security/Security";

export default function Home() {
  return (
    <>
      <div className="">
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
    </>
  );
}
