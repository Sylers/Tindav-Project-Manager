import React, { Component } from 'react'

 class SignUp extends Component {
     state = {
        email: '',
        password: '',
        firstname: '',
        lastname: ''
     }
     onChange(e){
        this.setState( {
            [e.target.id]: e.target.value
        })
     }
     onSubmit(e){
        e.preventDefault()
     }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit.bind(this)} className="white">
                    <h5 className ="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.onChange.bind(this)} />
                    </div><div className="input-field">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstname" onChange={this.onChange.bind(this)} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastname" onChange={this.onChange.bind(this)} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.onChange.bind(this)} />
                    </div>
                    <div className="input-field">
                        <center><button className="btn pink lighter-3 z-depth-0">Sign Up</button></center>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignUp
