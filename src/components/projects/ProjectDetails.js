import React from 'react'

export default function ProjectDetails(props) {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, delectus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem debitis, impedit exercitationem ab dolores quisquam aliquid error cupiditate asperiores molestiae tenetur expedita possimus. Consequuntur, magni inventore. Adipisci tempore harum magnam.</p>
                </div>
                <div className="card-action grey lighten-4 gray-text">
                    <div>Posted By The Net Ninja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}
