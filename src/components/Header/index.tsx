import Link from "next/link";
import Image from "next/image";
import LogoIcon from "../../assets/nubank-logo-2021-purple.svg";
import LoginIcon from "../../assets/icon-exit.svg";
import ArrowDown from "../../assets/arrow-down.svg";
import {animationIn, animationOut} from './animation'

 




export function Header() {
  return (
    <header>
      <div className="Container-Header">
        <div className="Menu">
          <span id="logoNu">
            <Link href="/" passHref>
              <span><Image src={LogoIcon} alt="Logo Nubank" /></span>
            </Link>
          </span>
          <nav className="Nav-Header">
            <ul>
              <li className="ButtonClick animation">Página Inicial</li>

              <li onMouseEnter={animationIn} onMouseLeave={animationOut} className="RotateArrow ">
                Para você
                <span className="RotateArrow">
                  <Image
                    src={ArrowDown}
                    width="16px"
                    height="16px"
                    alt="Arrow Down"
                  />
                </span>
              </li>
              <li className="RotateArrow animation">
                Para seu negócio
                <span>
                  <Image
                    src={ArrowDown}
                    width="16px"
                    height="16px"
                    alt="Arrow Down"
                  />
                </span>
              </li>
              <li className="RotateArrow animation">
                O Nubank{" "}
                <span>
                  <Image
                    src={ArrowDown}
                    width="16px"
                    height="16px"
                    alt="Arrow Down"
                  />
                </span>
              </li>
              <li className="ButtonClick animation">Perguntas</li>
            </ul>
          </nav>
        </div>

        <div className="LoginButton ">
          <button className="hover-Purple">
            Login
            <span>
              <Image src={LoginIcon} alt="Icone de Logar" />
            </span>
          </button>
        </div>
        
        <div className="BurguerButton">
          <div className="BurguerLine1"></div>
          <div className="BurguerLine2"></div>
        </div>
      </div>
      
        <div id="ParaVoce" className="Sub-Menu ParaVoceMenu "> {/* MenuActive */}
          <ul>
            <p>Nubank</p>
            <li>Cartão de Crédito</li>
            <li>Conta do Nubank</li>
            <li>Tudo sobre Pix</li>
          </ul>
          <ul>
             <p>Nubank UltraVioleta</p>
              <li>Cartão de Crédito</li>
          </ul>
          <ul>
           <p>Outros Produtos</p>
            <li>Empréstimo Pessoal</li>
            <li>Seguro de Vida</li>
            <li>Investimento</li>

          </ul>
        </div>

        <div>

          
        </div>

      


        <div className="MenuBurguer">

        </div>
      
    </header>
  );
}
