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

  const dateInRange = () => {
    if (!dateRef.current) return;

    let date = Date.parse(dateRef.current.value);

    // Check if the date is valid (not in future, not too far in the past)
    if (date > Date.now()) {
      date = Date.now();
    } else if (date < Date.parse("1900-1-1")) {
      date = Date.parse("1900-1-1");
    }

    dateRef.current.value = dateToDefaultValue(new Date(date));
  };

  return (
    <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
      <Flex
        w={{ base: "70%", lg: "60%" }}
        h={{ base: "90%", lg: "70%" }}
        borderRadius="1rem"
        border={{ base: "none", lg: "1px solid white" }}
        alignItems="center"
        justifyContent="center"
        gap="1.75rem"
        direction="column"
      >
        <Text fontSize={{ base: "1.5rem", md: "2rem" }}>
          Welcome to Astrich!
        </Text>
        <Text textAlign="center">
          To see your advice from the stars,<br></br> tell us something about
          you.
        </Text>
        <Image src="/candle.png" width="100" height="100" alt="logo image" />
        <FormControl w="auto">
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
                defaultValue={dateToDefaultValue(
                  new Date(Date.parse("2005-1-1"))
                )}
                onBlur={() => dateInRange()}
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
