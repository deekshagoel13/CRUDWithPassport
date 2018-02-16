var Emp=require('../models/emp.model');

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:'Emp details are mandatory.'});
    }

    var e=new Emp({
        ename:req.body.ename,
        desg:req.body.desg,
        sal:req.body.sal,
        dept:req.body.dept
    });
    e.save().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log('Some error occurred while creating new employee');
    })
}

exports.findAll=(req,res)=>{
    Emp.find().then((data)=>{
        res.send(data);
    }).catch(()=>{
        console.log('Error in fetching all records');
    })
}

exports.findById=(req,res)=>{
    Emp.findById(req.params.empid).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send(`Error in Retrieving employee for Id : ${req.params.empid}`);
    });
}

exports.update=(req,res)=>{
    Emp.findById(req.params.empid).then((emp)=>{
        emp.ename=req.body.ename;
        emp.desg=req.body.desg;
        emp.sal=req.body.sal;
        emp.dept=req.body.dept;

        emp.save().then((data)=>{
            res.send(data);
        }).catch(()=>{
            console.log('could not update employee details..');
        })

    }).catch(()=>{
        res.send(`Could not find an emp with Id : ${req.params.empid}`);
    });
}

exports.delete=(req,res)=>{
    Emp.remove({_id:req.params.empid}).then((data)=>{
        res.send({message:'Employee Record Deleted successfully'});
    }).catch((err)=>{
        res.send(`Error in Deleting employee for Id : ${req.params.empid}`);
    });
}

exports.uploadImage=(req,res,next)=>{
    console.log(req);
}