"use client";

import { Providers } from "./providers";
import { Inter } from "next/font/google";
import { Box } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Box w="100vw" h="100vh">
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
