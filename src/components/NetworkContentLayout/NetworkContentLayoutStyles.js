import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  min-height: 86.9vh;
`;

export const GroupsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 21%;
  min-height: 100%;
  border-right: 0.5px solid #ccc;
  position: fixed;
  left: 0;
`;

export const FeedSection = styled.main`
  display: flex;
  flex-direction: column;
  width: 75.5%;
  min-height: 100%;
  /* border-left: 1px solid red; */
  /* border-right: 1px solid red; */
  overflow-y: hidden;
  position: absolute;
  margin-left: 15.35%;
`;

export const ChatSection = styled.div`
  z-index: 0;
  display: flex;
  flex-direction: column;
  width: 15%;
  min-height: 100%;
  border-left: 0.5px solid #ccc;
  /* border-right: 1px solid blue; */
  position: fixed;
  right: 0;
`;
