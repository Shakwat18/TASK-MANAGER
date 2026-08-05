const express= require('express')
const { createTask, getAllTask, deleteTask, updateTask, Status } = require('../controllers/taskController')
const auth = require('../middleware/authentication')


const Taskrouter= express.Router()

Taskrouter.post('/newTask',auth,createTask)
Taskrouter.get('/allTask',auth,getAllTask)
Taskrouter.get('/deleteTask/:id',auth,deleteTask)
Taskrouter.put('/updateTask/:id',auth,updateTask)

// GET STATUS
Taskrouter.get('/status',auth,Status)

module.exports= Taskrouter
