import React from 'react'
//import projectReducer from '../../store/reducers/projectReducer'

export default function ProjectSummary({project}) {
    return (
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                    <p>Posted by Emik Lad</p>
                    <p className="gray-text">3rd September, 2am</p>
                </div>
            </div>
    )
}
