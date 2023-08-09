import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const MyComponent = () => {
    return (
        <ParallaxProvider>
            <div style={{ height: '100vh', overflowY: 'scroll' }}>
                <Parallax y={[50, -50]} tagOuter="figure">
                    <div style={{ height: '100vh', background: 'lightblue' }}>
                        Contenido superior
                    </div>
                </Parallax>
                <Parallax y={[-50, 50]} tagOuter="figure">
                    <div style={{ height: '100vh', background: 'lightcoral' }}>
                        Contenido inferior
                    </div>
                </Parallax>
            </div>
        </ParallaxProvider>
    );
}

export default MyComponent;
