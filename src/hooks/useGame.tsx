import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../context";

interface Answers {
  text: string;
  correct: string | boolean;
  selected: boolean;
}

export const useGame = () => {
  const { questions, addPoints } = useQuizContext();
  const [question, setQuestion] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers[]>([]);
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();

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
        })
        .sort((a, b) => {
          const fa = a.text.toLowerCase();
          const fb = b.text.toLowerCase();

          if (fa < fb) return 1;

          if (fa > fb) return -1;

          return 0;
        });

      setAnswers(arrOfAnswers);
    }
  }, [questions, currentQuestion]);

  return {
    question,
    currentQuestion,
    answers,
    isSelected,
    handleQuestion,
    nextQuestion,
  };
};
