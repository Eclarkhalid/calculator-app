import React from 'react';

// Define the type for the value prop
interface DisplayProps {
  value: string; // Replace 'string' with the appropriate type of the 'value' prop
}

const Display = ({ value }: DisplayProps) => {
  return (
    <div className="flex justify-end col-span-4 h-20 w-full bg-gray-800 text-white text-right py-6 px-10 rounded">
      {value}
    </div>
  );
};

export default Display;
