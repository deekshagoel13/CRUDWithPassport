import React from 'react';
import Login from './login';
import RegisterForm from './registration';
import EmpList from './emplist';
import Header from './header';
import Footer from './footer';

import {BrowserRouter as Router,
        Route,
        NavLink
} from 'react-router-dom';
const Links=()=>{
    return(
        <div className="list-group navbar navbar-dark flex-column bg-info">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/register'>Register</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/login'>Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/emplist'>List of Employees</NavLink>
                </li>
            </ul>
        </div>
    )
}
const Home=()=>{
    return(
        <div>
            <div id="demo" className="carousel slide" data-ride="carousel">


            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>


            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.thalesgroup.com/sites/default/files/medias/images/59024.png" height={600} width='100%' alt="Los Angeles"/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.pulselearning.com/fs/2016/04/How_Training_Cultivates_Healthy_Engaged_Employees.jpg" height='100%' width='100%' alt="Chicago"/>
                </div>
                <div className="carousel-item">
                    <img src="https://s3.amazonaws.com/wordpress-production/wp-content/uploads/2014/07/Employee-Engagement-Redbooth.jpg" alt="New York"/>
                </div>
            </div>


            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>

        </div></div>
    )
}
class Routes extends React.Component{
    render(){
        return(
            <Router>
                <div className="row container-fluid">
                <div className="col-md-2">
                    <Links/>
                </div>
                <div className="col-md-10 scroll" >
                    <Route exact path='/' component={Home} />
                    <Route exact path='/register' component={RegisterForm} />
                    <Route  path='/login' component={Login} />
                    <Route  path='/emplist' component={EmpList} />
                    <Route  path='/main' component={Main} />
                </div>
                </div>
            </Router>

        )
    }
}
const Main=()=>{
    return(
        <div>
            <div className="col-md-12 bg-info modal-header">
                <Header/>
            </div>
            <div className="container-fluid main" >
                <Routes/>
            </div>

            <div className="col-md-12 bg-info footer">
                <Footer/>
            </div>
        </div>
    )
}
export default Main;