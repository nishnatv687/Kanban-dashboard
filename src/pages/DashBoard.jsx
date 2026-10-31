
import React from "react";
import useTodoHooks from "../hooks/TodoHooks";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate()
  const {Tasks} = useTodoHooks()
  const total = Tasks.length;

  const todo = Tasks.filter(t => t.status === "Todo").length;
  const inProgress = Tasks.filter(t => t.status === "In Progress").length;
  const completed = Tasks.filter(t => t.status === "Completed").length;

  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  const stats = [
    {
      title: "Total Tasks",
      count: total,
      icon: "ri-stack-line",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "hover:border-violet-500/40",
    },
    {
      title: "To Do",
      count: todo,
      icon: "ri-list-check-3",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "hover:border-blue-500/40",
    },
    {
      title: "In Progress",
      count: inProgress,
      icon: "ri-loader-3-line",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "hover:border-amber-500/40",
    },
    {
      title: "Completed",
      count: completed,
      icon: "ri-checkbox-circle-line",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "hover:border-emerald-500/40",
    },
  ];

  const statusData = [
    { name: "To Do", count: todo, color: "bg-blue-500", dot: "bg-blue-400" },
    { name: "In Progress", count: inProgress, color: "bg-amber-400", dot: "bg-amber-400" },
    { name: "Completed", count: completed, color: "bg-emerald-400", dot: "bg-emerald-400" },
  ];

  return (
    <div className="min-h-screen w-full space-y-7 bg-[#080d1a] p-4 text-white sm:p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-violet-400">
            Overview
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Dashboard<span className="text-violet-500">.</span>
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Welcome back! Here's your productivity overview.
          </p>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300">
          <i className="ri-calendar-line text-violet-400"></i>
         <button className="cursor-pointer" onClick={()=>navigate("/tasks")}>Task Overview</button> 
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={item.title}
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111a2b] p-5 transition-all duration-300 hover:-translate-y-1 ${item.border}`}
          >
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-violet-500/[0.04] blur-2xl transition-all group-hover:bg-violet-500/10"></div>

            <div className="relative flex items-center justify-between">
              <span className="text-sm font-medium text-slate-400">
                {item.title}
              </span>
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.bg}`}>
                <i className={`${item.icon} text-xl ${item.color}`}></i>
              </div>
            </div>

            <div className="relative mt-5 flex items-end justify-between">
              <h2 className="text-4xl font-bold tracking-tight">
                {item.count}
              </h2>
              <span className="text-xs text-slate-500">Tasks</span>
            </div>

            <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/5">
              <div
                className={`h-full rounded-full ${item.color.replace("text-", "bg-")}`}
                style={{
                  width: `${total ? (item.count / total) * 100 : 0}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Progress Section */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">

        {/* Overall Progress */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#171a35] via-[#111a2b] to-[#111a2b] p-6 sm:p-8 lg:col-span-3">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl"></div>

          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-400">
                  Performance
                </p>
                <h2 className="mt-1 text-xl font-bold sm:text-2xl">
                  Overall Progress
                </h2>
              </div>
              <span className="rounded-lg border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 text-xs font-semibold text-violet-300">
                Live Statistics
              </span>
            </div>

            <div className="mt-9 flex flex-col items-center justify-between gap-8 sm:flex-row">
              {/* Circular Progress */}
              <div
                className="relative flex h-44 w-44 shrink-0 items-center justify-center rounded-full"
                style={{
                  background: `conic-gradient(#8b5cf6 ${progress * 3.6}deg, #273047 0deg)`,
                }}
              >
                <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full bg-[#121a2d]">
                  <span className="text-4xl font-bold">{progress}%</span>
                  <span className="mt-1 text-xs text-slate-400">Completed</span>
                </div>
              </div>

              <div className="w-full flex-1 space-y-5">
                <div>
                  <h3 className="text-2xl font-bold">
                    {completed} / {total}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Tasks successfully completed
                  </p>
                </div>

                <div className="space-y-3">
                  {statusData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 rounded-full ${item.dot}`}></span>
                        <span className="text-sm text-slate-300">{item.name}</span>
                      </div>
                      <span className="text-sm font-semibold">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Breakdown */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#111a2b] p-6 lg:col-span-2">
          <p className="text-sm font-medium text-slate-400">
            Task Analytics
          </p>
          <h2 className="mt-1 text-xl font-bold">
            Status Breakdown
          </h2>

          <div className="mt-8 space-y-7">
            {statusData.map((item) => {
              const percentage = total
                ? Math.round((item.count / total) * 100)
                : 0;

              return (
                <div key={item.name}>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-300">
                      {item.name}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {percentage}%
                    </span>
                  </div>

                  <div className="h-2.5 overflow-hidden rounded-full bg-[#263147]">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${item.color}`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    {item.count} tasks
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-4 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.04] p-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10">
            <i className="ri-trophy-line text-2xl text-emerald-400"></i>
          </div>
          <div>
            <h3 className="font-semibold text-white">Completed Tasks</h3>
            <p className="mt-1 text-sm text-slate-400">
              You've finished {completed} tasks so far.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-violet-400/10 bg-violet-400/[0.04] p-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-400/10">
            <i className="ri-focus-3-line text-2xl text-violet-400"></i>
          </div>
          <div>
            <h3 className="font-semibold text-white">Keep Going!</h3>
            <p className="mt-1 text-sm text-slate-400">
              Every task completed is progress.
            </p>
          </div>
        </div>
      </div>

      {/* Empty State */}
      {total === 0 && (
        <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center">
          <i className="ri-inbox-line text-4xl text-slate-500"></i>
          <h3 className="mt-3 text-lg font-semibold">No tasks available</h3>
          <p className="mt-2 text-sm text-slate-400">
            Start by creating your first task.
          </p>
        </div>
      )}

    </div>
  );
};

export default Dashboard;
