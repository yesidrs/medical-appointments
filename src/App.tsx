import Form from './components/Form'
import Header from './components/Header'
import Patients from './components/Patients'

function App() {
  return (
    <div className="container mx-auto mt-12">
      <Header />
      <div className="mt-12 flex flex-col max-sm:items-center md:flex-row">
        <Form />
        <Patients />
      </div>
    </div>
  )
}

export default App
