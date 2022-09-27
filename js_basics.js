let val;

const list = document.querySelector("ul")
const listitem = document.querySelector("Li")

console.log(listitem)

val = list
val = list.childNodes
val = list.childNodes[1]
val = list.childNodes[1].nodeName
val = list.childNodes[1].nodeType

val = list.children
val = list.children[1].children

val = list.firstChild
val = list.firstElementChild

val = list.lastChild
val = list.lastElementChild

val = list.childElementCount

val = listitem.parentNode
val = listitem.parentElement
val = listitem.parentElement.parentElement

val = listitem.nextSibling
val = listitem.nextElementSibling
val = listitem.nextElementSibling
val = listitem.nextElementSibling.nextElementSibling.previousElementSibling

console.log(val)