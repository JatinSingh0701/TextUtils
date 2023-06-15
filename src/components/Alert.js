import React from 'react';

function Alert(props) {

  // Function to capitalize the first letter of a word

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (

    // Render the alert if props.alert is truthy

    props.alert && (
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        
        {/* Display the capitalized alert type */}
        
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>
    )
  );
}

export default Alert;
