import React, { useState, useEffect } from 'react';

interface TodoItemProps {
  title: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({ title }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return [hours, minutes, remainingSeconds]
      .map((v) => v.toString().padStart(2, '0'))
      .join(':');
  };

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="bg-ice-white rounded-lg shadow-md p-4 flex flex-col h-full">
      <h2 className="text-xl font-semibold text-midnight-navy border-2 border-midnight-navy p-2 rounded-md mb-4">
        {title}
      </h2>
      <button className="text-vibrant-red hover:text-ruby-red mb-4">
        View details
      </button>
      <div className="text-3xl font-bold text-midnight-navy mb-4">
        {formatTime(time)}
      </div>
      <div className="flex justify-between mt-auto">
        <button
          onClick={handleStart}
          className="bg-cloudy-sky text-ice-white px-4 py-2 rounded-md hover:bg-midnight-navy"
        >
          Start
        </button>
        <button
          onClick={handlePause}
          className="bg-vibrant-red text-ice-white px-4 py-2 rounded-md hover:bg-ruby-red"
        >
          Pause
        </button>
        <button
          onClick={handleReset}
          className="bg-midnight-navy text-ice-white px-4 py-2 rounded-md hover:bg-ruby-red"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
