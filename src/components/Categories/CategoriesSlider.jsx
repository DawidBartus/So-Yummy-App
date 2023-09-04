import { styled } from 'styled-components';
import { StyledLink } from '../reusableComponents/Buttons';
import { useParams } from 'react-router';

const StyledLi = styled.li`
    padding: 8px 10px 28px;
    border-bottom: 1px solid ${({ $active }) => $active};
    &:hover {
        border-bottom: 1px solid #8baa36;
        a {
            color: #8baa36;
            border: none;
        }
    }
    & a {
        color: ${({ $active }) => $active};
        font-size: 18px;
        border: none;
    }
`;

const StyledList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20;
`;

const categoryNames = [
    'Beef',
    'Breakfast',
    'Chicken',
    'Desserts',
    'Goat',
    'Lamb',
    'Pasta',
    'Pork',
    'Vegan',
    'Side',
];

const CategoriesSlider = () => {
    const { id } = useParams();

    return (
        <div
            style={{
                marginBottom: 30,
                width: '100%',
            }}
        >
            <StyledList>
                {categoryNames.map((element) => (
                    <StyledLi
                        key={element}
                        $active={element === id ? '#8BAA36' : '#E0E0E0;'}
                    >
                        <StyledLink to={element}>{element}</StyledLink>
                    </StyledLi>
                ))}
            </StyledList>
        </div>
    );
};

export default CategoriesSlider;
