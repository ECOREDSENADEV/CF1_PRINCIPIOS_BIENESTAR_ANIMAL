<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Libertad de miedo y estrés
    
    .bg-full-width.bg-color-4
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema8/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-5.px-4.py-5(data-aos="fade-left")
              p.mb-0 La libertad de miedo y estrés es un principio clave del bienestar animal que establece que todos los animales deben vivir en condiciones que promuevan su equilibrio emocional y psicológico. Este principio garantiza que puedan desarrollarse sin miedo constante, tensión innecesaria ni ansiedad prolongada. La exposición continua a situaciones estresantes afecta tanto el comportamiento como la salud física y mental del animal. Los efectos fisiológicos del estrés crónico son: 

        .row.align-items-start.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema8/2.png", alt="").mb-4.mb-lg-0
          .col-lg-9
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
              .div(titulo="Inmunosupresión")
                p Reduce la capacidad del organismo para defenderse de infecciones.
              .div(titulo="Trastornos digestivos y metabólicos")
                p Aumenta el riesgo de enfermedades gastrointestinales, provoca apetito irregular y desórdenes metabólicos.
              .div(titulo="Problemas reproductivos")
                p Problemas reproductivos.
              .div(titulo="Cambios hormonales severos")
                p Modifica los niveles de cortisol, adrenalina y otras hormonas clave.
              .div(titulo="Conductas agresivas o de retraimiento")
                p Conductas agresivas o de retraimiento
              .div(titulo="Automutilaciones y estereotipias")
                p Incluyen lamerse, morderse o realizar movimientos repetitivos sin función aparente.
              .div(titulo="Disminución de la esperanza y calidad de vida")
                p Un animal estresado vive menos y en peores condiciones.

    p.mb-5 Este principio aplica de forma universal tanto a mascotas convencionales (perros y gatos) como a mascotas no convencionales (aves ornamentales, roedores, lagomorfos, reptiles, peces y especies exóticas permitidas). El entorno, el manejo y la interacción humana deben adaptarse a las necesidades específicas de cada especie para evitar la aparición de estrés.

    separador
    
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.1 Trato y manejo
    
    p.mb-5 El trato y manejo son factores determinantes para que el animal no se sienta amenazado. Una manipulación inadecuada es una de las principales fuentes de malestar y puede desencadenar miedo, estrés y conductas agresivas o de escape. Un manejo respetuoso y progresivo contribuye a la confianza y a una relación armónica entre el animal y el cuidador. Las recomendaciones por tipo de mascota son: 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema8/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Perros
              p El manejo debe ser calmado y respetuoso, transmitiendo seguridad. Evitar castigos físicos y gritos. Reforzar conductas positivas mediante recompensas. Usar lenguaje corporal no amenazante. Procedimientos como el baño o la atención veterinaria deben ser progresivos, con refuerzos positivos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema8/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Gatos
              p Requieren manejo mínimo y controlado. Se debe respetar su espacio y permitir que inicien las interacciones. Forzar el contacto genera rechazo. La paciencia es clave para que se adapten y confíen. El entorno debe ofrecer refugios seguros y zonas elevadas para su control ambiental.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema8/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Roedores, lagomorfos y aves
              p Son animales presa, por lo que la manipulación incorrecta desencadena miedo extremo. Deben ser manipulados solo cuando sea necesario, de forma suave y con conocimiento técnico. Es fundamental observar sus señales de estrés y evitar el contacto prolongado.
    
    separador
    
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.2 Rutinas

    p Las rutinas son fundamentales para el equilibrio físico, emocional y comportamental de los animales, tanto convencionales como no convencionales. Una rutina bien estructurada permite al animal anticipar lo que ocurrirá en su entorno, lo que reduce el estrés, facilita la adaptación y promueve el bienestar.
    p.mb-5 Las rutinas deben establecerse desde etapas tempranas y mantenerse constantes, aunque con flexibilidad ante cambios justificados. Estas deben adaptarse a la especie, edad, estado de salud y nivel de actividad del animal.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 19.
          span Inicio de las rutinas según la especie y la edad
        
        .tabla-a.color-acento-contenido.mb-5.tabl
          table
            thead
              tr
                th.bg-color-9 Especie
                th.bg-color-9 Edad de inicio recomendada
                th.bg-color-9 Rutinas sugeridas
            tbody
              tr
                td Caninos
                td 6–8 semanas
                td Alimentación, descanso, eliminación, ejercicios de obediencia básica
              tr.bg-color-sintesis
                td Felinos
                td 4–6 semanas
                td Uso del arenero, alimentación, juego
              tr
                td Aves domésticas
                td 3–4 semanas
                td Alimentación, limpieza, interacción controlada
              tr.bg-color-sintesis
                td Roedores y lagomorfos
                td 2–4 semanas
                td Alimentación, limpieza, respeto por ciclos crepusculares o nocturnos
              tr
                td Reptiles y peces
                td Desde el ingreso al hábitat
                td Control de temperatura, iluminación, alimentación y mantenimiento del ambiente

    separador
    
    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.3 Educación y adaptación
    
    .bg-full-width.bg-color-4
      .p-4.p-md-5
        p.mb-5 La educación animal es un proceso progresivo que va más allá del adiestramiento. Su objetivo es facilitar la adaptación del animal al entorno humano, establecer normas de convivencia y promover comportamientos adecuados, sin alterar la naturaleza de la especie. Las etapas de la educación y adaptación son: 

        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-1.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/tema8/6.svg', alt='Texto que describa la imagen')
              h4.text-center Etapa temprana
              p.text-center Se da entre las 6–12 semanas (en caninos y felinos). Es el periodo crítico de socialización. Se utilizan estímulos positivos, manipulación suave y refuerzo positivo.
        
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-1.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/tema8/7.svg', alt='Texto que describa la imagen')
              h4.text-center Etapa juvenil
              p.text-center Etapa de consolidación de hábitos aprendidos. Se introducen límites espaciales y normas de interacción con personas y otros animales.
        
          .col-sm-6.col-lg-4.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-1.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/tema8/8.svg', alt='Texto que describa la imagen')
              h4.text-center Etapa adulta
              p.text-center Requiere refuerzo continuo de comportamientos adecuados y adaptación a cambios fisiológicos o ambientales.

        p.mb-5 conductas 

        separador
        
        #t_8_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 8.4 Ruidos y fobias
        
        p.mb-5 Los ruidos intensos o repentinos pueden provocar fobias, ansiedad o estrés crónico en muchas especies. Estas reacciones son comunes ante estímulos como truenos, pólvora, electrodomésticos o tráfico. En animales pequeños o sensibles, los efectos pueden ser incluso letales. La prevención y manejo de fobias sonoras es: 

        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-6.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/tema8/9.svg', alt='Texto que describa la imagen')
              h4.text-center Desensibilización temprana
              p.text-center Introducir gradualmente sonidos leves desde edades juveniles (6–12 semanas)
        
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-6.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/tema8/10.svg', alt='Texto que describa la imagen')
              h4.text-center Asociación positiva
              p.text-center Acompañar los sonidos con experiencias agradables (juegos, premios, caricias)
        
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-6.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/tema8/11.svg', alt='Texto que describa la imagen')
              h4.text-center Refugios seguros
              p.text-center Proporcionar escondites o espacios tranquilos durante eventos ruidosos
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-6.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/tema8/11.svg', alt='Texto que describa la imagen')
              h4.text-center Evitar castigos
              p.text-center No castigar al animal por mostrar miedo; esto intensifica la reacción negativa

    p.mb-5 En especies sensibles como aves y pequeños mamíferos, el ruido debe evitarse al máximo, ubicándolos en zonas tranquilas y protegidas, ya que el estrés agudo puede causar la muerte.

    separador
    
    #t_8_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.5 Espacios de albergue
    
    p.mb-5 Los espacios de albergue son fundamentales para el bienestar animal. Deben proporcionar seguridad, higiene, confort térmico y oportunidades para expresar comportamientos naturales, adaptándose a las características particulares de cada especie. Los requisitos generales de albergue por especie son: 

    .bg-full-width-2.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema8/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Caninos
                p.text-center Espacios ventilados, secos, con áreas diferenciadas para descanso, alimentación y eliminación
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema8/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Felinos
                p.text-center Ambientes verticales, escondites accesibles, areneros separados del área de comida
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema8/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Aves
                p.text-center Jaulas amplias con perchas de diferentes diámetros, elementos para forrajeo y juego.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema8/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Roedores y lagomorfos
                p.text-center Recintos con sustrato absorbente, refugios y objetos para roer
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema8/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Reptiles y peces
                p.text-center Terrarios y acuarios específicos, con control riguroso de temperatura, humedad y calidad del agua
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema8/2.png', alt='')

         

</template>

<script>
export default {
  name: 'Tema8',
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
