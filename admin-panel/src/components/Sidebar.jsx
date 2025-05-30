import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  	MdDashboard,
  	MdPets,
  	MdAssignment,
  	MdShoppingBag,
  	MdLogout
} from "react-icons/md";

const Sidebar = () => {
  	return (
		<aside className="fixed bg-sidebar w-70 min-h-screen px-4 text-sidebar flex flex-col p-10">
			<h2 className="text-2xl font-bold text-center">Admin</h2>

			<nav className="flex flex-col gap-14 flex-1 justify-center">
				<NavLink
				to="/admin/dashboard"
				className="flex btn-sinActivar btn-Activado font-semibold items-center justify-start rounded-[10px] gap-2 p-3"
				>
					<MdDashboard size={20} /> Dashboard
				</NavLink>

				<NavLink
				to="/admin/gestionaranimales"
				className="flex btn-sinActivar btn-Activado font-semibold items-center justify-start rounded-[10px] gap-2 p-3"
				>
					<MdPets size={20} /> Gestionar Mascotas
				</NavLink>

				<NavLink
					to="/admin/versolicitudes"
					className="relative flex btn-sinActivar btn-Activado font-semibold items-center justify-start rounded-[10px] gap-2 p-3"
					>
					{/* Badge */}
					<span className="absolute top-1 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
						12
					</span>

					<MdAssignment size={20} />Ver Solicitudes de Adopción
				</NavLink>
				
			</nav>
			<Link
			to="/admin/cerrarsesion"
			className="flex justify-center font-semibold w-full rounded-[10px] p-3 items-center gap-2"
			>
				<MdLogout size={20} /> Cerrar Sesión
			</Link>
		</aside>
  	);
};

export default Sidebar;
