import { IPet } from '../types/pet'

const Patient = ({ pet, setPets }: { pet: IPet; setPets: Function }) => {
  const { name, owner, email, discharge, symptoms, id } = pet

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      setPets((pets: IPet[]) => pets.filter((pet: IPet) => pet.id === id))
    }
  }

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
      <div className="flex justify-between text-sm mt-5">
        <button
          className="uppercase bg-indigo-600 text-white font-bold py-2 px-8 rounded-md 
          hover:bg-indigo-700 cursor-pointer transition-colors"
        >
          editar
        </button>
        <button
          className="uppercase bg-red-600 text-white font-bold py-2 px-5 rounded-md 
          hover:bg-red-700 cursor-pointer transition-colors"
        >
          eliminar
        </button>
      </div>
    </div>
  )
}

export default Patient
