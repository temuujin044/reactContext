import React from "react";
import Rating from "./Rating";
export default function Answer(props) {
  const { answer } = props;
  return (
    <div>
      <Rating rating={answer.rating} />
    </div>
  );
}
