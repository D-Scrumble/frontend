import Main from "../components/Main";
import Slider from "../components/slider/Slider";
import Slogan from "../components/slogan/Slogan";
import Category from "../components/category/Category";

const HomePage = () => {
  return (
    <>
      <Main>
        <Slider />
        <Slogan />
        <Category />
      </Main>
    </>
  );
};

export default HomePage;
