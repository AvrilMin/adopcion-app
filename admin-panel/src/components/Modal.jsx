import React from 'react'
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { XMarkIcon } from "@heroicons/react/24/outline";

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
    	<Dialog open={open}>
			<DialogHeader>
				<Typography>
					{title}
				</Typography>
				{subtitle && (
					<Typography>
						{subtitle}
					</Typography>
				)}
				<IconButton
					size="sm"
					variant="text"
					className="!absolute right-3.5 top-3.5"
					onClick={onClose}
				>
				<XMarkIcon className="h-4 w-4 stroke-2" />
				</IconButton>
			</DialogHeader>
			<DialogBody>
				{children}
			</DialogBody>
			<DialogFooter>
				<Button onClick={onConfirm}>{confirmText}</Button>
				{cancelText && (
					<Button onClick={onClose}>
						{cancelText}
					</Button>
				)}
			</DialogFooter>
		</Dialog>
  	)
}

export default Modal