import { Badge, Button, Progress, Stack, Text, VStack } from "@chakra-ui/react";
import { ButtonQuestion } from "../components/ButtonQuestion";
import { useGame } from "../hooks/useGame";

export const Game = () => {
  const {
    answers,
    currentQuestion,
    question,
    nextQuestion,
    handleQuestion,
    isSelected,
  } = useGame();
  return (
    <VStack
      boxShadow="base"
      p="20px"
      borderRadius="md"
      bg="gray.100"
      spacing={8}
      minW="lg"
      minH="sm"
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
          {question
            ?.replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&eacute;/g, "é")
            .replace(/&amp;/g, "&")}
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
