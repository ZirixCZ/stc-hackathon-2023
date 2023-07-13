"use client";

import { useRouter } from "next/navigation";
import { Button, Text, Input, Box, Flex, FormControl } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import getPhrase from "@/utils/getPhrase";
import { Sign } from "@/types/Sign";

export default function Home() {
  const router = useRouter();
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
      gap="2rem"
    >
      {phrase && (
        <Flex
          direction="column"
          justifyItems="center"
          alignItems="start"
          w={{ base: "20rem", lg: "30rem" }}
          gap="0.75rem"
        >
          <Text fontSize="2rem">{phrase.sign}</Text>
          <Text textAlign="justify">{phrase.message}</Text>
        </Flex>
      )}
      <Button
        variant="outline"
        color="white"
        _hover={{ color: "accent.500", bg: "white" }}
        onClick={() => router.back()}
      >
        Back
      </Button>
      <Flex
        pt="5rem"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap="1rem"
        w={{ base: "20rem", lg: "30rem" }}
      >
        <Text>{`Planets say it clearly ${phrase?.sign}, today is a day of RELAXATION!`}</Text>
        <Button
          variant="outline"
          color="white"
          _hover={{ color: "accent.500", bg: "white" }}
        >
          <a
            href="https://www.sephora.cz/p/bubble-bath-shower-gel---pena-do-koupele-486618.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open
          </a>
        </Button>
      </Flex>
    </Flex>
  );
}
