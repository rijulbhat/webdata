import React from "react";

export function DynamicBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 dark:from-blue-900 dark:via-purple-900 dark:to-blue-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMzQ5OGRiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOGU0NGFkIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMGg1MDB2NTAwSDB6IiBmaWxsPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMSIvPjwvc3ZnPg==')]"></div>
        <div className="absolute inset-0 animate-wave bg-gradient-to-tl from-transparent via-blue-300 to-transparent opacity-30 dark:via-blue-600"></div>
        <div
          className="absolute inset-0 animate-wave bg-gradient-to-br from-transparent via-purple-300 to-transparent opacity-30 dark:via-purple-600"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white dark:bg-blue-200 animate-float"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
