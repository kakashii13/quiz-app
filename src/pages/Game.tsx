import { Badge, Button, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../context";

interface Question {
  question: string;
}

interface Answers {
  text: string;
  correct: string | boolean;
  selected: boolean;
}

export const Game = () => {
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
      const { correct_answer, incorrect_answers, question, type } = questions[currentQuestion];
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
        .concat({ text: correct_answer, correct: true, selected: false });

      setAnswers(arrOfAnswers);
      console.log(arrOfAnswers);
    }
  }, [questions, currentQuestion]);
  return (
    <VStack>
      <Badge>{`${currentQuestion + 1} / 10`}</Badge>
      <Text>{question?.replace("&#039;", "'")}</Text>
      {answers.map((ans) => (
        <Button
          key={ans.text}
          isDisabled={isSelected && !ans.selected}
          colorScheme={ans.selected ? (ans.correct ? "green" : "red") : "teal"}
          minW="sm"
          onClick={() => handleQuestion(ans.text)}
        >
          {ans.text}
        </Button>
      ))}

      <Button colorScheme="twitter" minW="sm" onClick={nextQuestion}>
        Next
      </Button>
    </VStack>
  );
};
