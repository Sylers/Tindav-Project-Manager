import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Notifications from './Notifications'
import ProjectListing from '../projects/ProjectListing'
import {connect} from 'react-redux'

 class Dashboard extends Component {
    render() {
        //console.log(this.props)
        const {project} = this.props
        return (
            <div className="Dashboard container">
                <div className="row">
                    {/* This div is for the Project */}
                    <div className="col s12 md6">
                        <ProjectListing project={project} />
                    </div>
                    {/* This div is for the Notification */}
                    <div className="col s12 md5 offset md1">
                        <Notifications />
                    </div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        project: state.project.project
    }
}

Dashboard.propTypes = {
    project: PropTypes.array
}

export default connect(mapStateToProps)(Dashboard)
