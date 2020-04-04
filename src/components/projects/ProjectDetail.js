import React from 'react'

const ProjectSummary = (props) => {
    const id = props.match.params.id
    return(
        <div className="container section project-details">
            <div className="card">
                <div className="card-content">
                    <span className="class-title">ProjectDetails - {id}</span>
                    <p>This Project was written Junior Web Developer.</p>
                </div>
                <div className="card-action lighten-4 grey-text">
                    <div>Posted By Tindav Tech</div>
                    <div>September 2019</div>
                </div>
            </div>
        </div>
    )
}
export default ProjectSummary

