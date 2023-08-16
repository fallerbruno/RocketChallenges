import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import logo from "../assets/logo.svg";
import { Container, Header, SideBarContainer } from "@/styles/pages/app";
import Image from "next/image";
import { SkeletonTheme } from "react-loading-skeleton";
import { Handbag, X } from "@phosphor-icons/react";
import { useState } from "react";
// funciona como container da aplicacao e eh carregado junto com qualquer pagina da aplicação
// colocar fora para nao carregar todas vezes, pois elas sao unicas e nao
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Container>
      <SkeletonTheme baseColor="#00b37e" highlightColor="#e1e1e6">
        <Header>
          <Image src={logo} alt="logo" />
          {!open && <Handbag size={32} onClick={handleOpen} />}
        </Header>
        {/* <SideBarContainer>
          <h1>SideBar</h1>
        </SideBarContainer> */}
        <Component {...pageProps} />
      </SkeletonTheme>
    </Container>
  );
}
