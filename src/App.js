import React from 'react';
import './App.css';
import theImage from './kerkennah2.jpg';

function App() {
  return (
<>
<div style={{border:'solid 2px rgba(190, 35, 35, 0.418)', maxWidth:'100vw'}}>
    <h1 className='title red'>Coucher de soleil "Kerkennah"</h1>
    <br/>
    <img className='img' src="/image1/kerkennah1.jpg" alt="img1"/>
    <br/>
    <img className='img' src={theImage} alt="img2"/>
    </div>
    <video className='video'style={{width:'50vw', height:'30vw'}} controls>
    <source src="/videos/coucher-de-soleil.mp4" type="video/mp4"></source>
    </video>
</>
  );
}
export default App;
