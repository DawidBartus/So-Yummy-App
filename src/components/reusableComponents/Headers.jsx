import { styled } from "styled-components";

// const MainHeader = styled.h1``;
const SectionHeader = styled.h2`
  color: ${({ theme }) => theme.headers};
  font-feature-settings: "liga" off;
  font-family: Poppins;
  font-size: 44px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.88px;
`;
const FormHeader = styled.h2`
  color: #fafafa;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.56px;
  margin-bottom: 8px;
`;

const SubsectionHeader = styled.h3`
  color: ${({ theme }) => theme.standardWhite};
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 100% */
  letter-spacing: 0.42px;
`;

export { SectionHeader, SubsectionHeader };
export default FormHeader;
