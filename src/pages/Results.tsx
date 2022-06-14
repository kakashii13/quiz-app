import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../context";

export const Results = () => {
  const { totalPoints } = useQuizContext();
  const navigate = useNavigate();

  const handleClick = () => navigate("/");

  return (
    <VStack>
      <Heading>Congrats, you have:</Heading>
      <Text fontSize="xl">{`${totalPoints} points`}</Text>
      <Button onClick={handleClick} colorScheme="twitter" minW="100px" my="10px">
        Back
      </Button>
    </VStack>
  );
};
