import { styled } from 'styled-components';
import { StyledLink } from '../reusableComponents/Buttons';

const StyledLi = styled.li`
    padding: 8px 10px;
`;

const CategoriesSlider = () => {
    return (
        <div style={{ marginBottom: 30 }}>
            <ul
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap',
                }}
            >
                <StyledLi>
                    <StyledLink to={'beef'}>Beef</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={'breakfast'}>Breakfast</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={'chicken'}>Chicken</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={'desserts'}>Desserts</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={'goat'}>Goat</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={'lamb'}>Lamb</StyledLink>
                </StyledLi>
            </ul>
        </div>
    );
};

export default CategoriesSlider;
