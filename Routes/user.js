var express=require('express');
var app=express();
var router=express.Router();
var body=require('body-parser');
var multer=require('multer');
var userservice=require('../Services/user');

var store=multer.diskStorage({
	destination: function(req,file,cb){
		cb(null, '../upload')
	},
	filename: function(req,file,cb){
		cb(null, file.originalname)
	}
});
var upload=multer({storage: store});

app.use(body.json());
app.use(body.urlencoded({
	extended:true
}));

router.post('/signup',upload.any(),function(req,res){
	userservice.signup(req.body,(data)=>{
		res.send(data);
	})
})

router.post('/login',function(req,res){
	userservice.login(req.body,(data)=>{
		res.send(data);
	})
})

router.post('/delete',function(req,res){
	userservice.delete(req.body,(data)=>{
		res.send(data);
	})
})

module.exports=router;