<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Libertad de expresar su comportamiento natural
    
    .bg-full-width.bg-color-4
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema7/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-5.px-4.py-5(data-aos="fade-left")
              p.mb-0 La libertad de expresar su comportamiento natural constituye uno de los pilares esenciales del bienestar animal. Reconoce que cada especie posee conductas innatas, predecibles y necesarias, determinadas por su evolución biológica, su nicho ecológico y su estructura social. Estas conductas no son opcionales: constituyen necesidades básicas cuya supresión afecta directa y negativamente la salud física, mental y emocional del animal.
        
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema7/2.png')})`}"
          )(data-aos="zoom-in")
          .bloque-texto-g__texto.p-4
            p.mb-0 Garantizar esta libertad implica proporcionar condiciones que permitan al animal actuar, moverse, comunicarse, explorar, descansar, jugar, alimentarse y relacionarse de forma acorde con su especie, edad y estado fisiológico. Para ello, deben evitarse las restricciones innecesarias, los castigos, el confinamiento prolongado, el miedo, la frustración o el sufrimiento.

        p.mb-5 Cuando un animal no puede expresar su comportamiento natural, se incrementa el riesgo de:

        .row.justify-content-center
          .col-lg-10
            .bg-color-2.mb-5(data-aos="fade-down")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema7/3.png', alt='')
                .col-lg
                  .p-4
                    ul.lista-ul--color
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Estrés crónico.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Trastornos del comportamiento.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Agresividad o conductas defensivas.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Estereotipias (movimientos repetitivos sin función).
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Automutilaciones.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Apatía o depresión.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Disminución del sistema inmune.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Problemas reproductivos.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Deterioro general de la calidad de vida.

    p.mb-5 Este principio se aplica tanto a mascotas convencionales (perros y gatos) como a mascotas no convencionales (aves, roedores, lagomorfos, reptiles, peces y especies exóticas permitidas). Siempre debe adaptarse a las necesidades particulares de cada especie, evitando la humanización excesiva y el manejo inadecuado por desconocimiento.

    separador
    
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1 Etología básica
    
    p.mb-5 La etología básica es la disciplina que estudia el comportamiento animal en relación con su entorno natural, su fisiología, su genética y su interacción social. Comprender la etología permite identificar conductas normales, prevenir alteraciones del comportamiento y asegurar un manejo ético y respetuoso. El desconocimiento de los principios etológicos conduce con frecuencia a prácticas inadecuadas como:

    .row.justify-content-center
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Castigar conductas normales.
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Confinar animales activos.
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Forzar interacciones sociales.
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Manipular especies con baja tolerancia al contacto humano.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Comportamiento natural en mascotas convencionales
    
    p.mb-5 Las mascotas convencionales, como perros y gatos, han sido domesticadas durante siglos, pero conservan conductas instintivas propias de su especie. Comprender estas conductas es esencial para garantizar entornos que les permitan desarrollarse física, emocional y socialmente de forma saludable. 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.bg-color-1.p-5
        figure.mb-5
          img(src='@/assets/curso/tema7/4.png', alt='Texto descriptivo 1')
        h2 Perros (<em>Canis lupus familiaris</em>)
        ul.lista-ul--color
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 <b>Conductas naturales clave</b>: exploración olfativa, marcaje territorial, juego social, comunicación corporal y vocal, jerarquización. 
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 <b>Necesidades etológicas:</b> ejercicio diario, interacción social, estimulación mental, rutinas estables y acceso al entorno. 
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 <b>Riesgos por privación</b>: ansiedad por separación, agresividad, destrucción de objetos y vocalización excesiva.
      .col-md.tarjeta.color-primario.bg-color-7.p-5
        figure.mb-5
          img(src='@/assets/curso/tema7/5.png', alt='Texto descriptivo 2')
        h2.text-center Gatos (<em>Felis catus</em>)
        ul.lista-ul--color
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 <b>Conductas naturales clave</b>: acecho, caza simulada, rascado, exploración en altura, autolimpieza y alternancia entre actividad y descanso. 
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 <b>Necesidades etológicas:</b> control del territorio, enriquecimiento vertical, rutinas previsibles y zonas de ocultamiento. 
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 <b>Riesgos por privación</b>: marcaje inadecuado, anorexia, agresividad y enfermedades asociadas al estrés.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Comportamiento natural en mascotas no convencionales
    
    p.mb-5 Las mascotas no convencionales incluyen especies que, aunque pueden adaptarse al entorno doméstico, conservan patrones conductuales muy específicos relacionados con su ecología natural. 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.bg-color-1.p-5
        figure.mb-5
          img(src='@/assets/curso/tema7/6.png', alt='Texto descriptivo 1')
        h2 Roedores y lagomorfos (conejos, cobayos, hámsteres, chinchillas)
        ul.lista-ul--color
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 <b>Conductas naturales:</b> roer, excavar, esconderse, construir madrigueras, actividad crepuscular o nocturna.  
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 <b>Necesidades etológicas:</b> materiales para roer, refugios, espacio para desplazarse, rutinas estables y estímulos ambientales. 
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 <b>Riesgos por privación</b>: estrés severo, maloclusión dental, inmunosupresión, conductas agresivas o apáticas.
      .col-md.tarjeta.color-primario.bg-color-7.p-5
        figure.mb-5
          img(src='@/assets/curso/tema7/7.png', alt='Texto descriptivo 2')
        h2.text-center Aves ornamentales (pericos, canarios, loros, cotorras)
        ul.lista-ul--color
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 <b>Conductas naturales:</b> vuelo, vocalización, forrajeo, interacción social, manipulación de objetos. 
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 <b>Necesidades etológicas:</b> jaulas amplias, perchas variadas, juguetes seguros, interacción social y estimulación diaria.  
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 <b>Riesgos por privación</b>: arrancamiento de plumas, automutilaciones, depresión y agresividad.
    
    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Reptiles y anfibios (tortugas, iguanas, geckos, ranas)

    .row.align-items-start.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema7/8.png", alt="").mb-4.mb-lg-0
      .col-lg-9.order-lg-1
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
          .div(titulo="Conductas naturales")
            p Termorregulación, caza por acecho, ocultamiento, alternancia entre actividad e inactividad. 
          .div(titulo="Necesidades etológicas")
            p Gradientes térmicos, escondites, iluminación y humedad controladas, dieta específica por especie. 
          .div(titulo="Riesgos por privación")
            p Estrés, anorexia, enfermedades metabólicas y muerte prematura.

    separador
    
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2 Espacio para movimiento libre
    
    p.mb-5 El espacio disponible es un factor determinante para que los animales puedan expresar sus comportamientos naturales de forma saludable. Un entorno limitado o inadecuado restringe su movilidad, afecta su bienestar físico y emocional y favorece la aparición de conductas anómalas.

    .bg-full-width.bg-color-4
      .p-4.p-md-5
        .row.align-items-start.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema7/8.png", alt="").mb-4.mb-lg-0
          .col-lg-9
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
              .div(titulo="Perros")
                p Requieren paseos diarios obligatorios, espacios para correr, olfatear y explorar libremente. Está prohibido el amarre permanente.
              .div(titulo="Gatos")
                p Necesitan espacios verticales, zonas de refugio, acceso controlado a diversas áreas del hogar y libertad para moverse según sus ritmos.
              .div(titulo="Mascotas no convencionales")
                p Deben mantenerse en instalaciones que superen los tamaños mínimos recomendados y que permitan la expresión de sus movimientos naturales. Estas instalaciones deben incluir zonas diferenciadas para descanso, alimentación y refugio, y simular, en lo posible, su hábitat natural. El confinamiento reducido favorece estereotipias, obesidad, lesiones y trastornos reproductivos.

        separador
        
        #t_7_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 7.3 Espacio para movimiento libre
        
        p.mb-5 El enriquecimiento ambiental es una estrategia fundamental para mantener el equilibrio emocional y evitar el aburrimiento, la frustración y la aparición de comportamientos indeseados. Este debe estar adaptado a las capacidades físicas, sensoriales y cognitivas de cada especie. La comparación de elementos de estimulación es: 

        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-primario.bg-color-1.p-5
            figure.mb-5
              img(src='@/assets/curso/tema7/9.png', alt='Texto descriptivo 1')
            h2 Mascotas convencionales
            p Requieren juguetes interactivos, juegos de olfato, rascadores, plataformas, entrenamiento con refuerzo positivo e interacción diaria con el cuidador.
          .col-md.tarjeta.color-primario.bg-color-7.p-5
            figure.mb-5
              img(src='@/assets/curso/tema7/10.png', alt='Texto descriptivo 2')
            h2 Mascotas no convencionales
            p Deben contar con objetos para roer, oportunidades de forrajeo controlado, refugios, túneles, elementos naturales seguros y cambios ambientales graduales. Todo enriquecimiento debe ser supervisado, específico para cada especie y compatible con sus comportamientos naturales.


</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
