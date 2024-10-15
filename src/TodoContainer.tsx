import React from "react";

export const TodoContainer = ({ children }) => {
  return (
    <div className="bg-ice-white min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-md mx-auto bg-cloudy-sky rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-2xl font-bold text-midnight-navy bg-ice-white p-4 border-b-2 border-midnight-navy">
          Todo List
        </h1>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
