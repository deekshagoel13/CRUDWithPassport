import React from 'react';
class Login extends React.Component{

    authorize=(e)=>{
        e.preventDefault();
        var url='http://localhost:3000/login';
        var obj={
            username:document.getElementById('txtunm').value,
            password:document.getElementById('txtpwd').value,
        }
        console.log(JSON.stringify(obj));
        var data={
            method:'post',
            body: JSON.stringify(obj),
            mode:'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        fetch(url,data).then((res)=>{
            return res.json();
        }).then((response)=>{
            console.log(response);
            if(response.message==='success'){
                sessionStorage.setItem('user',obj.username);
                this.props.history.push('/emplist');
            }
            else{
                this.props.history.push('/login');
            }
        }).catch(()=>{
            console.log('Error in logging in');
        })
    }

    register=()=>{
        this.props.history.push('/register');
    }

    googleAuthenticate=(e)=>{
        e.preventDefault();
        console.log('google');
        var url='http://localhost:3000/auth/google';
        var data={
            mode:'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method:'get'
        }
        fetch(url,data).then((data)=>{
            this.props.history.push();
        }).catch((err)=>{
            console.log(err);
        })
    }

    render(){
        return(
            <div className="col-sm-6 jumbotron offset-2">
            <div className="col-md-6 container">
                <form onSubmit={this.authorize}>
                    <div className="form-group">
                    <input className="form-control" type="text" id="txtunm" placeholder="User Name" autoFocus/>
                    </div>
                    <div className="form-group">
                        <input className="form-control"  type="password" id="txtpwd" placeholder="Password"/>
                    </div>
                    <div>
                        <button className="btn btn-info float-right" onClick={this.register}>Register</button>
                        <button className="btn btn-info">Log In</button>
                    </div>
                    <div className="btn btn-group">
                    <button className="btn btn-danger text-centered" onClick={this.googleAuthenticate}>Log In With Google</button>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}
export default Login