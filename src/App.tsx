import { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Patients from './components/Patients'

import { IPet } from './types/pet'

function App() {
  const [pets, setPets] = useState<IPet[]>([])
  const [pet, setPet] = useState<IPet>({
    discharge: '',
    email: '',
    name: '',
    owner: '',
    symptoms: '',
    id: ''
  })
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="container mx-auto mt-12">
      <Header />
      <div className="mt-12 flex flex-col max-sm:items-center md:flex-row">
        <Form pet={pet} setPet={setPet} setPets={setPets} isEditing={isEditing} />
        <Patients pets={pets} setPet={setPet} setPets={setPets} setIsEditing={setIsEditing} />
      </div>
    </div>
  )
}

export default App
