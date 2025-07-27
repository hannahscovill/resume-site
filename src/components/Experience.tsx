interface ExperienceProps {
  title: string
  content: string[]
  image?: string
  imageAlt?: string
}

const Experience = ({ title, content, image, imageAlt }: ExperienceProps) => {
  return (
    <div className="mb-4">
      <h4 className="font-semibold mb-2">{title}</h4>
      <div className="flex gap-4 items-stretch">
        <div className="flex-1">
          {content.map((paragraph, index) => (
            <p key={index} className="mb-2">
              {paragraph}
            </p>
          ))}
        </div>
        {image && (
          <div className="flex-shrink-0">
            <img 
              src={image}
              alt={imageAlt || title}
              className="w-64 h-full object-cover rounded"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Experience