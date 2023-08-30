import React from 'react';
import { LinkWrapper } from '../reusableComponents/Buttons';
import PostContainer, {
    PostBackground,
    PostParagraph,
} from './PostStyledElements';

const Post = ({ props }) => {
    let { label, images, image, recipeId } = props;

    return (
        <>
            <PostContainer>
                <LinkWrapper to={`${recipeId}`}>
                    <PostBackground
                        src={images.REGULAR.url || image}
                        data-close="close"
                    />
                    <PostParagraph>{label}</PostParagraph>
                </LinkWrapper>
            </PostContainer>
        </>
    );
};

export default Post;
