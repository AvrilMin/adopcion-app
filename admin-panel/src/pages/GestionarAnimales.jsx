import React from 'react';
import cat1 from '../components/cat1.jpeg';

const GestionarAnimales = () => {
  return (
    <div className="ml-70 p-6 min-h-screen overflow-hidden"> {/* ← Desplaza contenido por el sidebar fijo */}
      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar por nombre..."
        className="mb-4 p-2 border rounded w-full"
      />

      {/* Contenedor con scroll solo en la tabla */}
      <div className="w-full overflow-x-auto max-h-[800px] overflow-y-auto shadow-md rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-700 bg-white">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3">Foto</th>
              <th className="px-6 py-3">Nombre</th>
              <th className="px-6 py-3">Edad</th>
              <th className="px-6 py-3">Especie</th>
              <th className="px-6 py-3">Sexo</th>
              <th className="px-6 py-3">Comportamiento</th>
              <th className="px-6 py-3">Salud</th>
              <th className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Fila ejemplo */}
            <tr className="border-b hover:bg-gray-50">
              <td className="px-6 py-4">
                <img
                  src={cat1}
                  alt="ft1"
                  className="h-12 w-12 object-cover rounded cursor-pointer"
                />
              </td>
              <td className="px-6 py-4">Nombre</td>
              <td className="px-6 py-4">Edad</td>
              <td className="px-6 py-4">Especie</td>
              <td className="px-6 py-4">Sexo</td>
              <td className="px-6 py-4">Comportamiento</td>
              <td className="px-6 py-4">Salud</td>
              <td className="px-6 py-4 flex gap-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded">Editar</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">Eliminar</button>
              </td>
            </tr>
            {/* Agrega más filas */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GestionarAnimales;
