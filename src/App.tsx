import { useState, useEffect } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Patients from './components/Patients'

import { IPet } from './types/pet'

const App = () => {
  const [pets, setPets] = useState<IPet[]>(() => {
    const storedValues = localStorage.getItem('pets')
    return storedValues ? JSON.parse(storedValues) : []
  })

  const [pet, setPet] = useState<IPet>({
    discharge: '',
    email: '',
    name: '',
    owner: '',
    symptoms: '',
    id: ''
  })

  useEffect(() => {
    localStorage.setItem('pets', JSON.stringify(pets))
  }, [pets])

  return (
    <div className="container mx-auto mt-12">
      <Header />
      <div className="mt-12 flex flex-col max-sm:items-center md:flex-row">
        <Form pet={pet} pets={pets} setPet={setPet} setPets={setPets} />
        <Patients pets={pets} setPet={setPet} setPets={setPets} />
      </div>
    </div>
  )
}

export default App
