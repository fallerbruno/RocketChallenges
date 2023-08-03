import {
  BannerContainer,
  HomeContainer,
  IconContainer,
  ImgContainer,
  InfoCard,
  InfoContainer,
  Menu,
  MenuContainer,
  MenuTitle,
  SubTitle,
  TextContainer,
  Title,
} from './styles'
import banner from '../../assets/banner.png'
import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react'
import { CoffeeCard } from './components/CoffeeCard'
import tradicional from '../../assets/Type=Expresso.png'
import americano from '../../assets/Coffee.png'
import cremoso from '../../assets/Type=Expresso Cremoso.png'
import gelado from '../../assets/Type=Café Gelado.png'
import comLeite from '../../assets/Type=Café com Leite.png'
import latte from '../../assets/Type=Latte.png'
import capuccino from '../../assets/Type=Capuccino.png'
import macchiato from '../../assets/Type=Macchiato.png'
import mocaccino from '../../assets/Type=Mochaccino.png'
import chocoQuente from '../../assets/Type=Chocolate Quente.png'
import cubano from '../../assets/Type=Cubano.png'
import havaiano from '../../assets/Type=Havaiano.png'
import arabe from '../../assets/Type=Árabe.png'
import irlandes from '../../assets/Type=Irlandês.png'

export interface Tag {
  id: number
  name: string
}

export interface CoffeeType {
  img: string
  name: string
  description: string
  value: number
  tag: Tag[]
}

const coffes: CoffeeType[] = [
  {
    img: tradicional,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
    tag: [{ id: 1, name: 'TRADICIONAL' }],
  },
  {
    img: americano,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 10.9,
    tag: [{ id: 2, name: 'TRADICIONAL' }],
  },
  {
    img: cremoso,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: 10.0,
    tag: [{ id: 3, name: 'TRADICIONAL' }],
  },
  {
    img: gelado,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 12.9,
    tag: [
      { id: 4, name: 'TRADICIONAL' },
      { id: 5, name: 'GELADO' },
    ],
  },
  {
    img: comLeite,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
    tag: [
      { id: 6, name: 'TRADICIONAL' },
      { id: 7, name: 'COM LEITE' },
    ],
  },
  {
    img: latte,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 10.9,
    tag: [
      { id: 8, name: 'TRADICIONAL' },
      { id: 9, name: 'COM LEITE' },
    ],
  },
  {
    img: capuccino,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 11.9,
    tag: [
      { id: 10, name: 'TRADICIONAL' },
      { id: 11, name: 'COM LEITE' },
    ],
  },
  {
    img: macchiato,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: 12.9,
    tag: [
      { id: 12, name: 'TRADICIONAL' },
      { id: 13, name: 'COM LEITE' },
    ],
  },
  {
    img: mocaccino,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 13.9,
    tag: [
      { id: 14, name: 'TRADICIONAL' },
      { id: 15, name: 'COM LEITE' },
    ],
  },

  {
    img: chocoQuente,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 15.9,
    tag: [
      { id: 18, name: 'ESPECIAL' },
      { id: 19, name: 'COM LEITE' },
    ],
  },
  {
    img: cubano,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 16.9,
    tag: [
      { id: 20, name: 'ESPECIAL' },
      { id: 21, name: 'ALCOÓLICO' },
      { id: 22, name: 'GELADO' },
    ],
  },
  {
    img: havaiano,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: 16.9,
    tag: [{ id: 23, name: 'ESPECIAL' }],
  },
  {
    img: arabe,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 16.9,
    tag: [{ id: 24, name: 'ESPECIAL' }],
  },
  {
    img: irlandes,
    name: 'Irlandês',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 16.9,
    tag: [
      { id: 25, name: 'ESPECIAL' },
      { id: 26, name: 'ALCOÓLICO' },
    ],
  },
]

export function Home() {
  return (
    <HomeContainer>
      <BannerContainer>
        <TextContainer>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <SubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </SubTitle>
          <InfoContainer>
            <InfoCard>
              <IconContainer $color="yellow-dark">
                <ShoppingCart weight="fill" color="white" />
              </IconContainer>
              <span>Compra simples e segura</span>
            </InfoCard>
            <InfoCard>
              <IconContainer $color="base-text">
                <Package weight="fill" color="white" />
              </IconContainer>
              <span>Embalagem mantém o café intacto</span>
            </InfoCard>
            <InfoCard>
              <IconContainer $color="yellow-main">
                <Clock weight="fill" color="white" />
              </IconContainer>
              <span>Entrega rápida e rastreada</span>
            </InfoCard>
            <InfoCard>
              <IconContainer $color="purple-main">
                <Coffee weight="fill" color="white" />
              </IconContainer>
              <span>O café chega fresquinho até você</span>
            </InfoCard>
          </InfoContainer>
        </TextContainer>
        <ImgContainer>
          <img
            src={banner}
            alt="Copo de Café com graos de café na sua volta  com fundo amarelo"
          />
        </ImgContainer>
      </BannerContainer>
      <MenuContainer>
        <MenuTitle>Nossos Cafés</MenuTitle>
        <Menu>
          {coffes.map((item) => (
            <CoffeeCard
              key={item.name}
              img={item.img}
              name={item.name}
              description={item.description}
              value={item.value}
              tag={item.tag}
            />
          ))}
        </Menu>
      </MenuContainer>
    </HomeContainer>
  )
}
