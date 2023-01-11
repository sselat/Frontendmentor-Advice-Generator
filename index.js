document.getElementById('adviceGeneratorBtn').addEventListener('click', () => { changeAdvice() })

async function generateNewAdvice() {
    const url = 'https://api.adviceslip.com/advice'
    const advice = await fetch(url).then((response) => response.json()).then((data) => data)
    
    return advice.slip
}

async function changeAdvice() {
    let newAdvice = await generateNewAdvice()
    console.log(newAdvice)
    await overwriteAdvice(newAdvice)
}

async function overwriteAdvice(newAdvice) {
    let adviceId = document.getElementById('advice-id')
    let adviceText = document.getElementById('advice-text')

    adviceId.innerHTML = `Advice #${newAdvice.id}`
    adviceText.innerHTML = `${newAdvice.advice}`
}