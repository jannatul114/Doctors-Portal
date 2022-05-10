import React from 'react';

const StartedButton = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary my-4">{children}</button>

        </div>
    );
};

export default StartedButton;