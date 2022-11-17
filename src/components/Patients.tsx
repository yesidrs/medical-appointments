import { IPet } from '../types/pet'
import Patient from './Patient'

const Patients = ({
  pets,
  setPet,
  setPets,
  setIsEditing
}: {
  pets: IPet[]
  setPet: Function
  setPets: Function
  setIsEditing: Function
}) => {
  return (
    <div className="w-11/12 md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      {pets && pets.length > 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Administra tus <span className="font-bold text-indigo-600">Pacientes y Citas</span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Los Pacientes Agregados{' '}
            <span className="font-bold text-indigo-600">aparecerán en este lugar</span>
          </p>
        </>
      )}
      {pets.map((pet: IPet) => (
        <Patient
          pet={pet}
          pets={pets}
          setPet={setPet}
          setPets={setPets}
          setIsEditing={setIsEditing}
          key={pet.id}
        />
      ))}
    </div>
  )
}

export default Patients
