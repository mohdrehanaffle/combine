var mongoose= require('mongoose');
var schema= mongoose.Schema;
var nodemailer= require('nodemailer');

var transport=nodemailer.createTransport({
   host :'smtp.gmail.com',
   auth:{
     user:'anish.kumar33331@gmail.com',
     pass:'anish@12345'
   }
});

var userSchema= new schema({
	 userName: {type: String, required: true},
	 email   : {type: String},
	 password: {type: String},
	 mobile_no: {type: Number}
},{collection :'userDetails'});

mongoose.connect('mongodb://127.0.0.1:27017/userInfo', function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log("connected");
	}
});


var userModel= mongoose.model('', userSchema);

/*var signup= (data, callback)=>{
	    var doc= new userModel({"userName": data.userName, "email": data.email,  "password": data.password, "mobile_no": data.mobile_no});
	    	
        doc.save(function(err){
	    		  if(err){
	    			 callback("signup error : "+err);
	    		  }
	    		  else{
	    			 callback("successfully signed up");
	    		  }
	    });
    	  
} */

var login= (data, callback)=>{
	    userModel.findOne({userName: data.userName, password: data.password},
	    	 function(err, info){
	    	 	if(err){
	    	 		 callback(err);
	    	 	}
	    	 	else if(info==null){
	    	 		 callback("user doesn't exist");
	    	 	}
	    	 	else{
	    	 		 callback("you are signed in "+ "\n" + info)
	    	 	}
	    	 })
}

/*var forgotPassword= (data, callback)=> {
        userModel.findOne({email : data.email}, function(err, info){
              if(err){
              	callback(err);
              }
              else if(info==null){
              	callback("this account doesn't exists");
              }
              else{
              	var otp = Math.floor(1000 + Math.random() * 9000)
                   otp = otp.toString().substring(0, 4);
                   otp =  parseInt(otp);

              	transport.sendMail({
                     from:'<anish.kumar33331@gmail.com>',
                     to:  data.email,
                     subject:'you signed up',
                     text:"this is your one time password  "+otp,
                     body:"hii"
                      },function(err,data){
                            if(err){
                                 console.log(err);
                            }
                            else{
                               callback("otp sent on emailId");
                            }
             });
              }

        });
        
}*/

module.exports= {
	//signup : signup,
	login  : login
	//,forgotPassword: forgotPassword
}
jjjjjjj
