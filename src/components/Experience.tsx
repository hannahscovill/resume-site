interface ExperienceProps {
  title: string
  content: string[]
  image?: string
  imageAlt?: string
}

const Experience = ({ title, content, image, imageAlt }: ExperienceProps) => {
  return (
    <div className="grid mx-auto max-w-[1600px] grid-cols-1 md:grid-cols-3 md:grid-rows-2 m-8">
      <h4 className="font-bold my-2 order-0 md:col-span-2">{title}</h4>
      
      <img 
        src={image}
        alt={imageAlt || title}
        className="order-1 md:order-2 md:col-start-3 row-span-2 w-full object-cover"
      />
      
      <p className="mb-2 order-2 md:order-3 md:col-span-2">
        {content}
      </p>
    </div>
  )
}

export default Experience