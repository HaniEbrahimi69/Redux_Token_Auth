import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { GUARD_SHOULD_AUTH, GUARD_SHOULD_NOT_AUTH } from 'configs/enums';
import routes, { paths } from 'configs/routes';
import { ACTION_CHANGE_PAGE } from 'store/actions';
import { dispatch, connect } from 'store'; 

function TokenGuardRoute(props) {
  const { token, ...restProps } = props;

  switch (props.guard) {
    case GUARD_SHOULD_NOT_AUTH: {
      if (token) return <Redirect to={paths.home.root} />;
      else return <Route {...restProps} />;
    }
    case GUARD_SHOULD_AUTH: {
      if (token) return <Route {...restProps} />;
      else return <Redirect to={paths.login.root} />;
    }
    default: {
      return <Route {...restProps} />;
    }

  }
}

const mapStateToPropsTokenGuardRoute = state => ({
  token: state.token
});

const ConnectedTokenGuardRoute = connect(mapStateToPropsTokenGuardRoute)(TokenGuardRoute);


function App() {
  return (
    <Suspense fallback={<>...</>}>
      <Switch>
        {routes().map((route) => (
          <ConnectedTokenGuardRoute
            key={route.path}
            exact={route.exact}
            path={route.path}
            render={() => {
              dispatch({
                type: ACTION_CHANGE_PAGE,
                payload: {
                  pageTitle: route.title
                }
              });
              const Page = route.component();
              return <Page />;
            }}
            guard={route.guard}
          />

        ))}
      </Switch>
    </Suspense>
  );
}

export default App;
