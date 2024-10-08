import React from "react";
import { AnswerObject } from "../App";
import ButtonWrapper from "./QuestionCardStyles";
import { Wrapper } from "../App.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>, answer: string) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) =>{
    console.log("Answer Loading", answers)
    return (

  <Wrapper>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer} // Compare with correct answer
          userClicked={userAnswer?.answer === answer} // Check if user clicked this answer
        >
          <button disabled={!!userAnswer} onClick={(e) => callback(e, answer)}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
)};

export default QuestionCard;
