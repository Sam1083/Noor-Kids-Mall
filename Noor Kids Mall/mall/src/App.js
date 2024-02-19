import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgetPassword from './components/ForgotPassword';



 

function App() {
  return (
    <>
  

   

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/ForgotPassword" element={<ForgetPassword />}></Route>

        </Routes>
      
    </>
  );
}

export default App;
