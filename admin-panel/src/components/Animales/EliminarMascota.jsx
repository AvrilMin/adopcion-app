import React,{useState} from 'react'

//IMPORT MODAL
import ReusableModal from '../Modal'

const EliminarAnimal = () => {
	const [open,setOpen]=useState(false);
		
	const handleDeleteAnimal= () =>{
		console.log("Animal eliminado")
	}
  	return (
		<>
			<button onClick={()=>setOpen(true)} className="bg-red-500 text-white px-3 py-1 hover:shadow-xl rounded cursor-pointer">Eliminar</button>

            <ReusableModal
                open={open}
                onClose={()=>setOpen(false)}
                title="Eliminar Mascota"
                subtitle="¿Seguro que desea eliminar esta mascota?"
                onConfirm={handleDeleteAnimal}
				confirmButtonStyle="bg-red-500"
				positionButtons="justify-center"
                confirmText="Eliminar" 
                cancelText="Cancelar"
            >

            </ReusableModal>
		</>
 	)
}

export default EliminarAnimal