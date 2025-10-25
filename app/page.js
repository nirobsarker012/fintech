import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/images/banner-bg.png')] bg-center bg-no-repeat bg-cover m-6 rounded-2xl">
        {/* Header Sections start */}
        <Navbar />
        {/* Header Sections End */}
        {/* Hero section start */}
        <Hero />
        {/* Hero section End */}
      </div>
    </>
  );
}
