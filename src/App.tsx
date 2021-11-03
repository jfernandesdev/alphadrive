import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { LayoutContextProvider } from './contexts/LayoutContext';

import { Dashboard } from './pages/Dashboard';
import { Deleted } from './pages/Deleted';
import { Shared } from './pages/Shared';
import { Starred } from './pages/Starred';

export function App() {
  return (
    <BrowserRouter>
      <LayoutContextProvider>
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/deleted' component={Deleted} />
          <Route path='/shared' component={Shared} />
          <Route path='/starred' component={Starred} />
        </Switch>
      </LayoutContextProvider>
    </BrowserRouter>
  );
}