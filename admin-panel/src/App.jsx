
import './App.css'

//importación de las páginas
import Dashboard from './pages/Dashboard';
import GestionarAnimales from './pages/GestionarAnimales';
import VerSolicitudes from './pages/VerSolicitudes'
import GestionarProductos from './pages/GestionarProductos';
import VerPedidos from './pages/VerPedidos';


import AdminLayout from "./navigation/AdminLayout";
import { Navigate, Route, Routes } from 'react-router-dom';


function App() {

	return (
		<Routes>
			<Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
			
	      	<Route path="/admin" element={<AdminLayout />}>
	        	<Route path="dashboard" element={<Dashboard />} />
				<Route path="gestionarAnimales" element={<GestionarAnimales />} />
				<Route path="versolicitudes" element={<VerSolicitudes />} />
				<Route path="gestionarProductos" element={<GestionarProductos />} />
				<Route path="verpedidos" element={<VerPedidos />} />
	      	</Route>
	    </Routes>
	)
}

export default App
