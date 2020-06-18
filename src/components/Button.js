import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 16px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colorYellow};
  border: 2px solid ${(props) => props.theme.colorYellow};
  color: #212121;
`;

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  type: "button",
};

export default Button;
