const buttons = [...document.querySelectorAll(".activity-tracker__option")]
let data = []
/*const response = await fetch('./data.json')
console.log(response) */

const activateClickedButton = (button) => {
    buttons.forEach(b => b.classList.remove('active'))
    button.classList.add('active')
} 
const loadData = async () => {
    // Fetch data
    const response = await fetch('../data.json')
    const fetchedData = await response.json()
    data = fetchedData
    buttons[1].click() 
    console.log(fetchedData)
}
