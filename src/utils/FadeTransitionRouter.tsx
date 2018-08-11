import { Location, Router } from '@reach/router';
import * as React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// tslint:disable-next-line:no-import-side-effect
import './fade.css';

interface FadeTransitionRouterProps {}

interface FadeTransitionRouterState {}

class FadeTransitionRouter extends React.Component<
  FadeTransitionRouterProps,
  FadeTransitionRouterState
> {
  public render(): JSX.Element {
    return (
      <Location>
        {({ location }) => (
          <TransitionGroup className="transition-group">
            <CSSTransition key={location.href} classNames="fade" timeout={500}>
              <div className="router">
                <Router location={location}>{this.props.children}</Router>
              </div>
            </CSSTransition>
          </TransitionGroup>
        )}
      </Location>
    );
  }
}

export default FadeTransitionRouter;
