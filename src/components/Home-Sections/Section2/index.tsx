import Link from 'next/link'
import Image from 'next/image'
import ArrowRight from "../../../assets/arrow-right.svg";
import { ButtonHover } from '../../Header/animation';


export function HomeSection2() {
    return(
        <section className="section-2" onMouseEnter={ButtonHover}>
          <article className="section2-container">
            <div className="section2-bloco1">
              <h2 className="hoverFixed">Cartão de Crédito</h2>
              <p>
                Pode chamar ele de roxinho. Além disso, pode chamar ele de
                moderno, gratuito e prático também.
              </p>
             
              <span  className="Saibamais hover-Purple">
              <Link href="/SaibaMais" passHref><span>Saiba mais</span></Link>
                <Image src={ArrowRight} width="20px" alt="Saiba mais" />
              </span>
              
              
            </div>

           
              <Image
                id="CardVertical"
                src="https://nubank.com.br/_next/static/images/208010f0b484ed53f59711873ef0fdfc-holding-card-vertical@3x.png.webp"
                alt="Cartão na Vertical"
                width= "1800px"
                height="1300px"
                
              />
            
          </article>
        </section>
    )
}