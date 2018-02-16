import React from 'react';

class AddForm extends React.Component {
    constructor() {
        super();
    }

    addData = (url) => (e) => {
        e.preventDefault();
        console.log({url});
        var obj={
            ename:document.getElementById('txtenm').value,
            desg:document.getElementById('txtdesg').value,
            sal:document.getElementById('txtsal').value,
            dept:document.getElementById('txtdept').value,
        };
        console.log(obj);
        if (url) {
            var data = {
                method: 'post',
                body: JSON.stringify(obj),
                mode:'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            fetch(url, data).then((response) => {
                return response.json();
            }).then(() => {
                console.log('data inserted successfully');
                this.props.add();
            }).catch(() => {
                console.log('Error in inserting data');
            })

        }
    }

    editData = (url) => () => {
        console.log({url});
        var obj={
            ename:document.getElementById('txtenm').value,
            desg:document.getElementById('txtdesg').value,
            sal:document.getElementById('txtsal').value,
            dept:document.getElementById('txtdept').value
        };
        console.log(obj);
        if (url) {
            var data = {
                method: 'put',
                body: JSON.stringify(obj),
                mode:'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            fetch(url, data).then((response) => {
                return response.json();
            }).then(() => {
                console.log('data inserted successfully');
                this.props.add();
            }).catch(() => {
                console.log('Error in inserting data');
            })

        }
    }

    handleUploadImage=()=>{

}

    render(){
        return(
            <div className="container">
                <div className="row">
                    <h4 className="col-md-8 offset-2 modal-header">{(this.props.data.btn)?'Update Employee Details':'Add Employee Details'}</h4>
                </div>
                <div className="row">
                <form onSubmit={(!this.props.data.btn)?this.addData('http://localhost:3000/emp'):this.editData(`http://localhost:3000/emp/${this.props.data.id}`)} className="col-md-8 offset-2 modal-body">
                    <div className="form-group">
                        <input  className="form-control" type="text" id="txtenm" placeholder="Name" autoFocus defaultValue={this.props.data.name}/>
                    </div>
                    <div className="form-group">
                        <input  className="form-control"  type="text" id="txtdesg" placeholder="Designation" defaultValue={this.props.data.desg}/>
                    </div>
                    <div className="form-group">
                        <input  className="form-control"  type="text" id="txtsal" placeholder="Salary" defaultValue={this.props.data.sal}/>
                    </div>
                    <div className="form-group">
                        <input  className="form-control"  type="text" id="txtdept" placeholder="Department"defaultValue={this.props.data.dept}/>
                    </div>
                    <div className="modal-footer">
                        <button  className="btn btn-info">{(this.props.data.btn)?this.props.data.btn:'Add Record'}</button>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default AddForm;