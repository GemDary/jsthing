const li = document.createElement("li")
li.className = "collection-item"
const text = document.createTextNode("Study element creation")
li.appendChild(text)

const a = document.createElement("a")
a.className = "blue-text text-darken 2 secondary-content"
text = document.createTextNode("X")
a.appendChild(text)
a.setAttribute("href", "#")

li.appendChild(a)

const list = document.querySelector("ul")
list.appendChild(li)
console.log(a)