"use client";

import { useRef } from "react";
import { Button, Text, Input, Box, Flex } from "@chakra-ui/react";
import dateToDefaultValue from "@/utils/dateDefaultValue";

export default function Home() {
  const dateRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    if (!dateRef.current) return;

    const date = dateRef.current.value;
    console.log(date);
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="100%"
      direction="column"
      gap="1rem"
    >
      <Box w="16rem">
        <Text>Date of birth</Text>
        <Input
          name="to"
          required
          type="date"
          defaultValue={dateToDefaultValue(new Date(Date.now()))}
        />
      </Box>
      <Button onClick={handleSubmit}>Submit</Button>
    </Flex>
  );
}
