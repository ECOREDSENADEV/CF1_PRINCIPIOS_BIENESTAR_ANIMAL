<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Libertad de incomodidad física y térmica
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-5.px-4.py-5(data-aos="fade-left")
          p.mb-0 La libertad de incomodidad física y térmica asegura que los animales, tanto convencionales como no convencionales, dispongan de un entorno que les proporcione comodidad, protección y condiciones adecuadas para su bienestar. Esto incluye la capacidad de descansar, desplazarse y expresar comportamientos naturales sin experimentar dolor, estrés ni sufrimiento.
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/2.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 Las condiciones de alojamiento, el espacio disponible, la temperatura, la ventilación, la iluminación y los implementos del hábitat influyen directamente en el bienestar físico, mental y emocional de los animales. La exposición prolongada a ambientes inadecuados o inadaptados a las necesidades específicas de la especie constituye una forma de maltrato por negligencia.
    
    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Instalaciones adecuadas
    
    p.mb-5 Las instalaciones deben diseñarse y mantenerse de acuerdo con la especie, tamaño, edad y necesidades biológicas de cada animal, garantizando seguridad, higiene, confort térmico y libertad de movimiento. Los espacios deben permitir que los animales se comporten de manera natural y puedan descansar de forma segura.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Mascotas convencionales
    
    p.mb-5 Los animales de compañía como perros y gatos requieren espacios que favorezcan su expresión conductual natural, eviten el hacinamiento y se adapten al clima y entorno del hogar.

    .row.align-items-start.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/3.png", alt="").mb-4.mb-lg-0
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
          .div(titulo="Perros (razas pequeñas)")
            p Requieren espacios protegidos, seguros y confortables que permitan movilidad y descanso sin exposición a clima extremo. Ejemplos: Chihuahua, Pinscher, Pomerania, Shih Tzu, Poodle toy, Yorkshire Terrier. Instalación: casa para perro, kennel, patio cercado, vivienda interior o combinación. Área mínima: espacio interior 4–6 m² por animal; patio o corral 8–12 m²; casa o kennel: largo del perro × 1,5 y ancho × 1,5. Condiciones: piso firme, seco y antideslizante; techo impermeable con aislamiento térmico; ventilación adecuada sin corrientes; protección frente a lluvia, viento y radiación solar; área de descanso elevada; acceso permanente a sombra y agua potable. Implementos: cama acolchada o térmica, plato de agua pesado, plato de alimento, juguetes resistentes, correa y arnés. El encadenamiento permanente o el confinamiento en espacios reducidos constituye maltrato animal.
    
          .div(titulo="Gatos")
            p Necesitan entornos interiores enriquecidos, con uso del espacio vertical, zonas de descanso y refugios que favorezcan la expresión de su comportamiento natural. Instalación: espacios interiores adaptados, casas para gatos, estanterías o refugios elevados. Área mínima: 3–4 m² por gato y espacio vertical ≥ 1,5 m de altura. Implementos: caja de arena (1 por gato + 1 adicional), arena sanitaria limpia y sin perfumes, rascadores verticales y horizontales, camas o cuevas térmicas de fácil limpieza y juguetes para estimulación física, mental y emocional.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Mascotas no convencionales
    
    p.mb-5 Los animales no convencionales requieren espacios específicos que consideren sus características anatómicas, comportamentales y fisiológicas. Su alojamiento debe garantizar seguridad, confort y reducción del estrés.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Conejos
              p Área amplia con zonas para esconderse, alimentarse, ejercitarse y descansar. Área mínima: 1 conejo: 2 m²; 2 conejos: 3–4 m². Tipo de instalación: jaula grande, corral cerrado o recinto adaptado en el hogar. Implementos: cama de heno (descanso y alimento base), refugio cerrado (seguridad y reducción de estrés), bebedero seguro (agua limpia permanente), bandeja sanitaria (higiene).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cobayos y otros roedores
              p Hábitats ventilados, con superficie suficiente de desplazamiento y materiales absorbentes. Área mínima: hámster: 0,4–0,6 m²; cobayo: 0,7–1 m². Implementos: sustrato absorbente, refugios y túneles, juguetes para roer; rueda solo para especies aptas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Aves ornamentales
              p Jaulas amplias y bien ubicadas que favorezcan ejercicio, acicalamiento e interacción. Dimensiones mínimas de jaula: aves pequeñas: 60 × 40 × 40 cm; medianas: 80 × 50 × 60 cm. Implementos: perchas de distintos grosores, bebederos y comederos higiénicos, recipiente para baño, juguetes seguros.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Peces ornamentales
              p El espacio vital es el agua; se requieren condiciones estables del acuario. Volumen mínimo: peces pequeños: 20–40 litros; peces medianos: ≥ 60 litros. Implementos: filtro y oxigenador, termómetro y calentador según especie, plantas y escondites, iluminación adecuada.
    
    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Enfoque de responsabilidad y negligencia
    
    p.mb-5 El tutor es responsable de proporcionar instalaciones seguras, limpias y apropiadas para cada tipo de mascota. Ignorar las condiciones mínimas necesarias, someter a los animales al hacinamiento o a temperaturas extremas constituye maltrato por negligencia.

    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-down")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema5/8.png', alt='')
            .col-lg
              .p-4
                p.mb-0 Garantizar la libertad de incomodidad física y térmica es un deber ético, legal y técnico. Representa un componente esencial del bienestar animal y debe reflejarse en acciones cotidianas de tenencia responsable.



</template>

<script>
export default {
  name: 'Tema5',
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
