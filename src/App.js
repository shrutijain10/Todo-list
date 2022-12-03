import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
