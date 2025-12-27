<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Libertad de dolor, lesiones y enfermedades
    
    .row.mb-5.align-items-center
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-5.px-4.py-5(data-aos="fade-left")
          p.mb-0 A continuación, se presenta un video sobre la libertad de dolor, lesiones y enfermedades, uno de los principios esenciales del bienestar animal, que enfatiza la prevención, el diagnóstico oportuno y el cuidado ético de todos los animales, en armonía con la salud pública y el entorno.
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    separador
    
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Vacunación
    
    p.mb-5 La vacunación es una medida esencial de la medicina veterinaria preventiva, ya que permite estimular el sistema inmunológico del animal para que desarrolle defensas específicas frente a agentes infecciosos como virus, bacterias y toxinas. Su propósito es prevenir enfermedades, reducir su gravedad y controlar la propagación de patógenos tanto entre animales como hacia los seres humanos.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/2.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 Muchas de las enfermedades prevenibles por vacunación son altamente contagiosas, tienen tasas elevadas de mortalidad, generan secuelas permanentes o implican riesgos zoonóticos. Por ello, vacunar no solo protege al animal individual, sino que también cumple un papel fundamental en la salud pública y la bioseguridad.

</template>

<script>
export default {
  name: 'Tema6',
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
