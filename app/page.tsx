import Image from 'next/image'
import Link from 'next/link'

import logo from '../public/logo.svg'
import introImage from '../public/intro-image.png'
import coffee from '../public/coffee.png'
import { MapPin, ShoppingCart } from "phosphor-react";

export default function Home() {
  return (
    <main className="font-roboto">
      <header className="flex justify-between py-8">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
          />
        </Link>
        <div className="flex">
          <div>Porto Alegre, RS</div>
          <div>Cart</div>
        </div>
      </header>
      <main>
        <section className='flex justify-between pt-24 pb-[6.75rem]'>
          <div className='max-w-xl'>
            <div>
              <h1 className="font-baloo font-extrabold pb-4 text-5xl leading-[3.875rem]">Encontre o café perfeito para qualquer hora do dia</h1>
              <p className="text-xl pb-16">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
              <div className='flex flex-wrap max-w-xl gap-x-10 gap-y-5'>
                <div className='flex flex-row'>
                  Icone
                  <p>Compra simples e segura</p>
                </div>
                <div className='flex flex-row'>
                  Icone
                  <p>Embalagem  mantém o café intacto</p>
                </div>
                <div className='flex flex-row'>
                  Icone
                  <p>Entrega rápida e rastreada</p>
                </div>
                <div className='flex flex-row'>
                  Icone
                  <p>O café chega fresquinho até você</p>
                </div>
              </div>
            </div> 
          </div>
          <div>
          <Image
            src={introImage}
            height={360}
            alt="Copo de café com grãos"
          />
          </div>
        </section>
        <section>
          <h2 className="font-baloo font-extrabold text-3xl pb-8">Nossos cafés</h2>
          <div className="coffee-cards">
            <div className="coffee-card">
              <div>
                <Image
                  src={coffee}
                  alt="Café"
                />
                <p>Tradicional</p>
                <p className="font-baloo font-bold text-xl">Expresso Tradicional</p>
                <p>O tradicional café feito com água quente e grãos moídos</p>
              </div>
              <div className="flex">
                <p>R$ <span>9,90</span></p>
                <div>- 1 +</div>
                Cart
              </div>
            </div>
            <div className="coffee-card"></div>
            <div className="coffee-card"></div>
          </div>
        </section>
      </main>
    </main>
  )
}
