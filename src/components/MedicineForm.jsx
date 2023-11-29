import React, { useState } from "react";
import {
  Input,
  IconButton,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { sourceHead } from "./headers";

const MedicineForm = ({ saveFucntion }) => {
  const [medicines, setMedicines] = useState([]);
  const [medicineName, setMedicineName] = useState("");
  const [medicineSource, setMedicineSource] = useState("");

  const deleteItem = (medicines) => {
    setMedicines((prevItems) =>
      prevItems.filter((items) => items.name !== medicines)
    );
  };

  const handleSourceChange = (index, value) => {
    const updatedMedicines = [...medicines];
    updatedMedicines[index].source = value;
    setMedicines(updatedMedicines);
  };

  const handleAddMedicine = (e) => {
    e.preventDefault();
    const newMedicine = {
      name: medicineName,
      source: medicineSource,
    };
    setMedicines([...medicines, newMedicine]);
    setMedicineName("");
    setMedicineSource("");
  };

  const handleSaveMedicines = () => {
    saveFucntion(medicines);
  };

  return (
    <div className="flex border-black border-[2px] p-5 gap-4 rounded-lg flex-row-reverse">
      <IconButton size="sm" onClick={handleSaveMedicines} color="green">
        <FaCheck className="text-2xl" />
      </IconButton>
      <IconButton size="sm" onClick={handleAddMedicine} color="blue">
        <FaPlus className="text-2xl" />
      </IconButton>

      <div className="flex flex-col  justify-center items-center gap-2">
        {medicines.map((medicine, index) => (
          <div className="grid grid-cols-2 gap-2 " key={index}>
            <div className="flex gap-2 justify-between items-center">
              <IconButton
                size="sm"
                onClick={() => deleteItem(medicine.name)}
                color="red"
              >
                <ImCross className="text-xl" />
              </IconButton>
              <Menu>
                <MenuHandler>
                  <Button>
                    {medicine.source ? medicine.source : "مصدر العلاج"}
                  </Button>
                </MenuHandler>
                <MenuList className="max-h-72">
                  {sourceHead.map((item, itemIndex) => (
                    <MenuItem
                      key={itemIndex}
                      onClick={() => handleSourceChange(index, item)}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </div>

            <Input
              type="text"
              value={medicine.name}
              label="اسم العلاج"
              onChange={(e) => {
                const updatedMedicines = [...medicines];
                updatedMedicines[index].name = e.target.value;
                setMedicines(updatedMedicines);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicineForm;
