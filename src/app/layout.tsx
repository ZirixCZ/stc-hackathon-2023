"use client";

import { Providers } from "./providers";
import { Inter } from "next/font/google";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  useSystemColorMode: false,
  colors: {
    accent: {
      500: "#201c1c",
    },
  },
});
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider theme={theme}>
          <Box
            w="100vw"
            h="100vh"
            bg="accent.500"
            color="white"
            margin="0"
            overflow="hidden"
          >
            {children}
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
