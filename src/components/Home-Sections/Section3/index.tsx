import Link from "next/link";
import Image from "next/image";
import ArrowRight from "../../../assets/arrow-right.svg";

export function HomeSection3() {
  return (
    <section className="section-3">
      <article className="container-section3">
        <div className="section3-bloco1">
          <h1 className="titleUltraViolet hoverFixed">Nubank Ultravioleta</h1>
          <p>O cartão pensado para quem quer ver além.</p>
          
            <span className="Saibamais hover-Purple">
            <Link href="/SaibaMais" passHref><span>Saiba mais</span></Link>
              <Image src={ArrowRight} alt="Seta para Direita" />
            </span>
          
        </div>

       
          <Image
            src="https://nubank.com.br/_next/static/images/27a6139b30ef7dca5805b731d40e4721-ultraviolet-card-floating-md@1x.png.webp"
            alt="Cartão Violet"
            width="600"
            height="500"
          />
        
      </article>
    </section>
  );
}
