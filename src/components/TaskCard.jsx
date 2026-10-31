import React from 'react'
import { CalendarDays, Pencil, Clock3 } from 'lucide-react'

const TaskCard = ({ task, editButton, deleteButton }) => {

  if (!task) return null

  const priority = task?.priority?.toLowerCase()

  const priorityStyles = {
    high: 'border-red-500/20 bg-red-500/10 text-red-400',
    medium: 'border-amber-500/20 bg-amber-500/10 text-amber-400',
    low: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400',
   }

  const currentPriority =
    priorityStyles[priority] ||
    'border-gray-500/20 bg-gray-500/10 text-gray-400'

  return (
    <div className="group flex min-w-0 flex-col rounded-2xl border border-white/10 bg-[#111119] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-950/20 sm:p-6">

      {/* Priority and Status */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${currentPriority}`}
        >
          {task.priority || 'No priority'}
        </span>

        <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
          {task.status || 'Todo'}
        </span>
      </div>

      {/* Title */}
      <h2 className="mb-3 break-words text-lg font-semibold text-white transition-colors group-hover:text-violet-300 sm:text-xl">
        {task.title || 'Untitled task'}
      </h2>

      {/* Description */}
      <p className="mb-6 flex-1 break-words text-sm leading-6 text-gray-400">
        {task.description || 'No description provided.'}
      </p>

      {/* Due Date */}
      <div className="mb-5 flex items-center gap-3 border-t border-white/10 pt-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-violet-400">
          <CalendarDays size={17} />
        </div>

        <div className="min-w-0">
          <p className="mb-1 text-[10px] font-semibold tracking-[0.15em] text-gray-500">
            DUE DATE
          </p>
          <p className="break-words text-sm text-gray-300">
            {task.date || 'No date set'}
          </p>
        </div>

        {task.date && (
          <Clock3
            size={16}
            className="ml-auto shrink-0 text-gray-500"
          />
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs text-gray-500">
          Task details
        </span>

        <button
          type="button"
          onClick={() => editButton(task.id)}
          className="inline-flex items-center gap-2 rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-2.5 text-sm font-medium text-violet-300 transition-all hover:border-violet-400/60 hover:bg-violet-500/20 active:scale-95"
        >
          <Pencil size={14} />
          Edit task
        </button>

        <button type='button' onClick={()=> deleteButton(task.id)}  className="bg-red-500 hover:bg-red-600 active:scale-95 text-white px-3 py-2 sm:px-4 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 shadow-sm flex items-center justify-center gap-2">
          delete
        </button>
      </div>
    </div>
  )
}

export default TaskCard