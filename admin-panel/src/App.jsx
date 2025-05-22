
import './App.css'
import Dashboard from './pages/Dashboard';
import AdminLayout from "./navigation/AdminLayout";
import { Navigate, Route, Routes } from 'react-router-dom';


function App() {

	return (
		<Routes>
			<Route path="/" element={<Navigate to="/admin/dashboard" replace />} />

	      	<Route path="/admin" element={<AdminLayout />}>
	        	<Route path="dashboard" element={<Dashboard />} />
	      	</Route>
	    </Routes>
	)
}

export default App
