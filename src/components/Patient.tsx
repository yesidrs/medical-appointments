const Patient = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">Wanda</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">Yesid Rodelo</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">yesidrodelo@gmail.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Alta: <span className="font-normal normal-case">Wanda</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{' '}
        <span className="font-normal normal-case">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem blanditiis illo
          consectetur provident, cumque quaerat sit corporis culpa repellat, assumenda quae.
          Dignissimos, ea deserunt at repudiandae a repellat nostrum.
        </span>
      </p>
    </div>
  )
}

export default Patient
