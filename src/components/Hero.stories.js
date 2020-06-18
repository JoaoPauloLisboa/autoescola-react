import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import bgHero1 from "../stories/assets/bg-hero-1.jpg";
import bgHero2 from "../stories/assets/bg-hero-2.jpg";
import Heading from "./Heading";

export default {
  title: "Components|Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={bgHero1}>
    <Heading>
      <h1>{text("Title", "Ganhe sua liberdade para ir e vir")}</h1>
    </Heading>
    <p>{text("Text", "Teste")}</p>
  </Hero>
);

export const whitList = () => (
  <Hero image={bgHero2}>
    <Heading>
      <h1>Ganhe sua liberdade para ir e vir</h1>
    </Heading>
    <ul>
      <li>Lorem dolor simet ipsum amet laie toravek in tupius.</li>
      <li>Lorem dolor simet ipsum amet laie toravek in tupius.</li>
      <li>Lorem dolor simet ipsum amet laie toravek in tupius.</li>
    </ul>
  </Hero>
);
