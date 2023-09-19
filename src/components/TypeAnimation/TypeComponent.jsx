import { TypeAnimation } from 'react-type-animation';

const TypeComponent = ({
    textArr = [
        'Hungry?',
        1000,
        'Hungry? Try...',
        1500,
        'Ultimate Burger',
        3000,
        'Pesto pizza',
        3000,
        'Eggplant pasta',
        3000,
        'Hungry?',
        2000,
    ],
}) => {
    return (
        <TypeAnimation
            sequence={textArr}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
        />
    );
};

export default TypeComponent;
