import './App.css';
import Home from './components/home/home'
import {Route, Redirect, Switch, BrowserRouter} from 'react-router-dom'
import Login from './components/auth/loginForm'
import Register from './components/auth/register'
import NotFound from './components/requests/notFound'
import Menu from './components/menu/Menu';
import Movie from './components/movie/movie'
import Tv from './components/movie/tv';
import List from './components/movie/list';
import Results from './components/menu/result';
import AuthProvider from './components/auth/AuthContext';
import PrivateRoute from './components/requests/privateRoute';

function App() {
  return (
    
    <AuthProvider>
    <BrowserRouter>  
      <Switch>
        <Route exact path='/' component={Home}></Route>
         <Route path='/login' component={Login}></Route>
         <Route path='/register' component={Register}></Route>
         <PrivateRoute exact path='/menu' component={Menu}></PrivateRoute>
         <PrivateRoute exact path='/movie/:id' component={Movie}></PrivateRoute>
         <PrivateRoute exact path='/tv/:id' component={Tv}></PrivateRoute>
         <PrivateRoute exact path='/favorite' component={List}></PrivateRoute>
         <PrivateRoute exact path='/result/:keyword' component={Results}></PrivateRoute>
         <Route path="/not-found" component={NotFound}></Route>
         <Redirect from="/" exact to="/"/>
         <Redirect to="not-found" /> 
       </Switch>
     </BrowserRouter>
     </AuthProvider>
  )
}

export default App;
