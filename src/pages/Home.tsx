import { Button, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/categories");
  return (
    <Stack>
      <Heading size="4xl">Quiz Game</Heading>
      <Button colorScheme="linkedin" onClick={handleClick}>
        Lets play
      </Button>
    </Stack>
  );
};
