export default function Author() {
  return (
    <div className="max-w-3xl">
      <hr />
      <div className="my-5 mx-8 flex justify-items-start">
        <img
          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
          alt="avatar"
          className="mx-4 w-24 h-24 object-cover rounded-full hidden sm:block"
        />
        <div className="flex flex-col">
          <p className="text-gray-500 font-light tracking-wider">ECRIT PAR</p>
          <p className="font-normal text-2xl ">Rayed Benbrahim</p>
          <p className="font-normal text-lg ">
            Un superbe développeur JS passionné de tech et d'entrepreneuriat
          </p>
        </div>
        <div className="flex justify-self-end">
          <p>T</p>
          <p>L</p>
          <p>Y</p>
        </div>
      </div>
    </div>
  )
}
