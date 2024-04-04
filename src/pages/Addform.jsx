import { Button, Stepper, Step, Checkbox } from "@material-tailwind/react";
import axios from "axios";
import Backbutton from "../components/Backbutton";
import React, { useEffect, useState } from "react";
import Fatherform from "../components/Fatherform";
import { useNavigate } from "react-router-dom";
import AddChildrenForm from "../components/AddChildrenForm";
import Homeform from "../components/Homeform";
import toast from "react-hot-toast";

import { ChildrenTable } from "../components/ChildrenTable";

function Addform() {
  const [data, setdata] = useState({});
  const [father, setfather] = useState({});
  const [mother, setmother] = useState({});
  const [Childrenlist, setchildrensList] = useState([]);
  const [location, setlocation] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [allOk, setAllOk] = useState(false);

  const handleNext = () => {
    !isLastStep && setActiveStep((cur) => cur + 1);
  };
  const handlePrev = () => {
    !isFirstStep && setActiveStep((cur) => cur - 1);
  };

  const updatelocation = (locationdata) => {
    setlocation(locationdata);
  };
  useEffect(
    (fatherdata, motherdata, locationdata) => {
      updateinfo(fatherdata, motherdata, locationdata);
    },
    [activeStep]
  );
  const updateinfo = (fatherdata, motherdata, locationdata) => {
    setfather(fatherdata);
    setmother(motherdata);
    updatelocation(locationdata);
  };

  const createDataObject = async () => {
    const newDataObject = {
      father: father,
      mother: mother,
      Childrenlist: Childrenlist,
      location: location,
    };

    if (
      !(
        newDataObject.father.firstname ||
        newDataObject.father.secondname ||
        newDataObject.father.thirdname ||
        newDataObject.father.forthname
      )
    ) {
      return toast.error("اسم الاب ليس كاملا");
    }

    if (
      !(
        newDataObject.mother.firstname ||
        newDataObject.mother.secondname ||
        newDataObject.mother.thirdname ||
        newDataObject.mother.forthname
      )
    ) {
      return toast.error("اسم الام ليس كاملا");
    }

    if (!/^[0-9]{14,17}$/.test(newDataObject.father.idnumber)) {
      return toast.error("تاكد من الرقم القومي الخاص بالاب");
    } else {
      return setdata(newDataObject), setAllOk(!allOk), Promise.resolve();
    }
  };

  const submitData = async () => {
    const { father, mother, location, Childrenlist } = data;
    try {
      const response = await axios.post("/database", {
        father: father,
        mother: mother,
        location: location,
        Childrenlist: Childrenlist,
      });
      toast.success(response.data.success);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const updatechildrenlist = (Input) => {
    setchildrensList(Input);
  };

  const addChild = (newchildrens) => {
    setchildrensList([...Childrenlist, newchildrens]);
  };

  return (
    <>
      <Backbutton distination={"/select"} />
      <div
        className={`w-full ${
          activeStep == 0 ? "" : "hidden"
        } mx-auto flex flex-col content-center p-4 justify-center
        `}
      >
        <Fatherform updateinfo={updateinfo} />{" "}
        {/*<<<< Father and wife Form   */}
      </div>
      <div
        className={`w-full ${
          activeStep == 2 ? "" : "hidden"
        } mx-auto flex flex-col content-center p-4 justify-center
        `}
      >
        <AddChildrenForm
          setchildrensList={setchildrensList}
          addChildren={(newchildrens) => addChild(newchildrens)}
        />
        {/*<<<< AddChildrenForm Form   */}
        <ChildrenTable
          Childrenlist={Childrenlist}
          update={updatechildrenlist}
        />{" "}
        {/*<<<< Table   */}
        <div className="mt-8 justify-center items-center gap-8 flex flex-row-reverse">
          <Button
            disabled={!allOk}
            color="green"
            onClick={() => {
              submitData();
              setInterval(() => {
                window.location.reload();
              }, 1000);
            }}
          >
            حفظ
          </Button>
          <Checkbox
            checked={allOk}
            onClick={async (e) => {
              await createDataObject();
            }}
            label="كل البيانات صحيحة ؟"
          />
        </div>
      </div>
      <div
        className={`w-full ${
          activeStep == 1 ? "" : "hidden"
        } mx-auto flex flex-col content-center p-4 justify-center
        `}
      >
        <Homeform updatelocation={updatelocation} /> {/*<<<< Address Form   */}
      </div>
      <div className="w-full  py-4 px-8">
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
          <Button
            onClick={() => {
              handleNext();
              updateinfo();
            }}
            disabled={isLastStep}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

export default Addform;
