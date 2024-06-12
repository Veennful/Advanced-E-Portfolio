// template_e8apbod

// v0--psBoSqo8SYu0F

// service_etw17uo

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_etw17uo',
            'template_bgihnam',
            event.target,
            'v0--psBoSqo8SYu0F'
        ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please email me directly at valancentaylor@gmail.com"
            )
        })
    setTimeout(() => {
        console.log('it worked!')
    }, 1000);
}