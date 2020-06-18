import React from "react";
import { ThemeProvider } from "styled-components";

import Button from "./Button";

export default {
  title: "Components|Button",
  component: Button,
};

const theme = {
  colorYellow: "#ffc107",
};

export const usage = () => (
  <ThemeProvider theme={theme}>
    <Button>Meu botão</Button>
  </ThemeProvider>
);
