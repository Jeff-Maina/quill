import { Route, Switch } from 'react-router-dom';
import './App.css';
import Notification from './components/notification/notification';
import LoginPage from './pages/login/login';
import SignupPage from './pages/signup/signup';

function App() {
  return (
    <div className="App">

      <Notification/>

      <Switch>

        <Route exact path='/login'>
          <LoginPage/>
        </Route>

        <Route exact path='/signup'>
          <SignupPage/>
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
