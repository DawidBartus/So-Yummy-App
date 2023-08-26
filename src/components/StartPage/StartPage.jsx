import FlexContainer from "../FlexContainer";
import Post from "../Post/Post";
import { SubsectionHeader } from "../reusableComponents/Headers";

const StartPage = ({ recipes }) => {
  //   const { breakfast, miscellaneous, chicken, desserts } = recipes;
  console.log(recipes);
  return (
    <section>
      <SubsectionHeader>Breakfast</SubsectionHeader>
      <FlexContainer style={{ gap: 30 }}>
        {recipes.map((elem) => (
          <Post props={elem} />
        ))}
      </FlexContainer>
    </section>
  );
};

export default StartPage;
