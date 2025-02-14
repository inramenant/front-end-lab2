import Header from "./components/Header";
import About from "./components/About";
import CourseInfo from "./components/CourseInfo";
import CourseEnrollment from "./components/CourseEnrollment";
import Faculty from "./components/Faculty";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <CourseInfo courseName="Frontend Development" />
      <CourseEnrollment />
      <Faculty />
      <Footer />
    </div>
  );
};

export default App;
