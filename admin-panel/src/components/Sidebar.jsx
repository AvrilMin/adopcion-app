import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  	MdDashboard,
  	MdPets,
  	MdAssignment,
  	MdInventory2,
  	MdShoppingBag,
  	MdLogout
} from "react-icons/md";

const Sidebar = () => {
  	return (
		<aside className="bg-sidebar w-64 min-h-screen px-4 text-sidebar flex flex-col">
			<h2 className="text-2xl font-bold text-center my-11">Admin</h2>

			<nav className="flex flex-col gap-10 flex-1 justify-center">
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
					<MdPets size={20} /> Gestionar Animales
				</NavLink>

				<NavLink
				to="/admin/versolicitudes"
				className="flex btn-sinActivar btn-Activado font-semibold items-center justify-start rounded-[10px] gap-2 p-3"
				>
					<MdAssignment size={20} /> Ver Solicitudes
				</NavLink>

				<NavLink
				to="/admin/gestionarproductos"
				className="flex btn-sinActivar btn-Activado font-semibold items-center justify-start rounded-[10px] gap-2 p-3"
				>
					<MdInventory2 size={20} /> Gestionar Productos
				</NavLink>

				<NavLink
				to="/admin/verpedidos"
				className="flex btn-sinActivar btn-Activado font-semibold items-center justify-start rounded-[10px] gap-2 p-3"
				>
					<MdShoppingBag size={20} /> Ver Pedidos
				</NavLink>

				
			</nav>
			<Link
			to="/admin/cerrarsesion"
			className="flex justify-center font-semibold w-full rounded-[10px] p-3 items-center gap-2 my-6"
			>
				<MdLogout size={20} /> Cerrar Sesión
			</Link>
		</aside>
  	);
};

export default Sidebar;
