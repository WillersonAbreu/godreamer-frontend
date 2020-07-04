import React, { useState, useEffect } from 'react';

// Components
import NetworkContentLayout from '~/components/NetworkContentLayout/NetworkContentLayout';
import { Container } from './SearchStyles';

// Services
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import GroupService from '~/services/api/Group';
import UserService from '~/services/api/User';
import SearchItem from './components/SearchItem/SearchItem';

export default function Search() {
  const searchResponse = useSelector(state => state.search.searchResponse);
  const [searchList, setSearchList] = useState([]);
  const [errorMessageType, setErrorMessageType] = useState('');
  const [searchType, setSearchType] = useState('');

  const { userNameOrEmail, groupName } = useParams();

  useEffect(() => {
    if (searchResponse.length <= 0) {
      if (!groupName) {
        fetchSearch('user', userNameOrEmail);
      }
      if (!userNameOrEmail) {
        fetchSearch('group', groupName);
      }
    }

    if (searchResponse.length > 0 || searchList.length > 0) {
      setErrorMessageType('');
    }
  }, [userNameOrEmail, groupName]);

  async function fetchSearch(searchType, searchContent) {
    try {
      const response =
        searchType === 'user'
          ? await UserService.byEmailOrName(searchContent)
          : await GroupService.getGroupByName(searchContent);

      if (response.length <= 0) {
        let errorMessage =
          searchType === 'user'
            ? 'Nenhum usuário encontrado com esse nome ou email'
            : 'Nenhum grupo encontrado com esse nome';
        setErrorMessageType(errorMessage);
        // setSearchType(searchType);
      } else {
        setErrorMessageType('');
        setSearchList(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <NetworkContentLayout>
      <Container>
        {searchResponse &&
          searchResponse.map((item, index) => (
            <SearchItem key={index} type={searchType} data={item} />
          ))}

        {setErrorMessageType !== '' ? (
          <h1 style={{ margin: '0 auto', textAlign: 'center' }}>
            {errorMessageType}
          </h1>
        ) : null}
        {searchList &&
          Array.from(searchList).map((item, index) => (
            <SearchItem key={index} type={searchType} data={item} />
          ))}
      </Container>
    </NetworkContentLayout>
  );
}
