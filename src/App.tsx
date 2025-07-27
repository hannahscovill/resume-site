import Collage from "./components/TsfSign/Collage"
import MenuButton from "./components/MenuButton"
import Footer from "./components/Footer"

const SectionHeader = ({ copy, className }: { copy: string, className?: string }) => {
  return (
    <div className={`${className} my-4 mx-[1rem] md:my-0 md:ml-4 md:row-start-2 md:col-start-2 order-0 flex flex-col justify-end`}>
      <h2 className="text-4xl font-bold">
        {copy}
      </h2>
      <hr className="border-t-4 w-[70%] my-2" />
    </div>
  )
}
function App() {

  return (
    <>
      <div>
        <div className="grid mx-auto max-w-[1600px] grid-cols-1 md:grid-cols-2 md:grid-rows-4 m-8">
          <SectionHeader copy="Hannah Scovill" />
          <p className="my-6 md:my-0 order-3 md:ml-4 md:row-start-3 md:col-start-2 m-2 flex justify-center md:items-start">Software Engineer, CrossFit Coach, Student Pilot, always curious.</p>
          <Collage className="order-1 col-start-1 row-span-4" />
        </div>

        <div className="flex justify-center mt-8">
          <MenuButton buttonCopy="Download Resume" onClick={() => window.open('/resume.pdf', '_blank')} className="w-64 h-16" />
          <a href='mailto:hnsvill@gmail.com?subject=Re:%20@%20you' target="_blank">
          <MenuButton buttonCopy="@ me" className="w-64 h-16" />
          </a>
        </div>

        <div className="max-w-[1600px] flex flex-col justify-self-center">
          <SectionHeader className="pt-10" copy="Short & Sweet" />
          <p className="mx-[1rem]">
            People describe me as proactive and resourceful. I learned to code in my administrative assistant job in 2016 and U.S. Bank's Mortgage division used my apps.
            <br /><br />
            My tech experience has been mostly backend, data and DevOps oriented. I'm currently gaining professional experience in React, serving on Nike's PRIDE Network board, coaching CrossFit and learning to fly.
            <br /><br />
            I'm based in the Portland, Oregon area.
          </p>
        </div>

        <div className="max-w-[1600px] flex flex-col justify-self-center">
          <SectionHeader className="pt-10" copy="Tech Stack" />
          <p className="mx-[1rem] w-full">
            test
          </p>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default App
