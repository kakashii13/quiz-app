import {
  Badge,
  Button,
  defaultStandaloneParam,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useQuizContext } from "../context";

interface Question {
  question: string;
}

interface Answers {
  text: string;
  correct: string | boolean;
}

export const Game = () => {
  const { questions } = useQuizContext();
  const [question, setQuestion] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [answers, setAnswers] = useState<Answers[]>([]);

  const handleQuestion = (answer: string) => {
    setCorrectAnswer(answer);
  };

  const nextQuestion = () => {
    if (currentQuestion < 9) {
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);
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
          };
          return obj;
        })
        .concat({ text: correct_answer, correct: true });

      setAnswers(arrOfAnswers);
    }
  }, [questions, currentQuestion]);
  return (
    <VStack>
      <Badge>{`${currentQuestion + 1} / 10`}</Badge>
      <Text>{question?.replace("&#039;", "'")}</Text>
      {answers.map((ans) => (
        <Button
          key={ans.text}
          bg="white"
          minW="sm"
          onClick={() => handleQuestion(correctAnswer)}
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
