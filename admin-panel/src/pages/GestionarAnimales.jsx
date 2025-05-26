import React, { useState } from 'react';
import cat1 from '../components/cat1.jpeg';

//import EditarAnimal
import EditarAnimal from '../components/Animales/EditarAnimal';
import EliminarAnimal from '../components/Animales/EliminarAnimal';

const animalList = [
  	{ id: 1, nombre: 'Pelusa', edad: '2 años', especie: 'Felino', sexo: 'Hembra', comportamiento: 'Tranquilo', salud: 'Buena', fechaNacimiento: '2018-03-12', imagen: cat1 },
  	{ id: 2, nombre: 'Max', edad: '4 años', especie: 'Canino', sexo: 'Macho', comportamiento: 'Juguetón', salud: 'Excelente', fechaNacimiento: '2017-07-25', imagen: cat1 },
  	{ id: 3, nombre: 'Luna', edad: '3 años', especie: 'Felino', sexo: 'Hembra', comportamiento: 'Curiosa', salud: 'Regular', fechaNacimiento: '2019-05-15', imagen: cat1 },
  	{ id: 4, nombre: 'Pepe', edad: '3 años', especie: 'Felino', sexo: 'Hembra', comportamiento: 'Curiosa', salud: 'Regular', fechaNacimiento: '2019-05-15', imagen: cat1 },
  	{ id: 5, nombre: 'Pedrita', edad: '3 años', especie: 'Felino', sexo: 'Hembra', comportamiento: 'Curiosa', salud: 'Regular', fechaNacimiento: '2019-05-15', imagen: cat1 },
	{ id: 6, nombre: 'Pedrita', edad: '3 años', especie: 'Felino', sexo: 'Hembra', comportamiento: 'Curiosa', salud: 'Regular', fechaNacimiento: '2019-05-15', imagen: cat1 },
	{ id: 7, nombre: 'Pedrita', edad: '3 años', especie: 'Felino', sexo: 'Hembra', comportamiento: 'Curiosa', salud: 'Regular', fechaNacimiento: '2019-05-15', imagen: cat1 },
];

const GestionarAnimales = () => {

	//PAGINACION
  	const [active, setActive] = useState(1);
  	const itemsPerPage = 6;

  	const indexOfLastItem = active * itemsPerPage;
  	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  	const currentAnimals = animalList.slice(indexOfFirstItem, indexOfLastItem);

  	const next = () => {
    	if (active < Math.ceil(animalList.length / itemsPerPage)) setActive(active + 1);
  	};

  	const prev = () => {
    	if (active > 1) setActive(active - 1);
  	};

  	return (
		<div>
			<h1 className=" h1 mb-8">Gestionar Animales</h1>
		
			{/*BARRA DE BUSQUEDA Y BOTÓN AÑADIR */}
			<div className="w-full mb-8 flex flex-wrap justify-start items-center gap-4">
				<input
				type="text"
				placeholder="Buscar por nombre..."
				className="flex-grow max-w-md min-w-[250px] px-4 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--azuloscuro)] transition"
				/>
				<button className="px-6 py-2 text-sm font-semibold bg-[var(--color-celeste)] text-white rounded-lg shadow-sm hover:bg-opacity-90 cursor-pointer">
				Añadir
				</button>
			</div>

			{/*TABLA DE INFORMACIÓN */}
			<div className="w-full overflow-x-auto max-h-[800px] overflow-y-auto shadow-md rounded-lg">
				<table className="min-w-full text-sm text-left bg-white">
					<thead className="text-xs text-center text-[var(--azuloscuro)] uppercase bg-gray-100 sticky top-0 z-10">
						<tr>
						<th className="px-6 py-3">Foto</th>
						<th className="px-6 py-3">Nombre</th>
						<th className="px-6 py-3">Edad</th>
						<th className="px-6 py-3">Fecha Nacimiento</th>
						<th className="px-6 py-3">Especie</th>
						<th className="px-6 py-3">Sexo</th>
						<th className="px-6 py-3">Comportamiento</th>
						<th className="px-6 py-3">Salud</th>
						<th className="px-6 py-3">Acciones</th>
						</tr>
					</thead>
					<tbody>
						{currentAnimals.map((animal) => (
						<tr key={animal.id} className="border-b hover:bg-gray-50">
							<td className="px-6 py-4">
							<img src={animal.imagen} alt={animal.nombre} className="h-12 w-12 object-cover rounded cursor-pointer" />
							</td>
							<td className="px-6 py-4 text-center">{animal.nombre}</td>
							<td className="px-6 py-4 text-center">{animal.edad}</td>
							<td className="px-6 py-4 text-center">{animal.fechaNacimiento}</td>
							<td className="px-6 py-4 text-center">{animal.especie}</td>
							<td className="px-6 py-4 text-center">{animal.sexo}</td>
							<td className="px-6 py-4 text-center">{animal.comportamiento}</td>
							<td className="px-6 py-4 text-center">{animal.salud}</td>
							<td className="px-6 py-4">
							<div className="flex justify-center items-center gap-2">
								<EditarAnimal/>
								<EliminarAnimal/>
							</div>
							</td>
						</tr>
						))}
					</tbody>
				</table>
			</div>


			{/*BOTONES DE PAGINACIÓN*/}
			<div className="flex items-center justify-center gap-6 mt-6">
				<button
					onClick={prev}
					disabled={active === 1}
					className={`px-2 py-1 rounded border items-center cursor-pointer ${
						active === 1 ? 'text-gray-400 border-gray-300' : 'text-gray-700 border-gray-400 hover:bg-gray-100'
					}`}
					>
					←
				</button>
				<span className="text-sm text-gray-600">
					Página <strong className="text-gray-900">{active}</strong> de{' '}
					<strong className="text-gray-900">{Math.ceil(animalList.length / itemsPerPage)}</strong>
				</span>
				<button
					onClick={next}
					disabled={active === Math.ceil(animalList.length / itemsPerPage)}
					className={`px-2 py-1 rounded border cursor-pointer ${
						active === Math.ceil(animalList.length / itemsPerPage)
						? 'text-gray-400 border-gray-300'
						: 'text-gray-700 border-gray-400 hover:bg-gray-100'
					}`}
					>
					→
				</button>
			</div>

		</div>
  	);
};

export default GestionarAnimales;
