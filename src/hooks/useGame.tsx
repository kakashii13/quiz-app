import { useEffect } from "react";
import { useQuizContext } from "../context";

export const useGame = () => {
  const { questions, addPoints } = useQuizContext();

  const handleQuestion = (answer: string) => {
    setIsSelected(true);
    const newAnswers = [...answers];
    const filter = newAnswers.filter((ans) => ans.text === answer);
    filter[0].selected = true;
    if (filter[0].correct === true) {
      addPoints(10);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < 9 && isSelected !== false) {
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);
      setIsSelected(false);
    } else {
      navigate("/results");
    }
  };

  useEffect(() => {
    if (questions.length !== 0) {
      const { correct_answer, incorrect_answers, question, type } =
        questions[currentQuestion];
      setQuestion(question);

      const arrOfAnswers = incorrect_answers
        .map((i) => {
          const obj: Answers = {
            text: i,
            correct: false,
            selected: false,
          };
          return obj;
        })
        .concat({
          text: correct_answer,
          correct: true,
          selected: false,
        });

      setAnswers(arrOfAnswers);
    }
  }, [questions, currentQuestion]);
};
