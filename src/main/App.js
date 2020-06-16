import React from 'react';
import Rotas from './rotas';
import ProvedorAutenticacao from './provedorAutenticacao'
import 'toastr/build/toastr.min.js';
import Navbar from '../components/navbar';

import 'bootswatch/dist/materia/bootstrap.css';
import '../custom.css';
import 'toastr/build/toastr.css';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


class App extends React.Component {
  render(){
      return (
        <ProvedorAutenticacao>
        <Navbar/>
        <div className="container">
             <Rotas />
         </div>
         </ProvedorAutenticacao>
       )
}
}

export default App;