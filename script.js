let searchbtn = document.getElementById('searchBtn'),
    loginbtn = document.getElementById('loginBtn');
searchbar = document.getElementById('searchBar'),
    loginbar = document.getElementById('loginBar');
loginbtn2 = document.getElementById('login2');
formicon = document.getElementById('formIcon'),
    closeicon = document.getElementById('closeIcon');
inputbar = document.getElementById('inputBar'),
    header = document.getElementById('header'),
    navbar = document.getElementsByClassName('link'),
    title = document.getElementById('brand-title'),
    bars = document.getElementById('bars'),
    navbar2 = document.getElementById('_navbar'),
    close = document.getElementById('close-btn'),
    anchors = document.querySelectorAll('._navbar .navbar-content .itmms'),
    anchors1 = document.querySelectorAll('._navbar .navbar-content .itmms'),
    btnup = document.getElementById('btnup');
bar = document.getElementById('bar');


// searchbtn.addEventListener('click', _ => {
//     searchbtn.classList.toggle('fa-times-circle')
//     searchbar.classList.toggle('show')
//     inputbar.value = ''
// })

loginbtn.addEventListener('click', _ => {
    loginbtn.classList.toggle('fa-times-circle')
    loginbar.classList.toggle('show')
    inputbar.value = ''
})

loginbtn2.addEventListener('click', _ => {
    closeicon.classList.remove('d-none')
    loginbar.classList.toggle('show-center')
    inputbar.value = ''
})
closeicon.addEventListener('click', _ => {

    loginbar.classList.remove('show-center')

})

inputbar.addEventListener('keydown', event => {
    let key = event.key
    if (key == 'Backspace') {
        if (inputbar.value.length <= 1) {
            formicon.classList.remove('icon-opacity')
        } else {
            formicon.classList.add('icon-opacity')
        }
    } else {
        formicon.classList.add('icon-opacity')
    }
})

colortoggle = _ => {
    if (window.scrollY >= 160) {
        header.classList.add('bg-toggle')
        header.classList.add('shadow')
        title.classList.add('color-toggle')
        bar.classList.add('color-toggle')
        for (let i = 0; i < navbar.length; ++i) {
            navbar[i].classList.add('color-toggle');

        }
    } else {
        header.classList.remove('bg-toggle')
        header.classList.remove('shadow')
        title.classList.remove('color-toggle')
        bar.classList.remove('color-toggle')
        for (let i = 0; i < navbar.length; ++i) {
            navbar[i].classList.remove('color-toggle');
        }
    }
}

window.addEventListener('scroll', colortoggle)
window.addEventListener('DOMContentLoaded', colortoggle)

bars.addEventListener('click', _ => {
    navbar2.classList.toggle('navbar-show')

})

close.addEventListener('click', _ => {
    navbar2.classList.toggle('navbar-show')
})

anchors.forEach((a) => {
    a.addEventListener('click', () => { navbar2.classList.toggle('navbar-show') });


})


checkbtn = _ => {
    if (window.scrollY >= 200)
        btnup.classList.add('showbtn')
    else
        btnup.classList.remove('showbtn')
}

window.addEventListener('scroll', checkbtn)
window.addEventListener('DOMContentLoaded', checkbtn)
btnup.addEventListener('click', () => window.scroll(0, 0))


AOS.init({
    duration: 800
})

var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },
    conteredslides: true,
    breakpoints: {

        0: {
            slidesPerView: 1,
        },
    },

});
var swiper1 = new Swiper(".products", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },
    conteredslides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});
window.onload = function() {
    let infoT = document.getElementById('info');

    infoT.onclick = function() {
        var valu = document.infoT.value;
        let cas = document.getElementById('casinfo')
        if (valu == 1) {
            cas.remove
        }
        console.log(oDiv.hasChildNodes());
    }
}

// submit
document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    let name = document.getElementById("first_name").value;
    let lname = document.getElementById("last_name").value;
    let mail = document.getElementById("e-mail").value;
    let messag = document.getElementById("textarea").value;
    saveContactInfo(name, lname, mail, messag);
    document.getElementById("contact-form").reset();
    sendEmail(name, lname, mail, messag);
}
// send imaial
function sendEmail(name, lname, mail, messag) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "mohamed.agday.ss@gmail.com",
        Passwoord: "zndtwcwyocazvalo",
        To: 'mohamed.agday.ss@gmail.com',
        From: "mohamed.agday.ss@gmail.com",
        Subject: "This is the subject" + (name),
        Body: "And this is the body" + (mail),
    }).then((messag) => alert("mail sended"))
}