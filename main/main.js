function openLinks(){
    const links = document.getElementById("nav");
    links.classList.toggle("active");
}

window.addEventListener("scroll" , function(){
    let header =this.document.querySelector(".lower-head");
    header.classList.toggle("fix" , window.scrollY > 210)
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbzSJZCzHFsaxcFw3NyCyotjcoAZJ1dverkNs7k9N7ChbgyDYwUuk8pHp6y5uADrIfVSwg/exec'

const form = document.forms['form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})