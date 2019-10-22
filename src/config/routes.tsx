import * as React from 'react';
import { App } from '../view';
import { UserListFeature } from '../view/userList';
import { ProfileContainer } from '../view/userList/components/Profile'

const NotFound: React.SFC<{}> = () => (<div>Not found</div>);

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: UserListFeature
      },
      {
        path: '/user/:idUser',
        component: ProfileContainer
      },
      {
        path: '*',
        component: NotFound,
      },
    ]
  }
];

export { routes }
