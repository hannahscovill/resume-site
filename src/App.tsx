import Collage from "./components/TsfSign/Collage"

function App() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 m-8">
      <div className="my-4 md:my-0 md:ml-4 md:row-start-2 md:col-start-2 order-0 flex flex-col justify-end">
        <h2 className="text-4xl font-bold">
          Hannah Scovill
        </h2>
        <hr className="border-t-4 w-[70%] my-2" />
      </div>
      <p className="my-6 md:my-0 order-3 md:ml-4 md:row-start-3 md:col-start-2 flex items-start">Software Engineer, CrossFit Coach, Student Pilot, always curious.</p>
      <Collage className="order-1 col-start-1 row-span-4" />
    </div>
  )
}

export default App
