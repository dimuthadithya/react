import React, { useState } from 'react';

export const BoxCard = ({ result, children }) => {
  const [show, setShow] = useState(true);

  return (
    <div className={show ? '' : 'hidden'}>
      <div className={`box ${result}`}>
        {children}
        <div className="btn-div">
          <button onClick={() => setShow(!show)} className="trigger">
            Hide
          </button>
        </div>
      </div>
    </div>
  );
};
