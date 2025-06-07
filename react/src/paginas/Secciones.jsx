import React from 'react';
//Importacion del Formato de viauliazacion
import SeccionBloque from '../componentes/SeccionBloque';

//ROMANCE
import heartstopper from '../assets/img/heart.jpeg';
import orgullo from '../assets/img/orgulloyprejuicio.jpg';
import estrella from '../assets/img/bajolamismaestrella.jpg';
import noa from '../assets/img/elcuadernodenoah.webp';
import yoantesdeti from '../assets/img/yoantesdeti.webp';
import cumbres from '../assets/img/cumbres.webp';

// PSICOLOGÍA
import psicopato from "../assets/img/psicopato.webp";
import hombre from "../assets/img/elhombre.webp";
import emocional from "../assets/img/inteligenciaemocional.webp";
import poderahora from "../assets/img/elpoderdeahora.webp";
import padre from "../assets/img/padrericoypobre.webp";
import acuerdos from "../assets/img/loscuatro.webp";

// TERROR
import instituto from "../assets/img/instituto.jpeg";
import dracula from "../assets/img/dracula.webp";
import it from "../assets/img/it.jpeg";
import exorcista from "../assets/img/exorcista.webp";
import frankenstein from "../assets/img/frankesn.jpeg";
import resplandor from "../assets/img/elresplandr.jpeg";

// CIENCIA FICCIÓN
import trescuerpos from "../assets/img/terscuerpos.jpeg";
import el1984 from "../assets/img/el1984.jpeg";
import fahrenheit from "../assets/img/fahrenheit.jpg";
import dune from "../assets/img/dune.webp";
import mundo from "../assets/img/unmundofeliz.webp";
import fundacion from "../assets/img/fundacion.webp";





