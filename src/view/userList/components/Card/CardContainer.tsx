import * as React from 'react';
import { connect } from 'react-redux';
import { Card } from './Card';
import * as selectUser from '../../state/user/selectors';
import { toogleFollow, like, unlike } from '../../state/user/actions';

const mapStateToProps = (state, ownerProps) => ({
    user: selectUser.getUser(state)(ownerProps.index),
});

const mapDispatchToProps = dispatch => ({
    handleLike: (id: string) => dispatch(like(id)),
    handleUnlike: (id: string) => dispatch(unlike(id)),
    handleFollow: (id: string) => dispatch(toogleFollow(id))
});

export const CardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Card)
