import React, { useState, useEffect } from 'react';

// Style imports
import {
  Container,
  ChildContainer,
  StyledSelect,
  SelectIconWrapper,
  FormContent,
  SearchButton,
  SearchButtonWrapper,
  StyledInput,
  StyledAvatar
} from './CustomLayoutStyles';

// Header import
import Header, {
  StyledLogo,
  LogoWrapper,
  RightContainer,
  GearWrapper
} from '../Header/HeaderStyles';

// Logo import
import logo from '../Header/Assets/logo.svg';
import { Avatar, message, Tooltip, Modal } from 'antd';

import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { BsFillGearFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';

import { Form } from '@unform/web';

import { GLOBAL_URL } from '~/global/shared/config';
import UserService from '~/services/api/User';
import { Creators as SearchActions } from '~/store/ducks/Search';
import { Creators as UserActions } from '~/store/ducks/User';
import { useDispatch, useSelector } from 'react-redux';
import GroupService from '~/services/api/Group';
import { useHistory } from 'react-router-dom';
import { removeToken } from '~/helpers/AuthHelper';

export default function CustomLayout(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const isSigned = localStorage.getItem('token');
  const { user } = useSelector(state => state);
  const [icon, setIcon] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {}, [isSigned]);

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
      reset();
    } catch (error) {
      // reset();
      return message.error('Erro ao fazer a busca');
    }
  }

  function handleLogout() {
    setIsLogoutModalOpen(false);
    dispatch(UserActions.clearUser());
    removeToken();
    history.push('/');
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
              <FormContent>
                <StyledSelect
                  onFocus={() => setIcon(true)}
                  onBlur={() => setIcon(false)}
                  name="searchType"
                  options={[
                    { value: '1', label: 'Grupo' },
                    { value: '2', label: 'Usuário' }
                  ]}
                />

                <SelectIconWrapper>
                  {icon ? <CaretUpOutlined /> : <CaretDownOutlined />}
                </SelectIconWrapper>

                <StyledInput name="searchContent" />
                <SearchButtonWrapper>
                  <SearchButton>
                    <FaSearch />
                  </SearchButton>
                </SearchButtonWrapper>
              </FormContent>
            </Form>
            <RightContainer>
              <Tooltip
                title="Verificar meu perfil"
                onClick={() => history.push(`/profile/${user.name}`)}
              >
                <StyledAvatar
                  size={35}
                  style={{ margin: '2.5vh auto', backgroundColor: 'white' }}
                  src={`${GLOBAL_URL}static/profile/ae9268e333b52ef5a024d1175348280c.png`}
                />
              </Tooltip>
              <GearWrapper
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <BsFillGearFill />
                {isMenuOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: 'white',
                      height: '10vh',
                      width: '5vw',
                      right: '-5vh',
                      textAlign: 'center',
                      border: '0.5px solid #ccc',
                      borderRadius: '5px'
                    }}
                  >
                    <Tooltip title="Sair da conta">
                      <a onClick={() => setIsLogoutModalOpen(true)}>Sair</a>
                    </Tooltip>
                    <Tooltip title="Ver meu perfil">
                      <a onClick={() => history.push(`/profile/${user.name}`)}>
                        Perfil
                      </a>
                    </Tooltip>
                  </div>
                )}
              </GearWrapper>
              <Modal
                visible={isLogoutModalOpen}
                onCancel={() => setIsLogoutModalOpen(false)}
                onOk={handleLogout}
              >
                <div style={{ display: 'flex' }}>
                  <h4 style={{ margin: '0 auto' }}>
                    Tem certeza de que deseja sair?
                  </h4>
                </div>
              </Modal>
            </RightContainer>
          </>
        )}
      </Header>
      <ChildContainer>{props.children}</ChildContainer>
    </Container>
  );
}
