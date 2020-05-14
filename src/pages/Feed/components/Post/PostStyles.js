import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  height: 20%;
  width: 95%;
  border: 0.5px solid #1f804f;
  border-radius: 5px;
  justify-content: center;
  font-size: 13px;
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  min-width: 100%;
  min-height: 20%;
  border-bottom: 0.5px solid #1f804f;
`;

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  min-width: 100%;
  min-height: 40%;
  text-align: center;
`;

export const PostFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  min-width: 100%;
  min-height: 20%;
  border-top: 0.5px solid #1f804f;
`;
