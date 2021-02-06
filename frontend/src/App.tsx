import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import Test from './views/Test';
import TestResult from './views/TestResult';
import Subscription from './views/Subscription';
import Plants from './views/Plants';
import PlantsDetail from './views/PlantsDetail';
import Error from './views/Error';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/test'} component={Test} />
        <Route exact path={'/test/result/:id'} component={TestResult} />
        <Route exact path={'/plants'} component={Plants} />
        <Route exact path={'/plants/detail/:id'} component={PlantsDetail} />
        <Route exact path={'/subscription'} component={Subscription} />
        <Route exact component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;