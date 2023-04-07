import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login/login';
import SignupPage from './pages/signup/signup';

function App() {
  return (
    <div className="App">

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
