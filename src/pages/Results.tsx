import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../context";

export const Results = () => {
  const { totalPoints, resetScore } = useQuizContext();
  const navigate = useNavigate();

  const handleClick = () => {
    resetScore();
    navigate("/categories");
  };

  return (
    <VStack>
      <Heading>Congrats, your score is:</Heading>
      <Text fontSize="xl">{`${totalPoints} points`}</Text>
      <Button
        onClick={handleClick}
        colorScheme="twitter"
        minW="100px"
        my="10px"
      >
        Play again
      </Button>
    </VStack>
  );
};
