import FlexContainer from "../FlexContainer";
import Post from "../Post/Post";
import { SubsectionHeader } from "../reusableComponents/Headers";

const StartPage = ({ recipes }) => {
  return (
    <section>
      <SubsectionHeader>Breakfast</SubsectionHeader>
      <FlexContainer style={{ gap: 30, flexWrap: "wrap" }}>
        {recipes.map((recipe) => (
          <Post props={recipe} />
        ))}
      </FlexContainer>
      {/* <SubsectionHeader>Breakfast</SubsectionHeader>
      <FlexContainer style={{ gap: 30 }}>
          <Post props={elem} />
      </FlexContainer>
      <SubsectionHeader>Breakfast</SubsectionHeader>
      <FlexContainer style={{ gap: 30 }}>
          <Post props={elem} />
      </FlexContainer>
      <SubsectionHeader>Breakfast</SubsectionHeader>
      <FlexContainer style={{ gap: 30 }}>
          <Post props={elem} />
      </FlexContainer> */}
    </section>
  );
};

export default StartPage;
