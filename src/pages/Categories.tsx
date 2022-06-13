import { Button, Heading, VStack } from "@chakra-ui/react";
import { useQuizContext } from "../context";
import { ListOfCategories } from "../helpers/ListOfCategories";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const { setCategory } = useQuizContext();
  const navigate = useNavigate();

  const handleSetCategory = (id: number) => {
    setCategory(id);
    navigate("/difficulty");
  };
  return (
    <VStack>
      <Heading>Choose a category</Heading>
      {ListOfCategories.map((category) => (
        <Button
          key={category.id}
          colorScheme={category.color}
          borderRadius="4px"
          p="10px"
          textAlign="center"
          mt="10px"
          minWidth="200px"
          boxShadow="base"
          onClick={() => handleSetCategory(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </VStack>
  );
};
