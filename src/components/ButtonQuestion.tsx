import { Button, Icon, Text } from "@chakra-ui/react";
import {
  AiFillCloseCircle,
  AiOutlineCheckCircle,
} from "react-icons/ai";

interface Props {
  ans: {
    text: string;
    correct: string | boolean;
    selected: boolean;
  };
  isSelected: boolean;
  handleQuestion: (text: string) => void;
}

export const ButtonQuestion = ({
  ans,
  isSelected,
  handleQuestion,
}: Props) => {
  return (
    <Button
      isDisabled={isSelected && !ans.selected}
      colorScheme={
        ans.selected ? (ans.correct ? "green" : "red") : "gray"
      }
      minW="xs"
      fontWeight="400"
      // border="1px solid #ccc"
      onClick={() => handleQuestion(ans.text)}
    >
      <Text>{ans.text}</Text>
      {ans.selected && (
        <Icon
          as={ans.correct ? AiOutlineCheckCircle : AiFillCloseCircle}
          position="absolute"
          right="5"
        />
      )}
    </Button>
  );
};
