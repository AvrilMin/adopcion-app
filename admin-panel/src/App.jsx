
import './App.css'

import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Lazy loading de las páginas hijas
const Dashboard = lazy(() => import('./pages/Dashboard'));
const GestionarAnimales = lazy(() => import('./pages/GestionarAnimales'));
const VerSolicitudes = lazy(() => import('./pages/Solicitudes/VerSolicitudes'));

import AdminLayout from "./navigation/AdminLayout";


function App() {

	return (
		<Routes>
			<Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
			
	      	<Route path="/admin" element={<AdminLayout />}>
	        	<Route path="dashboard" element={<Dashboard />} />
				<Route path="gestionarAnimales" element={<GestionarAnimales />} />
				<Route path="versolicitudes" element={<VerSolicitudes />} />
	      	</Route>
	    </Routes>
	)
}

export default App
