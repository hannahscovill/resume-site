const TsfSign = () => {
    return (<div className="flex flex-row items-end">

        <div className="v-post-1 relative h-[300px] w-10 mt-8">
            <img
                className="w-full h-full object-cover object-center"
                src="/wood-texture-background.jpg"
                style={{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 20%)' }}
            />
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    background: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 100%)',
                    clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 20%)'
                }}
            ></div>
        </div>

        <div className="v-post-2 relative h-[400px] w-10 mt-8">
            <img
                className="w-full h-full object-cover object-center"
                src="/wood-texture-background.jpg"
            />
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    background: 'linear-gradient(to left, transparent 0%, rgba(0,0,0,0.5) 100%)'
                }}
            ></div>
        </div>

        <div className="v-post-3 relative h-[400px] w-10 mt-8">
            <img
                className="w-full h-full object-cover object-center"
                src="/wood-texture-background.jpg"
            />
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    background: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 100%)'
                }}
            ></div>
        </div>

        <div className="v-post-4 relative h-[300px] w-10 mt-8">
            <img
                className="w-full h-full object-cover object-center"
                src="/wood-texture-background.jpg"
                style={{ clipPath: 'polygon(0% 0%, 100% 20%, 100% 100%, 0% 100%)' }}
            />
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    background: 'linear-gradient(to left, transparent 0%, rgba(0,0,0,0.5) 100%)',
                    clipPath: 'polygon(0% 0%, 100% 20%, 100% 100%, 0% 100%)'
                }}
            ></div>
        </div>
    </div>)
}

export default TsfSign;