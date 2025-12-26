<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Mascota
    
    p.mb-5 Las mascotas forman parte integral de la vida social, familiar y comunitaria de las personas. Su presencia no solo cumple funciones de compañía, recreación, apoyo emocional o asistencia, sino que establece una relación directa de dependencia y responsabilidad entre el animal y el ser humano. Esta relación implica compromisos éticos, legales y sanitarios, orientados a garantizar condiciones de vida dignas, seguras y acordes con las necesidades biológicas y comportamentales de cada especie.
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 El concepto de mascota ha evolucionado: de una visión utilitaria o recreativa se ha pasado a un enfoque moderno basado en el bienestar animal, la sintiencia y la protección legal, reconociendo que los animales no son objetos, sino seres vivos que requieren cuidados integrales durante toda su vida.
    
    .bg-full-width.bg-color-4
      .p-4.p-md-5
        separador
        
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.1 Concepto de mascota
        
        p.mb-5 Una mascota es un animal doméstico o domesticado que convive de manera permanente o semipermanente con las personas, bajo su cuidado y responsabilidad directa, con fines de:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-2.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Compañía
          .col-lg-2.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Integración social
          .col-lg-2.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Apoyo emocional
          .col-lg-2.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Recreación
          .col-lg-2.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Funciones asistidas

        p.mb-5 A diferencia de los animales silvestres, las mascotas dependen completamente del ser humano para:

        .row.justify-content-center
          .col-lg-10
            .bg-color-2.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/7.png', alt='')
                .col-lg
                  .p-4
                    ul.lista-ul--color
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Su alimentación y acceso al agua.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 La atención veterinaria.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 La protección frente a riesgos.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 La socialización y estimulación.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 El alojamiento adecuado.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 La prevención del sufrimiento físico y emocional.

        p.mb-5 Desde el enfoque de bienestar animal, la mascota es reconocida como un ser sintiente, capaz de experimentar emociones y sensaciones, lo que convierte su tenencia en un acto de responsabilidad permanente, y no en una decisión temporal o circunstancial.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Tipos de mascotas

    p.mb-5 Las mascotas pueden clasificarse según su grado de domesticación, características biológicas y requerimientos de manejo. A continuación se presentan los principales tipos en formato comparativo:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Mascotas convencionales
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Especies históricamente domesticadas
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Alta adaptación al entorno humano
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Requieren cuidados específicos (nutrición, salud, ejercicio, socialización)
              p <b>Ejemplos</b>: Perros, gatos
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Mascotas no convencionales o exóticas permitidas
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Solo pueden mantenerse si la normativa lo autoriza
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Necesitan condiciones técnicas especiales
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Exigen conocimientos específicos sobre fisiología, ambiente y alimentación
              p <b>Ejemplos</b>: Aves ornamentales, peces, hámster, cobayo, conejos, reptiles autorizados
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Animales de compañía con funciones especiales
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Cumplen funciones adicionales a la compañía
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Requieren entrenamiento especializado
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Se rigen por protocolos estrictos de bienestar y salud
              p <b>Ejemplos</b>: Animales de asistencia, de apoyo emocional, de terapia
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Características físicas de las mascotas
    
    p.mb-5 Las características físicas de las mascotas determinan directamente sus necesidades de manejo, alimentación, alojamiento, atención veterinaria y bienestar general. El desconocimiento de estas particularidades puede provocar enfermedades, estrés, lesiones y problemas de comportamiento. Por ello, es fundamental analizar cada especie de forma integral, considerando su anatomía, fisiología y capacidad de adaptación al entorno humano. A continuación, se presentan las especies más comunes de mascotas, agrupadas en convencionales y no convencionales, con una descripción comparativa de los aspectos físicos más relevantes para su cuidado responsable.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Mascotas convencionales

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-5.px-4.py-5(data-aos="fade-left")
          p.mb-0 Las mascotas convencionales, como los perros y gatos, son especies ampliamente domesticadas que han convivido con los seres humanos durante siglos. Su integración en el entorno humano ha generado una gran variedad de razas, comportamientos y necesidades específicas que requieren atención especializada. Aunque son los animales de compañía más comunes, su cuidado exige conocimientos sobre sus características físicas y fisiológicas para garantizar una vida saludable, equilibrada y segura.
    
    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Perros
    
    p.mb-5 Los perros presentan una gran diversidad morfológica debido a procesos de domesticación y selección artificial. Esta variabilidad conlleva diferencias importantes en sus necesidades físicas, fisiológicas y de manejo.

    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Tamaño y conformación corporal
                p.text-center Varía entre razas pequeñas, medianas, grandes y gigantes. Esto influye en el espacio necesario, la cantidad de ejercicio, el riesgo de enfermedades articulares, los requerimientos nutricionales y el manejo físico diario.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sistema locomotor
                p.text-center Diseñado para la actividad continua. Requiere ejercicio regular para mantener la masa muscular, prevenir obesidad y evitar trastornos articulares o conductas destructivas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sistema digestivo
                p.text-center Omnívoros con predominio carnívoro. Necesitan proteínas de alta calidad, una dieta estable y vigilancia frente a alimentos tóxicos. El exceso de premios y los cambios bruscos en la alimentación pueden causar obesidad o trastornos digestivos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Piel y pelaje
                p.text-center Varía en tipo, densidad y longitud. Protege del clima y de agentes externos. Alteraciones en piel o pelo pueden indicar deficiencias nutricionales o enfermedades.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Dentición
                p.text-center Adaptada para desgarrar. Requiere higiene dental frecuente, prevención del sarro y uso de objetos seguros para masticar.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sentidos
                p.text-center Olfato muy desarrollado y audición sensible a altas frecuencias. Estos sentidos influyen en el entrenamiento y la interacción con el entorno.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Esperanza de vida
                p.text-center Entre 10 y 15 años, según raza, genética y calidad del cuidado. Exige un compromiso prolongado del tutor.
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/12.png', alt='')
    
    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Gatos
    
    p.mb-5 Los gatos poseen características físicas únicas que reflejan su origen como cazadores solitarios. Estas particularidades les otorgan una gran capacidad de agilidad, sigilo e independencia, pero también implican necesidades específicas en cuanto a su entorno, nutrición y estimulación, que deben ser atendidas para preservar su bienestar.

    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/21.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Conformación corporal
                p.text-center Cuerpo flexible y musculoso, ideal para saltar, moverse en silencio y mantener el equilibrio.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/22.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sistema locomotor
                p.text-center Muy elástico. Necesita estímulos físicos y mentales, así como estructuras verticales (estanterías, rascadores) para prevenir el estrés.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/23.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sistema digestivo
                p.text-center Carnívoro estricto. Depende de proteínas animales y nutrientes como taurina y arginina. Una dieta inadecuada puede causar enfermedades graves.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/24.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Piel y pelaje
                p.text-center Refleja la salud general. Debe cepillarse para evitar bolas de pelo. Un pelaje opaco puede indicar enfermedad.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/25.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Garras retráctiles
                p.text-center Necesitan superficies para el desgaste natural, marcaje territorial y regulación emocional.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/26.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sentidos
                p.text-center Visión adaptada a la baja luz, audición aguda y bigotes (vibrisas) para orientación espacial.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/27.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Esperanza de vida
                p.text-center De 12 a 18 años o más, si se brindan cuidados adecuados y un entorno estable.
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/20.png', alt='')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Mascotas no convencionales

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/28.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-5.px-4.py-5(data-aos="fade-left")
          p.mb-0 Las mascotas no convencionales incluyen especies que, si bien pueden mantenerse en ambientes domésticos bajo ciertas condiciones, requieren cuidados particulares debido a sus características biológicas, su menor grado de domesticación o su sensibilidad a cambios ambientales. En este grupo se encuentran animales como conejos, aves ornamentales, peces y roedores domésticos, cuyas necesidades específicas deben ser comprendidas y respetadas para evitar sufrimiento, enfermedades o alteraciones del comportamiento.
    
    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Conejos
    
    p.mb-5 Los conejos son animales de presa con un alto grado de sensibilidad física y emocional. Su bienestar depende de un manejo cuidadoso que respete sus necesidades digestivas, dentales y ambientales. Las condiciones inadecuadas pueden provocar consecuencias graves para su salud.

    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/30.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Conformación corporal
                p.text-center Cuerpo compacto, con patas traseras fuertes para el salto. Son muy sensibles al estrés.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/31.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sistema digestivo
                p.text-center Herbívoro estricto. Requiere dietas ricas en fibra (heno) y cecotrofia para absorber nutrientes. Cambios bruscos en la dieta pueden ser peligrosos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/32.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Dentición
                p.text-center Dientes de crecimiento continuo. El desgaste con heno es esencial para prevenir maloclusiones, dolor y anorexia.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/33.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Pelaje
                p.text-center Denso y suave. Requiere cepillado, especialmente en muda, para evitar obstrucciones intestinales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/34.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sistema óseo
                p.text-center Muy frágil. El mal manejo puede causar fracturas. Debe evitarse la sujeción incorrecta.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/35.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Esperanza de vida
                p.text-center De 8 a 12 años, dependiendo del manejo y cuidados veterinarios.
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/29.png', alt='')
    
    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Aves ornamentales
    
    p.mb-5 Las aves ornamentales presentan adaptaciones anatómicas especializadas para el vuelo y una comunicación compleja mediante el plumaje. Son extremadamente sensibles a factores ambientales y requieren cuidados específicos relacionados con su estructura ósea, respiración y entorno físico.

    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/37.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Estructura ósea
                p.text-center Huesos livianos y neumáticos para el vuelo, pero frágiles ante caídas o golpes.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/38.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Plumaje
                p.text-center Sirve para la regulación térmica, el vuelo y la comunicación. Su deterioro es signo de estrés o enfermedad.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/39.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sistema respiratorio
                p.text-center Muy eficiente pero sensible. Requiere ambientes ventilados y libres de humo o aerosoles.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/40.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Pico y garras
                p.text-center Crecen continuamente. Necesitan elementos para el desgaste natural. Su sobrecrecimiento afecta la funcionalidad.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/41.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Esperanza de vida
                p.text-center Muy variable según la especie: desde pocos años hasta varias décadas.
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/36.png', alt='')
    
    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Peces
    
    p.mb-5 Los peces son mascotas altamente dependientes de un ambiente acuático controlado. Su fisiología está estrechamente ligada a las condiciones del agua, lo que exige una supervisión constante de parámetros como temperatura, oxigenación y calidad del hábitat.

    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/43.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Morfología corporal
                p.text-center Adaptada a la natación. Poseen aletas especializadas y escamas protectoras.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/44.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sistema respiratorio
                p.text-center Branquial. Muy sensible a la calidad del agua, los niveles de oxígeno y la presencia de contaminantes.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/45.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Regulación térmica
                p.text-center Ectotermos: su metabolismo depende de la temperatura del agua. Cambios bruscos pueden ser letales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/46.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Esperanza de vida
                p.text-center Varía según la especie y la calidad del ambiente acuático.
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/42.png', alt='')
    
    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Roedores domésticos
    
    p.mb-5 Los roedores domésticos, como hámsteres o cobayos, poseen un metabolismo acelerado y una notable sensibilidad al entorno. Aunque su tamaño es reducido, requieren cuidados intensivos, especialmente relacionados con su alimentación, enriquecimiento ambiental y manejo del estrés.

    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/48.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Tamaño y metabolismo
                p.text-center Cuerpo pequeño con metabolismo rápido. Alta demanda energética y sensibilidad a cambios de temperatura.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/49.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Dentición
                p.text-center Dientes de crecimiento continuo. Necesitan roer materiales seguros para evitar problemas dentales graves.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/50.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sistema nervioso
                p.text-center Muy sensible al estrés. Ruidos fuertes, manipulación excesiva o aislamiento afectan negativamente su salud.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/51.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Esperanza de vida
                p.text-center Corta: entre 2 y 5 años. Requiere cuidados constantes durante su breve ciclo vital.
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/47.png', alt='')
    
    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Características comportamentales

    p.mb-5 El comportamiento de las mascotas es el resultado de la interacción entre factores genéticos, biológicos, ambientales y de aprendizaje. Cada especie posee patrones comportamentales propios, derivados de su evolución, su rol ecológico y su grado de domesticación.
    
    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/52.png', alt='')
            .col-lg
              .p-4
                p.mb-0 Comprender estas características es fundamental para prevenir problemas de convivencia, garantizar el bienestar animal y promover una relación armónica con las personas. A continuación, se detallan las principales conductas observables en mascotas convencionales y no convencionales.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Características Comportamentales en Mascotas Convencionales
    
    p.mb-5 Las mascotas convencionales, como perros y gatos, muestran comportamientos influenciados por su historia evolutiva y su cercanía con el ser humano. Entender sus señales y necesidades favorece una convivencia segura, afectiva y equilibrada.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.bg-color-1.p-5
        figure.mb-5
          img(src='@/assets/curso/tema1/53.png', alt='Texto descriptivo 1')
        h2 Perros 
        ul.lista-ul--color
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Animales sociales, con estructura jerárquica.
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Alta capacidad de socialización con humanos y otros animales, sobre todo en etapas tempranas.
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Conductas instintivas como protección territorial, caza, pastoreo o juego (según raza).
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Lenguaje corporal expresivo: cola, orejas, postura, vocalizaciones.
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Alta capacidad de aprendizaje con refuerzo positivo.
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Sensibilidad emocional: pueden desarrollar ansiedad, miedo o agresividad si reciben castigos o viven en rutinas inadecuadas.
    
      .col-md.tarjeta.color-primario.bg-color-7.p-5
        figure.mb-5
          img(src='@/assets/curso/tema1/54.png', alt='Texto descriptivo 2')
        h2.text-center Gatos
        ul.lista-ul--color
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Conducta más independiente, con fuerte instinto territorial.
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Marcaje con feromonas, rascado y vocalizaciones.
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Preservan conductas de caza y exploración incluso en el hogar.
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Lenguaje corporal más sutil que el del perro.
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Socialización selectiva: generan vínculos afectivos, pero requieren tiempos y espacios propios.
          li.mb-2.d-flex
            i.fas.fa-circle-check.bg-color-3
            p.mb-0 Alta sensibilidad al estrés, que puede generar enfermedades asociadas.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Características comportamentales en mascotas no convencionales
    
    p.mb-5 Las mascotas no convencionales presentan comportamientos que, en muchos casos, responden a su biología silvestre o a una menor domesticación. Su observación debe ser cuidadosa, y el manejo debe adaptarse a su nivel de sensibilidad y tipo de comunicación.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/55.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Conejos
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Animales de presa: muy sensibles al ruido y cambios ambientales.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Respuesta de huida como defensa principal.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Comunicación corporal discreta: orejas, postura, golpes con patas.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Necesidad de rutinas estables: el estrés puede causar anorexia y problemas digestivos.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Socialización moderada si el manejo es cuidadoso.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/56.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Aves ornamentales
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Alta capacidad cognitiva; algunas especies reconocen a su cuidador.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Conductas sociales intensas: requieren interacción constante.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Comunicación vocal fundamental para su bienestar
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Necesidad de vuelo y acicalamiento.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Alta sensibilidad al entorno: el aislamiento o encierro inadecuado causa trastornos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/57.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Peces
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Comportamiento muy influido por el ambiente físico (agua, temperatura, espacio).
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Conductas territoriales o gregarias según la especie.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Responden al estrés con cambios en coloración, apetito o actividad.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 No tienen contacto físico directo: la observación es clave.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/58.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Roedores domésticos
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Conductas exploratorias y de roer constantes.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Alta sensibilidad al estrés por ruido, manipulación o aislamiento.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Ciclos nocturnos o crepusculares: deben respetarse.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Comunicación mediante sonidos y posturas, a menudo imperceptibles para humanos sin experiencia.
    
    .bg-full-width.bg-color-4
      .p-4.p-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Importancia del manejo comportamental
        
        p.mb-5 Un manejo comportamental inadecuado puede provocar consecuencias graves tanto para la mascota como para sus tutores. Entre los problemas más frecuentes se encuentran:

        .row.justify-content-center
          .col-lg-2.mb-3.mb-lg-0.d-flex
            .bg-color-1.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
              h5.mb-0 Agresividad
          .col-lg-2.mb-3.mb-lg-0.d-flex
            .bg-color-1.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
              h5.mb-0 Ansiedad
          .col-lg-2.mb-3.mb-lg-0.d-flex
            .bg-color-1.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
              h5.mb-0 Autolesiones
          .col-lg-2.mb-3.mb-lg-0.d-flex
            .bg-color-1.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
              h5.mb-0 Conductas destructivas
          .col-lg-2.mb-3.mb-lg-0.d-flex
            .bg-color-1.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
              h5.mb-0 Enfermedades relacionadas con el estrés

        p.mb-5 Por el contrario, un manejo adecuado, basado en el conocimiento del comportamiento natural de cada especie, favorece:

        .row.justify-content-center
          .col-lg-8
            .bg-color-2.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/59.png', alt='')
                .col-lg
                  .p-4
                    ul.lista-ul--color
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Una mejor convivencia.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Una relación afectiva saludable.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 La prevención de enfermedades.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Una mayor seguridad para las personas.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 El bienestar emocional del animal.
        
        separador
        
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.5 Sintiencia animal
        
        p.mb-5 La sintiencia animal es la capacidad de los animales para sentir y experimentar conscientemente emociones y sensaciones, tales como dolor, miedo, placer, estrés, bienestar y apego. Este concepto, respaldado por la evidencia científica y reconocido en múltiples marcos legales, constituye el fundamento del bienestar animal moderno. El reconocimiento de la sintiencia implica que los animales no pueden ser tratados como objetos, y que el ser humano tiene responsabilidades éticas y legales en su cuidado. Por lo tanto, para los tutores responsables, la sintiencia exige:

        .row.justify-content-center
          .col-lg-10
            .bg-color-2.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/60.png', alt='')
                .col-lg
                  .p-4
                    ul.lista-ul--color
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Evitar cualquier forma de dolor, sufrimiento o maltrato innecesario.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Proporcionar atención médica oportuna y preventiva.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Garantizar una alimentación adecuada, así como refugio y confort.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Respetar las necesidades comportamentales y emocionales propias de cada especie.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Promover entornos seguros que minimicen el miedo, el estrés y la frustración.

    p.mb-5 Este enfoque transforma la relación humano-animal en una relación ética, en la cual el cuidado y la protección del animal no son opcionales, sino una obligación moral y legal. Reconocer la sintiencia significa, en esencia, reconocer la dignidad del animal como ser vivo.

    separador
    
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.6 Normatividad aplicable
    
    .bg-full-width.bg-color-4
      .p-4.p-md-5
        p.mb-5 En Colombia, la tenencia de mascotas está respaldada por un marco normativo robusto que protege el bienestar animal, fomenta la convivencia ciudadana y resguarda la salud pública. Esta normatividad abarca desde el reconocimiento de los animales como seres sintientes, hasta la regulación del manejo de especies domésticas y no convencionales. A continuación, se resumen las principales normas aplicables:

        .row.justify-content-center
          .col-lg-7
            LineaTiempoE.color-acento-contenido
              div(titulo="Ley 1774 de 2016")
                p Reconoce a los animales como seres sintientes. Penaliza el maltrato animal y establece medidas de protección.
              div(titulo="Ley 2054 de 2020")
                p Regula la identificación, control poblacional y tenencia responsable de perros y gatos.
              div(titulo="Ley 746 de 2002")
                p Establece normas para la tenencia de perros potencialmente peligrosos, incluyendo requisitos de manejo y responsabilidad.
              div(titulo="Decreto 1076 de 2015")
                p Regula la protección de la fauna silvestre y el manejo de especies no convencionales.
              div(titulo="Ley 1801 de 2016 (Código Nacional de Policía y Convivencia)")
                p Define normas para la convivencia con animales en espacios públicos y privados, promoviendo el respeto y el control ciudadano.
              div(titulo="Normas municipales y departamentales")
                p Reglamentan aspectos específicos como: vacunación, registro, esterilización, manejo en vía pública y sanciones por infracciones.

        p.mb-5 El cumplimiento de estas normas es obligatorio y constituye la base legal para:

        .row.justify-content-center
          .col-lg-10
            .bg-color-2.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/61.png', alt='')
                .col-lg
                  .p-4
                    ul.lista-ul--color
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Garantizar el bienestar y protección de los animales.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Prevenir el maltrato y abandono.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Asegurar la salud pública.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Promover una convivencia armónica entre las personas y sus mascotas



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
