class myCycle extends HTMLElement{

    constructor(){
        super()

        const shadow = this.attachShadow({ mode: 'open' })

        const root = document.createElement('span')
        root.setAttribute('class','root')

        const text = document.createElement('span')
        text.setAttribute('class','text')
        text.textContent = this.getAttribute("text")

        root.appendChild(text)

        const style = document.createElement('style')

        style.textContent = `
            .root {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 200px;
                height: 200px;
                border-radius: 100px;
                background-color: ${this.getAttribute("cor") || "red"};
            }

            .text {
                font-size: 2rem;
                color: white;

            }
        `
        shadow.appendChild(style)
        shadow.appendChild(root)
    }
}

customElements.define('my-cycle', myCycle)