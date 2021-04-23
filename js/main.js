const firstProject = document.getElementById("first-project");
const secondProject = document.getElementById("second-project");
const thirdProject = document.getElementById("third-project");
const fourthProject = document.getElementById("fourth-project");
const fifthProject = document.getElementById("fifth-project");
const sixthtProject = document.getElementById("sixth-project");

firstProject.addEventListener('mouseover',()=>{
    let texto = document.querySelector(".text").innerHTML = 'Pagina Tributo - Segundo Proyecto realizado del curso de Diseño Web Responsivo de FreeCodeCamp.';
});
secondProject.addEventListener('mouseover',()=>{
    let text =document.querySelector(".text2");
    text.innerHTML = 'Landig Page - Tercer Proyecto realizado del curso de Diseño Web Responsivo de FreeCodeCamp.';
});
thirdProject.addEventListener('mouseover',()=>{
    document.querySelector(".text3").innerHTML = 'Pagina de Documentacion Tecnica - Cuarto Proyecto realizado del curso de Diseño Web Responsivo de FreeCodeCamp.';
    
});
fourthProject.addEventListener('mouseover',()=>{
    document.querySelector(".text4").innerHTML = 'Proximamente... Proyecto Backend.';
});
fifthProject.addEventListener('mouseover',()=>{
    document.querySelector(".text5").innerHTML = 'Proximamente... Proyecto Backend.';
});
sixthtProject.addEventListener('mouseover',()=>{
    document.querySelector(".text6").innerHTML = 'Proximamente... Proyecto Backend.';
});

// const form = document.getElementById('contact-form');
// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     let name = document.getElementById('name').value;
//     console.log(name);
    
// });


$('#contact-form').on('submit', (e)=>{
    e.preventDefault();
    let name = $('#name').val();
    let email = $('#email').val();
    let message = $('#message').val();
    let advice = document.querySelector('.alert');
   
    $.post('back/email.php',
    {'name':name, 'email':email, 'message':message},(data)=>{
        if(data){
            advice.style.display = 'block';
            name = $('#name').val("");
            email = $('#email').val("");
            message = $('#message').val("");
        }else{
            advice = document.querySelector('.alert').value = 'Contáctame a travez de uno de los medios detallados abajo!';
            advice.style.backgroundColor = '#f44336'
            advice.style.display = 'block';
            
        }
    });
});

