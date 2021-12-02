import Image from 'next/image'
import ArrowUpRight from '../../../assets/arrow-up-right.svg'

export function HomeSection6() {
  return (
    <section className="section6">
      <div className="section6-bloco1">
        <p>NuCommunity</p>
        <p>
          A comunidade oficial do Nubank para você tirar dúvidas e compartilhar
          ideias.
        </p>
        <p id="section6-P" className="hover">
          Faça parte <Image src={ArrowUpRight} alt="Seta para Direita em Cima" />
        </p>
      </div>
    </section>
  );
}
