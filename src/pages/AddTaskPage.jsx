import React from 'react'
import useTodoHooks from '../hooks/TodoHooks'

const AddTaskPage = () => {

  const {register,Addtask,handleSubmit,errors} = useTodoHooks()

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-8">
          <p className="mb-3 text-sm font-medium text-violet-400">
            TASK MANAGEMENT / NEW TASK
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Create a new task
          </h1>

          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            Add the details below to organize your work and stay productive.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-2xl shadow-black/20 sm:p-8">

          <div className="mb-7 flex items-center gap-3 border-b border-white/10 pb-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-xl text-violet-400">
              +
            </div>

            <div>
              <h2 className="font-semibold text-white">Task details</h2>
              <p className="text-sm text-slate-400">
                Fill in your task information
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(Addtask)} className="space-y-6">

            {/* Title */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Task title <span className="text-violet-400">*</span>
              </label>

              <input
                {...register("title",{
                  required:"Tiitle is required"
                })}
                type="text"
                placeholder="e.g. Complete React project"
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              />
                {errors.title?.message && (<p className="mt-1 text-sm text-red-500">{errors.title.message}</p>)}
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Description
              </label>

              <textarea
                {...register("description",{
                  required:"description is required",
                  minLength:{
                    value:15,
                    message:"minimum 15 chars are required"
                  }
                })}
                rows="4"
                placeholder="Describe what needs to be done..."
                className="w-full resize-y rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              />
              {errors.description?.message && (<p className="mt-1 text-sm text-red-500">{errors.description.message}</p>)}
            </div>

            {/* Priority and Due Date */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Priority
                </label>

                <select
                {...register("priority",{
                  required:"Priority is required"
                })}                
                  defaultValue="Medium"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                >
                  <option value="Low">Low priority</option>
                  <option value="Medium">Medium priority</option>
                  <option value="High">High priority</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Due date
                </label>

                <input
                  {...register("date",{
                    required:"Date is Required"
                  })}
                  type="date"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                />
                  {errors.date?.message && (<p className="mt-1 text-sm text-red-500">{errors.date.message}</p>)}
              </div>

            </div>

            {/* Initial Status */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Initial status
              </label>

              <select
                {...register("status")}
                defaultValue="Todo"
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              >
                <option value="Todo">Todo</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-end">

              <button
                type="button"
                className="rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-500 active:scale-[0.98]"
              >
                + Create Task
              </button>

            </div>

          </form>
        </div>

        {/* Footer Note */}
        <p className="mt-5 text-center text-xs text-slate-500">
          Stay organized. One task at a time.
        </p>

      </div>
    </div>
  )
}

export default AddTaskPage