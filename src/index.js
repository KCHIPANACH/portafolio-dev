import React from 'react';
import App from './routes/App';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, compose} from 'redux';
import reducer from './reducer';


import Autoland from './assets/autoland.jpeg';
import Algoritmo from './assets/algoritmo.png';
import BTH from './assets/bth.jpg';
import Mamiscool from './assets/mamiscool.png';
import Loreal from './assets/loreal.png';
import LaBase from './assets/labaselamay.jpg';
import Santander from './assets/santander.png';
import Lockmore from './assets/lockmore.png';
import Kevin from './assets/logo_kevin.png';

import LorealPrint from './assets/loreal_prin.png';
import BthPrint from './assets/bth_print.png';
import MamiscoolPrint from './assets/mamiscool_print.png';
import AlgoritmoPrint from './assets/algoritmo_print.png';
import AutolandPrint from './assets/autoland_print.png';
import SantanderPrint from './assets/santander_print.png';
import LabasePrint from './assets/labase_print.png';
import LockmorePrint from './assets/lockmore_print.png';
import KevinPrint from './assets/kevin_print.png';


const initialState ={
  "projects": [
                {
                "id": 1,
                "nombre":"Academia L'oreal Perú",
                "tipo:": "Desarrollo Web",
                "tecnologia": "JavaSript, HTML5, CSS3, WordPress,Leaftle.js",
                "logo":Loreal,
                "imagen": LorealPrint,
                "url":"https://academialorealperu.pe/",
                "descripcion": "Para la web de academia L'Oreal se hizo un template hecho totalmente desde 0, se uso el CMS WordPress, ya que requerian administrar sus cursos, profesores, artistas o maestros, tutoriales y mas para ello se crearon Custom Post Type con distintas taxonomias para separar entre sus marcas RedKen y Kerestase. Ademas se hizo un dashboard para consultar datos del club de beneficios del cual ellos brindan, para ellos se realizo un login de acuerdo a su codigo de usuario. Se realizo tambien una sección de localización de sus locales, en la cual se uso leaftle.js para realizar un mapa iteractivo, Por ultimo se uso SessionStorage para mostrar un PopUp o Modal al usuario cada vez que entra y no por cada página."
                },
                {
                  "id": 2,
                  "nombre":"BTH Hotel",
                  "tipo:": "Desarrollo Landing",
                  "tecnologia": "JavaSript, Angular 7+, CSS3, HTML5, Google Plataform",
                  "logo":BTH,
                  "imagen": BthPrint,
                  "url":"http://landing.bth.pe/",
                  "descripcion": "Para el BTH Hotel, se realizo una Landing Page hecha con Angular, se implemento. Con el fin de potenciar sus campañas de Marketing y atraer mas Leads a algunos servicios o productos en especifico, se establecieron modulos para los formularios y llamarlos con call to actión dentro de la Landing Page."
                },  
                {
                  "id": 3,
                  "nombre":"Mamiscool",
                  "tipo:": "Desarrollo Blog",
                  "tecnologia": "JavaSript, HTML5, CSS3, WordPress",
                  "logo":Mamiscool,
                  "imagen": MamiscoolPrint,
                  "url":"http://probando.mamiscool.com/",
                  "descripcion": "Mamiscool es un blog de una Mamá sencilla, accesible, relajada, 'cool' que sigue su intuición de mamá y escribe y da consejos de ello y muchas cosas más. Ella tuvo problemas con su hosting, acudi a ayudarla reestableciendo su web anterior, recuperando e instalando una nueva instancia de WordPress, posteriormente creando esta nueva web migrando todo su contenido de la anterior, la cual viene generando desde hace como 5 años."
                }, 
                {
                  "id": 4,
                  "nombre":"Algoritmo Digital",
                  "tipo:": "Desarrollo Website",
                  "tecnologia": "JavaSript, HTML5, CSS3, WordPress, AJAX",
                  "logo":Algoritmo,
                  "imagen": AlgoritmoPrint,
                  "url":"https://algoritmo.mystagingwebsite.com/",
                  "descripcion": "Para Algoritmo Digital se realizo una web totalmente desde 0, se creo un template en base a un mockup, se crearon Custom Post Type para la parte de su team, y un blog con paginación AJAX y los comentarios de este también con AJAX."
                },
                {
                  "id": 5,
                  "nombre":"Autoland",
                  "tipo:": "Desarrollo Website",
                  "tecnologia": "JavaSript, HTML5, CSS3, WordPress, API/REST, INTERSECTION OBSERVER",
                  "logo":Autoland,
                  "imagen": AutolandPrint,
                  "url":"https://autolandv2.mystagingwebsite.com/",
                  "descripcion": "Para autoland se realizo un template hecho desde 0, se uso WordPress, se realizaron distintas API/REST o endpoint para consultar datos generadas por el Loop WP_QUERY de sus Custom Post Type y generar filtros, busquedas, etc, se uso Fetch para consumir esas API o endpoints, se implemento Intersetción Observer para generar un scrool infinito en la paginación del blog como de sus autos seminuevos, se implemento o estructura todo el proyecto con ayuda de Template Parts, esto para hacer mas modular el proyecto."
                }, 
                {
                  "id": 6,
                  "nombre":"Santander",
                  "tipo:": "Desarrollo Website",
                  "tecnologia": "JavaSript, HTML5, CSS3, WordPress, API/REST,",
                  "logo":Santander,
                  "imagen": SantanderPrint,
                  "url":"https://landing.santander.autoland.com.pe/",
                  "descripcion": "Se realizo una integración con la API de Santander para Autoland, ya que requerian saber sus leads que acudian a credito, de esta manera agilizaban la compra de autos, ya que los vendedores podrian llamar a los mas posibles de comprar un auto."
                },  
                {
                  "id": 7,
                  "nombre":"La Base Lamay",
                  "tipo:": "Desarrollo Website",
                  "tecnologia": "JavaSript, HTML5, CSS3, WordPress, API/REST",
                  "logo":LaBase,
                  "imagen": LabasePrint,
                  "url":"https://labaselamay.com/es/",
                  "descripcion": "Se realizo su template hecho desde 0, se crearon widget para la administración de su slider, ya que el usuario queria administrarlo por medio de Revolution Slider, para ello se maqueto el espacio, cree el widget y lo implemente, ademas se realizo la web en dos idiomas con ayuda de Polylang."
                },  
                {
                  "id": 8,
                  "nombre":"LockMore",
                  "tipo:": "Desarrollo Website",
                  "tecnologia": "JavaSript, HTML5, CSS3, WordPress, API/REST, Leaftle.js",
                  "logo":Lockmore,
                  "imagen": LockmorePrint,
                  "url":"https://creatosdesign.com/demos/locknmoreappweb/mapa/",
                  "descripcion": "Se realizo un mapa iteractivo con ayuda de Leaftle.js., el mapa sirve para obtener tu ubicación, valido si sus servicios cubren tu area o ubicación, si es asi te mostrará un formulario para enviarle tus datos con tu ubicación actual por correo y puedan acudir a la ayuda."
                },  
                {
                  "id": 9,
                  "nombre":"Portafolio Kevin",
                  "tipo:": "Desarrollo Website",
                  "tecnologia": "JavaSript, HTML5, CSS3, REACT, REDUX, REACT ROUTER, REACT HOOKS",
                  "logo":Kevin,
                  "imagen": KevinPrint,
                  "url":"",
                  "descripcion": "Se realizo mi portafolio personal, hecho con REACT, utilice React Router para el routeo de las paginas, react hook para los efectos y cambios de estado en el menu, y redux para la carga de data de mis proyectos."
                },       
              ]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
  document.getElementById('app')
);
