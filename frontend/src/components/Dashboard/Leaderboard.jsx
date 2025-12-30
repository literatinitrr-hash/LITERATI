import React from 'react'
import { FaCrown } from "react-icons/fa"

const rankStyles = {
  1: "bg-amber-400 text-amber-900",   
  2: "bg-slate-300 text-slate-900",  
  3: "bg-orange-500 text-orange-950",
}

const rankGlow = {
  1: "shadow-[0_0_20px_rgba(251,191,36,0.8)]",
  2: "shadow-[0_0_20px_rgba(203,213,225,0.8)]",
  3: "shadow-[0_0_20px_rgba(249,115,22,0.8)]",
};

const getRankStyle = (rank) =>
  rankStyles[rank] || "bg-emerald-600 text-emerald-50"

const standings = [
  { id: 1, rank: 1, name: "Avish", points: 0 },
  { id: 2, rank: 2, name: "Naman", points: 0 },
  { id: 3, rank: 3, name: "Shourya Veer", points: 0 },
  { id: 4, rank: 4, name: "Atulya", points: 0 },
]

function Leaderboard() {
  return (
    <div
      className="
        relative w-full h-auto rounded-lg
        bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-950 
        border-2 border-amber-100 p-6
        shadow-xl text-emerald-50
        hover:shadow-[0_0_80px_rgba(34,197,94,0.65)]
        transition-shadow duration-300
      "
    >
      <div className="flex gap-4 p-5">
        <FaCrown className="text-yellow-400 text-4xl" />
        <h1 className="font-semibold text-3xl text-amber-200">
          OVERALL STANDINGS
        </h1>
      </div>

      {standings.map((item) => (
        <div
          key={item.id}
          className="
            flex items-center justify-between
            rounded-xl
            border-2 border-emerald-600/90
            bg-gradient-to-r from-emerald-800/70 to-emerald-900/90
            hover:border-emerald-300/90
            hover:scale-[1.02]
            transition duration-300
            px-5 py-4 mt-3 mx-4
          "
        >
          <div className="flex items-center gap-4 min-w-0">
            
            
            <div
              className={`
                flex items-center justify-center
                rounded-full h-14 w-14
                font-semibold text-2xl
                shrink-0
                ${getRankStyle(item.rank)}
              `}
            >
              {item.rank}
            </div>

            <h2 className="text-2xl truncate">{item.name}</h2>
          </div>

          <h2 className="text-3xl font-semibold text-amber-200">
            {item.points}
          </h2>
        </div>
      ))}
    </div>
  )
}

export default Leaderboard
