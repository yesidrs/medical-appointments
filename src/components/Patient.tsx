import { IPet } from '../types/pet'

const Patient = ({ pet }: { pet: IPet }) => {
  const { name, owner, email, discharge, symptoms } = pet

  return (
    <div className="mb-5 md:ml-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Alta: <span className="font-normal normal-case">{discharge}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{symptoms}</span>
      </p>
    </div>
  )
}

export default Patient
