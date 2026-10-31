import React from 'react'
import { X } from 'lucide-react'
import useTodoHooks from '../hooks/TodoHooks'

const EditTaskForm = ({closeButton,selectedTask,setselectedTask,saveChanges}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#111119] p-6 shadow-2xl shadow-violet-950/30 sm:p-8">

        {/* Header */}
        <div className="mb-7 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Edit Task</h2>
            <p className="mt-1 text-sm text-gray-400">
              Update your task details
            </p>
          </div>
          <button onClick={closeButton} className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Title */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Task Title
          </label>
          <input
            value={selectedTask.title}
            onChange={(e)=>{
                setselectedTask({
                    ...selectedTask,
                    title:e.target.value
                })
            }}
            type="text"
            placeholder="Enter task title"
            className="w-full rounded-xl border border-white/10 bg-[#0a0a0f] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-violet-500"
          />
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Description
          </label>
          <textarea
            value={selectedTask.description}
            onChange={(e)=>{
                setselectedTask({
                    ...selectedTask,
                    description:e.target.value
                })
            }}
            rows={3}
            placeholder="Describe your task..."
            className="w-full resize-none rounded-xl border border-white/10 bg-[#0a0a0f] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-violet-500"
          />
        </div>

        {/* Priority and Status */}
        <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Priority
            </label>
            <select
              value={selectedTask.priority}
              onChange={(e)=>{
                setselectedTask({
                    ...selectedTask,
                    priority:e.target.value
                })
            }}
              defaultValue="Medium"
              className="w-full rounded-xl border border-white/10 bg-[#0a0a0f] px-4 py-3 text-sm text-white outline-none focus:border-violet-500"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Status
            </label>
            <select
              value={selectedTask.status}
              onChange={(e)=>{
                setselectedTask({
                    ...selectedTask,
                    status:e.target.value
                })
            }}
              defaultValue="Todo"
              className="w-full rounded-xl border border-white/10 bg-[#0a0a0f] px-4 py-3 text-sm text-white outline-none focus:border-violet-500"
            >
              <option>Todo</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        {/* Due Date */}
        <div className="mb-7">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Due Date
          </label>
          <input
            value={selectedTask.date}
            onChange={(e)=>{
                setselectedTask({
                    ...selectedTask,
                    date:e.target.value
                })
            }}
            type="date"
            className="w-full rounded-xl border border-white/10 bg-[#0a0a0f] px-4 py-3 text-sm text-white outline-none focus:border-violet-500"
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-white/10 pt-5">
          <button onClick={closeButton} className="rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-gray-300 hover:bg-white/5">
            Cancel
          </button>
          <button onClick={saveChanges} className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500">
            Save Changes
          </button>
        </div>

      </div>
    </div>
  )
}

export default EditTaskForm