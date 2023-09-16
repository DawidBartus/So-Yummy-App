import styled from 'styled-components';
import { RoundedGreenToDark } from '../reusableComponents/Buttons';
import { MediumParagraph } from '../reusableComponents/Text';
import { DetailsListItem } from './PostStyledElements';

const DetailsButton = styled(RoundedGreenToDark)`
    min-width: 145px;
    box-sizing: border-box;
`;

const IngredientsList = ({ ingredients, addItem, itemList, deleteItem }) => {
    if (itemList === undefined) {
        return;
    }
    const getItemMeasure = (quantity, weight, measure, food) => {
        const itemQ = Math.ceil(quantity).toFixed();
        const itemW = Math.ceil(weight).toFixed();
        const itemM = measure;

        if (itemQ === 0 || itemM === '<unit>' || itemM === null) {
            return `${itemW} g ${food}`;
        }

        return `${itemQ} ${itemM} / ${itemW} g ${food}`;
    };

    return (
        <ul>
            {ingredients.map((elem, index) => (
                <DetailsListItem key={elem.food + index}>
                    <img
                        src={elem.image}
                        alt={elem.food}
                        width={50}
                        height={50}
                        style={{ borderRadius: '8px' }}
                    />

                    <MediumParagraph>
                        {getItemMeasure(
                            elem.quantity,
                            elem.weight,
                            elem.measure,
                            elem.food
                        )}
                    </MediumParagraph>

                    {itemList.some((element) => element.food === elem.food) ? (
                        <DetailsButton
                            onClick={() =>
                                deleteItem(
                                    elem.food,
                                    elem.quantity,
                                    elem.measure
                                )
                            }
                        >
                            Delete
                        </DetailsButton>
                    ) : (
                        <DetailsButton
                            onClick={() =>
                                addItem(elem.food, elem.quantity, elem.measure)
                            }
                        >
                            Add
                        </DetailsButton>
                    )}
                </DetailsListItem>
            ))}
        </ul>
    );
};

export default IngredientsList;
