import { useRef } from 'react'
import { Parallax, ParallaxLayer, type IParallax } from '@react-spring/parallax'

function App() {
  const parallax = useRef<IParallax>(null!)

  return (
    <>
      <Parallax ref={parallax} pages={5}>

        <ParallaxLayer offset={0} speed={-0.3}>
          <img src='./first_flight.jpeg' className='w-[33%] ml-0' />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.5}>
          <div className='ml-[33%]' >
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to My Portfolio</h1>
              <p className="text-lg text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

              <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-4">About Me</h2>
              <p className="text-lg text-gray-700 leading-relaxed">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-4">Experience</h2>
              <p className="text-lg text-gray-700 leading-relaxed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

              <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-4">Skills</h2>
              <p className="text-lg text-gray-700 leading-relaxed">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

              <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-4">Projects</h2>
              <p className="text-lg text-gray-700 leading-relaxed">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

              <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-4">Contact</h2>
              <p className="text-lg text-gray-700 leading-relaxed">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default App
