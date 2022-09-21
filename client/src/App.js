import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import CreateCustomer from './components/CreateCustomer';
import CreateRep from './components/CreateRep'
import Main from './components/Main'
import EditRep from './components/EditRep';
import EditCustomer from './components/EditCustomer';
import CustomerDetails from './components/CustomerDetails';
import RepTable from './components/RepTable';

function App() {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/customer/new' element={<CreateCustomer/>}/>
        <Route path='/customer/edit' element={<EditCustomer/>}/>
        <Route path='/customer/:id' element={<CustomerDetails/>}/>
        <Route path='/all/reps' element={<RepTable/>}/>
        <Route path='/rep/new' element={<CreateRep/>}/>
        <Route path='/rep/edit' element={<EditRep/>}/>
      </Routes>
    </div>
  );
}

export default App;
