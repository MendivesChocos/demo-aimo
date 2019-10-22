import * as React from 'react';
import Logo  from '../Logo'

import { 
    Wrapper,
    InnerWrapper,
    Title
} from './styled';

export const Header = ({
    totalFollowing
}) => (
    <Wrapper>
        <InnerWrapper>
            <Logo />
            <Title>FOLLOWING {totalFollowing}</Title>
        </InnerWrapper>
    </Wrapper>
)