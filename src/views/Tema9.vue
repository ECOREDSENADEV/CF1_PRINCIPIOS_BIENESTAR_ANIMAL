<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Bienestar animal en Colombia
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema9/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-5.px-4.py-5(data-aos="fade-left")
          p.mb-0 El bienestar animal en Colombia se basa en el reconocimiento legal y ético de los animales como seres sintientes, lo que implica que tienen la capacidad de sentir dolor, placer, miedo, estrés y bienestar. Este enfoque reconoce que los animales no son objetos ni recursos, sino individuos que merecen condiciones de vida dignas y protección efectiva frente al maltrato, la negligencia o el abandono. El modelo colombiano de bienestar animal integra las cinco libertades universalmente reconocidas:
    
    .row.justify-content-center
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-6.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Libre de hambre y sed
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-6.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Libre de incomodidad
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-6.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Libre de dolor, lesiones y enfermedades
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-6.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Libre de miedo y estrés
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-6.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Libertad para expresar su comportamiento natural

    .bg-full-width.bg-color-4
      .p-4.p-md-5
        p.mb-5 Estas libertades se aplican tanto a mascotas convencionales como no convencionales, animales de producción, fauna silvestre en cautiverio y animales en centros de cuidado temporal o permanente.

        separador
        
        #t_9_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 9.1 Normatividad colombiana vigente
        
        p.mb-5 El marco jurídico colombiano establece normas claras para la tenencia, manejo y protección de los animales, con especial énfasis en la responsabilidad de los propietarios y cuidadores. Este conjunto normativo también define sanciones frente al maltrato y promueve la adopción, la educación y la convivencia armónica.

        .row.justify-content-center
          .col-lg-7
            LineaTiempoE.color-acento-contenido
              div(titulo="Ley 84 de 1989")
                p Estatuto Nacional de Protección de los Animales. Define deberes, sanciones y formas de protección frente al maltrato.
              div(titulo="Ley 1774 de 2016")
                p Reconoce jurídicamente a los animales como seres sintientes. Penaliza el maltrato con sanciones civiles y penales.
              div(titulo="Ley 2054 de 2020")
                p Promueve la adopción responsable de animales de compañía y establece medidas para su protección integral.
              div(titulo="Decreto 1076 de 2015")
                p Regula el manejo ambiental de fauna silvestre y exótica en el país. Aplica a tenencia, comercialización y transporte.
              div(titulo="Normativa ICA vigente")
                p Establece medidas sanitarias, de bienestar animal y control para animales de producción, domésticos y exóticos.
              div(titulo="Ordenanzas y acuerdos municipales")
                p Regulan localmente aspectos como tenencia responsable, ruido, albergue, control poblacional, esterilización y sanciones por abandono.
    
    p.mb-5 El cumplimiento de esta normativa es obligatorio para:

    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-down")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema9/2.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Propietarios y tenedores de animales.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Cuidadores y responsables de albergues.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Instituciones educativas con programas de interacción animal.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Autoridades ambientales, sanitarias y judiciales.
    
    p.mb-5 Cumplir la ley no solo evita sanciones, sino que representa un compromiso ético y ciudadano con el respeto a la vida y la promoción del bienestar animal en todos los entornos.

    


</template>

<script>
export default {
  name: 'Tema9',
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
