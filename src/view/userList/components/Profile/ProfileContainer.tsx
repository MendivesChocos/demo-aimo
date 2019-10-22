import * as React from 'react';
import { connect } from 'react-redux';
import { Profile } from './Profile';
import * as selectUser from '../../state/user/selectors'
import {fetchProfile } from '../../state/user/actions';

interface Props {
    isFetching?: boolean;
    fetchProfile?: Function;
}

class Container extends React.Component<Props> {
    componentWillMount() {
      const url = window.location.pathname;
      const user = url.split("/")[2];
      console.log("user componentWillMount", user);
      this.props.fetchProfile(user);
    }
    render(): JSX.Element {
      console.log("props", this.props);
        const { isFetching, ...nextProps } = this.props;
        console.log("nextProps", nextProps);
        if(isFetching) {
            return <div>cargando...</div>
        }
        return <Profile {...nextProps} />
    }
}

const mapStateToProps = state => ({
    data: selectUser.getProfile(state),
    isFetching: selectUser.getIsFetchingProfile(state)
});

const mapDispatchToProps = dispatch => ({
  fetchProfile: (user: string) => dispatch(fetchProfile(user))
});

export const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)