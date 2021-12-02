import Link from 'next/link'
import Image from 'next/image'
import ArrowUpRight from '../../../assets/arrow-up-right.svg'

export function HomeSection5() {
    return(
        <section className="section-5">
            <div className="section5-bloco1">
                <p>Nós acreditamos que só uma pessoa pode ter controle sobre sua vida financeira: você.</p>
                <Link href="/SaibaMais" passHref ><span className="hover">Saiba mais sobre como fazemos isso <Image src={ArrowUpRight} alt="Seta para cima Direita" /></span></Link>
            </div>
        </section>
    )
}