import { Select } from "@/ui";
import React, { useState } from "react";

const numberOptions = ["5", "10", "15", "20"];

export default function ShowBy() {
  const [selectedNumber, setSelectedNumber] = useState("");

  const changeNumberValue = (newValue: string) => {
    setSelectedNumber(newValue);
  };

  return (
    <Select
      defaultValue="10"
      options={numberOptions}
      value={selectedNumber}
      changeValue={changeNumberValue}
    />
  );
}
