import About from "../Components/About";
import Contact from "../Components/Contact";
import Home from "../Components/Home";
import ProjectDetail from "../Components/ProjectDetail";
import Projects from "../Components/Projects";
import Resume from "../Components/Resume";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/resume" element={<Resume />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/projects/:id" element={<ProjectDetail />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
export default Router;
