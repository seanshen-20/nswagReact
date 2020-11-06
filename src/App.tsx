import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {WeatherForecastApi} from './out/api'

function App() {
  const [a, setA] = useState('a' as any)
  useEffect(
    () => {
      async function bb() {
        var a = await new WeatherForecastApi().weatherForecastGet()
        console.log(a.data)
        console.log('heelo')
      }
      bb()
  }, [])
  return (
    <div className="App">
      {a}
    </div>
  );
}

export default App;
