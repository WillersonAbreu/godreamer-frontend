// React import
import React from 'react';

import { Form } from '@unform/web';

import FileUpload from '~/components/Unform/FileInput/FileInput';

import { PlaySquareOutlined, PictureOutlined, ArrowLeftOutlined, TeamOutlined, PayCircleOutlined} from '@ant-design/icons';


// Styles imports
import {
 Container1,
 StyledForm,
 StyledTextArea,
 RightFormContent,
 StyledButton
} from './GroupFormStyles';


export default function GroupForm() {

  return (
      
     <Container1>
        <StyledForm>
         <StyledTextArea
           placeholder="Compartilhe aqui as suas melhores idéias hoje"
           name="str_post"
            />
        <RightFormContent>
            <FileUpload
             icon={<PictureOutlined style={{ paddingTop: '0.7vh' }} />}
            labelText="Selecione uma imagem"
               name="url_image"
            />
            <FileUpload
              icon={<PlaySquareOutlined style={{ paddingTop: '0.7vh' }} />}
             labelText="Selecione um video"
            name="url_video"
            />
          <StyledButton>Postar</StyledButton>
         </RightFormContent>
      </StyledForm>
    </Container1>

  );
}
