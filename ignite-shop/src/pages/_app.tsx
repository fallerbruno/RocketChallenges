import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import logo from "../assets/logo.svg";
import {
  Container,
  FooterData,
  Header,
  IconContainer,
  ImageContainer,
  SideBarContainer,
  SideBarContent,
  SideBarContentContainer,
  SideBarData,
} from "@/styles/pages/app";
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

  function handleToHome() {
    window.location.href = "/";
  }

  return (
    <Container>
      <SkeletonTheme baseColor="#00b37e" highlightColor="#e1e1e6">
        <Header>
          <Image src={logo} alt="logo" onClick={handleToHome} style={{cursor: 'pointer'}} />
          {!open && (
            <IconContainer>
              <Handbag onClick={handleOpen} size={32} color="#e1e1e6" />
              <span>2</span>
            </IconContainer>
          )}
        </Header>
        {open && (
          <SideBarContainer>
            <header>
              <X size={32} onClick={handleClose} />
            </header>
            <SideBarContentContainer>
              <h1>Sacola de Compras</h1>
              <SideBarContent>
                <ImageContainer></ImageContainer>
                <SideBarData>
                  <h2>Produto</h2>
                  <p>R$ 99.90</p>
                  <button>Remover</button>
                </SideBarData>
              </SideBarContent>
            </SideBarContentContainer>
            <footer>
              <FooterData>
                <span>Quantidade</span>
                <span>2</span>
              </FooterData>
              <FooterData>
                <p>Valor total</p>
                <p>R$ 270,00</p>
              </FooterData>
              <button>Finalizar compra</button>
            </footer>
          </SideBarContainer>
        )}

        <Component {...pageProps} />
      </SkeletonTheme>
    </Container>
  );
}
