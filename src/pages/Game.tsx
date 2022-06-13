import { List, ListItem, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useQuizContext } from "../context";

export const Game = () => {
  const { questions } = useQuizContext();
  return (
    <VStack>
      <List>
        {questions.map((q, index) => (
          <ListItem key={index}>
            <Text>{q.question}</Text>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};
