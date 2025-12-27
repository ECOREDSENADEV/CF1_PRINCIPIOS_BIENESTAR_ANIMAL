<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Gestión del bienestar animal en la tenencia responsable de mascotas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos fundamentales del bienestar animal, la sintiencia, la tenencia responsable, y los cuidados físicos, emocionales y legales que garantizan la calidad de vida de los animales de compañía.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es una de las funciones principales de las mascotas en la vida humana?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conservar la biodiversidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Servir exclusivamente como animales de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Brindar compañía y apoyo emocional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Actuar como elementos decorativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué caracteriza a los animales considerados como seres sintientes?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Realizar tareas complejas.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Experimentar emociones como dolor y placer.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Tener lenguaje verbal.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Pertenecer a especies domesticadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es una característica física clave del sistema digestivo de los gatos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Capacidad omnívora adaptable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Carnívoro estricto con requerimientos específicos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Digestión basada en fermentación cecal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alta tolerancia a carbohidratos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué tipo de conducta es común en los conejos por ser animales de presa?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comportamiento jerárquico dominante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Respuesta de huida como defensa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Marcaje con vocalizaciones intensas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conductas destructivas por aburrimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es una de las Cinco Libertades del bienestar animal?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Derecho a la reproducción sin límites.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Libertad de expresar su comportamiento natural.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Acceso a ropa para mascotas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Libertad de reproducción asistida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué efecto puede tener un entorno inadecuado en un ave ornamental?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor capacidad reproductiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Arrancamiento de plumas y depresión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducción de vocalizaciones positivas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mayor resistencia a enfermedades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es una señal de alerta que indica la necesidad de atención veterinaria inmediata?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Dormir durante el día.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Pérdida del apetito persistente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Comer en exceso esporádico.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Rascarse ocasionalmente.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué alimento está prohibido para perros por su toxicidad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Chocolate.', esCorrecta: true },
            { id: 'b', texto: 'Manzana sin semillas.', esCorrecta: false },
            { id: 'c', texto: 'Zanahoria cocida.', esCorrecta: false },
            { id: 'd', texto: 'Pechuga de pollo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es una recomendación para asegurar la calidad del agua en peces ornamentales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener niveles adecuados de pH y oxígeno.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Usar agua con gas.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Cambiar el 100 % del agua cada semana.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incluir perfumes para aromatizar el agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué norma colombiana reconoce a los animales como seres sintientes y penaliza el maltrato?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ley 1801 de 2016.', esCorrecta: false },
            { id: 'b', texto: 'Ley 2054 de 2020.', esCorrecta: false },
            { id: 'c', texto: 'Ley 1774 de 2016.', esCorrecta: true },
            { id: 'd', texto: 'Decreto 1076 de 2015.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Los gatos pueden alimentarse con comida para perros sin consecuencias.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La empatía humano–animal permite interpretar mejor el lenguaje corporal del animal.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Los peces requieren una iluminación continua durante las 24 horas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Los conejos pueden desarrollar enfermedades digestivas si no tienen una dieta rica en fibra.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Encadenar permanentemente a un perro se considera una forma de maltrato.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
