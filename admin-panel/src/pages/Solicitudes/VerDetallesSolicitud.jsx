import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";

//IMPORT MODAL
import ReusableModal from '../../components/Modal';

const VerDetallesSolicitud = () => {
	const [open, setOpen] = useState(false);
	const [paso, setPaso] = useState(1);
	const [accion, setAccion] = useState('');
	const [mensaje, setMensaje] = useState('');

	const handleAccion = (accionSeleccionada) => {
		setAccion(accionSeleccionada);
		setPaso(2);
	};

	const handleConfirmar = () => {
		console.log(`Solicitud marcada como ${accion}`);
		console.log(`Mensaje: ${mensaje}`);
		setOpen(false);
		setPaso(1);
		setAccion('');
		setMensaje('');
	};

	return (
		<div>
			<button
				onClick={() => setOpen(true)}
				className='cursor-pointer rounded-sm bg-[var(--color-celeste)] p-2 text-white font-semibold'
			>
				[ Ver detalle ]
			</button>

			<ReusableModal
				open={open}
				onClose={() => {
					setOpen(false);
					setPaso(1);
					setAccion('');
					setMensaje('');
				}}
				onConfirm={paso === 2 ? handleConfirmar : undefined}
				confirmText={paso === 2 ? 'Enviar' : undefined}
				positionButtons="justify-center"
			>
				{/* Indicador de pasos */}
				<div className="flex justify-center gap-8 mb-8">
					{['Detalles', 'Mensaje'].map((nombrePaso, index) => {
						const step = index + 1;
						const activo = paso === step;
						return (
							<div key={nombrePaso} className="flex flex-col items-center justify-center">
								<div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${activo ? 'bg-[var(--color-celeste)] text-white border-[var(--color-celeste)]' : 'bg-white border-gray-400 text-gray-600'}`}>
									{step}
								</div>
								<span className={`mt-1 text-sm ${activo ? 'font-bold text-[var(--color-celeste)]' : 'text-gray-600'}`}>{nombrePaso}</span>
							</div>
						);
					})}
				</div>

				<div className='flex flex-col gap-4 text-start'>
					{paso === 1 ? (
						<>
							<p><strong>Mascota:</strong> Pepe</p>
							<p><strong>Usuario:</strong> Ana Torres - ana@gmail.com</p>
							<p><strong>Fecha Solicitud:</strong> 2025-05-18</p>
							<p><strong>Tiene niños:</strong> Sí</p>
							<p><strong>Tiene otros animales:</strong> No</p>
							<p><strong>Motivo:</strong> Deseo adoptar porque me gustan mucho los animales y quiero ayudar a un animalito a que pueda tener un hogar.</p>
							<p><strong>Dirección:</strong> Calle Sibelius 184, dpto 301</p>
							<p><strong>Disponibilidad de horario:</strong> Lunes a viernes de 2pm a 6pm</p>

							<div className="flex gap-4 mt-4 justify-center">
								<button
									className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-[15px] font-semibold cursor-pointer"
									onClick={() => handleAccion('Rechazada')}
								>
									Rechazar
								</button>
								<button
									className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-[15px] font-semibold cursor-pointer"
									onClick={() => handleAccion('Aprobada')}
								>
									Aprobar
								</button>
							</div>
						</>
					) : (
						<>


							<p>Vas a marcar esta solicitud como <strong>{accion}</strong>.</p>
							<label className="font-bold">Mensaje para el correo:</label>
							<textarea
								value={mensaje}
								onChange={(e) => setMensaje(e.target.value)}
								placeholder="Escribe aquí el mensaje..."
								className="border border-gray-400 rounded-[5px] h-24 px-2 py-1"
							/>
						</>
					)}
				</div>
			</ReusableModal>
		</div>
	);
};

export default VerDetallesSolicitud;
