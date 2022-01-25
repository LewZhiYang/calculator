
const equality = 14
const cancel = 12



for (let i=0; i<16; i++) {
    if (i == equality) {
        document.getElementById(i).addEventListener('click', evaluate)
    } else if (i == cancel) {
        document.getElementById(i).addEventListener('click', reset)
    } else {
        document.getElementById(i).addEventListener('click', function() {
            document.getElementById('operationDisplay').textContent += document.getElementById(i).textContent
        })
    }
}

function evaluate() {
    try {
        document.getElementById('result').textContent = eval(document.getElementById('operationDisplay').textContent).toFixed(1).replace(/\.0$/, "");
        
    } catch (error) {
        alert(error)
    }
}

function reset() {
    document.getElementById('result').textContent = ''
    document.getElementById('operationDisplay').textContent = ''
}