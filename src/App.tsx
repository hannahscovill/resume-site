import { useEffect, useState } from 'react'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Images column - fixed position, moves slowly with scroll */}
      <div className="fixed top-0 left-0 w-[33%] h-screen overflow-hidden">
        <div 
          className="flex flex-col transition-transform duration-100 ease-out"
          style={{ transform: `translateY(-${scrollY * 2}px)` }}
        >
          <img src='./first_flight.jpeg' className='w-full' />
          <img src='./FullSizeRender.jpeg' className='w-full' />
          <img src='./IMG_0090.JPG' className='w-full' />
          <img src='./IMG_0526.JPG' className='w-full' />
          <img src='./IMG_1510.jpeg' className='w-full' />
          <img src='./IMG_3843.jpeg' className='w-full' />
          <img src='./IMG_4111.jpeg' className='w-full' />
          <img src='./IMG_5113.jpeg' className='w-full' />
          <img src='./IMG_5417.jpeg' className='w-full' />
          <img src='./IMG_6951.jpeg' className='w-full' />
          <img src='./IMG_7026.jpeg' className='w-full' />
        </div>
      </div>

      {/* Content column - normal scroll */}
      <div className='ml-[33%] p-8'>
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
    </div>
  )
}

export default App
