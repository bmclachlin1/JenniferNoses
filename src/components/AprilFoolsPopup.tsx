import React from 'react';

export const AprilFoolsPopup: React.FC<{ onClose: () => void; }> = ({ onClose }) => {
    return (
        <div
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'white',
                padding: '120px 60px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                zIndex: 1000,
                width: '400px',
                textAlign: 'center',
            }}
        >
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    color: 'black',
                    fontSize: '20px',
                    cursor: 'pointer',
                }}
            >
                ×
            </button>
            <div className="text-5xl font-ethereal font-bold">April Fools ;)</div>
        </div>
    );
};
