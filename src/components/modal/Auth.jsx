import React from "react";

const Auth = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10"
    >
      <div className="bg-white h-[150px] w-[240px] mx-auto p-2 border-2 border-black rounded-lg shadow-md">
        {/* Ваше содержимое здесь */}
      </div>
    </div>
  );
};

export default Auth;
