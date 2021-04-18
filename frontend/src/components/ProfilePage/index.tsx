import React from 'react';

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
} from './styles';

import Feed from '../Feed'

const ProfilePage: React.FC = () => {
  return (
      <>
        <Container>
            <Banner>
                <Avatar />
            </Banner>
            <ProfileData>
                <EditButton outlined>Editar Perfil</EditButton>
                <h1>Luisopolis</h1>
                <h2>@luisfilipebande</h2>

                <p>
                    Developer at <a href="www.github.com/luisfilipebandeira">LuisEnterprises</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        Paraiso do Tocantins, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido em 21 de janeiro de 2002
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong> 94 </strong>
                    </span>
                    <span>
                        <strong>94 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />    
        </Container>
      </>
  );
}

export default ProfilePage;