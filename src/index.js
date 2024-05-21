console.log('import.meta.url', import.meta.url)

const p = document.createElement('p')
const text = document.createTextNode(`import.meta.url is ${import.meta.url}`)

p.appendChild(text)
document.body.appendChild(p)
