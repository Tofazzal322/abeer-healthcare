import './App.css';
import AuthProvider from "./Context/AuthProvider";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Services from './Pages/Services/Services';
import Doctors from './Pages/Doctors/Doctors';
import MenuBar from './Shared/MenuBar/MenuBar';
import Footer from './Shared/Footer/Footer';
import About from './Pages/About/About';
import Mission from './Pages/Mission/Mission';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Appointment from './Pages/Appointment/Appointmnet';
import NotFound from './Pages/NotFound/NotFound';
// import ReactDOM from 'react-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <MenuBar/>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/Services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute  path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/mission">
              <Mission></Mission>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
