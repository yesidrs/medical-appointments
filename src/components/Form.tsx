import { useState } from 'react'
import { IPet } from '../types/pet'

const Form = ({ setPets }: { setPets: Function }) => {
  const [pet, setPet] = useState<IPet>({
    name: '',
    owner: '',
    email: '',
    discharge: '',
    symptoms: ''
  })

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const { name, owner, email, discharge, symptoms } = pet

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPet({ ...pet, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      setError(false)
      setPets((pets: IPet[]) => [...pets, pet])
      setSuccess(true)
    }
  }

  const validateForm = () => {
    const inputValues: string[] = [name, owner, email, discharge, symptoms]

    if (inputValues.includes('')) {
      console.log('All fields are required')
      return setError(true)
    }

    return true
  }

  return (
    <div className="w-11/12 md:w-1/2 lg:w-2/5 mb-10">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 mb-10 text-center">
        Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5">
        {error && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5 rounded-md"
            role="alert"
          >
            Todos los campos son obligatorios
          </div>
        )}
        {success && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-5 rounded-md">
            Paciente añadido correctamente
          </div>
        )}
        <div className="mb-5">
          <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">
            nombre mascota
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="pet"
            name="name"
            placeholder="Nombre de la Mascota"
            type="text"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
            nombre propietario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="owner"
            name="owner"
            placeholder="Nombre del Propietario"
            type="text"
            onChange={handleChange}
            value={owner}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            email
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="email"
            name="email"
            placeholder="Email Contacto Propietario"
            type="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="discharge" className="block text-gray-700 uppercase font-bold">
            Fecha de Alta
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="discharge"
            name="discharge"
            type="date"
            onChange={handleChange}
            value={discharge}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            name="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Síntomas"
            onChange={handleChange}
            value={symptoms}
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md 
          hover:bg-indigo-700 cursor-pointer transition-colors"
        >
          Agregar Paciente
        </button>
      </form>
    </div>
  )
}

export default Form
