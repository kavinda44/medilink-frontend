import Navbar from "@/components/user-pages/Navbar";
import Hero from "@/components/user-pages/home-page/Hero";
import Process from "@/components/user-pages/home-page/Process";
import Features from "@/components/user-pages/home-page/Features";
import Journey from "@/components/user-pages/home-page/Journey";
import Footer from "@/components/user-pages/Footer";

const HomePage = () => {
  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50">
        <Navbar />
      </header>
      <main className="pt-[8.5em]">
        <div
          className="fixed inset-0 -z-1"
          style={{
            background:
              "radial-gradient(80% 50% at 20% 40%, rgba(0, 230, 255, 0.15) 0%, rgba(0, 230, 255, 0) 50%), radial-gradient(60% 40% at 80% 20%, rgba(0, 98, 255, 0.2) 0%, rgba(0, 98, 255, 0) 50%), radial-gradient(50% 50% at 60% 80%, rgba(142, 94, 237, 0.15) 0%, rgba(142, 94, 237, 0) 50%), radial-gradient(40% 40% at 10% 90%, rgba(240, 117, 199, 0.1) 0%, rgba(240, 117, 199, 0) 50%), linear-gradient(180deg, #F7F9FD 0%, #EFF3FB 100%)",
          }}
        ></div>
        <Hero />
        <Process />
        <Features />
        <Journey />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
