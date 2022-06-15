import { Button, Heading, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/categories");
  return (
    <Stack spacing={10}>
      <Heading
        size="4xl"
        bgGradient="linear(to-r , #37D5D6, 
          #36096D)"
        bgClip="text"
      >
        Quizzles
      </Heading>
      <Button
        bg="black"
        colorScheme="black"
        onClick={handleClick}
        minW="xs"
      >
        Play Now
      </Button>
    </Stack>
  );
};
