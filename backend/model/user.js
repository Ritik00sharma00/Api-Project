const mongoose= require('mongoose');

const userSchema = new mongoose.Schema(
{       
    task:String,
    uniqueNumber:Number,
    id:String,
    employeeName:String,
    Date:Date,
    Time:String,
    priority:String,
    description:String
}
);

module.exports =mongoose.model('usertask',userSchema);