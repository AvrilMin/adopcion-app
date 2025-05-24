import React from 'react'
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";



const Modal = ({
	open, 
	onClose, 
	title, 
	subtitle,
	children, 
	onConfirm, 
	confirmText="confirmar",
	cancelText="cancelar"}) => {

  	return (
    	<Dialog size="sm" open={open} className='fixed p-8 flex flex-col justify-center top-1/2 -translate-y-1/2 w-auto'>
			<DialogHeader className='flex flex-col'>
				<Typography className="h1">
					{title}
				</Typography>
				{subtitle && (
					<Typography className='h2'>
						{subtitle}
					</Typography>
				)}

			</DialogHeader>
			<DialogBody>
				{children}
			</DialogBody>
			<DialogFooter className='flex gap-4'>
				{cancelText && (
					<Button variant="text" onClick={onClose} className=' cursor-pointer'>
						{cancelText}
					</Button>
				)}

				<Button onClick={onConfirm} className='bg-green-500 text-white cursor-pointer'>{confirmText}</Button>

			</DialogFooter>
		</Dialog>
  	)
}

export default Modal