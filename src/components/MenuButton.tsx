const MenuButtonSecretLink = ({
  copy,
  desination,
  targetBlank = true,
  className
}: {
  copy: string
  desination: string,
  targetBlank?: boolean,
  className?: string
}) => {
  return (
    <div className={`relative m-[1rem] min-w-[120px] w-64 h-16 ${className}`}>
      <div
        className="sage-box absolute w-full h-full -z-10 translate-x-[.5rem] translate-y-[.5rem]"
        style={{ backgroundColor: '#949c8f' }}
      />
      <div className="group">

        <div
          className="white-box bg-white absolute w-full h-full z-19 translate-x-[-.5rem] translate-y-[-.5rem] group-hover:translate-x-[-.75rem] group-hover:translate-y-[-.75rem] group-active:translate-x-[-.25rem] group-active:translate-y-[-.25rem] transition-all duration-200"
        />
        <a
          href={desination}
          target={targetBlank ? '_blank' : undefined}
          className="absolute border-5 w-full h-full z-20 flex items-center justify-center font-bold group-hover:translate-x-[-.25rem] group-hover:translate-y-[-.25rem] group-active:translate-x-[.25rem] group-active:translate-y-[.25rem] transition-all duration-200"
        >
          {copy}
        </a>
      </div>
    </div>
  )
}

export default MenuButtonSecretLink