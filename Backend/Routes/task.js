
const express = require('express')
const router = express.Router();
const Task = require('../Model/task')
const auth = require('../Model/auth')



router.get('/tasks',auth,(req , res)=> {
    /*const task = [
    { 
         id: "1",
         name: "Finance"
    },
    {
         id: "2",
          name: "Public Relations"
    },
    {
         id: "3",
         name: "Construction"
    }
 ]
 
 res.json({
     message:"Issues",
     tasks:task
 })*/
 
 Task.find().then((tasks)=>{
     res.json({
         message: 'Tasks found',
         tasks:tasks
 
     })
 })
 
 })
 
 
 
 router.post('/tasks', (req, res)=>{
     const task = new Task (
         {
         id: req.body.id,
         name: req.body.name
         }
     )
 
 
 task.save().then(()=>{
 res.status(201).json({
     message: 'Task created',
     task: task
 })
})
 })
 
 
 router.delete("/tasks/:id",(req, res)=>{
     Task.deleteOne({id: req.params.id}).then((result)=>{
         res.status(200).json({message:"Task Deleted"})
     })
 })
 
 module.exports = router;