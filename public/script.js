



const setactive = (e) =>{
    let set_array = document.querySelectorAll('.containeremail p')
    let telegram = document.querySelector('.teleg')
    let email = document.querySelector('.active')
    let telegramlogo = document.querySelector('.telsvg')
    let emaillogo = document.querySelector('.emailinput .actives')
    let input = document.querySelector('.stroke')
    let placeholderemail = 'example@gmail.com'
    let placeholdetelegram = '@example123'
    set_array.forEach(item =>{
        
        item.classList.remove('active')
    })
    e.classList.toggle('active')
    if(telegram.classList.contains('active')){
        telegramlogo.style = 'display: block;'
        emaillogo.style = 'display: none;'
        input.setAttribute('placeholder', placeholdetelegram)
    } else if(email.classList.contains('active')){
        telegramlogo.style = 'display: none;'
        emaillogo.style = 'display: block;'
        input.setAttribute('placeholder', placeholderemail)
    }
}






const setstr = (e) =>{
    let nav = e.parentElement.querySelectorAll('.menu a')
    nav.forEach(item =>{
        item.classList.remove('active')
    })
    e.classList.toggle('active')
    
}


document.getElementById('scrollButtonfive').addEventListener('click', function(event) {
    event.preventDefault(); 
    var position = 3890; 
    window.scrollTo({
    top: position,
    behavior: 'smooth' 
    });});
document.getElementById('scrollButtonfour').addEventListener('click', function(event) {
    event.preventDefault();  
    var position = 3110; 
    window.scrollTo({
    top: position,
    behavior: 'smooth' 
    });
});
document.getElementById('scrollButtonthree').addEventListener('click', function(event) {
    event.preventDefault();  
    var position = 2100; 
    window.scrollTo({
    top: position,
    behavior: 'smooth' 
    });});
document.getElementById('scrollButtontwo').addEventListener('click', function(event) {
    event.preventDefault(); 
    var position = 1080; 
    window.scrollTo({
    top: position,
    behavior: 'smooth' 
    }); });
document.getElementById('scrollButtonone').addEventListener('click', function(event) {
    event.preventDefault();

    var position = 0; 
    window.scrollTo({
    top: position,
    behavior: 'smooth' 
    }); });



const projectInput = document.querySelector('.project');
    const tariffInput = document.querySelector('.tarifff');
    const priceInput = document.querySelector('.priceend'); 

function updatePrice() {

    const projectCount = parseInt(projectInput.value);
    const tariffCount = parseInt(tariffInput.value);



if (!isNaN(projectCount) && !isNaN(tariffCount)) {

    if (projectCount <= 3) {
      totalPrice = projectCount * (tariffCount * 2000);
    } else if (projectCount <= 5) {
      totalPrice = projectCount *  (tariffCount * 1800);
    } else if (projectCount > 5){
        totalPrice = projectCount * (tariffCount * 1680);
    }
    priceInput.value = totalPrice + "₸";
} else {
    priceInput.value = "";
}



}

projectInput.addEventListener('input', updatePrice);
tariffInput.addEventListener('input', updatePrice);


