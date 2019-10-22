import * as React from 'react';
import Icon from 'react-icons-kit';
import { github } from 'react-icons-kit/icomoon/github'
import { blogger } from 'react-icons-kit/icomoon/blogger'
import { ProfileModel } from '../../model/UserModel';

import {
    Wrapper,
    Avatar,
    Line,
    Title,
    Subtitle,
    Follow,
    FotterButton,
    ButtonIcon
} from './styled';

interface Props {
    data?: ProfileModel;
}

export const Profile: React.SFC<Props> = ({
    data: {
        login,
        html_url,
        type,
        avatar_url,
        name,
        blog,
        followers,
        location,
        public_repos
    }
}) => (
    <Wrapper>
        <Avatar src={avatar_url} />
        <Line />
        <Title>{login}</Title>
        <Subtitle>{`Name: ${name}`}</Subtitle>
        <Subtitle>{type}</Subtitle>
        <Subtitle>{`Location: ${location}`}</Subtitle>
        <Subtitle>{`Repositories: ${public_repos}`}</Subtitle>
        <FotterButton>
            <ButtonIcon href={html_url}>
                <Icon icon={github} size={32} style={{color: '#465572'}} />
            </ButtonIcon>
            <ButtonIcon href={blog}>
                <Icon icon={blogger} size={32} style={{color: '#465572'}} />
            </ButtonIcon>
        </FotterButton>
        <Follow >{ `Follow: ${followers}` }</Follow>
    </Wrapper>
)
