import React from 'react'
import { Link, NavLink } from 'react-router'
import { LayoutDashboard, ListTodo, Plus, CheckSquare } from 'lucide-react'

const Navbar = () => {
  const navLinks = [
    {
      name: 'Dashboard',
      path: '/',
      icon: LayoutDashboard,
    },
    {
      name: 'All Tasks',
      path: '/tasks',
      icon: ListTodo,
    },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 shadow-lg shadow-violet-600/25">
            <CheckSquare size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight">
              TaskFlow<span className="text-violet-400">.</span>
            </h1>
            <p className="text-xs text-slate-400">
              Organize your work
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 rounded-xl bg-white/5 p-1">
          {navLinks.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 sm:flex-none sm:px-4 ${
                  isActive
                    ? 'bg-violet-600 text-white shadow-md'
                    : 'text-slate-400 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <Icon size={17} />
              <span>{name}</span>
            </NavLink>
          ))}
        </div>

        {/* Add Task Button */}
        <Link
          to="/form"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-200 hover:bg-violet-500 active:scale-95 md:py-2.5"
        >
          <Plus size={18} />
          <span>Add New Task</span>
        </Link>

      </div>
    </nav>
  )
}

export default Navbar