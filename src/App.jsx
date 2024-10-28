import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import ScrollToTopButton from "./components/buttonUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer/>
        <ScrollToTopButton/>
      </BrowserRouter>
    </>
  );
}

export default App;
