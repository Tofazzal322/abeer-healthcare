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
            <Route exact path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <SignUp></SignUp>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
