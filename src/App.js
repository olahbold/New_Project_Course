import Navbar from "./Component/Navbar";
import Cards from "./Component/Card";
import Features from "./Component/Features";
import { motion, useScroll } from "framer-motion";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";

import Testimonials from "./Component/Testimonials";
import "./styles.css";
import FAQ from "./Component/Faq";

// const App = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomeContainer />
//   }
// ]);

// export default App;
//
// import {
//   createRoutesFromElements,
//   createBrowserRouter,
//   Route
// } from "react-router-dom";

// const App = createBrowserRouter(
//   createRoutesFromElements(<Route path="/" element={<HomeContainer />}></Route>)
// );

// export default App
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SupportForm from "./Component/Support";

export default function App() {
  const { scrollYProgress } = useScroll();
  return (
    <Router>
      <Navbar />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div>
        <Switch>
          <Route exact path="/">
            <div>
              {" "}
              <Hero />
              <Cards />
              <Testimonials />
              <FAQ />
              <Footer />
            </div>
          </Route>
          <Route path="/join">
            <SupportForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