export default function Secciones() {
    const librosRomance = [
    {
        imagen: heartstopper,
        titulo: 'Heartstopper',
        autor: 'Alice Oseman',
        descripcion: 'Una dulce historia de amor entre dos chicos que descubren sus sentimientos el uno por el otro.',
    },
    {
        imagen: orgullo,
        titulo: 'Orgullo y Prejuicio',
        autor: 'Jane Austen',
        descripcion: 'La clásica historia de Elizabeth Bennet y Mr. Darcy en la Inglaterra del siglo XIX.',
    },
    {
        imagen: estrella,
        titulo: 'Bajo la misma estrella',
        autor: 'John Green',
        descripcion: 'Una conmovedora historia de amor entre dos adolescentes que luchan contra el cáncer.',
    },
    {
        imagen: noa,
        titulo: 'El diario de Noa',
        autor: 'Nicholas Sparks',
        descripcion: 'Una historia de amor que perdura a través del tiempo y las dificultades.',
    },
    {
        imagen: yoantesdeti,
        titulo: 'Yo antes de ti',
        autor: 'Jojo Moyes',
        descripcion: 'Una relación inesperada que cambiará la vida de ambos protagonistas para siempre.',
    },
    {
        imagen: cumbres,
        titulo: 'Cumbres Borrascosas',
        autor: 'Emily Brontë',
        descripcion: 'Una intensa historia de amor y venganza en los páramos de Yorkshire.',
    },
    ];
    const librosPsicologia = [
    {
        imagen: psicopato,
        titulo: 'Psicopatología de la vida cotidiana',
        autor: 'Sigmund Freud',
        descripcion: 'Análisis de actos fallidos y su relación con el inconsciente.',
    },
    {
        imagen: hombre,
        titulo: 'El hombre en busca de sentido',
        autor: 'Viktor Frankl',
        descripcion: 'Experiencias en campos de concentración y la logoterapia.',
    },
    {
        imagen: emocional,
        titulo: 'Inteligencia emocional',
        autor: 'Daniel Goleman',
        descripcion: 'La importancia de las emociones en nuestro éxito personal.',
    },
    {
        imagen: poderahora,
        titulo: 'El poder del ahora',
        autor: 'Eckhart Tolle',
        descripcion: 'Guía para la iluminación espiritual y vivir en el presente.',
    },
    {
        imagen: padre,
        titulo: 'Padre rico, padre pobre',
        autor: 'Robert Kiyosaki',
        descripcion: 'Lecciones sobre el dinero y la mentalidad financiera.',
    },
    {
        imagen: acuerdos,
        titulo: 'Los cuatro acuerdos',
        autor: 'Miguel Ruiz',
        descripcion: 'Código de conducta basado en la sabiduría tolteca.',
    },
    ];

    const librosTerror = [
    {
        imagen: instituto,
        titulo: 'El instituto',
        autor: 'Stephen King',
        descripcion: 'Niños con poderes son secuestrados y sometidos a experimentos.',
    },
    {
        imagen: dracula,
        titulo: 'Drácula',
        autor: 'Bram Stoker',
        descripcion: 'El clásico vampiro que ha aterrorizado generaciones.',
    },
    {
        imagen: it,
        titulo: 'It (Eso)',
        autor: 'Stephen King',
        descripcion: 'Un grupo de niños enfrenta a una entidad malévola.',
    },
    {
        imagen: exorcista,
        titulo: 'El exorcista',
        autor: 'William Peter Blatty',
        descripcion: 'La posesión demoníaca de una niña y el sacerdote que intenta salvarla.',
    },
    {
        imagen: frankenstein,
        titulo: 'Frankenstein',
        autor: 'Mary Shelley',
        descripcion: 'Un científico crea vida artificial con consecuencias terroríficas.',
    },
    {
        imagen: resplandor,
        titulo: 'El resplandor',
        autor: 'Stephen King',
        descripcion: 'Un hotel embrujado y la locura que desencadena en su cuidador.',
    },
    ];

    const librosCienciaFiccion = [
    {
        imagen: trescuerpos,
        titulo: 'El problema de los tres cuerpos',
        autor: 'Cixin Liu',
        descripcion: 'Primera parte de la trilogía sobre el primer contacto alienígena.',
    },
    {
        imagen: el1984,
        titulo: '1984',
        autor: 'George Orwell',
        descripcion: 'Una distopía sobre vigilancia masiva y control totalitario.',
    },
    {
        imagen: fahrenheit,
        titulo: 'Fahrenheit 451',
        autor: 'Ray Bradbury',
        descripcion: 'Un futuro donde los libros están prohibidos y los bomberos los queman.',
    },
    {
        imagen: dune,
        titulo: 'Dune',
        autor: 'Frank Herbert',
        descripcion: 'Épica espacial sobre política, religión y el control de la especia.',
    },
    {
        imagen: mundo,
        titulo: 'Un mundo feliz',
        autor: 'Aldous Huxley',
        descripcion: 'Sociedad futurista donde la felicidad es obligatoria y controlada.',
    },
    {
        imagen: fundacion,
        titulo: 'Fundación',
        autor: 'Isaac Asimov',
        descripcion: 'La caída de un imperio galáctico y el plan para preservar el conocimiento.',
    },
];


return (
    <div className="secciones">
        <h1>Nuestras Secciones</h1>
        <SeccionBloque //invocacion de la funcion 
        id="romance"
        titulo="Romance"
        descripcion="Historias de amor, pasión y relaciones que te harán soñar."
        libros={librosRomance}
        />
        <SeccionBloque
            id="psicologia"
            titulo="Psicología"
            descripcion="Libros que exploran la mente humana y el comportamiento."
            libros={librosPsicologia}
        />

        <SeccionBloque
            id="terror"
            titulo="Terror"
            descripcion="Historias que te pondrán los pelos de punta y te quitarán el sueño."
            libros={librosTerror}
        />

        <SeccionBloque
            id="cienciaficcion"
            titulo="Ciencia Ficción"
            descripcion="Mundos futuros, tecnología avanzada y aventuras espaciales."
            libros={librosCienciaFiccion}
        />
    </div>
);
}
