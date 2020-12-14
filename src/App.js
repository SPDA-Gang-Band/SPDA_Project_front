import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { PageHeader } from './components/PageHeader/PageHeader';
import { PageFooter } from './components/PageFooter/PageFooter';
import { Courses } from './components/Courses/Courses';
import { MainPage } from './components/MainPage/MainPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <PageHeader loggedIn={true} />
        <Switch>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route exact path='/course-requests'>
            <Courses />
          </Route>
        </Switch>
        <PageFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
