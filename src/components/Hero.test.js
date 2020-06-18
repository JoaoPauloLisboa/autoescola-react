import React from "react";
import { render } from "@testing-library/react";

import Hero from "./Hero";

test("renders Hero with children", () => {
  const { getByText } = render(
    <Hero>
      <p>Texto de teste</p>
    </Hero>
  );

  expect(getByText("Texto de teste")).toBeInTheDocument();
});

test("renders image background", () => {
  const image = "http://teste/image.jpg";
  const { getByTestId } = render(<Hero image={image}></Hero>);

  expect(getByTestId("hero")).toHaveStyleRule({
    backgounrdImage: image,
  });
});
