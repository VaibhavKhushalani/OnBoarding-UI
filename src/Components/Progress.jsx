import React from "react";

const Progress = ({ step }) => {
  return (
    <div className="progress-main">
      <div className="step-slider">
        <hr
          style={{
            width:
              step === 2
                ? "50%"
                : step === 3
                ? "80%"
                : step === 4
                ? "100%"
                : "",
          }}
        />
      </div>
      <span className={step > 0 ? "step1" : ""}>1</span>
      <span className={step > 1 ? "step2" : ""}>2</span>
      <span className={step > 2 ? "step3" : ""}>3</span>
      <span className={step > 3 ? "step4" : ""}>4</span>
    </div>
  );
};

export default Progress;
