import React from 'react';

const Bubbles = () => {
     return (
          <div className="absolute inset-0 w-full h-full overflow-hidden">
               <div className="bubble bg-blue-400 w-24 h-24" style={{ top: '10%', left: '20%' }}></div>
               <div className="bubble bg-red-400 w-16 h-16" style={{ top: '30%', left: '70%' }}></div>
               <div className="bubble bg-green-400 w-20 h-20" style={{ top: '60%', left: '40%' }}></div>
               <div className="bubble bg-yellow-400 w-28 h-28" style={{ top: '80%', left: '10%' }}></div>
               <div className="bubble bg-purple-400 w-32 h-32" style={{ top: '50%', left: '50%' }}></div>
          </div>
     );
};

export default Bubbles;
