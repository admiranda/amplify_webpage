import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <div style={{ backgroundColor: '#000' }}>
        <Navbar />
        
        <Parallax y={[-100, 100]} tagOuter="div">
          <div style={{ height: '500px', position: 'relative' }}>
            <img src="https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Parallax" style={{ width: '100%', height: 'auto' }} />
            <div className="parallax-text">Diseño en Ingeniería</div>
          </div>
        </Parallax>

        <div style={{ height: '500px', background: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Bloque 2 sin efecto
        </div>

        <Parallax y={[100, -100]} tagOuter="div">
          <div style={{ height: '500px', background: 'black', position: 'relative' }}>
            <div className="parallax-text">Innovación y Creatividad</div>
          </div>
        </Parallax>

        <div style={{ height: '2000px', background: 'black' }}>
          Desplázate hacia abajo para probar el efecto.
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;



