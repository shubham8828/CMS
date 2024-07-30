import React from "react";
import Card from "../components/Card";
import List from "../components/List";

import studentData from "../data/student.data.json";
import eventData from "../data/event.data.json";

const Home = () => {
  return (
    <>
      <Card />

      <List
        Data={eventData}
        title={"Event List"}
        id={"SrNo."}
        name={"Event Name"}
        classes={"Place"}
        rollNo={"Room No."}
      />
      <List
        Data={studentData}
        title={"Student List"}
        id={"Student ID"}
        name={"Name"}
        classes={"Class"}
        rollNo={"Roll No"}
      />
    </>
  );
};

export default Home;
