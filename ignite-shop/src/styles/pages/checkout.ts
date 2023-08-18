import { styled } from "..";

export const CheckoutContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: "656px",

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: "560px",
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: "1.4",
  },

  a: {
    display: "block",
    fontSize: "$md",
    color: "$green500",
    marginTop: "5rem",
    textDecoration: "none",
    fontWeight: 'bold',

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "50%",
  padding: "1rem 0.9rem ",
  marginTop: "4rem",
  marginLeft: "-3rem",
  boxShadow: "0px 0px 0px 4px rgba(0, 0, 0, 0.1)",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    objectFit: "cover",
  },
});

export const ProductsContainer = styled("div", {
  display: "flex",
 
})
