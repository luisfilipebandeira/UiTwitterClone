import React from 'react';

import { 
    Container,
    Retweeted,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              ↩ Você retweetou
          </Retweeted>

          <Body>
              <Avatar />
              <Content>
                  <Header>
                      <strong>Luisopolis</strong>
                      <span>@luisfilipebande</span>
                      <Dot />
                      <time>16 de abril</time>
                  </Header>

                  <Description>Curtindo o fds pós pandemia 😜</Description>

                  <ImageContent />

                  <Icons>
                      <Status>
                          <CommentIcon />
                          18
                      </Status>
                      <Status>
                          <RetweetIcon />
                          89
                      </Status>
                      <Status>
                          <LikeIcon />
                          188
                      </Status>
                  </Icons>
              </Content>
          </Body>
      </Container>
  )
}

export default Tweet;