import Link from "next/link";
import Image from "next/image";
import LogoIcon from "../../assets/nubank-logo-2021-purple.svg";
import LoginIcon from "../../assets/icon-exit.svg";
import ArrowDown from "../../assets/arrow-down.svg";
import {
  animationForYouIn,
  animationForYouOut,
  animationIn,
  animationOut,
  animationOutNubank,
  animationInNubank,
  MenuHover,
  MenuRemoveHover
} from "./animation";

export function Header() {
  return (
    <header>
      <div className="Container-Header">
        <div className="Menu">
          <span id="logoNu">
            <Link href="/" passHref>
              <span>
                <Image src={LogoIcon} alt="Logo Nubank" />
              </span>
            </Link>
          </span>
          <nav className="Nav-Header">
            <ul>
              <li className="ButtonClick animation">Página Inicial</li>

              <li
                onMouseEnter={animationForYouIn}
                onMouseLeave={animationForYouOut}
                className="RotateArrow"
              >
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
              <li
                className="RotateArrow animation"
                onMouseEnter={animationIn}
                onMouseLeave={animationOut}
              >
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
              <li
                className="RotateArrow animation"
                onMouseEnter={animationInNubank}
                onMouseLeave={animationOutNubank}
              >
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
              <li className="ButtonClick">Perguntas</li>
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

        <div className="BurguerButton" onClick={MenuHover}>
          <div className="BurguerLine1"></div>
          <div className="BurguerLine2"></div>
        </div>
      </div>

      <div
        id="my-row"
        onMouseEnter={animationForYouIn}
        onMouseLeave={animationForYouOut}
        className="Sub-Menu ParaVoceMenu "
      >
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

      <div
        id="my-row2"
        onMouseEnter={animationIn}
        onMouseLeave={animationOut}
        className="Sub-Menu   for-your-business "
      >
        <ul>
          <p>Nubank PJ</p>
          <li>Conta PJ</li>
          <li>Cartão de Crédito PJ</li>
        </ul>
      </div>

      <div
        id="my-row3"
        onMouseEnter={animationInNubank}
        onMouseLeave={animationOutNubank}
        className="Sub-Menu   O-Nubank "
      >
        <ul>
          <p>Sobre Nós</p>
          <li>O Nu</li>
          <li>Sala de imprensa</li>
          <li>Carreiras</li>
        </ul>
        <ul>
          <p>Outros canais</p>
          <li>Blog</li>
          <li>Newsletter</li>
          <li>Comunidade</li>
        </ul>
        <ul>
          <p>Nubank pelo Mundo</p>
          <li>México</li>
          <li>Colômbia</li>
          <li>Argentina</li>
        </ul>
      </div>
      <div className="MenuBurguer"></div>
      <div id="MenuHeaderFullWidth" className="MenuHeaderFullWidth">
      <div className="MenuHeaderLogo">
        <span id="logoNu">
            <Link href="/" passHref>
              <span>
                <Image src={LogoIcon} alt="Logo Nubank" />
              </span>
            </Link>
          </span>
            <button onClick={MenuRemoveHover}>X</button>
        </div>
        <ul>
          <li><span>Pagina Inicial</span></li>
          <li><span>Para Você</span></li>
          <li><span>Para seu Negócio</span></li>
          <li><span>O Nubank</span></li>
          <li><span>Perguntas</span></li>
          <li><span>Login</span></li>
        </ul>
      </div>
    </header>
  );
}
