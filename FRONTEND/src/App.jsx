import { BrowserRouter, Route, Routes } from "react-router-dom";
import PantallaLogin from "./screens/Login";
import Dashboard from "./screens/layouts/Dashboard";
import ListarC from "./screens/ListarClientes";
import ListarTick from "./screens/ListarTickets";
import ListarTec from "./screens/ListarTecnicos";
import VisualizarEspecificData from "./screens/Visualizar";
import Perfil from "./screens/VisualizarPerfil";
import PaginaNoEncontrada from "./screens/NotFound";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PantallaLogin />} />
				<Route path="/dashboard/*" element={
					<Routes>
						<Route element={<Dashboard />} >
						    <Route path="/perfil" index element={<Perfil />} />
							<Route path="/clientes" element={<ListarC />} />
							<Route path="/tecnicos" element={<ListarTec />} />
							<Route path="/tickets" element={< ListarTick />} />
							<Route path="/visualizar/:formulario/:id" element={<VisualizarEspecificData />} />
							<Route path="*" element={<PaginaNoEncontrada />} />
						</Route>
					</Routes>
				}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
