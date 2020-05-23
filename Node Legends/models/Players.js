const mongoose = require('mongoose');
const schema = require('mongoose').Schema;

const playersSchema = new schema({
    name:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    currentteam:{
        type:String,
        required:true
    },
    Totalgoals:{
        type:Number,
        required:true
    },
    image:{
        type:String,
    }
},
{
    timestamps:true
}
)

const players = mongoose.model('players',playersSchema);  

module.exports = players;