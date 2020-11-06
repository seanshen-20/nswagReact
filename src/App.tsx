import React, { useEffect, useState } from 'react';
import {WeatherForecastApi} from './out/api'
import { Container } from 'semantic-ui-react';
import { Nav } from './components/header/Nav';
import { Route, Switch } from 'react-router-dom';
import { Shop } from './components/main/shop/Shop';
import { Login } from './components/main/auth/Login';
import { Cart } from './components/main/cart/Cart';

function App(): JSX.Element {
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
    <Container>
      <Nav />
      <Switch>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
      </Switch>
    </Container>
  );
}

export default App;
