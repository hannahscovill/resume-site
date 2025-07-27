const Collage = ({className}: { className?: string }) => {
    return (
        <div className={`relative m-[1rem] ${className}`}>
            <div
                className="absolute aspect-square w-full h-full -z-10 translate-x-[1rem] translate-y-[1rem]"
                style={{ backgroundColor: '#949c8f' }}
            />
            <div
                className="absolute aspect-square w-full h-full z-20  pointer-events-none"
                style={{ border: '5px solid' }}
            ></div>
            <div className="grid grid-cols-2 grid-rows-2 aspect-square relative z-10 translate-x-[-1rem] translate-y-[-1rem]">
                <img className="row-span-2 w-full h-full object-cover " src="public/IMG_6951.jpeg" />
                <img className="row-span-1 w-full h-full object-cover object-left" src="public/IMG_5113.jpeg" />
                <img className="row-span-1 w-full h-full object-cover object-center" src="public/IMG_5417.jpeg" />
            </div>
        </div>
    )
}

export default Collage;