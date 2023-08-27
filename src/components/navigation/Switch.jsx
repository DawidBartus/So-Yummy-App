import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { togglePageMode } from '../../redux/pageModeSlice';

const SwitchLabel = styled.label`
    display: none;
    position: relative;
    width: 61px;
    height: 27px;
    @media (min-width: 1279px) {
        display: inline-block;
    }
`;
const Input = styled.input`
    opacity: 0;
    width: 0px;
    height: 0px;
    &:checked + span {
        background-color: #8baa36;
    }
    &:checked + span::before {
        transform: translateX(30px);
    }
`;

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.2);
    transition: 1s;
    border-radius: 50px;
    &::before {
        content: '';
        position: absolute;
        height: 21px;
        width: 21px;
        left: 4px;
        bottom: 3px;
        background: linear-gradient(180deg, #fff 0%, #e8eaea 100%);
        transition: 1s;
        border-radius: 50%;
    }
`;

const Switch = ({ style }) => {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.pageMode.pageMode);

    const handlePageMode = () => {
        dispatch(togglePageMode());
    };

    return (
        <SwitchLabel style={style} onClick={handlePageMode}>
            <Input
                type="checkbox"
                id="theme"
                checked={mode}
                onChange={handlePageMode}
            />
            <Slider />
        </SwitchLabel>
    );
};

export default Switch;
