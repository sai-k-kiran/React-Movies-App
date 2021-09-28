import './App.css';
import Comp from './comp';
import requests from './requests';
import Home from './home'
import Footer from './footer';
import {Route, Redirect, Switch} from 'react-router-dom'
import Login from './components/loginForm'
import Register from './components/register'
import NotFound from './components/notFound'
import Menu from './Menu';
import Movie from './movie'

function App() {
  return (
    <div className="App">
    <Login />  
 {/*
     <Switch>
       <Route path='/login' component={Login}></Route>
       <Route path='/register' component={Register}></Route>
       <Route path='/:id' component={Movie}></Route>
       <Route path="/not-found" component={NotFound}></Route>
       <Redirect from="/" exact to="/"/>
       <Redirect to="not-found" /> 
     </Switch>
     <Footer /> */}
    </div>
  );
}

export default App;
