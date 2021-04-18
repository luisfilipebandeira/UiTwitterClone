import React from 'react';

import { 
    Container,
    TopSide,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    FavoriteIcon,
    EmailIcon,
    ProfileIcon,
    BotSide,
    Avatar,
    ProfileData,
    ExitIcon
} from './styles';

import Button from '../Button'

const MenuBar: React.FC = () => {
  return (
      <Container>
          <TopSide>
              <Logo>Twitter</Logo>

              <MenuButton>
                <HomeIcon />
                <span>Pagina Inicial</span>
              </MenuButton>

              <MenuButton>
                <BellIcon />
                <span>Notificações</span>
              </MenuButton>

              <MenuButton>
                <EmailIcon />
                <span>Mensagens</span>
              </MenuButton>

              <MenuButton>
                <FavoriteIcon />
                <span>Salvos</span>
              </MenuButton>

              <MenuButton className="active">
                <ProfileIcon />
                <span>Perfil</span>
              </MenuButton>

              <Button>
                  <span>Tweetar</span>
              </Button>
          </TopSide>

          <BotSide>
            <Avatar />
            <ProfileData>
              <strong>Luisopolis</strong>
              <span>@luisfilipebande</span>
            </ProfileData>
            <ExitIcon />
          </BotSide>
      </Container>
  )
}

export default MenuBar;