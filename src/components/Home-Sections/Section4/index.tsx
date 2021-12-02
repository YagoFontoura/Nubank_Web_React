import Image from "next/image";
import ArrowRight from "../../../assets/arrow-right.svg";

export function HomeSection4() {
  return (
    <section className="section-4">
      <div className="section4-bloco1">
        <h1 className="a-ContaNubank hoverFixed">Conta do Nubank</h1>
        <p>A conta que vai levar você ao controle da sua vida financeira</p>
        <span className="a-NoRate hover-Purple">
          <span>Sem tarifas e sem complicações</span>
          <Image src={ArrowRight} alt="Seta Para direita" />
        </span>
      </div>
      <div className="section4-bloco2">
        <Image
          src="https://nubank.com.br/_next/static/images/cb4fb91ee2573c59819931af86a59a6c-nuconta-inclined-device@2x.png.webp"
          width="284px"
          height="500px"
          alt="Ilustração celular com aplicativo nubank"
        />
      </div>
    </section>
  );
}
