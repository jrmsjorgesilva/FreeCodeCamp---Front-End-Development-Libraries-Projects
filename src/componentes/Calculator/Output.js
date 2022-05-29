import React, { useState } from "react";

const Output = ({ currentValue }) => {
    return (
        <div className="outputScreen" id="display">
            {currentValue}
        </div>
    );
}

export default Output;