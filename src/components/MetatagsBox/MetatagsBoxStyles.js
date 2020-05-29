// Styled components imports
import styled from 'styled-components';

// Ant Design imports
import { Spin, Space } from 'antd';

export const MetasBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 20%;
  max-width: 85%;
  min-height: 15%;
  height: 100%;
  margin: 2vh auto;
  border: 0.5px solid #ccc;
  border-radius: 5px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35%;
  padding: 2vh 0 2vh 0;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const PageTitle = styled.a`
  display: flex;
`;

export const PageDescription = styled.p`
  display: flex;
`;

export const SpinContainer = styled(Space)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  color: #1f804f;
`;

export const StyledSpin = styled(Spin)`
  display: flex;
  flex-direction: column;
  margin: 1vh auto;
`;
