import react, {Fragment} from 'react';
import Pets from './components/Pets';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {




  return ( 
    <Fragment>
      <ToastContainer/> 
      <Pets/>
         
        
    </Fragment>    
  );
}

export default App;
