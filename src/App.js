import Navbar from "./navbar/Navbar";
import Banner from "./banner/Banner";
import Cards from "./cards/Cards";
import Footer from "./footer/Footer";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState();

  return (
    <>
      <Navbar data={data} />
      <Banner />
      <Cards setData={setData} />
      <Footer />
    </>
  );
}

export default App;
