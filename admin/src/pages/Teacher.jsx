import React from "react";
import AddNew from "../components/AddNew";

const Teacher = () => {
  return (
    <div>
      <AddNew
        id={"Teacher ID"}
        title={"Add Teacher"}
        name={"Teacher Name "}
        listTitle={"Teacher List"}
        action={"Action"}
        Class={"Department"}
        op1={"IT"}
        op2={"IT"}
        op3={"IT"}
        op1Value={'IT'}
        op2Value={'IT'}
        op3Value={'IT'}
        defaultOp={'Select Department'}
      />
    </div>
  );
};

export default Teacher;
