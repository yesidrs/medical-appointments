import { useState, useEffect } from 'react'
import { IPet } from '../types/pet'
import Error from './Error'
import Success from './Success'

const Form = ({
  pet,
  setPet,
  setPets,
  isEditing
}: {
  pet: IPet
  setPet: Function
  setPets: Function
  isEditing: boolean
}) => {
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const { name, owner, email, discharge, symptoms, id } = pet

  useEffect(() => {
    if (id === '') {
      setPet({ ...pet, id: generateId() })
    }
  }, [id])

  const generateId = () => {
    const id: string = Math.random().toString(36).substring(2)
    const date: string = Date.now().toString(36)
    const newId: string = id + date

    return newId
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setPet({ ...pet, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validateForm()) {
      setError(false)

      setPets((pets: IPet[]) => [...pets, pet])
      setPet({ name: '', owner: '', email: '', discharge: '', symptoms: '', id: '' })

      setSuccess(true)

      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    }
  }

  const validateForm = () => {
    const inputValues: string[] = [name, owner, email, discharge, symptoms]

    if (inputValues.includes('')) {
      setSuccess(false)
      setError(true)
      return
    }

    return true
  }

  return (
    <div className="w-11/12 md:w-1/2 lg:w-2/5 mb-10">
      <h2 className="font-black text-3xl text-center">Patients Follow-up</h2>
      <p className="text-lg mt-5 mb-10 text-center">
        Add Patients and <span className="text-indigo-600 font-bold">Manage Them</span>
      </p>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5">
        {error && <Error msg="All fields are required" />}
        {success && <Success msg="Patient added successfully" />}
        <div className="mb-5">
          <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">
            Pet's Name
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
            Owner's Name
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
            Discharge Date
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
            Symptoms
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
          {isEditing ? 'Edit Patient' : 'Add Patient'}
        </button>
      </form>
    </div>
  )
}

export default Form
