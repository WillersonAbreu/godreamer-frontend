// Styled components import
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 99%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  position: static;
  display: flex;
  background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/66a0f570992565.5bb5e83e6775c.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 69%;
  height: 87vh;
`;

export const LoginFormContainer = styled.div`
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  width: 30%;
  text-align: center;
`;

export const LoginContainerTitle = styled.h1`
  color: #1f804f;
`;
