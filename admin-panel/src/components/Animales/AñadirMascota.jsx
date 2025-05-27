import React, { useState } from 'react'

//IMPORT MODAL
import ReusableModal from '../Modal'

import { IoMdAdd } from "react-icons/io";


const AñadirMascota = () => {
    const [open,setOpen]=useState(false);
    
    const handleAddMascota= () =>{
        console.log("Animal agregado")
    }
    return (
        <>
            <button onClick={()=>setOpen(true)} className="flex justify-center items-center gap-1 px-10 py-2 text-[15px] hover:shadow-xl font-semibold bg-green-500 text-white rounded-lg shadow-sm hover:bg-opacity-90 cursor-pointer">
				<IoMdAdd size={20} className="text-white font-bold" /> Añadir mascota
			</button>

            <ReusableModal
                open={open}
                onClose={()=>setOpen(false)}
                title="Añadir mascota"
                subtitle="Agrega una nueva mascota"
                onConfirm={handleAddMascota}
                confirmText="Añadir"
				positionButtons="justify-end"
				confirmButtonStyle="bg-[var(--color-celeste)]"
                cancelText="Cancelar"
            >
                {/* Contenido dinámico */}
				<div className='flex flex-col gap-4'>
					<div className='flex flex-col gap-1'>
						<label className='labelText font-bold'>Nombre</label>
						<input type="text" className='border border-gray-400 rounded-[5px] h-8 px-2' />
					</div>

					<div className='flex flex-col gap-1'>
						<label className='labelText font-bold'>Fecha de Nacimiento</label>
						<input type="date" className='border border-gray-400 rounded-[5px] h-8 px-2' />
					</div>

					<div className='flex flex-col gap-1'>
						<label className='labelText font-bold'>Animal</label>
						<select type="text" className='border border-gray-400 rounded-[5px] h-8 px-2' >
							<option value="perro">Perro</option>
							<option value="gato">Gato</option>
						</select>
					</div>

					<div className='flex flex-col gap-1'>
						<label className='labelText font-bold'>Sexo</label>
						<select type="text" className='border border-gray-400 rounded-[5px] h-8 px-2' >
							<option value="Perro">Hembra</option>
							<option value="Perro">Macho</option>
						</select>
					</div>
					<div className='flex flex-col gap-1'>
						<label className='labelText font-bold'>Comportamiento</label>
						<select type="text" className='border border-gray-400 rounded-[5px] h-8 px-2' >
							<option value="lento">Lento</option>
							<option value="cariñoso">Cariñoso</option>
						</select>
					</div>
					<div className='flex flex-col gap-1'>
						<label className='labelText font-bold'>Salud</label>
						<select type="text" className='border border-gray-400 rounded-[5px] h-8 px-2' >
							<option value="vacunado">Vacunado</option>
							<option value="desparasitado">Desparasitado</option>
							<option value="esterilizado">Esterilizado</option>
						</select>
					</div>
                	


				</div>

            </ReusableModal>
        </>
    )
}

export default AñadirMascota