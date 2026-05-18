import styled from "styled-components";

import { COLORS } from "../../constants";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper
      style={{
        "--padding": "12px 16px",
        "--radius": "8px",
      }}
      value={value}
      onChange={onChange}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.select`
  padding: var(--padding);
  width: fit-content;
  border-radius: var(--radius);
  border: none;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  appearance: none;

  &:hover {
    color: ${COLORS.black};
  }
`;

export default Select;
