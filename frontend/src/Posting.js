import React from "react";
function Posting(Input,Text) {
    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          <p>{Input} Says {Text}</p>
          <p>Input: {Input}</p>
          <p>Textarea: {Text}</p>
        </div>
      );

}
export default Posting