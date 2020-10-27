const data = [
    {
        title: "main",
        text: "main content"
    },
    {
        title: "head",
        text: "one two one two"
    },
    {
        title: "about",
        text: "this is google inc."
    }
]

const history = []

const clickHandler = (a, d) => {
    document.querySelector("app").innerHTML = a.text
    history.push(window.location.hash)
    document.querySelector("history").innerHTML = history
}

window.onload = () => data.map(d => {
    const div = document.createElement("a")

    div.setAttribute("href", "#" + d.title)
    div.innerHTML = d.title
    document.querySelector("nav").append(div)
    div.addEventListener("click", clickHandler.bind(this, d))
})
