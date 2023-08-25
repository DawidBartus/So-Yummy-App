import { styled } from "styled-components";
import PretendApiFetch from "./PostApiFetch";

const PostContainer = styled.div`
  position: relative;
  width: 336px;
  height: 323px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  &:hover p {
    text-decoration: underline;
  }
  &:hover div {
    transform: scale(1.1);
  }
`;

const PostBackground = styled.div`
  transition: 500ms;
  background-size: contain;
  width: 100%;
  height: 100%;
  background-image: ${({ $url }) => `url(${$url})`};
`;

const PostParagraph = styled.p`
  position: absolute;
  bottom: 26px;
  left: 18px;
  background-color: white;
  width: calc(100% - 68px);
  padding: 16px;
  border-radius: 8px;
`;

const Post = () => {
  const photos = PretendApiFetch();

  return (
    <>
      {photos.map((elem) => (
        <PostContainer key={elem.alt}>
          <PostBackground $url={elem.src} />
          <PostParagraph>{elem.alt}</PostParagraph>
        </PostContainer>
      ))}
    </>
  );
};

export default Post;
