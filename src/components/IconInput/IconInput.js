import styled from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon/Icon";
const sizes = {
  small: {
    fontSize: 14,
    iconSize: 16,
    underline: 1,
    iconStrokeWidth: 1,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    underline: 2,
    iconStrokeWidth: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = sizes[size] ? sizes[size] : sizes["small"];
  return (
    <Wrapper
      style={{
        "--width": width + "px",
      }}
    >
      <OutlineWrapper>
        <IconWrapper>
          <Icon id={icon} size={styles.iconSize} strokeWidth={styles.iconStrokeWidth} />
        </IconWrapper>
        <Input
          style={{
            "--font-size": styles.fontSize / 16 + "rem",
            "--underline-thickness": styles.underline + "px",
          }}
          placeholder={placeholder}
        />
      </OutlineWrapper>
    </Wrapper>
  );
};

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;

  svg {
    vertical-align: middle;
    color: ${COLORS.gray700};
    margin-top: 3px;
  }
`;

const OutlineWrapper = styled.div``;

const Input = styled.input`
  display: inline;
  padding: 0;
  margin-left: 8px;
  margin-bottom: 4px;
  font-size: var(--font-size);
  min-width:min-content
  width: 100%;
  border: 0px;
  color:${COLORS.gray700};
  font-weight:700;
  outline: none;
  
  &::placeholder{
    font-weight:400;
    color: ${COLORS.gray500};
  }

  &:hover ${OutlineWrapper}{
    outline: 2px solid ${COLORS.primary};
    outline-offset: 2px;
  }

`;

const Wrapper = styled.div`
  width: var(--width);
  min-width: min-content;
  border: 1px solid black;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-radius: 2px;

  $:focus-within {
  }

  &:hover {
    ${IconWrapper} {
      svg {
        color: ${COLORS.black};
      }
    }
  }
  &:hover {
    ${Input} {
      color: ${COLORS.black};
    }
  }
`;

export default IconInput;
