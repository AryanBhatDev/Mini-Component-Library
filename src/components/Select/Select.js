import styled from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon/Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <PresentationalBit>{displayedValue}</PresentationalBit>
      <IconWrapper>
        <Icon id={"chevron-down"} size={24} strokeWidth={1.5} />
      </IconWrapper>
    </Wrapper>
  );
};

const SelectWrapper = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  height: 100%;
`;

const PresentationalBit = styled.div`
  width: 100%;
  padding: 12px 52px 12px 16px;
  font-size: 1rem;
  border-radius: 8px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};

  ${SelectWrapper}:focus + & {
    outline: 2px solid -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  color: ${COLORS.gray700};
  pointer-events: none;
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  display: flex;
  align-items: center;

  &:hover ${PresentationalBit} {
    color: ${COLORS.black};
  }

  &:hover ${IconWrapper} {
    color: ${COLORS.black};
  }
`;

export default Select;
