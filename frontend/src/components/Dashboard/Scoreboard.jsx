import React from "react";

const scoreData = [
  {
    event: "Open Mic",
    name: "Avish",
    score: 0,
    participants: 0,
  },
  {
    event: "Fan Fiction",
    name: "Avish",
    score: 0,
    participants: 0,
  },
  {
    event: "StoryCraft Challenge",
    name: "Avish",
    score: 0,
    participants: 0,
  }
];

function Scoreboard() {
  return (
    <div>
      <h1 className="
        font-semibold 
        text-4xl
        p-5 
        text-amber-200">
        EVENT SCORES
      </h1>

      
      <div className="
        flex 
        flex-wrap 
        gap-8
        px-5
        justify-between
      ">
        {scoreData.map((item, index) => (
          <div
            key={index}
            className="
              relative
              w-full
              sm:w-[48%]
              lg:w-[30%]
              rounded-2xl
              bg-gradient-to-br from-emerald-900 via-green-900 to-emerald-950 
              border-2 border-amber-100 
              p-6
              shadow-xl
              text-emerald-50
              hover:shadow-[0_0_80px_rgba(34,197,94,0.65)]
              transition-all
              duration-300
            "
          >
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl text-amber-200">
                  {item.event}
                </h3>
                <p className="italic text-emerald-300 mb-6">
                  {item.name}
                </p>
              </div>

              <button className="
                rounded-full
                border
                text-xs
                px-4 py-1
                hover:bg-amber-200/10
                hover:scale-105
                transition
              ">
                View Details
              </button>
            </div>

            
            <div className="flex justify-between mt-4">
              <div>
                <span className="text-sm text-emerald-400">Score</span>
                <p className="text-3xl font-bold text-amber-200">
                  {item.score}
                </p>
              </div>

              <div className="text-right">
                <span className="text-sm text-emerald-400">
                  Participants
                </span>
                <p className="text-xl font-semibold">
                  {item.participants}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Scoreboard;
