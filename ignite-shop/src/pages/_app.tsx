import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import { Container } from "@/styles/pages/app";
import { SkeletonTheme } from "react-loading-skeleton";
import { CartContextProvider } from "../contexts/CartContext";
import { Header } from "@/components/Header";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartContextProvider>
        <SkeletonTheme baseColor="#00b37e" highlightColor="#e1e1e6">
          <Header />
          <Component {...pageProps} />
        </SkeletonTheme>
      </CartContextProvider>
    </Container>
  );
}
