import {
  Badge,
  Button,
  Progress,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonQuestion } from "../components/ButtonQuestion";
import { useQuizContext } from "../context";

interface Answers {
  text: string;
  correct: string | boolean;
  selected: boolean;
}

export const Game = () => {
  const [question, setQuestion] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers[]>([]);
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();

  return (
    <VStack
      boxShadow="base"
      p="20px"
      borderRadius="md"
      bg="gray.100"
      spacing={8}
    >
      <VStack alignItems="center">
        <Badge
          bgGradient="linear(to-r ,#2A5470, #4C4177)"
          bgClip="text"
        >{`Question ${currentQuestion + 1} / 10`}</Badge>
        <Progress
          colorScheme="facebook"
          value={currentQuestion ? currentQuestion * 10 : 10}
          size="xs"
          w="xs"
          borderRadius="md"
        />
        <Text fontWeight="bold" textAlign="center">
          {question?.replace("&#039;", "'")}
        </Text>
      </VStack>
      <Stack>
        {answers.map((ans) => (
          <ButtonQuestion
            key={ans.text}
            ans={ans}
            isSelected={isSelected}
            handleQuestion={handleQuestion}
          />
        ))}
      </Stack>

      <Button
        bg="black"
        colorScheme="black"
        minW="xs"
        onClick={nextQuestion}
        isDisabled={!isSelected}
      >
        Next
      </Button>
    </VStack>
  );
};
