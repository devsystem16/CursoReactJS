import React from 'react';
import './App.css';
import Header  from './components/Header/Header'
import Formulario  from './components/Formulario'
function App() {


    const  vistaFormulario  =  ({nombre,apellido,sexo}) => {
      console.log(nombre,apellido,sexo)
   }
  return (
    <div className="App">
     <Header title ="CURSO REACT"></Header>
     <Formulario vistaFormulario={vistaFormulario}></Formulario>
    </div>
  );
}

export default App;
