import {
  FooterData,
  HeaderContainer,
  IconContainer,
  ImageContainer,
  SideBarContainer,
  SideBarContent,
  SideBarContentContainer,
  SideBarData,
} from "@/styles/components/header";
import { Handbag, X } from "@phosphor-icons/react";
import Image from "next/image";
import { useContext, useState } from "react";
import logo from "../../assets/logo.svg";
import { CartContext } from "@/contexts/CartContext";
import Lottie from "react-lottie";
import animationData from "../../assets/empty.json";
import { priceFormatter } from "@/utils/formatter";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import { stripe } from "@/lib/stripe";
import * as Sentry from "@sentry/browser";

export function Header() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const { isFallback } = useRouter();
  const [isCreatingCheckoutSession, setIsCreationCheckoutSession] =
    useState(false);

  const initialValue = 0;

  const priceTotal = cart?.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, initialValue);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleToHome() {
    window.location.href = "/";
  }

  function handleRemoveProduct(product: any) {
    removeFromCart(product);
  }

  async function handleSendToCheckout() {
    try {
      setIsCreationCheckoutSession(true);
      const lineItems = cart?.map((product) => {
        return {
          price: product.defaultPriceId,
          quantity: 1,
        };
      });

      const response = await axios.post("/api/checkout", {
        priceId: lineItems,
      });

      const { checkoutUrl } = response.data;

      toast(
        "Voce Sera redirecionado em uma nova guia para finalizar sua compra"
      );

      setTimeout(() => {
        window.location.href = checkoutUrl;
      }, 1000);
    } catch (error) {
      setIsCreationCheckoutSession(false);
      Sentry.init({
        dsn: "https://7b01ad120bca4b54b36a91b602e0ac42@o4505716523139072.ingest.sentry.io/4505716525498368",
        integrations: [new Sentry.BrowserTracing()],
        // Performance Monitoring
        tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
        // Session Replay
        replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
        replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
      });
      toast("Erro ao processar o pagamento");
    }
  }

  return (
    <>
      <HeaderContainer>
        <Image
          src={logo}
          alt="logo"
          onClick={handleToHome}
          style={{ cursor: "pointer" }}
        />
        {!open && (
          <IconContainer>
            <Handbag onClick={handleOpen} size={32} color="#e1e1e6" />
            {cart.length > 0 && <span>{cart.length}</span>}
          </IconContainer>
        )}
      </HeaderContainer>
      {open && (
        <SideBarContainer>
          <header>
            <X size={32} onClick={handleClose} />
          </header>
          {cart.length > 0 ? (
            <>
              <SideBarContentContainer>
                <h1>Sacola de Compras</h1>
              </SideBarContentContainer>
              <SideBarContentContainer>
                {cart.map((product) => (
                  <SideBarContent key={product.id}>
                    <ImageContainer>
                      <Image
                        src={product?.imageUrl}
                        alt="logo"
                        width={102}
                        height={93}
                      />
                    </ImageContainer>
                    <SideBarData>
                      <h2>{product.name}</h2>
                      <p>{priceFormatter.format(product.price)}</p>
                      <button onClick={() => handleRemoveProduct(product)}>
                        Remover
                      </button>
                    </SideBarData>
                  </SideBarContent>
                ))}
              </SideBarContentContainer>
              <footer>
                <FooterData>
                  <span>Quantidade</span>
                  <span>{cart.length}</span>
                </FooterData>
                <FooterData>
                  <p>Valor total</p>
                  <p>{priceFormatter.format(priceTotal)}</p>
                </FooterData>
                <button onClick={handleSendToCheckout}>Finalizar compra</button>
              </footer>
            </>
          ) : (
            <SideBarContentContainer>
              <h1>Sacola de Compras</h1>
              <Lottie options={defaultOptions} height={400} width={400} />
            </SideBarContentContainer>
          )}
        </SideBarContainer>
      )}
    </>
  );
}
