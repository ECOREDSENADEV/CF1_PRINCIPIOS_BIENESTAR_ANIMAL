<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-color-4
      .p-4.p-md-5
        p.mb-5 Las mascotas forman parte fundamental de la vida humana, no solo como compañía, sino también como seres que generan vínculos emocionales, apoyo y bienestar. Su presencia en los hogares y comunidades implica una gran responsabilidad por parte de quienes las cuidan, pues son seres sintientes capaces de experimentar emociones como el dolor, el miedo y el placer.

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
          )(data-aos="zoom-in")
          .bloque-texto-g__texto.p-4
            p.mb-0 Por esta razón, el concepto de tenencia responsable ha evolucionado, integrando aspectos éticos, legales y científicos que buscan garantizar condiciones de vida dignas para los animales. Este enfoque implica conocer sus necesidades físicas, emocionales y comportamentales, y actuar en consecuencia para ofrecerles una vida saludable y equilibrada.
        
          
        .row.align-items-center
          .col-lg-auto.order-lg-2
            img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg.order-lg-1
            .bg-color-1.p-4
              p.mb-0 Además, la legislación colombiana respalda estos principios, exigiendo que los tutores cumplan con normas de bienestar animal. Así, temas como la alimentación adecuada, la atención veterinaria, el espacio apropiado y la empatía cobran relevancia, no solo como deberes morales, sino también como obligaciones legales que buscan prevenir el maltrato y asegurar una convivencia armónica.

</template>

<script>
export default {
  name: 'Introduccion',
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
