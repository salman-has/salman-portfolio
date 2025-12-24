import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Services from "./components/services/services";
import Mywork from "./components/mywork/mywork";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scroll-top/scroll_to_top";


const App=()=>{
  return(
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Services></Services>
        <Mywork></Mywork>
        <Contact></Contact>
        <Footer></Footer>
        <ScrollToTop></ScrollToTop>
    </div>
  )
}
export default App