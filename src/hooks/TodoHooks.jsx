import { useState, useEffect } from 'react'
import {useForm}  from 'react-hook-form'
import EditTaskForm from '../components/EditTaskForm';

const useTodoHooks = () => {
    
    const {register,handleSubmit,reset,formState:{errors}} = useForm()
    const [Tasks, setTasks] = useState(() => {return JSON.parse(localStorage.getItem("Tasks")) || []});
     const [showForm, setShowForm] = useState(false)
     const [selectedTask, setselectedTask] = useState(null)
      

   const Addtask = (data) => {
   const title = data.title.trim();
   const description = data.description.trim();

   if (!title || !description) {
    alert("fill the required form")
    return
   }

   const newData = {
    ...data,
    title,
    description,
    id:crypto.randomUUID()
   };

  setTasks((prev) => [...prev, newData]);
  alert("Task Added Successfully")
  reset();
   };

   const editButton = (id) =>{
    const existingTask = Tasks.find((val)=>{
      return val.id === id
    })
    
    if(existingTask){
      setselectedTask(existingTask)
    }
    
     setShowForm(true)

   }

   const closeButton = ()=>{
    setShowForm(false)
   }

   const saveChanges = ()=>{
      const updatedTask = Tasks.map((val)=>{
        if(val.id === selectedTask.id){
           return selectedTask
        }
        return val
      })

      setTasks(updatedTask)
      alert("Task updated successfully")
      closeButton()
   }

   const deleteButton = (id) => {
   const updatedTasks = Tasks.filter((val) => val.id !== id);

   setTasks(updatedTasks);
   alert("Task deleted successfully")
   };

    useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(Tasks));
    }, [Tasks]);

  return {
     register,
     Addtask,
     handleSubmit,
     errors,
     Tasks,
     setTasks,
     editButton,
     showForm,
     closeButton,
     selectedTask,
     setselectedTask,
     saveChanges,
     deleteButton
  }
}

export default useTodoHooks