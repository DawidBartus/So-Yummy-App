import { styled } from 'styled-components';
import { ModalTest } from '../Modal/Modal';
import React, { useState } from 'react';
import Loader from '../reusableComponents/Loader';
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
// const PostBackground = styled.div`
//     transition: 500ms;
//     background-size: contain;
//     width: 100%;
//     height: 100%;
//     background-image: ${({ $url }) => `url(${$url})`};
//     background-size: cover;
// `;

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
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleModal = (e) => {
    //     e.stopPropagation();

    //     const target = e.target.getAttribute('data-close');
    //     if (target === 'close') {
    //         setIsOpen((prev) => !prev);
    //     }
    // };

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
