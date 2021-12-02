


export function animationIn() {
    const element = document.getElementById('my-row');
    element?.classList.add("MenuActive")
     console.log("Mouse Entrou") ;
}

export function animationOut() {
    const element = document.getElementById('my-row');
    element?.classList.remove("MenuActive")
    console.log("Mouse saiu")
}

export function ButtonHover() {
    console.log("botao ativado")

}
export function ButtonRemove() {
    console.log("botao desativado")

}