import React from 'react'

const ProjectSummary = (props) => {
    const {project} = props
    return(
        <div className="card-content grey-text text-darken-2">
            <span className="card-title">{project.title}</span>
                    <p>{project.content}</p>
                    <p className="grey-text">16th January 2020</p>
                </div>
                
    )
}
export default ProjectSummary