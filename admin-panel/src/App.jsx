
import './App.css'

import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Lazy loading de las páginas hijas
const Dashboard = lazy(() => import('./pages/Dashboard'));
const GestionarAnimales = lazy(() => import('./pages/GestionarAnimales'));
const VerSolicitudes = lazy(() => import('./pages/Solicitudes/VerSolicitudes'));
const GestionarProductos = lazy(() => import('./pages/GestionarProductos'));
const VerPedidos = lazy(() => import('./pages/VerPedidos'));

import AdminLayout from "./navigation/AdminLayout";


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
