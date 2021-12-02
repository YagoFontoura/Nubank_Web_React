import Link from 'next/link'
import Image from 'next/image'
import ArrowUpRight from '../../../assets/arrow-up-right.svg'

export function HomeSection7() {
    return (
       <section className="Section7">
           <div className="Section7-Bloco1">
             <p>Muita informação e conteúdo para você encontrar a melhor versão da sua vida financeira </p>
                <Link href="/SaibaMais" passHref><span className="hover">Fala, Nubank <Image src={ArrowUpRight} alt="Seta para cima" /></span></Link>
           </div>
       </section>
    )
}