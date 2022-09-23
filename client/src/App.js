import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import CreateCustomer from './components/CreateCustomer';
import CreateRep from './components/CreateRep'
import Main from './components/Main'
import CustomerDetails from './components/CustomerDetails';
import RepTable from './components/RepTable';
import RepDetails from './components/RepDetails';

function App() {
  return (
    <div>


      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/customer/new' element={<CreateCustomer/>}/>
        <Route path='/customer/:id' element={<CustomerDetails/>}/>
        <Route path='/all/reps' element={<RepTable/>}/>
        <Route path='/rep/new' element={<CreateRep/>}/>
        <Route path='/rep/:id' element={<RepDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
