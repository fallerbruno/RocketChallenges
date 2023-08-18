import { styled } from "..";

export const HeaderContainer = styled("header", {
  display: "flex",
  padding: "2rem 0",
  width: "100%",
  maxWidth: "1180px",
  margin: "0 auto",
  justifyContent: "space-between",
});

export const IconContainer = styled("div", {
  width: 60,
  height:60,
  background: '$gray800',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  position: 'relative',
  cursor: 'pointer',

  span: {
    background: '$green500',
    padding: '0.5rem 0.8rem',
    borderRadius: '50%',
    marginTop: '-3rem',
    position: 'absolute',
    right: '-1rem',
    fontWeight: 'bold',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 1)',
  }
})

export const SideBarContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: 480,
  width: "100%",
  background: "$gray800",
  border: "1px solid $gray-800",
  padding: "2rem 1rem",

  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 999,

  header: {
    display: "flex",
    justifyContent: "flex-end",
  },

  footer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "auto",
    padding: "1rem",
    gap: "1rem",

    button: {
      background: "$green500",
      padding: "1.5rem 0",
      border: 0,
      borderRadius: "8px",
      color: "$white",
      fontWeight: "bold",
      fontSize: "$md",
      marginTop: "3.4375rem",
      cursor: "pointer",

      "&:hover": {
        background: "$green300",
      }
    }
  }
});

export const SideBarContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "1rem",

  h1: {
    marginBottom: "2rem",
    fontSize: "$lg",
    color: "$gray100",
  },
});

export const SideBarContent = styled("div", {
  display: "flex",
  gap: "20px",
  marginTop: "1rem",
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: "102px",
  height: "93px",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "8px",
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const SideBarData = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "10px",

  h2: {
    fontSize: "$lg",
    color: "$gray300",
  },

  p: {
    fontSize: "$xl",
    color: "$white",
    fontWeight: 'bold',
  },

  button: {
    color: "$green500",
    fontSize: "$md",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    fontWeight: "bold",
  }
});

export const FooterData = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  span: {
    fontSize: "$lg",
    color: "$gray300",
  },

  p: {
    fontSize: "$xl",
    fontWeight: "bold",
    color: "$white",
  }
})

