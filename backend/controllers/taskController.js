const Task = require("../model/taskModel")
const User = require("../model/UserModel")
const StatusCount = require("../model/StatusModel")
const { default: mongoose } = require("mongoose")

const createTask= async(req,res)=>{
try {
    const {text}= req.body
let email= req.headers['email']

const result= await User.aggregate([
    {$match:{email}},
])

let id =result[0]._id


const task= Task.create({
    text: text,
    userId:id
})

await StatusCount.findOneAndUpdate(
    { userId: id },
    {
        $inc: {createCount: 1 },
    },
    {
        upsert: true,
        new: true
    }
);
 res.json({
        message:' Task is created successfully'
    })
} catch (error) {
    res.json({
        message:' Task creation failed',
        error
    })
}
}


const  getAllTask=async(req,res)=>{
const task= await Task.find()
let ip= req.ip
res.status(200).json({
    ip,
    task
})
}

const deleteTask=async(req, res)=>{
   let  {id}= req.params
   const find= await Task.findOne({_id:id})
   if(!find) {
    return res.status(404).json({
        messages: 'task is not found'
    })
   }
const delet= await Task.deleteOne({_id:id})

deleted= delet['StatusCount']
await StatusCount.findOneAndUpdate(
    { userId: find.userId },
    {
        $inc: { deleteCount: 1 },
        
    },
    {
        upsert: true,
        new: true
    }
);
   res.json({
    message : "Deleted successfully",
   })
    
}


const updateTask=async (req,res)=>{
let {id}= req.params
const find= await Task.findByIdAndUpdate({_id:id},{text:req.body.text})
   if(!find) {
    return res.status(404).json({
        messages: 'task is not found'
    })
   }

  await StatusCount.findOneAndUpdate(
    { userId: find.userId },
    {
        $inc: { updateCount: 1 },
    },
    {
        upsert: true,
        new: true
    }
);
res.status(201).json({
    message: 'updated successfully'
})
}

const Status= async (req,res)=>{
let  id=new mongoose.Types.ObjectId(req.headers.id)
//   console.log(typeof(id));
  
const result = await StatusCount.aggregate([
    {$match:{userId:id}}
])


res.status(200).json({
    id,
    result
})
}
module.exports= {createTask,getAllTask,deleteTask,updateTask,Status}