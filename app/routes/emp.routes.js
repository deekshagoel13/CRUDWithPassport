module.exports=(app,passport)=>{

    var emp=require('../controllers/emp.controller.js');
    app.post('/emp',emp.create);

    app.get('/emplist',emp.findAll);

    app.get('/emp/:empid',emp.findById);

    app.put('/emp/:empid',emp.update);

    app.delete('/emp/:empid',emp.delete);

    app.post('/login',passport.authenticate('local', {
        successRedirect : '/',
        failureRedirect : '/login'
    }));
    app.get('/',(req,res)=>{
        res.send({'message':'success'});
    });
    app.get('/login',(req,res)=>{
        res.send({'message':'fail'});
    });

    app.post('/upload',emp.uploadImage);
    app.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));
    app.get('/auth/google/callback',passport.authenticate('google',{
        successRedirect:'/',
        failureRedirect:'/login'
    }));
}
// var express=require('express');
// var router=express.Router();
// var emp=require('../controllers/emp.controller.js');
// router.post('/emp',emp.create);
//
// router.get('/emplist',emp.findAll);
//
// module.exports=router;