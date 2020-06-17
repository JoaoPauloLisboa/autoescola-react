import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { breakAt, BreakpointsSize } from "./Breakpoints";

const colorYellow = "#ffc107";

const Root = styled.div`
  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-blend-mode: overlay;
  `}
  color: #fff;
  padding: 100px 0;
`;

const Container = styled.div`
  width: 100%;
  padding: 0 15px;

  ${breakAt(BreakpointsSize.sm)} {
    padding: 0 30px;
  }

  ${breakAt(BreakpointsSize.xl)} {
    width: 1140px;
    margin: 0 auto;
    padding: 0;
  }
`;

const Content = styled.h1`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li::before {
    content: "\\2713\\0020";
    color: ${colorYellow};
  }
`;

const Hero = ({ image, children }) => (
  <Root image={image}>
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
