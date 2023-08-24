import { Outlet } from "react-router";
import Navigation from "../components/navigation/Navigation";
import { MainSection } from "../components/reusableComponents/Sections";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <MainSection>
        <Outlet />
      </MainSection>
      <Footer />
    </>
  );
};

export default HomePage;
