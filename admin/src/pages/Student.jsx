import React from "react";
import AddNew from "../components/AddNew";

const Student = () => {
  return (
    <div>
      <AddNew
        id={"Student ID"}
        title={"Add Student"}
        name={"Student Name "}
        Class={"Class"}
        listTitle={"Student List"}
        action={"Action"}
        op1={"FYIT"} 
        op2={"SYIT"}
        op3={"TYIT"}
        op1Value={'FYIT'}
        op2Value={'SYIT'}
        op3Value={'TYIT'}
        defaultOp={"Select Class"}
      />
    </div>
  );
};

export default Student;
