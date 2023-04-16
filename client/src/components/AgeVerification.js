import React from "react";


const AgeVerification = ({ onConfirm, onReject }) => {
  const handelConfirm = () => {
    onConfirm();
  }

  const handelReject = () => {
    onReject();
  }

  return (
    <div className=" d-flex align-items-center justify-content-center" style={{minHeight: '100vh', backgroundColor: "rgba(0,0,0,0.5)"}}>
        <div className="card shadow" style={{minWidth: '20rem', backgroundColor: 'lightgray'}}>
            <div className="card-header text-center">Age Verification</div>
            <div className="card-body text-center">
                <p className="card-text text-dark ">
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