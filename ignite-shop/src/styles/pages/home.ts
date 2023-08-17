import { styled } from "..";

export const ChefronContainerRight = styled("div", {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  right: "0",
  bottom: 'auto',
  zIndex: 200,
  height: '100%',
  width: '136px',
  background: "linear-gradient(90deg, #12121400 0%, #121214 100%)",
});

export const ChefronContainerLeft = styled("div", {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  left: "0",
  bottom: 'auto',
  zIndex: 200,
  height: '100%',
  width: '136px',
  background: "linear-gradient(270deg, #12121400 0%, #121214 100%)",
});


export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: "auto",
  minHeight: "656px",
});

export const HomeContainer2 = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: '100%',
  marginLeft: "auto",
  minHeight: "656px",
});

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "8px",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",


  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",
    zIndex: 100,

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0,0,0,0.6)",

    strong: {
      fontSize: "$lg",
      color: "$gray100"
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
  },

});

export const FooterData = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 10,
})

export const IconContainer = styled("div", {
  width: 50,
  height: 50,
  borderRadius: "8px",
  background: "$green300",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$white",
});
