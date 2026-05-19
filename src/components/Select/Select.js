import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon/Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <ContentWrapper
        style={{
          "--padding": "12px 52px 12px 16px",
          "--radius": "8px",
        }}
        value={value}
        onChange={onChange}
      >
        {children}
      </ContentWrapper>
      <IconWrapper>
        <Icon id={"chevron-down"} size={24} strokeWidth={2} />
      </IconWrapper>
    </Wrapper>
  );
};

const ContentWrapper = styled.select`
  padding: var(--padding);
  border-radius: var(--radius);
  border: none;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1rem;
  appearance: none;
`;
const IconWrapper = styled.div`
  position: absolute;
  color: ${COLORS.gray700};
  pointer-events: none;
  right: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: max-content;
  &:hover ${ContentWrapper} {
    color: ${COLORS.black};
  }
  &:hover ${IconWrapper} {
    color: ${COLORS.black};
  }
`;

export default Select;
