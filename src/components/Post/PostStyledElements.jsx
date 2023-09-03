import { styled } from 'styled-components';

const PostContainer = styled.div`
    position: relative;
    width: 336px;
    height: 323px;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 20px;
    background-color: transparent;
    &:hover p {
        text-decoration: underline;
    }
    &:hover div {
        transform: scale(1.1);
    }
`;

const PostBackground = styled.img`
    transition: 500ms;
    background-size: contain;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
    &:hover {
        scale: 1.05;
    }
`;

const PostParagraph = styled.p`
    transition: 500ms;
    position: absolute;
    bottom: 26px;
    left: 18px;
    width: calc(100% - 68px);
    padding: 16px;
    border-radius: 8px;
    color: ${({ theme }) => theme.mainTextColor};
    background-color: ${({ theme }) => theme.mainBg};
`;

export { PostBackground, PostParagraph };
export default PostContainer;
