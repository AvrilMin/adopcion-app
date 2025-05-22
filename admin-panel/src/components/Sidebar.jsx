import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

	const [openAnimales, setOpenAnimales]= useState(false);
	return (
	    <aside className="bg-sidebar w-64 min-h-screen py-6 px-4 text-sidebar">
	      	<h2 className="text-2xl font-bold mb-6">Admin</h2>
	      	<nav className="flex flex-col gap-4">
		        <Link to="/admin/dashboard" className="btn-sinActivar rounded-[10px] p-3 hover:btn-Activado transition">
					Dashboard
				</Link>
	        
				<div className='flex flex-col items-start'>
					<button 
						className=''
						onClick={()=>setOpenAnimales(!openAnimales)}>
							Animales
					</button>
					{openAnimales && (
						<Link to="/admin/dashboard" className="btn-sinActivar rounded-[10px] p-3 hover:bg-">
							Dashboard
						</Link>
					)}
				
				</div>
	      	</nav>
	    </aside>
	);
};

export default Sidebar;
