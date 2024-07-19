const getAdvice = async() => {
    try {
        return (await fetch('https://api.adviceslip.com/advice')).json();
    } catch (error) {
        return console.log(error);
    }
}

const showAdvice = async() => {
    const advice = await getAdvice();

    const quoteP = document.getElementById('quote');
    const adviceNumP = document.getElementById('advice-number');

    // quoteP.classList.remove('animation__slide-in');
    // quoteP.classList.add('animation__slide-in');
    quoteP.innerHTML = advice.slip.advice;
    adviceNumP.innerHTML = advice.slip.id;
    quoteP.classList.remove('animation__slide-in');
    quoteP.classList.add('animation__slide-in');

}

const showTimer = () => {
    showAdvice();
    let time = 2;
    const p = document.getElementById('timer');
    const button = document.getElementById('refresh');
    p.innerHTML = `Please wait ${time}s before requesting a new quote...`;
    button.style.cursor = 'not-allowed';
    button.disabled = true;
    --time;
    let updateTimer = setInterval(() => {
        if(time === 0) {
            p.innerHTML = '&nbsp;';
            // clearText(p);
            button.style.cursor = 'pointer';
            button.disabled = false;
            clearInterval(updateTimer);
            return;
            
        }

        p.innerHTML = `Please wait ${time}s before requesting a new quote...`;
        --time;
    }, 1000);
    
}

// const clearText = (text) => {
//     text.innerHTML = '';
// }

showAdvice();
// document.getElementById('refresh').onclick = showAdvice;
document.getElementById('refresh').onclick = showTimer;