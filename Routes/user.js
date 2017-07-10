var express= require('express');
var router= express.Router();
var bodyParser= require('body-parser');
var user= require('../Services/user');

router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());

/*router.post('/signup', function(req, res){
       user.signup(req.body, (data)=> {
              	res.send(data);
       });
});
*/




router.post('/login', function(req, res){
	   user.login(req.body, (data)=> {
		       res.send(data);
	   });
});

/*router.post('/forgotPassword', function(req, res){
	   user.forgotPassword(req.body, (data)=> {
               res.send(data);
	   });
});*/
module.exports=router;
