import {
  Navbar,
  Hero,
  WhatIsRepliq,
  Features,
  EarlyAccess,
  FinalCTA,
  Footer,
} from "./components";

export default function Home() {
  return (
    <div className="animated-bg min-h-screen">
      {/* Mesh gradient overlay */}
      <div className="mesh-gradient" />
      
      <Navbar />
      <Hero />
      <WhatIsRepliq />
      <Features />
      <EarlyAccess />
      <FinalCTA />
      <Footer />
    </div>
  );
}
