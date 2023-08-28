import { styled } from 'styled-components';
import React from 'react';
import { LinkWrapper } from '../reusableComponents/Buttons';
// import PretendApiFetch from "./PostApiFetch";

const PostContainer = styled.div`
    position: relative;
    width: 336px;
    height: 323px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 20px;
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
    &:hover {
        scale: 1.05;
    }
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

const Post = ({ props }) => {
    let { recipe } = props;

    return (
        <React.Fragment>
            <PostContainer>
                <LinkWrapper to={`${recipe.label}`}>
                    <PostBackground
                        src={recipe.images.REGULAR.url || recipe.image}
                        data-close="close"
                        id={recipe.uri}
                    />
                    <PostParagraph>{recipe.label}</PostParagraph>
                </LinkWrapper>
            </PostContainer>
        </React.Fragment>
    );
};

export default Post;
