import { styled } from 'styled-components';

const PostContainer = styled.div`
    position: relative;
    width: 336px;
    height: 323px;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 20px;
    background-color: transparent;
    border-radius: 8px;
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

// Post details

const FullImgMobile = styled.img`
    width: 100%;
    height: auto;
    @media (min-width: 768px) {
        display: none;
    }
`;

const ImgHolder = styled.div`
    width: 100%;
    height: auto;
    max-width: 336px;
    max-height: 336px;
`;

const PostContainerDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media (min-width: 768px) {
        width: 100%;
        margin: 0 20px;
    }
`;
const ContentHolder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;
const DetailsListItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    transition: 500ms;
    cursor: default;
    border-radius: 8px;
    padding: 4px 8px;
    &:hover {
        background-color: ${({ theme }) => theme.transparentBg};
    }
    @media (min-width: 1298px) {
        flex-direction: row;
    }
`;

export {
    PostBackground,
    PostParagraph,
    FullImgMobile,
    ImgHolder,
    ContentHolder,
    PostContainerDetails,
    DetailsListItem,
};
export default PostContainer;
