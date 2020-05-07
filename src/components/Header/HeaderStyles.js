// Styled componetns imports
import styled from 'styled-components';

const StyledHeader = styled.header`
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #30cb7e;
  border: 1px solid #30cb7e;
  -webkit-box-shadow: 0px -7px 8px 7px rgba(138, 138, 138, 1);
  -moz-box-shadow: 0px -7px 8px 7px rgba(138, 138, 138, 1);
  box-shadow: 0px -7px 8px 7px rgba(138, 138, 138, 1);
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const StyledLogo = styled.img`
  margin: 5%;
  max-height: 11vh !important;
`;

export const RightContainer = styled.div`
  display: flex;
  position: absolute;
  right: 5vw;
`;

export default StyledHeader;