/* eslint-disable no-unused-vars */

import styled from "styled-components";
import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const currentStyle = STYLES[size];
  return (
    <Wrapper
      style={{ "--padding": currentStyle.padding + "px", "--radius": currentStyle.radius + "px" }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={"0"}
      aria-valuemax={"100"}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar style={{ "--width": value + "%", "--height": currentStyle.height + "px" }}></Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  border-radius: 4px 0 0 4px;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
