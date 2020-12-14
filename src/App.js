import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HeaderPage } from './components/HeaderPage/HeaderPage';
import { FooterPage } from './components/FooterPage/FooterPage';
import { CoursesPage } from './components/CoursesPage/CoursesPage';
import { MainPage } from './components/MainPage/MainPage';
import { RequestPage } from './components/RequestPage/RequestPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderPage loggedIn={true} />
        <Switch>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route exact path='/course-requests'>
            <CoursesPage />
          </Route>
          <Route path='/request'>
            <RequestPage />
          </Route>
        </Switch>
        <FooterPage />
      </BrowserRouter>
    </>
  );
}

export default App;
