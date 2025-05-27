import React from 'react'
import { IoMdClose } from "react-icons/io";

const Modal = ({
	open, 
	onClose, 
	title, 
	subtitle,
	children, 
	onConfirm, 
	confirmText,
	confirmButtonStyle,
	positionButtons,
	cancelText}) => {

	if (!open) return null;
  	return (

    	<div className="absolute inset-0 flex items-center justify-center bg-black/60 z-50">
		  	<div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6">
		    
			    {/* Botón de cerrar */}
			    <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl cursor-pointer hover:bg-gray-200 rounded-[10px] p-1">
			      	<IoMdClose />
			    </button>

			    <div className='flex flex-col text-center'>
			      	<h2 className="titleCards">{title}</h2>
			      	<p className="subtitleCards">{subtitle}</p>
			    </div>

			    <div>{children}</div>

			    <div className={`flex ${positionButtons} gap-2 mt-4`}>
			      	<button onClick={onClose} className="px-4 py-2 rounded bg-gray-300 cursor-pointer hover:shadow-xl text-gray-600 font-medium text-[17px]">
			        	{cancelText}
			      	</button>
			      	<button
			        	onClick={onConfirm}
			            className={`px-4 py-2 rounded text-white font-medium cursor-pointer hover:shadow-xl text-[17px] ${confirmButtonStyle}`}
			        >
			            {confirmText}
          			</button>
			    </div>
		  	</div>
		</div>

  	)
}

export default Modal