import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import TestStart from './views/TestStart';
import Test from './views/Test';
import TestResult from './views/TestResult';
import Subscription from './views/Subscription';
import PlantsDetail from './views/PlantsDetail';
import Error from './views/Error';
import Nav from './components/Nav/Nav';
import ScrollTop from './components/ScrollTop';
import SearchPlant from './views/SearchPlant';
import SearchResult from './views/SearchResult';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <ScrollTop />
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/test-start'} component={TestStart} />
        <Route exact path={'/test'} component={Test} />
        <Route exact path={'/test/result/:id'} component={TestResult} />
        <Route exact path={'/plants'} component={SearchPlant} />
        <Route exact path={'/search'} component={SearchResult} />
        <Route exact path={'/plants/detail/:id'} component={PlantsDetail} />
        <Route exact path={'/subscription'} component={Subscription} />
        <Route exact component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
