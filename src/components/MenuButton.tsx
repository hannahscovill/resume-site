interface MenuButtonProps {
  buttonCopy: string
  onClick?: () => void
  className?: string
}

const MenuButton = ({ buttonCopy, onClick, className }: MenuButtonProps) => {
  return (
    <div className={`relative m-[1rem] ${className}`}>
      <div
        className="sage-box absolute w-full h-full -z-10 translate-x-[.5rem] translate-y-[.5rem]"
        style={{ backgroundColor: '#949c8f' }}
      />
      <div
        className="white-box bg-white absolute w-full h-full z-19 translate-x-[-.5rem] translate-y-[-.5rem]"
      />
      <div
        className="absolute border-5 w-full h-full z-20 flex items-center justify-center font-bold"
      >
        <button
          onClick={onClick}
          className="relative font-bold text-lg"
        >
          {buttonCopy}
        </button>
      </div>
    </div>
  )
}

export default MenuButton