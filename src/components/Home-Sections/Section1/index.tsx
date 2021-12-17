import Image from 'next/image'
import ArrowRight from "../../../assets/arrow-right.svg"
import ArrowUpRight from "../../../assets/arrow-up-right.svg"



export function HomeSection1() {
    return(
        <section className="section-1" >
          <div className="box-text">
            <p id="text-1">
            O futuro é a razão que a gente faz planos.
            </p>
            <p id="text-2">
            Escolha o futuro. Comece a controlar melhor sua vida financeira com o Nubank.
            </p>
           
          </div>

          <div className="Box-Input">
            <h3>Peça sua conta e cartão de crédito do Nubank</h3>
            <input type="input" placeholder="Digite seu CPF" />
            <br />
            <button type="submit" >
              <span >Continuar</span>
              <Image src={ArrowRight} alt=" Seta para Direita" />
            </button>
          </div>
        </section>
    )
}