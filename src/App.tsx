import { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Patients from './components/Patients'

import { IPet } from './types/pet'

function App() {
  const [pets, setPets] = useState<IPet[]>([])

  return (
    <div className="container mx-auto mt-12">
      <Header />
      <div className="mt-12 flex flex-col max-sm:items-center md:flex-row">
        <Form setPets={setPets} />
        <Patients pets={pets} />
      </div>
    </div>
  )
}

export default App
