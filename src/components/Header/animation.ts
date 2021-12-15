


export function animationForYouIn() {
    const element = document.getElementById('my-row');
    element?.classList.add("MenuActive")
      
}

export function animationForYouOut() {
    const element = document.getElementById('my-row');
    element?.classList.remove("MenuActive")
}

export function animationIn() {
    const element = document.getElementById('my-row2');
    element?.classList.add("MenuActive1")
     
}

export function animationOut() {
    const element = document.getElementById('my-row2');
    element?.classList.remove("MenuActive1")
}

export function animationInNubank() {
    const element = document.getElementById('my-row3');
    element?.classList.add("MenuActive2")
     
}

export function animationOutNubank() {
    const element = document.getElementById('my-row3');
    element?.classList.remove("MenuActive2")
}




export function MenuHover() {
    const element = document.getElementById('MenuHeaderFullWidth');
    element?.classList.add("active")
}
export function MenuRemoveHover() {
    const element = document.getElementById('MenuHeaderFullWidth');
    element?.classList.remove("active")
}