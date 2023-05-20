export default function Home() {
  return (
    <main className="font-roboto">
      <header className="flex">
        <div>Coffee Logo</div>
        <div className="flex">
          <div>Porto Alegre, RS</div>
          <div>Cart</div>
        </div>
      </header>
      <main>
        <section>
          <div>
            <div>
              <h1 className="font-baloo font-extrabold text-5xl">Encontre o café perfeito para qualquer hora do dia</h1>
              <p className="text-xl">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
              <div>
                <div>
                  Icone
                  <p>Compra simples e segura</p>
                </div>
                <div>
                  Icone
                  <p>Embalagem  mantém o café intacto</p>
                </div>
                <div>
                  Icone
                  <p>Entrega rápida e rastreada</p>
                </div>
                <div>
                  Icone
                  <p>O café chega fresquinho até você</p>
                </div>
              </div>
            </div> 
          </div>
          <div>
            Big coffee logo
          </div>
        </section>
        <section>
          <h2 className="font-baloo font-extrabold text-3xl">Nossos cafés</h2>
          <div className="coffee-cards">
            <div className="coffee-card">
              <div>
                Icone café
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
