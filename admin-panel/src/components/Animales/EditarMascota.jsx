import React, { useState } from 'react'

//IMPORT MODAL
import ReusableModal from '../Modal'

const EditarAnimal = () => {
    const [open,setOpen]=useState(false);
    
    const handleUpdateAnimal= () =>{
        console.log("Animal actualizado")
    }
    return (
        <>
            <button onClick={()=>setOpen(true)} className="bg-[var(--azuloscuro)] hover:shadow-xl text-white px-3 py-1 rounded cursor-pointer">Editar</button>

            <ReusableModal
                open={open}
                onClose={()=>setOpen(false)}
                title="Editar Animal"
                subtitle="Actualiza la información de esta mascota"
                onConfirm={handleUpdateAnimal}
                confirmText="Guardar Cambios"
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

export default EditarAnimal