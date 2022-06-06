import { Routes as IRoutes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import MaestroProductos from "./screens/MaestroProductos/Login/MaestroProductos";
import Carro from "./components/Carro";
const Routes = () => {
  return (
    <IRoutes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/cart" exact element={<Carro />} />
      <Route
        path="/product-master"
        exact
        element={
          <ProtectedRoute>
            <MaestroProductos />
          </ProtectedRoute>
        }
      />
    </IRoutes>
  );
};

export default Routes;
