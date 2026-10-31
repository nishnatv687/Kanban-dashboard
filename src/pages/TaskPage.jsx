import React, { useState } from 'react'
import useTodoHooks from '../hooks/TodoHooks'
import TaskCard from '../components/TaskCard'
import EditTaskForm from '../components/EditTaskForm'

const TaskPage = () => {
  const { Tasks,editButton,showForm,closeButton,selectedTask,setselectedTask,saveChanges,deleteButton} = useTodoHooks()
  const [search, setsearch] = useState("")
  const [priority, setpriority] = useState("All")
  const [status, setstatus] = useState("All")

  const filterTasks = Tasks.filter((val)=>{
    return val.title.toLowerCase().includes(search.toLowerCase()) && (priority === "All" || val.priority === priority)
  })

  const updatedTask = filterTasks.filter((val)=>{
    return status === "All" || val.status === status
  })

  return (
    <div className="min-h-screen bg-[#09090f] px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium tracking-widest text-violet-400">
            WORKSPACE / TASKS
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">
            All Tasks<span className="text-violet-500">.</span>
          </h1>

          <p className="mt-2 text-sm text-gray-400 sm:text-base">
            All your tasks in one place.
          </p>
        </div>

        {/* Task Count */}
        <div className="mb-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111119] p-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-xl text-violet-400">
            ✓
          </div>

          <div>
            <p className="text-2xl font-bold">{Tasks.length}</p>
            <p className="text-sm text-gray-400">Total Tasks</p>
          </div>
        </div>

       <div className="mb-6 rounded-2xl border border-white/10 bg-slate-900 p-4 shadow-xl">
  <div className="mb-4 flex items-center gap-2">
    <i className="ri-filter-3-line text-xl text-violet-400"></i>
    <h2 className="text-lg font-semibold text-white">Filter Tasks</h2>
  </div>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

    {/* Search */}
    <div className="relative">
      <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
      <input
        type="text"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        placeholder="Search tasks..."
        className="w-full rounded-xl border border-white/10 bg-slate-950 py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
      />
    </div>

    {/* Priority */}
    <select
      value={priority}
      onChange={(e) => setpriority(e.target.value)}
      className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
    >
      <option value="All">All Priorities</option>
      <option value="Low">Low Priority</option>
      <option value="Medium">Medium Priority</option>
      <option value="High">High Priority</option>
    </select>

    {/* Status */}
    <select
      value={status}
      onChange={(e) => setstatus(e.target.value)}
      className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
    >
      <option value="All">All Status</option>
      <option value="Todo">Todo</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>

  </div>
</div>

        {/* Tasks */}
        {Tasks.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {updatedTask.map((task, index) => (
              <TaskCard key={task.id ?? index}
               task={task}
               editButton={editButton}
               deleteButton={deleteButton}
               />
            ))}
        {showForm && <EditTaskForm closeButton={closeButton} selectedTask={selectedTask} setselectedTask={setselectedTask} saveChanges={saveChanges} />}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/15 bg-[#111119] px-5 py-16 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-2xl text-violet-400">
              +
            </div>

            <h2 className="text-lg font-semibold">No tasks yet</h2>

            <p className="mt-2 text-sm text-gray-400">
              Your tasks will appear here once you add them.
            </p>
          </div>
        )}

      </div>
    </div>
  )
}

export default TaskPage