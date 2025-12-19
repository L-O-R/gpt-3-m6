import React from "react";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Client from "../components/Client/Client";
import Services from "../components/Services/Services";
import Feature from "../components/Feature/Feature";
import Blog from "../components/blog/Blog";

const Home = () => {
  return (
    <>
      <Banner />
      <Client />
      <About />
      <Services />
      <Feature />
      <Blog />
    </>
  );
};

export default Home;
