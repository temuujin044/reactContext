import React from "react";
import QuestionAnswers from "./QuestionAnswers";
import SideInfo from "./SideInfo";

export function Right(props) {
  const data = props.data;
  return (
    <div className="w-3/4 bg-green-300 h-[100vh] flex">
      <QuestionAnswers data={data} />
      <SideInfo />;
    </div>
  );
}
