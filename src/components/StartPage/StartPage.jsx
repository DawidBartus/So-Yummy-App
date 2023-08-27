import FlexContainer from '../FlexContainer';
import Post from '../Post/Post';
import { SubsectionHeader } from '../reusableComponents/Headers';

const StartPage = (props) => {
    return (
        <section>
            <SubsectionHeader>Breakfast</SubsectionHeader>
            <FlexContainer style={{ gap: 30, flexWrap: 'wrap' }}>
                {props.recipes.map((recipe) => (
                    <Post modalSettings={props.modalSettings} props={recipe} />
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
