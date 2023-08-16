import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
display: "flex",
  padding: "2rem 0",
  width: "100%",
  maxWidth: "1180px",
  margin: "0 auto",
  justifyContent: "space-between",
});

export const SideBarContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: 480,
  width: "100%",
  background: "$gray800",
  border: "1px solid $gray-800",

  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
});
