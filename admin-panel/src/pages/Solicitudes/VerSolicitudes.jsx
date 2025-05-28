import React, { useState } from 'react';

//IMPORT VERDETALLE
import VerDetallesSolicitud from './VerDetallesSolicitud';

const VerSolicitudes = () => {

  	const [vista, setVista] = useState('Pendiente');
  	const [solicitudes, setSolicitudes] = useState([
    	{ id: 1, usuario: 'Ana Torres', animal: 'Pepe', fechaSolicitud: '2025-05-18', estado: 'Pendiente' },
    	{ id: 2, usuario: 'Luis Pérez', animal: 'Loki', fechaSolicitud: '2025-05-15', estado: 'Pendiente' },
    	{ id: 3, usuario: 'Marta Cruz', animal: 'Jaime', fechaSolicitud: '2025-05-10', estado: 'Pendiente' },
  	]);

  	// Paginación local
  	const [active, setActive] = useState(1);
  	const itemsPerPage = 6;
  	const indexOfLastItem = active * itemsPerPage;
  	const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  	const cambiarEstado = (id, nuevoEstado) => {
    	setSolicitudes(prev =>
      		prev.map(sol => (sol.id === id ? { ...sol, estado: nuevoEstado } : sol))
    	);
 	};

  	const solicitudesFiltradas = solicitudes.filter(sol => sol.estado === vista);
  	const currentSolicitudes = solicitudesFiltradas.slice(indexOfFirstItem, indexOfLastItem);

  	const next = () => {
    	if (active < Math.ceil(solicitudesFiltradas.length / itemsPerPage)) setActive(active + 1);
  	};

  	const prev = () => {
    	if (active > 1) setActive(active - 1);
  	};

  	return (
    <div className="min-h-screen">
      	<h1 className="h1 font-bold mb-8">Solicitudes de Adopción 📄</h1>

      	<div className="flex gap-4 mb-6">
		  	{['Pendiente', 'Aprobada', 'Rechazada'].map((estado) => (
			    <button
			      key={estado}
			      onClick={() => { setVista(estado); setActive(1); }}
			      className={`btn-soli-estados ${vista === estado ? 'btn-soli-activo' : ''}`}
			    >
			      {estado}
			    </button>
		  	))}
		</div>

      	<div className="w-full overflow-x-auto max-h-[800px] overflow-y-auto shadow-md rounded-lg mt-12">
	        <table className="min-w-full text-sm text-left bg-white">
		        <thead className="text-xs text-center text-[var(--azuloscuro)] uppercase bg-gray-100 sticky top-0 z-10">
		            <tr>
		              <th className="px-6 py-3">ID</th>
		              <th className="px-6 py-3">Usuario</th>
		              <th className="px-6 py-3">Animal</th>
		              <th className="px-6 py-3">Fecha Solicitud</th>
		              <th className="px-6 py-3">Estado</th>
		              <th className="px-6 py-3">Detalle</th>
		            </tr>
		        </thead>
	          	<tbody>
		            {currentSolicitudes.map((sol) => (
		              	<tr key={sol.id} className="border-b hover:bg-gray-50">
		                	<td className="px-6 py-4 text-center">{sol.id}</td>
		                	<td className="px-6 py-4 text-center">{sol.usuario}</td>
		                	<td className="px-6 py-4 text-center">{sol.animal}</td>
		                	<td className="px-6 py-4 text-center">{sol.fechaSolicitud}</td>
		                	<td className="px-6 py-4 text-center">{sol.estado}</td>
		                	<td className="px-6 py-4 text-center">
		                  		{vista === 'Pendiente' && (
				                    <div className="flex gap-2 justify-center">
										<VerDetallesSolicitud />

				                      {/*<button
				                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
				                        onClick={() => cambiarEstado(sol.id, 'Aprobada')}
				                      >
				                        Aprobar
				                      </button>
				                      <button
				                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
				                        onClick={() => cambiarEstado(sol.id, 'Rechazada')}
				                      >
				                        Rechazar
				                      </button>*/}
				                    </div>
		                  		)}
		                	</td>
		              	</tr>
		            ))}
	          	</tbody>
	        </table>
      	</div>

      {/* Paginación */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={prev}
          disabled={active === 1}
          className={`px-2 py-1 rounded border ${active === 1 ? 'text-gray-400 border-gray-300' : 'text-gray-700 border-gray-400 hover:bg-gray-100'}`}
        >←</button>
        <span className="text-sm text-gray-600">
          Página <strong>{active}</strong> de <strong>{Math.ceil(solicitudesFiltradas.length / itemsPerPage)}</strong>
        </span>
        <button
          onClick={next}
          disabled={active === Math.ceil(solicitudesFiltradas.length / itemsPerPage)}
          className={`px-2 py-1 rounded border ${active === Math.ceil(solicitudesFiltradas.length / itemsPerPage) ? 'text-gray-400 border-gray-300' : 'text-gray-700 border-gray-400 hover:bg-gray-100'}`}
        >→</button>
      </div>
    </div>
  );
};

export default VerSolicitudes;
