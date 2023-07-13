"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import Image from "next/image";
import { Button, Text, Input, Box, Flex, FormControl } from "@chakra-ui/react";
import dateToDefaultValue from "@/utils/dateDefaultValue";

export default function Home() {
  const dateRef = useRef<HTMLInputElement | null>(null);
  const locationRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();

  const handleSubmit = () => {
    if (!dateRef.current) return;

    router.push(`/phrase?date=${dateRef.current.value}`);
  };

  return (
    <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
      <Flex
        w="70%"
        h="90%"
        borderRadius="1rem"
        border="1px solid white"
        alignItems="center"
        justifyContent="center"
        gap="1.75rem"
        direction="column"
      >
        <Image src="/candle.png" width="100" height="100" alt="logo image" />
        <FormControl w="16rem">
          <Flex gap="0.5rem" direction="column">
            <Box w="100%">
              <Text>Date of birth</Text>
              <Input
                color="white"
                name="to"
                required
                type="date"
                max={dateToDefaultValue(new Date(Date.now()))}
                ref={dateRef}
                defaultValue={dateToDefaultValue(new Date(Date.now()))}
              />
            </Box>
          </Flex>
        </FormControl>

        <Button
          onClick={handleSubmit}
          variant="outline"
          color="white"
          _hover={{ color: "accent.500", bg: "white" }}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}
