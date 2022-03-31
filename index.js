function addingEventListener() {
    const input = document.getElementById('input');    
    
    function clickAlert() {
        alert('Hey there, sailor!');
    }

    input.addEventListener('click', clickAlert);
}