
function App() {

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center">
        <div className="flex flex-row items-center gap-8 m-6">
          <div className="relative w-1/2 m-4">
            <div
              className="absolute aspect-square w-full h-full -z-10 translate-x-[-2rem] translate-y-[2rem]"
              style={{ backgroundColor: '#949c8f' }}
            ></div>
            {/* Floating outline */}
            <div
              className="absolute aspect-square w-full h-full z-20 translate-x-[-1rem] translate-y-[1rem] pointer-events-none"
              style={{ border: '5px solid' }}
            ></div>
            <div className="grid grid-cols-2 grid-rows-2 aspect-square relative z-10">
              <img className="row-span-2 w-full h-full object-cover " src="public/IMG_6951.jpeg" />
              <img className="row-span-1 w-full h-full object-cover object-left" src="public/IMG_5113.jpeg" />
              {/* <img className="row-span-1 w-full h-full object-cover object-left" src="public/IMG_1510.jpeg" /> */}
              <img className="row-span-1 w-full h-full object-cover object-center" src="public/IMG_5417.jpeg" />
            </div>
          </div>
          <div className="relative w-1/2 flex items-center justify-center text-2xl font-bold">
            {/* Floating outline around name */}
            {/* <div
              className="absolute w-full h-full z-20 translate-x-2 translate-y-2 pointer-events-none"
              style={{ border: '5px solid ' }}
            ></div> */}
            <div className="flex flex-col gap-4 m-4">
              <h2>Hannah Scovill</h2>
              <hr className="border-t-4 w-[70%]" />
              <p>Software Engineer, CrossFit Coach, Student Pilot, always curious.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
