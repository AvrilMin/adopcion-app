import React, { useState } from 'react'

//IMPORT MODAL
import ReusableModal from '../Modal'
import { Input, Select, Textarea } from '@material-tailwind/react';

const Editar = () => {
    const [open,setOpen]=useState(false);
    
    const handleUpdateAnimal= () =>{
        console.log("Animal actualizado")
    }
    return (
        <>
            <button onClick={()=>setOpen(true)} className="bg-[var(--color-celeste)] text-white px-3 py-1 rounded cursor-pointer">Editar</button>

            <ReusableModal
                open={open}
                onClose={()=>setOpen(false)}
                title="Editar Animal"
                subtitle="Actualiza la información de este animal"
                onConfirm={handleUpdateAnimal}
                confirmText="Actualizar"
                cancelText="Cancelar"
            >
                {/* Contenido dinámico */}
                <Input label="Nombre" />
                <Select label="Categoría">
                <Option>Clothing</Option>
                <Option>Fashion</Option>
                <Option>Watches</Option>
                </Select>
                <div className="flex gap-2">
                <Input label="Peso" />
                <Input label="Tamaño" />
                </div>
                <Textarea label="Descripción" />

            </ReusableModal>
        </>
    )
}

export default Editar