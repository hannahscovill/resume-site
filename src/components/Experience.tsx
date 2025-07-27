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
        "The Nike Studios were my favorite project I've done at Nike. From the beginning through automating myself out of the role, I was instrumental to seamlessly integrating FitLab's digital footprint into Nike's technology ecosystem.",
        "I deployed solutions where necessary in Node.js, Golang, Python and an OIDC example in React.",
        "The greenfield nature of this project gave me the experience to set up new projects from end-to-end at Nike across multiple engineering disciplines including DevOPs, back end, data analytics and data engineering, etc.",
        "Mentored and developed more junior engineers both involved and not involved in my assigned projects.",
        "Contributed to Nike's engineering products including their new data lake and auth libraries.",
        "Built data pipelines and dashboards using SQL, Python and Databricks examining Nike member behavior."
      </p>
    </div>
  )
}

export default Experience