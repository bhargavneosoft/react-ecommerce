import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = (
  {
    component: Component,
    ...parentProps
  }
) => (
  <Route
    {...parentProps}
    render={props => {
      console.log('props---', props);
      const data = JSON.parse(localStorage.getItem("user"));
      if (data) {
        const {user} = data;
        return (
          <Component
            {...props}
            userDetails={user || {}}
          />
        );
      } else {
        return (
          <Redirect
            to={{pathname: "/login", state: {from: props.location}}}
          />
        );
      }
    }}
  />
);
