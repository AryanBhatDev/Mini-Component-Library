import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  small: {
    fontSize: 14,
    iconSize: 16,
    strokeWidth: 1,
    height: 24,
    paddingLeft: 24,
  },

  large: {
    fontSize: 18,
    iconSize: 24,
    strokeWidth: 2,
    height: 36,
    paddingLeft: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = sizes[size];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        style={{
          "--strokeWidth": styles.strokeWidth + "px",
        }}
      >
        <Icon id={icon} size={styles.iconSize + "px"} strokeWidth={styles.strokeWidth} />
      </IconWrapper>

      <Input
        style={{
          "--paddingLeft": styles.paddingLeft + "px",
          "--height": styles.height / 16 + "rem",
          "--fontSize": styles.fontSize / 16 + "rem",
          "--borderWidth": styles.strokeWidth + "px",
          "--width": width + "px",
        }}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

const Input = styled.input`
  padding: 0;
  color: ${COLORS.black};
  height: var(--height);
  padding-left: var(--paddingLeft);
  border: none;
  min-width: min-content;
  width: var(--width);
  font-size: var(--font-size);
  border-bottom: var(--borderWidth) solid ${COLORS.black};

  &:focus {
    outline: 2px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }
  color: ${COLORS.gray700};
  font-weight: 700;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;

  & svg {
    color: ${COLORS.gray700};
  }
`;

const Wrapper = styled.label`
  color: ${COLORS.black};
  position: relative;
  &:hover ${IconWrapper} svg {
    color: ${COLORS.black};
  }

  &:hover ${Input} {
    color: ${COLORS.black};
  }
`;

export default IconInput;
