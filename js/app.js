/*function Contacto(nombre, apellido, numero, empresa, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.numero = numero;
    this.empresa = empresa;
    this.email = email;
    this.obtenerPerfil = function(){
        // imprimir mi nombre y apellido, soy de la empresa tal, y este es mi numero
        console.log("Hola mi nombre es "+this.nombre+" "+this.apellido+", soy de  la empresa "+this.empresa+" y este es mi número "+this.numero);
    }
    this.contactame = function(){
        console.log("Contáctame al email: "+this.email);
    }
}
var cynthia = new Contacto("Cynthia", "Herrera", "99090984", "Pinterest", "cynthia.herrera@pinterest.com");
var alexandra = new Contacto("Alexandra", "Fernandez", "99090998", "Sans", "alexandra.fernandez@sans.org");
var aleh = new Contacto("Alexandra", "Lopez", "99090999", "9GAG", "alexandra.lopez@9gag.org");
var milagros = new Contacto("Milagros", "Quispe", "99097999", "Invisible Labs", "milQuisp3@invisible.org");
var contactos = [cynthia, alexandra, aleh, milagros];*/

function Contacto(nombre, apellido, numero, empresa, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.numero = numero;
    this.empresa = empresa;
    this.email = email;
    this.obtenerPerfil = function(){
        // imprimir mi nombre y apellido, soy de la empresa tal, y este es mi numero
        console.log("Hola mi nombre es "+this.nombre+" "+this.apellido+", soy de  la empresa "+this.empresa+" y este es mi número "+this.numero);
    }
    this.contactame = function(){
        console.log("Contáctame al email: "+this.email);
    }
}
var cynthia = new Contacto("Cynthia", "Herrera", "99090984", "Pinterest", "cynthia.herrera@pinterest.com");
var alexandra = new Contacto("Alexandra", "Fernandez", "99090998", "Sans", "alexandra.fernandez@sans.org");
var aleh = new Contacto("Alexandra", "Lopez", "99090999", "9GAG", "alexandra.lopez@9gag.org");
var milagros = new Contacto("Milagros", "Quispe", "99097999", "Invisible Labs", "milQuisp3@invisible.org");
var contactos = [cynthia, alexandra, aleh, milagros];
window.addEventListener('load', function(){
    var vistaListaContactos = null;
    var guardarBtn = document.querySelector(".save-contact form input[type=\"submit\"]");
    guardarBtn.addEventListener('click', function(e){
        e.preventDefault();
        var nombre = document.getElementsByName("nombre")[0].value;
        var apellido = document.getElementsByName("apellido")[0].value;
        var numero = document.getElementsByName("numero")[0].value;
        var email = document.getElementsByName("email")[0].value;
        var empresa = document.getElementsByName("empresa")[0].value;
        var usuario = new Contacto(nombre, apellido, numero, empresa, email);
        contactos.push(usuario);
        imprimirContactos();
    });
    function imprimirContactos(){
        vistaListaContactos = document.createElement("section");
        vistaListaContactos.classList.add("contact-list");
        for( contacto of contactos){
            var vistaContacto = document.createElement("div");
            vistaContacto.classList.add("contact-list-item");
            for(property in contacto){
                if((typeof contacto[property]) !== "function"){
                    var prop = document.createElement("span");
                    prop.appendChild(document.createTextNode(property+": "+contacto[property]));
                    vistaContacto.appendChild(prop);
                    vistaContacto.appendChild(document.createElement("br"));
                }
            }
            vistaListaContactos.appendChild(vistaContacto);
        }
        document.body.appendChild(vistaListaContactos);
    }
    imprimirContactos();
});
