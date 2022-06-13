import { Badge, Button, List, ListItem, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useQuizContext } from "../context";

interface Question {
  correct_answer: string | boolean;
  incorrect_answers: Array<string>;
  question: string;
  type: string;
}

export const Game = () => {
  const { questions } = useQuizContext();
  const [trivia, setTrivia] = useState<Question>({} as Question);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");

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
      const { correct_answer, incorrect_answers, question, type } = questions[currentQuestion];
      setTrivia({ ...trivia, correct_answer, incorrect_answers, question, type });
      setCorrectAnswer(correct_answer);
    }
    console.log(currentQuestion);
  }, [questions, currentQuestion]);
  return (
    <VStack>
      <Badge>{`${currentQuestion + 1} / 10`}</Badge>
      <Text>{trivia?.question?.replace("&#039;", "'")}</Text>
      <Button bg="white" minW="sm" value={correctAnswer} onClick={handleQuestion}>
        {trivia.correct_answer}
      </Button>
      {trivia?.incorrect_answers?.map((incorrect) => (
        <Button bg="white" minW="sm" key={incorrect} value={incorrect} onClick={handleQuestion}>
          {incorrect}
        </Button>
      ))}
      <Button colorScheme="twitter" minW="sm" onClick={nextQuestion}>
        Next
      </Button>
    </VStack>
  );
};
