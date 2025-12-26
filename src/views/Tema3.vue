<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Las cinco libertades del bienestar animal
    
    .bg-full-width.bg-color-4
      .p-4.p-md-5
        p.mb-5 Las Cinco libertades del bienestar animal constituyen un marco conceptual, ético y técnico universalmente aceptado para evaluar y garantizar condiciones de vida dignas a los animales bajo cuidado humano. Este enfoque establece estándares mínimos que deben cumplirse para proteger la integridad física, emocional y comportamental de los animales, reconociendo su condición de seres sintientes, capaces de experimentar dolor, placer, miedo, estrés y bienestar.

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
          )(data-aos="zoom-in")
          .bloque-texto-g__texto.p-4
            p.mb-0 Estas libertades no se limitan a evitar el sufrimiento, sino que promueven un bienestar positivo, en el cual el animal no solo sobrevive, sino que puede desarrollarse saludablemente, expresar su comportamiento natural y mantener un equilibrio físico y emocional adecuado.
        p.mb-5 En el contexto de las mascotas, tanto convencionales como no convencionales, la aplicación de las Cinco Libertades exige un manejo diferenciado por especie, evitando enfoques generalizados que ignoren las particularidades biológicas, fisiológicas y etológicas de cada animal. Cada libertad se relaciona con acciones cotidianas del tutor: la alimentación, la hidratación, el alojamiento, el manejo, la atención veterinaria y la interacción humano–animal. Las cinco libertades son utilizadas como base para:

        .row.justify-content-center
          .col-lg-2.mb-3.mb-lg-0
            .bg-color-1.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
              h5.mb-0 Legislación de protección y bienestar animal.
          .col-lg-2.mb-3.mb-lg-0
            .bg-color-1.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
              h5.mb-0 Programas de tenencia responsable.
          .col-lg-2.mb-3.mb-lg-0
            .bg-color-1.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
              h5.mb-0 Evaluaciones de bienestar y listas de chequeo.
          .col-lg-2.mb-3.mb-lg-0
            .bg-color-1.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
              h5.mb-0 Protocolos de manejo ético y humanitario.
          .col-lg-2.mb-3.mb-lg-0
            .bg-color-1.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
              h5.mb-0 Educación y sensibilización ciudadana.

        p.mb-5 Su cumplimiento es una obligación ética, social y legal, y su vulneración puede ser considerada como negligencia o maltrato.

        separador
        
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.1 Concepto de las cinco libertades
        
    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/2.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Las Cinco Libertades del bienestar animal son un conjunto de principios desarrollados inicialmente por el <em>Farm Animal Welfare Council</em> (FAWC), y posteriormente adoptados por organismos internacionales y legislaciones nacionales, incluido el marco normativo colombiano. Definen los derechos mínimos irrenunciables que deben garantizarse a todo animal bajo responsabilidad humana, sin importar su especie, función o entorno.
    
    p.mb-5 Desde esta perspectiva, el tutor, cuidador o responsable legal tiene el deber de anticipar, prevenir y corregir cualquier situación que pueda comprometer el bienestar del animal. Estas libertades reconocen que el bienestar no depende únicamente de la ausencia de enfermedad, sino también de la calidad del entorno, del manejo diario y de la relación humano–animal.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Libre de hambre, sed y desnutrición
              p Garantizar una nutrición adecuada y acceso permanente a agua limpia, mediante alimentación balanceada, hidratación diaria y control periódico del peso corporal.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Libre de incomodidad física y térmica
              p Ofrecer un entorno confortable, seguro y ajustado a las condiciones climáticas, con alojamiento limpio y seco, protección frente a la intemperie y disponibilidad de sombra y refugio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Libre de dolor, lesiones y enfermedades
              p Prevenir y atender problemas de salud a través de acciones veterinarias oportunas, como esquemas de vacunación, desparasitación y atención inmediata ante signos de dolor o alteraciones físicas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Libre para expresar su comportamiento natural
              p Permitir la manifestación de conductas propias de la especie, garantizando espacio suficiente para moverse, explorar, jugar e interactuar con el entorno y con otros animales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Libre de miedo y estrés
              p Reducir situaciones que generen sufrimiento emocional, evitando castigos, manipulación brusca, aislamiento prolongado o cambios abruptos en el entorno o en las rutinas.

    .bg-full-width.bg-color-4
      .p-4.p-md-5
        p.mb-5 Estas libertades están interrelacionadas y deben abordarse como un conjunto integral. Su incumplimiento parcial afecta las demás. Por ejemplo, una mala alimentación puede debilitar al animal, hacerlo más propenso a enfermedades y afectar su comportamiento y estabilidad emocional.

        separador
        
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.2 Importancia práctica de las cinco libertades en la tenencia responsable
        
        p.mb-5 Aplicar las cinco libertades en la vida cotidiana permite:
        
        .row.justify-content-center
          .col-lg-10
            .bg-color-2.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/8.png', alt='')
                .col-lg
                  .p-4
                    ul.lista-ul--color
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Prevenir enfermedades y sufrimiento innecesario.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Reducir problemas de comportamiento y agresividad.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Fortalecer el vínculo humano–animal.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Mejorar la convivencia familiar y comunitaria.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Cumplir con la normatividad vigente de protección animal.

        p.mb-5 Desde una perspectiva educativa y ética, estas libertades transforman la tenencia de mascotas en un acto consciente de responsabilidad, donde el bienestar del animal se convierte en una prioridad, no en una opción.



</template>

<script>
export default {
  name: 'Tema3',
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
