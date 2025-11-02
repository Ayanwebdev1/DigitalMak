import Navbar from "./components/Navbar";
import "./style.css"
import Typewriter from "./components/Typewriter";
import Hero from "./components/Hero.js";
import Footer from "./components/Footer";




export default function Home() {

  return (
    <>

      <Hero />

      <footer>
        <Footer />
      </footer>




    </>


  );
}
export const metadata = {
  title: "Home",
  description: "This is Home Page",
};
