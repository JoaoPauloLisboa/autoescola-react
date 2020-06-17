import React from "react";

import Hero from "../components/Hero";
import bgHero1 from "./assets/bg-hero-1.jpg";
import bgHero2 from "./assets/bg-hero-2.jpg";
import Heading from "../components/Heading";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={bgHero1}>
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong>
        <br /> para ir e vir
      </h1>
    </Heading>
    <p>teste</p>
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
