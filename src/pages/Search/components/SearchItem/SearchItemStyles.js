import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  border: 0.5px solid #ccc;
  border-radius: 5px;
  margin: 4vh auto;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  -moz-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
`;

export const ImageWrapper = styled.div`
  height: 20vh;
  width: 15vw;
  display: flex;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  img {
    width: 100%;
    background-color: white;
    border: none;
    outline: none;
    text-align: center;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 65%;
  height: 100%;
  margin: 0 auto;

  a {
    margin: 2vh auto;
  }

  h4 {
    width: 70%;
    text-align: center;
    margin: 0 auto;
    flex: 1;
  }
`;
