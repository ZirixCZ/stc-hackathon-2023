"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Button, Text, Input, Box, Flex, FormControl } from "@chakra-ui/react";
import dateToDefaultValue from "@/utils/dateDefaultValue";

export default function Home() {
  const dateRef = useRef<HTMLInputElement | null>(null);
  const locationRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();

  const handleSubmit = () => {
    if (!dateRef.current || !locationRef) return;

    router.push(`/phrase?date=${dateRef.current.value}`);
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
      <FormControl w="16rem">
        <Flex gap="0.5rem" direction="column">
          <Box w="100%">
            <Text>Date of birth</Text>
            <Input
              name="to"
              required
              type="date"
              max={dateToDefaultValue(new Date(Date.now()))}
              ref={dateRef}
              defaultValue={dateToDefaultValue(new Date(Date.now()))}
            />
          </Box>
          <Box w="100%">
            <Text>Location of birth</Text>
            <Input name="to" required type="text" ref={locationRef} />
          </Box>
        </Flex>
      </FormControl>

      <Button onClick={handleSubmit}>Submit</Button>
    </Flex>
  );
}
