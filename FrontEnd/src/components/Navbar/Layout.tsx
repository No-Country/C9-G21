import { styled } from "@nextui-org/react";
import { FC, ReactNode } from "react";

type LayouType = {
  children: ReactNode;
};
export const Layout: FC<LayouType> = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
      backgroundColor: "#E1E1E1",
    }}
  >
    {children}
  </Box>
);

export const Box = styled("div", {
  boxSizing: "border-box",
});
