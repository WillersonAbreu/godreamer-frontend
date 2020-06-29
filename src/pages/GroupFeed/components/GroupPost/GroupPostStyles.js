// Styled components import
import styled from 'styled-components';

// Open Graph import
import OpenGraphComponent from 'opengraph-react';

// Ant Design imports
import { Avatar, Tooltip, Typography } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 2vh auto;
  border-radius: 5px;
  justify-content: center;
  font-size: 13px;

  -webkit-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  -moz-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
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

export const PostText = styled(Paragraph)`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  max-width: 60%;
  font-size: 2.35vh;
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

export const VideoContainer = styled.video`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.img`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const StyledProfile = styled(Avatar)`
  display: flex;
  border: 0.5px solid #ccc;
  margin: 1.5vw auto;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const StyledTooltip = styled(Tooltip)``;

export const StyledDateContainer = styled.div`
  display: flex;
  margin: 1vh 1vw;
`;

export const StyledOpenGraphComponent = styled(OpenGraphComponent)``;

export const PostOptionsIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 4%;
  margin-top: 1%;
`;

export const PostOptionsIcon = styled(MoreOutlined)`
  display: flex;
  padding-top: 1vh;

  svg {
    height: 5vh;
    width: 3vh;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
