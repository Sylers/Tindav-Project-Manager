import React from 'react'
import ProjectSummary from './ProjectSummary'
const ProjectListing = ({project}) => {
    return(
        <div className="project-listing section">
            <div className="card z-depth 0 project-summary">
                {project && project.map(project => {
                    return(
                        <ProjectSummary project={project} key={project.id} />
                    )
                })}
            </div>
        </div>
    )
}
export default ProjectListing