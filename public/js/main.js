

const input = document.getElementById('input');
const h1 = document.getElementById('h1');
document.getElementById('form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        let target = input.value;
        console.log(target)
        fetch(`/weather?target=${target}`)
            .then(res => res.json())
            .then(data => h1.innerHTML = data.currentTemp)
    })