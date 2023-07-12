"use client";

import { useRouter } from "next/navigation";
import { Button, Text, Input, Box, Flex, FormControl } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import getPhrase from "@/utils/getPhrase";
import { Sign } from "@/types/Sign";

export default function Home() {
  const [phrase, setPhrase] = useState<Sign | null>(null);
  const dateSearch = useSearchParams().get("date");

  useEffect(() => {
    setPhrase(getPhrase(dateSearch));
  }, [dateSearch]);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="100%"
      direction="column"
    >
      {phrase && (
        <Flex
          direction="column"
          justifyItems="center"
          alignItems="start"
          w="30rem"
          gap="0.75rem"
        >
          <Text fontSize="2rem">{phrase.sign}</Text>
          <Text textAlign="justify">{phrase.message}</Text>
        </Flex>
      )}
    </Flex>
  );
}
