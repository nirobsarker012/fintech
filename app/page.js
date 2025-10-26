import Hero from "./components/Hero/Hero";
import OnMarques from "./components/marquee/OnMarques";
import Navbar from "./components/Navbar/Navbar";
import Payments from "./components/payment/Payments";
import PaymentWay from "./components/PaymentWay/PaymentWay";
import Security from "./components/Security/Security";

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
      {/* PaymentsWay */}
      <PaymentWay />
      {/* Security */}
      <Security />
    </>
  );
}
