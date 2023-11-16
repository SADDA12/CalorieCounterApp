let count = 0
console.log(count)

let countEl = document.getElementById ("count-el")
console.log(countEl)

let saveEl = document.getElementById ("save-el")
console.log (saveEl)

function increment() {
    count= count + 1

    countEl.innerText = count
}

function save() {
    console.log(count)
    let previousenteries = count + "-"
    console.log(previousenteries)
    console.log(saveEl.innerText)
    console.log(saveEl.innerText + previousenteries)


    // saveEl.innerText = saveEl.innerText + previousenteries
    // saveEl.innerText += previousenteries
    // countEl.innerText = 0
    // count = 0
    
}