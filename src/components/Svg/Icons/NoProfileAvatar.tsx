import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32" {...props}>
       <image id="settings" width="32" height="32" xlinkHref="data:image/png;base64,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"/>

    </Svg>
  );
};

export default Icon;
