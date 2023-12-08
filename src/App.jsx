import { HomeSection } from "./components/HomeSection";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";
import { SocialsSection } from "./components/SocialsSection";

function App() {
  return (
    <main className="bg-[#F0F8FF] text-[#000080] h-full w-full font-body">
      <Navbar />
      <HomeSection />
      <SocialsSection />
      <Skills />
    </main>
  )
}

export default App;
