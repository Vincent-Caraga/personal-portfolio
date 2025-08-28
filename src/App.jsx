import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
