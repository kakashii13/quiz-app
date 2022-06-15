import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: `'Open-sans', sans-serif`,
  },
  styles: {
    global: {
      "html, body, #root": {
        bg: "gray.300",
        // color: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },
});
