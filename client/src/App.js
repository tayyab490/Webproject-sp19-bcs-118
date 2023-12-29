import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Provider} from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Services from './pages/Services';
import Articles from './pages/Articles';
import Mission from './pages/Mission';
import Contact from './pages/Contact';
import CustomNav from './components/CustomNav'
import ToastCarousel from './components/Footer/Footer';
import Login from './components/Login and Signup/Login'

import Profile from './components/Profile/Profile';
import Signin from './components/Login and Signup/Signin';
import Store from './Store';
import Dashboard from './components/Dashboard';

import PrivateRoute from './private/PrivateRoute';
import RouteLinks from './private/RouteLinks';
import NotFound from './components/NotFound';


function App() {
  return (
    <Provider store={Store}>
    <div className="App">  
      <BrowserRouter>
      <CustomNav />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/services" element={<Services />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />

        <Route element={<RouteLinks />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path='/notfound' element={<NotFound />} />
      </Routes>
      <ToastCarousel/>
    </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
