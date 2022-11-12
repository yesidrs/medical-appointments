const Success = ({ msg }: { msg: string }) => {
  return (
    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-5 rounded-md ease-in">
      {msg}
    </div>
  )
}

export default Success
