import Image from 'next/image'
import ArrowRight from "../../../assets/arrow-right.svg"
import ArrowUpRight from "../../../assets/arrow-up-right.svg"
import { ButtonRemove } from '../../Header/animation'


export function HomeSection1() {
    return(
        <section className="section-1" onMouseOut={ButtonRemove}>
          <div className="box-text">
            <p id="text-1">
              Já se imaginou sócio do Nubank?
            </p>
            <p id="text-2">
              Participe do NuSócios, o programa que vai oferecer milhões de pedacinhos do Nubank para os clientes.
            </p>
            <p id="text-3" className="hover">Conheça as regras do programa NuSócios <Image src={ArrowUpRight} alt=" Seta para Direita" /></p>
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