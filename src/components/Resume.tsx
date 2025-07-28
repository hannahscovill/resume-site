import Experience from './Experience'

const Resume = () => {
  return (
    <div className=" py-16">
      <h1 className="text-4xl font-bold text-center">Resume</h1>
      
      <div className="">
        {/* Skills */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-8">
            
            {/* Programming & Development */}
            <div>
              <ul className="space-y-1">
                <li>Node.js</li>
                <li>Python</li>
                <li>Learning React</li>
              </ul>
            </div>

            {/* Cloud & Infrastructure */}
            <div>
              <ul className="space-y-1">
                <li>AWS</li>
                <li>Docker</li>
                <li>IaC: Terraform, Serverless</li>
                <li>CI/CD Pipelines</li>
              </ul>
            </div>

            {/* Data & Analytics */}
            <div>
              <ul className="space-y-1">
                <li>ETL, SQL, DataBricks</li>
                <li>SignalFx, Splunk</li>
              </ul>
            </div>

            {/* Operations & Personal */}
            <div>
              <ul className="space-y-1">
                <li>Technical Writing</li>
                <li>On-Call Experience</li>
                <li>CrossFit Trainer, CF-L1</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Nike; Software Engineer</h3>
            <p className="text-gray-600 mb-3">May 2019 - Present</p>
            
            <p className="mb-4">I am curious, proactive, and have a strong sense of ownership of the outcomes of my work. I give back to the technical communities I am a part of through workshops, study groups and detailed documentation.</p>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">New Nike Program: Top Secret, Super Classified</h4>
              <p className="mb-2">In a project where multiple principal engineers were deadlocked for months, I joined and in weeks delivered an API that enabled delivery of our first end-to-end demo by collaborating across multiple teams.</p>
              <p>Quickly learned a new tech stack consisting of React, TypeScript, Okta authentication, AWS SAM, Vite and Nike internal libraries. Deployed a full stack web app to evaluate tech I hadn't used before.</p>
            </div>
            
            <Experience 
              title="Nike Studios"
              content={[]}
              image="/studios.jpeg"
              imageAlt="Nike Studios designed for everybody"
            />
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Adapt Services</h4>
              <p className="mb-2">Owned the backend services for Nike's self-lacing shoes. Shipped a feature rich software compatibility manager to determine firmware version eligibility. Led API contract negotiations. Node.js, Lambda, APIGW, S3, DynamoDB.</p>
              <p>Provided data engineering for sport research. Processing (ETL), cleaning, automation and infrastructure.</p>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Nike Training Club Platform</h4>
              <p>Worked in a DevOps environment with on-call rotations, building highly available web services deployed on Kubernetes (EC2) using CI/CD tools. I learned and embraced AWS and a functional style of programming.</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Kroger; Android Software Engineer</h3>
            <p className="text-gray-600 mb-3">October 2018 - May 2019</p>
            <p>During my apprenticeship I worked on Kroger's Clicklist app using Kotlin and Java. I contributed to our engineering community and technical evangelism by leading a Kotlin learner's group. I also created and published a JavaScript API for a developer tool that improved testing speed and ease for Kroger's main consumer-facing mobile app.</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold">U.S. Bank; Analyst, Solutions Engineer</h3>
            <p className="text-gray-600 mb-3">August 2016 - October 2018</p>
            <p>I joined the mortgage processing center as an administrative assistant and challenged myself to learn to automate my job. The apps I created in my first year were used by U.S. Bank's entire mortgage division including executive leadership to make operational decisions, streamline and accelerate the operations teams from interpersonal to national scopes.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Volunteering</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">PDX Women Coders; Co-Founder</p>
                <p className="font-medium">Friends of Trees; Crew Lead</p>
              </div>
              <div>
                <p className="font-medium">Habitat for Humanity; Construction</p>
                <p className="font-medium">Women Who Code Portland; Workshops Lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume