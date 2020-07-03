import React, { useState } from 'react';

// Style imports
import { Container, ChildContainer } from './CustomLayoutStyles';

// Header import
import Header, {
  StyledLogo,
  LogoWrapper,
  RightContainer
} from '../Header/HeaderStyles';

// Logo import
import logo from '../Header/Assets/logo.svg';
import { Avatar, message } from 'antd';

import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { FaSearch } from 'react-icons/fa';

import { Form } from '@unform/web';

import { GLOBAL_URL } from '~/global/shared/config';
import Input from '../Unform/Input/Input';
import Select from '../Unform/Select/ReactSelect';
import UserService from '~/services/api/User';
import { Creators as SearchActions } from '~/store/ducks/Search';
import { useDispatch } from 'react-redux';
import GroupService from '~/services/api/Group';
import { useHistory } from 'react-router-dom';

export default function CustomLayout(props) {
  const isSigned = localStorage.getItem('token');
  const [icon, setIcon] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  async function handleSearch(data, { reset }) {
    try {
      if (data.searchType === '1') {
        if (!data.searchContent) {
          return message.error(
            'É necessário inserir nome do grupo que você está buscando'
          );
        }
        const response = await GroupService.getGroupByName(data.searchContent);
        if (response.length > 0) {
          dispatch(SearchActions.saveSearch(response));
          history.push(`/search/group/${data.searchContent}`);
        } else {
          return message.error('Nenhum grupo existente com esse nome');
        }
      } else {
        if (!data.searchContent) {
          return message.error(
            'É necessário inserir nome ou email do usuário que você está buscando'
          );
        }
        const response = await UserService.byEmailOrName(data.searchContent);
        if (response.length > 0) {
          dispatch(SearchActions.saveSearch(response));
          history.push(`/search/user/${data.searchContent}`);
        } else {
          return message.error(
            'Nenhum usuário existente com esse nome ou email'
          );
        }
      }
      // reset();
    } catch (error) {
      // reset();
      return message.error('Erro ao fazer a busca');
    }
  }

  return (
    <Container>
      <Header>
        <LogoWrapper isSigned={isSigned}>
          <StyledLogo src={logo} />
        </LogoWrapper>
        {isSigned && (
          <>
            <Form
              onSubmit={handleSearch}
              style={{
                margin: '5vh auto auto 11vh',
                display: 'flex',
                flexDirection: 'row',
                width: '60%'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  margin: '0 auto'
                }}
              >
                <Select
                  // ref={current => console.log(current)}
                  onFocus={() => setIcon(true)}
                  onBlur={() => setIcon(false)}
                  name="searchType"
                  style={{
                    width: '6vw',
                    border: 'none',
                    borderRadius: '0',
                    WebkitAppearance: 'unset',
                    backgroundColor: 'white',
                    borderLeft: '0.5px solid #ccc',
                    borderRight: '0.5px solid #ccc',
                    outline: 'none',
                    fontSize: '1.1vw'
                  }}
                  options={[
                    { value: '1', label: 'Grupo' },
                    { value: '2', label: 'Usuário' }
                  ]}
                />

                <div
                  style={{
                    backgroundColor: 'white',
                    borderRight: ' 0.5px solid #ccc'
                  }}
                >
                  {icon ? <CaretUpOutlined /> : <CaretDownOutlined />}
                </div>

                <Input
                  style={{
                    border: 'none',
                    borderRadius: '0',
                    borderRight: '0.5px solid #ccc',
                    paddingLeft: '1vw'
                  }}
                  name="searchContent"
                />
                <div
                  style={{
                    height: '4vh',
                    width: '3vw',
                    backgroundColor: 'white',
                    fontSize: '1.2vw',
                    paddingTop: '0.5vh'
                  }}
                >
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      outline: 'none'
                    }}
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>

              {/* <SearchInput
                addonBefore={
                  <Select
                    name="searchType"
                    style={{
                      width: '8vw'
                    }}
                    options={[
                      { value: '1', label: 'Grupo' },
                      { value: '2', label: 'Usuário' }
                    ]}
                  />
                }
                // addonAfter={
                 
                // }
                style={{ width: '70%' }}
                name="searchContent"
              /> */}
            </Form>
            <RightContainer>
              <Avatar
                style={{ margin: '2.5vh auto' }}
                src={`${GLOBAL_URL}static/profile/ae9268e333b52ef5a024d1175348280c.png`}
              />
            </RightContainer>
          </>
        )}
      </Header>
      <ChildContainer>{props.children}</ChildContainer>
    </Container>
  );
}
