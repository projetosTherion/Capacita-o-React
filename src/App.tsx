import { Banner } from "@/components/banner/Banner";
import { Header } from "@/components/header/Header";
import { Nav } from "@/components/nav/Nav";
import { About } from "@/components/about/About";
import { Services } from "@/components/services/Services";
import { Work } from "@/components/work/Work";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "./components/footer/Footer";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
