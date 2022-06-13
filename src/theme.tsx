import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: `'Raleway', sans-serif`,
  },
  styles: {
    global: {
      "html, body, #root": {
        bg: "gray.100",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },
});
