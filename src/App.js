import './App.css';
import logoDGQ from './images/dgq.png'

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          src={logoDGQ}
          className='logo'
          alt='Logo de DGGQ'
        />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
       
      </div>  
    </div>
  );
}

export default App;
