import React, { Component } from 'react'
import {createProject} from '../../store/actions/projectAction'
import {connect} from 'react-redux'

 class CreateProject extends Component {
     state = {
        title: '',
        content: ''
     }
     onChange(e){
        this.setState({
            [e.target.id]: e.target.value
        })
     }
     onSubmit(e){
        e.preventDefault()
        this.props.createProject(this.state)
     }
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-content grey-text lighter-3">
                        <div className="card-content">
                            <span className="card-title">Create New Project</span>
                            <form onSubmit={this.onSubmit.bind(this)} className="white">
                                <div className="input-field">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" id="title" onChange={this.onChange.bind(this)} />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="content">Project Content</label>
                                    <textarea id="content" className="materialize-textarea" onChange={this.onChange.bind(this)} ></textarea>
                                </div>
                                <div className="input-field">
                                    <center><button className="btn pink lighter-3 z-depth-0">Click To Create Project</button></center>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}
export default connect(null, mapDispatchToProps)(CreateProject)