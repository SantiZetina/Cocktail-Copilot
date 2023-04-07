import React from "react";


const AgeVerification = ({ onConfirm, onReject }) => {
  const handelConfirm = () => {
    onConfirm();
  }

  const handelReject = () => {
    onReject();
  }

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{minHeight: '100vh'}}>
        <div className="card" style={{minWidth: '20rem', backgroundColor: 'white'}}>
            <div className="card-header">Age Verification</div>
            <div className="card-body">
                <p className="card-text">
                    Are you 21 or older?
                </p>
                <button className="btn btn-primary mr-2" onClick={onConfirm}>Yes</button>
                <button className="btn btn-secondary" onClick={onReject}>No</button>
                </div>
        </div>
        
    </div>
  )
}

export default AgeVerification;