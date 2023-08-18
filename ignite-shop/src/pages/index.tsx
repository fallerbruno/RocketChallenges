import { styled } from "@/styles";
import {
  ChefronContainerLeft,
  ChefronContainerRight,
  FooterData,
  HomeContainer,
  IconContainer,
  Product,
} from "@/styles/pages/home";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { stripe } from "@/lib/stripe";
import { GetServerSideProps, GetStaticProps } from "next";
import Stripe from "stripe";
import { priceFormatter } from "@/utils/formatter";
import Link from "next/link";
import Head from "next/head";
import { CaretLeft, CaretRight, Handbag } from "@phosphor-icons/react";
import { useState } from "react";
interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderNumberActive, setSliderNumberActive] = useState(0);
  const perViewDinamic = currentSlide === 0 ? 1.5 : 2;
  const originDinamic = currentSlide === 0 ? "auto" : "center";
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: perViewDinamic,
      spacing: 56,
      origin: originDinamic,
    },
    drag: false,

    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created() {},
  });
  const widthDinamic = currentSlide !== 0 && { maxWidth: "100%" };

  function ChangeSlideFoward(e: any) {
    e.stopPropagation() || instanceRef.current?.next();
    setSliderNumberActive((state) => state + 1);
  }
  
  function ChangeSlideBack(e: any) {
    e.stopPropagation() || instanceRef.current?.prev();
    setSliderNumberActive((state) => state - 1);
  }

  function handleAddToCart() {
    console.log("add to cart");
  }

  return (
    <>
      {currentSlide !== 0 && (
        <ChefronContainerLeft onClick={(e) => ChangeSlideBack(e)}>
          <CaretLeft size={32} />
        </ChefronContainerLeft>
      )}
      <Head>
        <title>Home | E-commerce</title>
      </Head>
      <HomeContainer
        ref={sliderRef}
        className="keen-slider"
        style={{ ...widthDinamic }}
      >
        {products.map((product, index) => (
          <Product className="keen-slider__slide" key={product.id}>
            <Link href={`/product/${product.id}`} prefetch={false}>
              <Image
                src={product.imageUrl}
                alt=""
                width={520}
                height={480}
                blurDataURL={product.imageUrl}
              />
            </Link>
            {sliderNumberActive === index && (
              <footer>
                <FooterData>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </FooterData>
                <IconContainer onClick={handleAddToCart}>
                  <Handbag size={32} color="#e1e1e6" />
                </IconContainer>
              </footer>
            )}
          </Product>
        ))}
      </HomeContainer>
      {sliderNumberActive < products.length - 1 ? (
        <ChefronContainerRight onClick={(e) => ChangeSlideFoward(e)}>
          <CaretRight size={32} />
        </ChefronContainerRight>
      ) : null}
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });
  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      url: product.url,
      price: priceFormatter.format(
        price.unit_amount ? price.unit_amount / 100 : 0
      ),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 horas
  };
};
