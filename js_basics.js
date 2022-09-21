
 const num1 = 50
 const num2 = 100

 let result
 result = num1 - num2
 result = num1 * num2
 result = num1 / num2
 result = num1 % num2

 result = Math.PI
 result = Math.round(2.5)
 result = Math.ceil(2.3)
 result = Math.floor(2.8)
 result = Math.sqrt(64)
 result = Math.abs(-3)
 result = Math.pow(8, 2)

 result = Math.round(Math.random() * 11)
 console.log(result)

 const firstname = "hendri"
 const surname = "nõmmik"

 let val = firstname + " " + surname

 val = "hendri "
 val += surname

 val = firstname.toUpperCase()
 val = surname.toLowerCase()

 val = surname[0]
 val = surname.indexOf("a")
 val = surname.lastIndexOf("a")

 val = surname.charAt(2)
 val = surname.charAt(surname.length - 1)

 val = surname.substring(0, 4)
 val = surname.slice(0, 4)

console.log(val)

 const tags = ["HTML, CS, JS"]
 val = tags.split(",")
 console.log(val[1].trim())