import * as React from 'react';
import Icon from 'react-icons-kit';
import { thumbsOUp } from 'react-icons-kit/fa/thumbsOUp'
import { thumbsODown } from 'react-icons-kit/fa/thumbsODown'
import { UserProfileModel } from '../../model/UserModel';
import { Link } from 'react-router-dom';

import {
    Wrapper,
    Avatar,
    Line,
    Title,
    Subtitle,
    ButtonIcon,
    FotterButton,
    ButtonFollow
} from './styled';

interface Props {
    handleFollow?: Function;
    handleLike?: Function;
    handleUnlike?: Function;
    user?: UserProfileModel;
}

export const Card: React.SFC<Props> = ({
    user: {
        login,
        html_url,
        type,
        id,
        avatar_url,
        like,
        unlike,
        following
    },
    handleLike,
    handleFollow,
    handleUnlike
}) => (
    <Wrapper>
        <Link to={`/user/${login}`}>
            <Avatar src={avatar_url} />
        </Link>
        <Line />
        <Title>{login}</Title>
        <Subtitle>{html_url}</Subtitle>
        <Subtitle>{type}</Subtitle>
        <FotterButton>
            <ButtonIcon onClick={() => {
                handleLike(id);
            }}>
                <Icon icon={thumbsOUp} size={32} style={{color: '#465572'}} />
                {like}
            </ButtonIcon>
            <ButtonIcon onClick={() => {
                handleUnlike(id);
            }}>
                <Icon icon={thumbsODown} size={32} />
                {unlike}
            </ButtonIcon>
        </FotterButton>
        <ButtonFollow following={following} onClick={() => {
            handleFollow(id);
        }}>{following ? 'FOLLOWING' : 'FOLLOW' }</ButtonFollow>
    </Wrapper>
)
