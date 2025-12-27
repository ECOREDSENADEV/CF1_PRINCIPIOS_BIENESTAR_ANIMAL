<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Empatía humano–animal
    
    .bg-full-width.bg-color-4
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-5.px-4.py-5(data-aos="fade-left")
              p.mb-0 La empatía humano–animal es la capacidad consciente del ser humano para reconocer, interpretar y responder adecuadamente a las necesidades físicas, emocionales y comportamentales de los animales. Este concepto constituye uno de los pilares fundamentales del bienestar animal, ya que influye directamente en la calidad de vida del animal y en la forma en que se desarrolla su convivencia con las personas.
    
        p.mb-5 La empatía implica comprender que los animales no solo reaccionan a estímulos físicos, sino que también experimentan emociones, estados de ánimo y sensaciones como el dolor, el miedo, el placer, el estrés y el bienestar. Reconocer estas capacidades permite:

        .row.justify-content-center.align-items-stretch
          .col-lg-3.mb-3.mb-lg-0.d-flex
            figure.d-flex.h-100.w-100
              img.h-100.w-100.object-fit-cover(
                src="@/assets/curso/tema2/2.png",
                data-aos="zoom-in"
              )

          .col-lg-3.mb-3.mb-lg-0.d-flex
            .bg-color-7.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
              h5.mb-0 Establecer relaciones más respetuosas y conscientes.

          .col-lg-3.mb-3.mb-lg-0.d-flex
            .bg-color-7.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
              h5.mb-0 Prevenir situaciones de sufrimiento innecesario.

          .col-lg-3.mb-3.mb-lg-0.d-flex
            .bg-color-7.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
              h5.mb-0 Tomar decisiones responsables respecto al manejo, la educación, la salud y el entorno del animal.

        separador
        
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Aplicaciones prácticas de la empatía humano–animal
        
        p.mb-5 Desde una perspectiva práctica, la empatía facilita:

        .row.justify-content-center
          .col-lg-10
            .bg-color-2.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/3.png', alt='')
                .col-lg
                  .p-4
                    ul.lista-ul--color
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 La correcta interpretación del lenguaje corporal y las vocalizaciones del animal.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 La detección temprana de signos de malestar, enfermedad o estrés.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 La prevención de problemas conductuales o sanitarios antes de que se manifiesten.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 El uso de métodos de manejo y entrenamiento respetuosos, basados en el refuerzo positivo.
    
    p.mb-5 En este sentido, la empatía no se limita a una actitud emocional o afectiva, sino que representa una competencia ética y técnica indispensable para:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-3.mb-lg-0.d-flex
        .bg-color-7.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Cumplir con la normatividad en bienestar animal.

      .col-lg-3.mb-3.mb-lg-0.d-flex
        .bg-color-7.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Prevenir el maltrato.

      .col-lg-3.mb-3.mb-lg-0.d-flex
        .bg-color-7.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Promover una tenencia responsable y sostenible.

      .col-lg-3.mb-3.mb-lg-0.d-flex
        figure.d-flex.h-100.w-100
          img.h-100.w-100.object-fit-cover(
            src="@/assets/curso/tema2/4.png",
            data-aos="zoom-in"
          )
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Vínculo emocional humano–animal
    
    p.mb-5 El vínculo emocional humano–animal es la relación afectiva que se construye entre una persona y un animal a través de la convivencia diaria, el cuidado constante y las interacciones positivas. Se forma de manera progresiva y depende de la calidad del manejo, la coherencia en las rutinas y la respuesta del tutor frente a las necesidades del animal. Las características del vínculo humano–animal son:

    SlyderF(columnas="col-12 col-lg-4").mb-5
      .tarjeta.bg-color-8.p-4
        img.mb-5(src='@/assets/curso/tema2/5.png' alt='AvatarTop')
        h2.text-center Relación de confianza
        p.text-center Basada en experiencias repetidas de seguridad, previsibilidad y ausencia de castigos.
      .tarjeta.bg-color-8.p-4
        img.mb-5(src='@/assets/curso/tema2/6.png' alt='AvatarTop')
        h2.text-center Reconocimiento mutuo
        p.text-center Donde el animal identifica al tutor como fuente de protección, alimento, bienestar y estabilidad.
      .tarjeta.bg-color-8.p-4
        img.mb-5(src='@/assets/curso/tema2/7.png' alt='AvatarTop')
        h2.text-center Interacción bidireccional
        p.text-center En la que las conductas humanas influyen directamente en las respuestas emocionales y comportamentales del animal, y viceversa.
      .tarjeta.bg-color-8.p-4
        img.mb-5(src='@/assets/curso/tema2/8.png' alt='AvatarTop')
        h2.text-center Estabilidad emocional
        p.text-center Que surge de un manejo coherente, respetuoso y adaptado a la especie.
      .tarjeta.bg-color-8.p-4
        img.mb-5(src='@/assets/curso/tema2/9.png' alt='AvatarTop')
        h2.text-center Apego positivo
        p.text-center Que facilita la cooperación del animal en actividades como el entrenamiento, el manejo diario o los procedimientos veterinarios.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Impacto del vínculo en el bienestar animal
    
    p.mb-5 A continuación, se comparan los efectos de un vínculo emocional positivo frente a uno deficiente o negativo:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.bg-color-1.p-5
        figure.mb-5
          img(src='@/assets/curso/tema2/10.png', alt='Texto descriptivo 1')
        h2 Vínculo emocional positivo 
        ul.lista-ul--color
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Reduce el estrés, el miedo y la ansiedad.
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Favorece el aprendizaje y la adaptación.
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Disminuye conductas agresivas o destructivas.
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Mejora la recuperación ante enfermedades.
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Fortalece la seguridad emocional del animal.
    
      .col-md.tarjeta.color-primario.bg-color-7.p-5
        figure.mb-5
          img(src='@/assets/curso/tema2/11.png', alt='Texto descriptivo 2')
        h2.text-center Vínculo emocional negativo
        ul.lista-ul--color
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Genera estrés crónico y miedo persistente.
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Provoca desconfianza y alteraciones conductuales.
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Aumenta el riesgo de agresividad o escape.
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Afecta la salud física y emocional.
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Compromete la convivencia y la seguridad humana.

    p.mb-5 Establecer un vínculo emocional sano y desarrollar una empatía activa con los animales no solo es un acto de humanidad, sino una condición esencial para el bienestar animal, la tenencia responsable y la convivencia armónica en los entornos familiares y comunitarios.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Relación animal–animal
    
    .bg-full-width.bg-color-4
      .p-4.p-md-5
        p.mb-5 La relación animal–animal se refiere a las interacciones sociales que se establecen entre animales de la misma especie o de especies diferentes que comparten un mismo entorno. Estas relaciones tienen especial relevancia en especies sociales, en las cuales el contacto con otros animales forma parte de su comportamiento natural y es esencial para su bienestar integral. Las características de la relación animal–animal son: 

        SlyderF(columnas="col-12 col-lg-4").mb-5
          .tarjeta.bg-color-8.p-4
            img.mb-5(src='@/assets/curso/tema2/12.png' alt='AvatarTop')
            h2.text-center Estructuración social
            p.text-center Algunas especies desarrollan jerarquías, roles y dinámicas de grupo propias, que regulan las interacciones y la convivencia.
          .tarjeta.bg-color-8.p-4
            img.mb-5(src='@/assets/curso/tema2/13.png' alt='AvatarTop')
            h2.text-center Comunicación intraespecífica e interespecífica
            p.text-center A través de lenguaje corporal, vocalizaciones, posturas, juegos y contacto físico, los animales intercambian información, establecen límites y expresan emociones.
          .tarjeta.bg-color-8.p-4
            img.mb-5(src='@/assets/curso/tema2/14.png' alt='AvatarTop')
            h2.text-center Aprendizaje social
            p.text-center Muchas conductas se adquieren mediante la observación y la imitación de otros animales, especialmente en etapas tempranas.
          .tarjeta.bg-color-8.p-4
            img.mb-5(src='@/assets/curso/tema2/15.png' alt='AvatarTop')
            h2.text-center Coexistencia regulada
            p.text-center Factores como el espacio disponible, el acceso a recursos (alimento, agua, refugio) y la socialización adecuada determinan la calidad de la convivencia.
          .tarjeta.bg-color-8.p-4
            img.mb-5(src='@/assets/curso/tema2/16.png' alt='AvatarTop')
            h2.text-center Tolerancia y compatibilidad
            p.text-center Estas dependen de variables como la edad, el temperamento, las experiencias previas y el manejo brindado por el ser humano.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Importancia para el bienestar animal
        
        p.mb-5 Una relación animal–animal adecuada: 

        .row.justify-content-center
          .col-lg-10
            .bg-color-2.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/17.png', alt='')
                .col-lg
                  .p-4
                    ul.lista-ul--color
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Permite la expresión del comportamiento natural de la especie.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Reduce el aislamiento social, la frustración y el estrés.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Estimula el juego, la exploración y el ejercicio físico.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Contribuye al equilibrio emocional y social del animal.
    
    p.mb-5 No obstante, la convivencia entre animales sin una planificación adecuada puede generar conflictos. Factores como la introducción abrupta de nuevos individuos, la falta de espacio, la competencia por recursos o la ausencia de supervisión humana pueden dar lugar a:

    .row.justify-content-center
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Conflictos jerárquicos o territoriales.
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Agresiones físicas.
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Estrés crónico.
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Estrés crónico.
    
    p.mb-5 Por ello, el tutor debe asumir un rol activo en la supervisión, regulación y facilitación de interacciones seguras, compatibles y progresivas entre los animales que conviven en un mismo entorno.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Enfoque ético y de responsabilidad
    
    p.mb-5 Tanto la empatía humano–animal como la adecuada gestión de las relaciones entre animales son responsabilidades directas del tutor o cuidador. Estas competencias reflejan un compromiso ético con el bienestar animal y son esenciales para:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-3.mb-lg-0.d-flex
        .bg-color-7.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Prevenir el maltrato.

      .col-lg-3.mb-3.mb-lg-0.d-flex
        .bg-color-7.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Promover la convivencia armónica.

      .col-lg-3.mb-3.mb-lg-0.d-flex
        .bg-color-7.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Cumplir con la normatividad vigente.

      .col-lg-3.mb-3.mb-lg-0.d-flex
        figure.d-flex.h-100.w-100
          img.h-100.w-100.object-fit-cover(
            src="@/assets/curso/tema2/18.png",
            data-aos="zoom-in"
          )
    
    p.mb-5 Una relación empática y responsable, tanto entre personas y animales como entre los propios animales, mejora su calidad de vida, fortalece los lazos familiares y comunitarios, reduce riesgos para la salud pública y consolida una cultura de respeto hacia los animales como seres sintientes.




</template>

<script>
export default {
  name: 'Tema2',
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
