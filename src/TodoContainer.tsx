import React from "react";

export const TodoContainer = ({ children }) => {
  return (
    <div className="bg-ice-white min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto overflow-hidden">
        <h1 className="text-2xl font-bold text-midnight-navy bg-ice-white p-4 border-midnight-navy">
          Todo List
        </h1>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {children}
        </div>
      </div>
    </div>
  );
};