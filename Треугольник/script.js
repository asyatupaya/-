const title = document.querySelector('#title')
const inp1 = document.querySelector('#inp1')
const inp2 = document.querySelector('#inp2')
const inp3 = document.querySelector('#inp3')

const calc = () => {

    try {
        const side1 = parseFloat(inp1.value)
        const side2 = parseFloat(inp2.value)
        const side3 = parseFloat(inp3.value)

        if (isNaN(side1 + side2 + side3)) {
            console.log('Неправильно введены числа')
            return
        }

        if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
            title.textContent = 'Это не треугольник'
        } else if (side1 === side2 === side3) {
            title.textContent = 'Это равносторонний треугольник'
        } else if (side1 === side2 || side1 === side3 || side2 === side3) {
            title.textContent = 'Это равнобедренный треугольник'
        } else {
            title.textContent = 'Это разносторонний треугольник'
        }

    } catch(_) {
        title.textContent = 'Ошибка введите адекватные числа'
    }
}