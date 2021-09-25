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

function App() {
  return (
    <div className="App">
      <Menu />
     {/* <Home />
     <Comp title='Top movies of all time' fetchUrl={requests.top} main_row={true}/>
     <Comp title='Playing Now' fetchUrl={requests.now_playing}/> 
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
