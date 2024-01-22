import React from "react";
import Answer from "./Answer";
import Question from "./Question";

export default function QuestionAnswers({ data }) {
  const answers = data.answers;
  return (
    <div className="w-3/4 bg-red-200">
      <Question />
      {answers.map((answer, index) => {
        return <Answer key={index} answer={answer} />;
      })}
    </div>
  );
}
