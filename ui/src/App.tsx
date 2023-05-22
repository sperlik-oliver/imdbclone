import React from 'react';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/layout/layout';
import UserContainer from './components/user/user.context';
import { ToastContainer } from 'react-toastify';

const App = () => 
<UserContainer>
  <Layout/>
  <ToastContainer theme='dark'/>
</UserContainer>
    
export default App
