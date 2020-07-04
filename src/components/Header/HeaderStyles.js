// Styled componetns imports
import styled from 'styled-components';

const StyledHeader = styled.header`
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
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
  margin: ${props => (props.isSigned ? 0 : '0 auto')};
`;

export const StyledLogo = styled.img`
  margin: 5%;
  max-height: 11vh !important;
`;

export const RightContainer = styled.div`
  margin: 1vh auto;
  display: flex;
  position: absolute;
  right: 5vw;
  /* background-color: white; */
  border-radius: 5px;
  width: 12vh;
  height: 10vh;
`;

export const GearWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 1.5vh;
  color: white;

  &:hover {
    svg {
      opacity: 0.8;
    }
    cursor: pointer;
  }
`;

export default StyledHeader;
