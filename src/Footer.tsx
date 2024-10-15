import React from "react";

const Footer = () => {
  return (
    <footer className="bg-midnight-navy text-ice-white py-4 absolute bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Todo App with Timer</p>
      </div>
    </footer>
  );
};

export default Footer;
