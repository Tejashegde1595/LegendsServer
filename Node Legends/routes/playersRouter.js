var express = require('express');
var playerRouter = express.Router();
var bodyparser = require('body-parser');
var Players = require('../models/Players');
var multer = require('multer');
var path = require('path');
var authenticate = require('../authenitcate');
var fs = require('fs');
playerRouter.use(bodyparser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));
var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./Images");
    },
    filename: function(req, file, callback) {
        callback(null,file.originalname);
    }
});

var upload = multer({
    storage: Storage,
    limits: { fileSize: '50mb' }
}).single('imgFile');


playerRouter.post("/Upload",authenticate.verifyAdmin, function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            console.log(err);
            return res.end("There was an error");
            
        }
      //  console.log(res);
        return res.end("File uploaded sucessfully!.");
    });
});

playerRouter.route('/')
.get(authenticate.verifyUser,(req,res,next)=>{
    console.log("Get Called");
    Players.find().then(result=>{
        res.statusCode = 200;
        for(i=0;i<result.length;i++)
        {
            var img = path.join('Images',result[i].name.toString()+'.jpg');
            var bitmap = fs.readFileSync(img);
            bitmap = "data:image/png;base64,"+Buffer(bitmap).toString('base64');
     //       result[i].image = bitmap;
        }
        res.json(result);
    }).catch(err=>{
        console.log(err);
    })
}).post(authenticate.verifyAdmin,(req,res,next)=>{
    console.log('Post Called');
    Players.insertMany(req.body).then(player=>{
        res.statusCode = 200;
        res.send("Sucessfully Added");
    }).catch(err=>{
        console.log(err);
    })
}).put((req,res,next)=>{
    console.log("Put is not a supported operation");
    res.send("Put is not a supported operation");
}).delete(authenticate.verifyAdmin,(req,res,next)=>{
    console.log("Delete Called");
    Players.deleteMany().then((result)=>{
        res.statusCode = 200;
        res.send("Successfully deleted all the entries");
    })
})


playerRouter.route('/:playerid')
.get( authenticate.verifyUser,(req,res,next)=>{
    console.log("Get Called");
    Players.findById(req.params.playerid).then(result=>{
        var img = path.join('Images',result.name.toString()+'.jpg');
        var bitmap = fs.readFileSync(img);
        bitmap = Buffer(bitmap).toString('base64');
   //    result.image =  "data:image/png;base64,"+bitmap;
        res.statusCode = 200;
        res.json(result);
    }).catch(err=>{
        console.log(err);
        res.send(err);
    })
}).post((req,res,next)=>{
    console.log("Post is not a supported operation");
    res.send("Post is not a supported operation");
}).put(authenticate.verifyAdmin,(req,res,next)=>{
    Players.findByIdAndUpdate(req.params.playerid,{$set:req.body}).then(result=>{
        res.statusCode = 200;
        res.send("Sucessfully Updated");
    }).catch(err=>{
        console.log(err);
        res.send(err);
    })
}).delete(authenticate.verifyAdmin,(req,res,next)=>{
    console.log("Delete Called");
    Players.findByIdAndDelete(req.params.playerid).then((result)=>{
        res.statusCode = 200;
        res.send(result);
    }).catch(err=>{
        console.log(err);
        res.send(err);
    })
})



module.exports = playerRouter;