import { styled } from 'styled-components';
import { ModalTest } from '../Modal/Modal';
import React, { useState } from 'react';
// import PretendApiFetch from "./PostApiFetch";

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

const Post = ({ props }) => {
    let { recipe } = props;
    // modal controller
    const [isOpen, setLogOut] = useState(false);

    const toggleModal = (e) => {
        e.stopPropagation();

        const target = e.target.getAttribute('data-close');

        if (target === 'close') {
            setLogOut((prev) => !prev);
        }
    };

    return (
        <React.Fragment key={recipe.label}>
            <PostContainer onClick={toggleModal}>
                <PostBackground $url={recipe.image} data-close="close" />
                <PostParagraph>{recipe.label}</PostParagraph>
            </PostContainer>
            <ModalTest $showModal={isOpen} onClick={toggleModal}>
                <p>{recipe.label}</p>
            </ModalTest>
        </React.Fragment>
    );
};

export default Post;
