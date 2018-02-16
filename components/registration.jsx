import React from 'react';

class Registration extends React.Component{

    render(){
        return(
            <div className="col-md-8 jumbotron offset-2">
                <div className="col-md-6 container">
                    <form onSubmit={this.authorize}>
                        <div className="form-group">
                            <input className="form-control" type="text" id="txtunm" placeholder="User Name" autoFocus/>
                        </div>
                        <div className="form-group">
                            <input className="form-control"  type="password" id="txtpwd" placeholder="Password"/>
                        </div>
                        <div className="form-group row">
                            <input className="form-control col-md-6"  type="text" id="txtfnm" placeholder="First Name"/>
                            <input className="form-control col-md-6"  type="text" id="txtlnm" placeholder="Last Name"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control"  type="text" id="txtmail" placeholder="Email"/>
                        </div>
                        <button className="btn btn-info float-right">Register</button>

                    </form>
                </div>
            </div>
        )
    }
}
export default Registration;