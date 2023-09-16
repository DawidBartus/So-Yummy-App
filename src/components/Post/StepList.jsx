import { BigParagraph, MediumParagraph } from '../reusableComponents/Text';
import { ListDisc } from './PostStyledElements';

const StepList = ({ stepArray }) => {
    if (stepArray === undefined || stepArray?.length === 0) {
        return (
            <div>
                <BigParagraph>No step found.</BigParagraph>
            </div>
        );
    }
    return (
        <div>
            <BigParagraph style={{ marginBottom: 30 }}>
                Ingredients:
            </BigParagraph>
            <ul style={{ paddingLeft: 20, minWidth: 200 }}>
                {stepArray.map((elem, index) => (
                    <ListDisc key={index}>
                        <MediumParagraph>{elem}</MediumParagraph>
                    </ListDisc>
                ))}
            </ul>
        </div>
    );
};

export default StepList;
