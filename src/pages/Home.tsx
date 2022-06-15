import {
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../context";
import image from "../assets/image.jpg";
import imageMain from "../assets/imageMain.svg";
import test from "../assets/test.svg";

export const Home = () => {
  const { handleStarted } = useQuizContext();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/categories");
    handleStarted();
  };
  return (
    <HStack spacing={10}>
      <VStack>
        <Heading size="4xl" color="blue.300">
          Quizzles
        </Heading>
        <Button bg="black" colorScheme="black" onClick={handleClick} minW="xs">
          Play Now
        </Button>
      </VStack>
      <Image src={test} boxSize="300px" objectFit="cover" />
    </HStack>
  );
};
