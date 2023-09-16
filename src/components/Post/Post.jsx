import React, { useState } from 'react';
import PostContainer, {
    PostBackground,
    PostParagraph,
} from './PostStyledElements';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const LinkWrapper = styled(Link)`
    transition: 1s;
    transform: translateY(${(props) => props.$theme}%);
    display: block;
`;

const Post = ({ props }) => {
    let { label, images, image, recipeId } = props;

    const [style, setStyle] = useState(100);

    const handleLoad = () => {
        setStyle((prev) => 0);
    };

    return (
        <>
            <PostContainer>
                <LinkWrapper
                    $theme={style}
                    to={`/home/${recipeId}`}
                    onLoad={handleLoad}
                >
                    <PostBackground
                        src={images.url || image}
                        data-close="close"
                    />
                    <PostParagraph>{label}</PostParagraph>
                </LinkWrapper>
            </PostContainer>
        </>
    );
};

export default Post;
