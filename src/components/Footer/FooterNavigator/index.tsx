import Link from 'next/link'
import Image from 'next/image'
import ArrowUpRight from '../../../assets/arrow-up-right.svg'
import GooglePlayIcon from '../../../assets/google-play-badge.svg'
import appStoreIcon from '../../../assets/disponivel-na-app-store-botao-1.svg'


export function FooterNavigator() {
  return (
    <section className="FooterNavigatorContainer">
      <div className="FooterNavigatorContainerGrid">
        <ul className="FooterNavigatorMenu">
          <p className="FooterNavigatorMenu-P" >Nubank</p>
          
          <li>Sobre Nós</li>
          <li>Carreiras</li>
          <li>Perguntas Frequentes</li>
          <li>Contato</li>
          <li>Imprensa</li>
          <li>Nu Impacto <Image src={ArrowUpRight} alt="Senha para Cima Direita" /></li>
        </ul>
        <ul className="FooterNavigatorMenu">
          <p className="FooterNavigatorMenu-P">Produtos</p>
          <li >Conta digital</li>
          <li >Cartão de crédito</li>
          <li >Nubank Ultravioleta</li>
          <li >Empréstimo</li>
          <li >Conta PJ</li>
          <li >Cartão de crédito PJ</li>
          <li >Nubank Vida</li>
        </ul>
        <div className="FooterNavigatorMenu">
          <p className="FooterNavigatorMenu-P">Explore</p>
          <li >Comunidade <Image src={ArrowUpRight} alt="Senha para Cima Direita" /></li>
          <li >Blog <Image src={ArrowUpRight} alt="Senha para Cima Direita" /></li>
          <li >InvestNews <Image src={ArrowUpRight} alt="Senha para Cima Direita" /></li>
          <li >Newsletter <Image src={ArrowUpRight} alt="Senha para Cima Direita" /></li>
          <li >México <Image src={ArrowUpRight} alt="Senha para Cima Direita" /></li>
          <li >Argentina <Image src={ArrowUpRight} alt="Senha para Cima Direita" /></li>
          <li >Colômbia <Image src={ArrowUpRight} alt="Senha para Cima Direita" /></li>
        </div>
        <div className="FooterNavigatorMenu">
            <p className="FooterNavigatorMenu-P">Veja também</p>
            <li >Auxílio Emergencial e FGTS</li>
            <li >Tudo sobre Pix</li>
        </div>
        <div className="FooterNavigatorMenu">
          <p className="FooterNavigatorMenu-P">Transparência</p>
          <li >Política de Privlicidade</li>
          <li >Política de Compliance</li>
          <li >Contratos</li>
          <li >Política de Segurança</li>
          <li >Relatórios Financeiros</li>
          <li >Ética &#38; Compliance</li>
          <li >SCR</li>
          <li >Convenção de Boletos</li>
        </div>
        <div className="FooterNavigatorMenu">
            <p className="FooterNavigatorMenu-P">Ouvidoria</p>
            <li >0800 887 0463</li>
            <li >ouvidoria@nubank.com.br</li>
            <p>atendimento das 9h às 18h (dias úteis)</p>
        </div>
        <div className="FooterNavigatorMenu">
            <p className="FooterNavigatorMenu-P">Fale com a gente</p>
            <li >0800 608 6236</li>
            <li >meajuda@nubank.com.br</li>
            <p>atendimento 24h</p>
        </div>
        <div className="FooterNavigatorMenu">
            <p className="FooterNavigatorMenu-P">Baixe o app</p>
            <Link href="https://play.google.com/store/apps/details?id=com.nu.production&hl=pt_BR&gl=US" passHref><span  className="FooterNavigatorMenu-Icon-Google"><Image src={GooglePlayIcon} alt="GooglePlayIcon" /></span></Link>
            <Link href="https://itunes.apple.com/us/app/nubank/id814456780?ls=1&mt=8" passHref><span  className="FooterNavigatorMenu-Icon-Apple"><Image src={appStoreIcon}    alt="appStoreIcon"  /></span></Link>
        </div>
      </div>
    </section>
  );
}
