import { Button, Heading, VStack } from "@chakra-ui/react";
import { useQuizContext } from "../context";
import { useNavigate } from "react-router-dom";

const listOfDifficulty = ["easy", "medium", "hard"];

export const Difficulty = () => {
  const { setDifficulty } = useQuizContext();
  const navigate = useNavigate();

  const handleSetDifficulty = (difficulty: string) => {
    setDifficulty(difficulty);
    navigate("/game");
  };

  return (
    <VStack>
      <Heading>Choose difficulty</Heading>
      {listOfDifficulty.map((dif) => (
        <Button
          key={dif}
          onClick={() => handleSetDifficulty(dif)}
          textTransform="capitalize"
        >
          {dif}
        </Button>
      ))}
    </VStack>
  );
};
