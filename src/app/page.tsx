"use client";

import { Button, Text, Input, Box, Flex } from "@chakra-ui/react";
import dateToDefaultValue from "@/utils/dateDefaultValue";

export default function Home() {
  return (
    <Flex alignItems="center" justifyContent="center" w="100%" h="100%">
      <Box w="16rem">
        <Text>Date of birth</Text>
        <Input
          name="to"
          required
          type="date"
          defaultValue={dateToDefaultValue(new Date(Date.now()))}
        />
      </Box>
    </Flex>
  );
}
