import { IPet } from '../types/pet'
import Patient from './Patient'

const Patients = ({ pets }: { pets: IPet[] }) => {
  return (
    <div className="w-11/12 md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus <span className="font-bold text-indigo-600">Pacientes y Citas</span>
      </p>
      {pets.map((pet: IPet) => (
        <Patient pet={pet} />
      ))}
    </div>
  )
}

export default Patients
