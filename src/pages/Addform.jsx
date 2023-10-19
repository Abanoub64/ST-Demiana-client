import { Button, Stepper, Step } from "@material-tailwind/react";
import axios from "axios";
import Backbutton from "../components/Backbutton";
import React, { useState } from "react";
import Fatherform from "../components/Fatherform";
import { useNavigate } from "react-router-dom";
import AddChildrenForm from "../components/AddChildrenForm";
import Homeform from "../components/Homeform";

import { ChildrenTable } from "../components/ChildrenTable";

function Addform() {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const navigate = useNavigate();

  const [Childrenlist, setchildrensList] = useState([]);

  const addChild = (newchildrens) => {
    setchildrensList([...Childrenlist, newchildrens]);

    console.log(Childrenlist);
  };

  return (
    <>
      <Backbutton />
      <div
        className={`w-full ${
          activeStep == 0 ? "" : "hidden"
        } mx-auto flex flex-col content-center p-4 justify-center
        `}
      >
        <Fatherform /> {/*<<<< Father and wife Form   */}
      </div>
      <div
        className={`w-full ${
          activeStep == 2 ? "" : "hidden"
        } mx-auto flex flex-col content-center p-4 justify-center
        `}
      >
        <AddChildrenForm
          addChildren={(newchildrens) => addChild(newchildrens)}
        />
        {/*<<<< AddChildrenForm Form   */}
        <ChildrenTable Childrenlist={Childrenlist} /> {/*<<<< Table   */}
      </div>
      <div
        className={`w-full ${
          activeStep == 1 ? "" : "hidden"
        } mx-auto flex flex-col content-center p-4 justify-center
        `}
      >
        <Homeform /> {/*<<<< Address Form   */}
      </div>
      <div className="w-full py-4 px-8">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>1</Step>
          <Step onClick={() => setActiveStep(1)}>2</Step>
          <Step onClick={() => setActiveStep(2)}>3</Step>
        </Stepper>
        <div className="mt-16 flex justify-between">
          <Button onClick={handlePrev} disabled={isFirstStep}>
            Prev
          </Button>
          <Button onClick={handleNext} disabled={isLastStep}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

export default Addform;
