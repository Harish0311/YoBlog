import React from "react";
function Posting({ input, text }) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>{input} says {text}</h2>
    </div>
  );

}
export default Posting