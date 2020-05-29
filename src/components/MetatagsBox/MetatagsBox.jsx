import React, { useEffect, useState } from 'react';

// Services
import MetatagsService from '~/services/api/Metascrapper';

import {
  BodyContainer,
  ImageContainer,
  MetasBoxContainer,
  PageTitle,
  SpinContainer,
  StyledSpin
} from './MetatagsBoxStyles';

function MetatagsBox({ url }) {
  const [openGraphObject, setOpenGraphObject] = useState(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetchMetas();
  }, [reload]);

  async function fetchMetas() {
    try {
      const response = await MetatagsService.find({ url: url });

      await setOpenGraphObject(response.metadata);
    } catch (error) {}
  }

  async function contentRender() {}

  return openGraphObject ? (
    <MetasBoxContainer>
      <ImageContainer>
        <PageTitle href={openGraphObject.url}>
          <img
            style={{
              display: 'flex',
              maxWidth: '90%',
              margin: '2vh auto'
            }}
            src={openGraphObject.image}
          />
        </PageTitle>
      </ImageContainer>
      <BodyContainer>
        <PageTitle href={openGraphObject.url}>
          {openGraphObject.title}
        </PageTitle>
        <span>{openGraphObject.description}</span>
      </BodyContainer>
    </MetasBoxContainer>
  ) : (
    <MetasBoxContainer>
      <SpinContainer>
        <StyledSpin size="large" />
        <span>Carregando conteúdo...</span>
      </SpinContainer>
    </MetasBoxContainer>
  );
}

export default MetatagsBox;
