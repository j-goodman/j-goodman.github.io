class Article {
    constructor(inp) {
        this.type = 'article'
        this.date = inp.date
        this.tags = inp.tags
        this.title = inp.title
        this.link = inp.link
        this.clickEvent = inp.clickEvent
        this.body = inp.body
    }
}

class Picture {
    constructor(inp) {
        this.type = 'picture'
        this.filename = inp.filename
        this.alt = inp.alt
        this.link = inp.link
    }
}

class Block {
    constructor(inp) {
        this.type = 'block'
        this.title = inp.title
        this.text = inp.text
    }
}

class Blank {
    constructor(inp) {
        this.type = 'blank'
        this.content = inp.content
    }
}

const addContent = (content, tag) => {
    const container = document.getElementById("content-container")
    
    window.scrollTo(0, 0)

    if (tag) {
        content = content.filter((article) => {
            return article.tags.includes(tag)
        })
    }
    content.forEach(article => {
        const body = document.createElement(article.link ? "a" : "div")
        if (article.link) {
            body.href = article.link
            if (article.link !== "#") {
                body.target = "_blank"
            }
        }
        if (article.clickEvent) {
            body.addEventListener("click", article.clickEvent)
        }
        body.className = "content-block"
        article.body.forEach(block => {
            if (block.type === "block") {
                const element = document.createElement("div")
                element.className = "text"
                element.innerHTML = 
                `
                ${article.title ? `<h2>${article.title}</h2>` : ``}
                <p>
                ${block.text}
                </p>`
                body.appendChild(element)
            } else if (block.type === "picture") {
                const element = document.createElement("img")
                element.src = `assets/${block.filename}`
                element.alt = block.alt
                body.appendChild(element)
            } else if (block.type === "blank") {
                const shell = document.createElement("span")
                shell.innerHTML = block.content
                body.appendChild(shell.firstElementChild)
            }
        })
        container.appendChild(body)
    })
}

const setupButtons = () => {
    const header = document.getElementById("header-bar")
    const mobileHeader = document.getElementById("hamburger-menu")
    const menus = [header, mobileHeader]
    menus.forEach(menu => {
        menu.childNodes.forEach(node => {
            if (node.tagName === "LI" || node.tagName === "DIV") {
                if (["about me", "games", "art & design", "tools"].includes(node.innerText)) {
                    node.addEventListener("click", () => {
                        const container = document.getElementById("content-container")
                        container.innerHTML = ""
                        addContent(content, node.innerText)
                    })
                } else if (node.innerText === "all projects") {
                    node.addEventListener("click", () => {
                        const container = document.getElementById("content-container")
                        container.innerHTML = ""
                        addContent(content, null)
                    })
                }
            }
        })
    })
    const emailButton = document.getElementById("email-button")
    const copyButton = document.getElementById("email-copy-button")
    const emailContainer = document.getElementById("email-container")

    emailButton.addEventListener("click", () => {
        if (emailContainer.className.includes("reveal")) {
            emailContainer.classList.remove("reveal")
        } else {
            emailContainer.classList.add("reveal")
        }
    })
    
    copyButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText("johncurtisgoodman@gmail.com")
            const copyAlert = document.getElementById("copy-alert")
            copyAlert.classList.add("reveal")
            setTimeout(() => {
                copyAlert.classList.remove("reveal")
                emailContainer.classList.remove("reveal")
            }, 1600)
        } catch {
            console.log("Failed to copy to clipboard.")
        }
    })

    const hamburger = document.getElementById("hamburger")
    const hamburgerMenu = document.getElementById("hamburger-menu")
    hamburger.addEventListener("click", () => {
        if (hamburgerMenu.className.includes("open-menu")) {
            hamburgerMenu.classList.remove("open-menu")
        } else {
            hamburgerMenu.classList.add("open-menu")
        }
    })

    const hamburgerMenuButtons = document.getElementsByClassName("hamburger-menu-button")
    for (const button of hamburgerMenuButtons) {
        button.addEventListener("click", () => {
            hamburgerMenu.classList.remove("open-menu")
        })
    }
}

setupButtons()