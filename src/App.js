import React, {Fragment} from 'react';
import Header from "./components/Hearder";
import ListaProducto from "./components/ListaProducto";
import { Switch, Route} from 'react-router-dom'
import NuevoProduto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";
function App() {
  return (
      <Fragment>
        <Header/>
        <Switch>
            <Route exact path="/" component={ListaProducto}/>
            <Route exact path="/productos/nuevo" component={NuevoProduto}/>
            <Route exact path="/productos/editar/:id" component={EditarProducto}/>
        </Switch>
      </Fragment>
  );
}

export default App;
