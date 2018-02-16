import React from 'react';
import Modal from 'react-modal';
import AddForm from './addemp';

class EmpList extends React.Component{
    constructor(){
        super();
        this.state={
            data:[],
            isActive:false,
            edit:{}
        }
    }
    fetchEmp=(url)=>{
        if(url){
            fetch(url)
                .then((response)=>{
                    return response.json();
                }).then((d)=>{
                this.setState({
                    data:d
                });
            }).catch(()=>{
                console.log('Error in Retrieving Records.');
            })
        }
    }
    handleDelete=(e)=>{
        e.preventDefault();
        var t=e.target;
        var data={
            method:'delete',
            mode:'cors'
        }
        fetch(`http://localhost:3000/emp/${t.id}`,data)
            .then((response)=>{
                console.log(response);
                this.fetchdata();
            })
            .catch(()=>{
                console.log('Error in Deleting Record.');
            })

    }
    handleEdit=(e)=>{
        fetch(`http://localhost:3000/emp/${e.target.id}`)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                var obj={
                    id:data._id,
                    name:data.ename,
                    desg:data.desg,
                    sal:data.sal,
                    dept:data.dept,
                    btn:'Update'
                }
                this.setState({
                    edit:obj
                })
                this.toggleModal();
            }).catch(()=>{
            console.log('Error in fetching Record..');
        })
    }
    componentWillMount(){

        Modal.setAppElement('body');
    }
    componentDidMount(){
        const u=sessionStorage.getItem('user');
        if(!u){
            this.props.history.push('/login');
        }
        this.fetchdata();
    }
    fetchdata=()=>{
        this.fetchEmp("http://localhost:3000/emplist");
    }

    toggleModal=()=>{
        this.setState({
            isActive:!this.state.isActive,
            edit:(this.state.isActive)?{}:this.state.edit
        })
    }

    render() {
        return (
            <div className="container">
                <table className="table table-bordered table-hover">
                    <thead className="text-center">
                    <tr>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Department</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map((emp)=>
                            <tr key={emp._id} align="center">
                                <td>{emp.ename}</td>
                                <td>{emp.desg}</td>
                                <td>{emp.sal}</td>
                                <td>{emp.dept}</td>
                                <td><button className="btn btn-info" onClick={this.handleEdit} id={emp._id}>Edit</button></td>
                                <td><button className="btn btn-info" id={emp._id} onClick={this.handleDelete}>Delete</button></td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <button className="btn btn-info" onClick={this.toggleModal}>Add New</button>
                <Modal isOpen={this.state.isActive}
                       onRequestClose={this.toggleModal}
                       style={{
                           overlay:{
                               top:0,
                               position          : 'fixed',
                               left              : 0,
                               right             : 0,
                               bottom            : 0,
                               backgroundColor   : 'rgba(105,105,105, 0.75)'
                           },content : {
                               position                   : 'absolute',
                               top                        : '90px',
                               left                       : '400px',
                               right                      : '40px',
                               bottom                     : '250px',
                               border                     : '2px solid #ddd',
                               background                 : '#fff',
                               overflow                   : 'auto',
                               WebkitOverflowScrolling    : 'touch',
                               borderRadius               : '4px',
                               outline                    : 'none',
                               padding                    : '20px',
                               width                      : '700px'

                           }
                       }}
                >

                    <AddForm data={this.state.edit}/>

                </Modal>
            </div>
        );
    }
}
export default EmpList;