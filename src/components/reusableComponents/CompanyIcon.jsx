import { styled } from 'styled-components';
import { ReactComponent as Fork } from '../../utils/navigation.svg';
import { StyledLink } from './Buttons';

const SvgFork = styled.div`
    width: 44px;
    height: 44px;
    background-color: #8baa36;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SVGLigthFork = styled(SvgFork)`
    background-color: ${({ theme }) => theme.standardLightGreen};
`;

const CompanyIcon = ({ close }) => {
    return (
        <StyledLink to="/home/Dev" onClick={close}>
            <SvgFork>
                <Fork style={{ stroke: '#fff' }} />
            </SvgFork>
        </StyledLink>
    );
};

const CompanyV2Icon = () => {
    return (
        <StyledLink to="/home/Dev">
            <SVGLigthFork>
                <Fork style={{ stroke: '#8BAA36' }} />
            </SVGLigthFork>
        </StyledLink>
    );
};
export { CompanyV2Icon };
export default CompanyIcon;
