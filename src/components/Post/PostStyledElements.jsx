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
    min-width: 300px;
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
    align-items: center;
    gap: 30px;
    @media (min-width: 968px) {
        align-items: flex-start;
        width: 100%;
        margin: 0 20px;
    }
`;
const ContentHolder = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    @media (min-width: 968px) {
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
    margin-top: 10px;
    padding: 4px 8px;
    &:hover {
        background-color: ${({ theme }) => theme.transparentBg};
    }
    @media (min-width: 1298px) {
        flex-direction: row;
    }
`;

const ListDisc = styled.li`
    padding-bottom: 10px;
    & p::before {
        content: '';
        position: relative;
        background-color: green;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        left: -5px;
        top: -3px;
        display: inline-block;
        margin-left: -1em;
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
    ListDisc,
};
export default PostContainer;
