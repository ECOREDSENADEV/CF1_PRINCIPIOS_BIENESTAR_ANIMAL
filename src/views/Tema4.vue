<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Libertad de hambre, sed y desnutrición
    
    .bg-full-width.bg-color-4
      .p-4.p-md-5
        p.mb-5 La libertad de hambre, sed y desnutrición garantiza que todo animal bajo cuidado humano reciba alimento y agua en cantidad suficiente, calidad adecuada y frecuencia correcta, ajustadas a sus necesidades biológicas específicas. Esta libertad constituye uno de los pilares fundamentales del bienestar animal, ya que incide directamente en:
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-3.mb-lg-0.d-flex
            .bg-color-7.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
              h5.mb-0 La salud física y metabólica.

          .col-lg-3.mb-3.mb-lg-0.d-flex
            .bg-color-7.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
              h5.mb-0 El comportamiento y equilibrio emocional.

          .col-lg-3.mb-3.mb-lg-0.d-flex
            .bg-color-7.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
              h5.mb-0 La longevidad y capacidad de adaptación del animal al entorno.


          .col-lg-3.mb-3.mb-lg-0.d-flex
            figure.d-flex.h-100.w-100
              img.h-100.w-100.object-fit-cover(
                src="@/assets/curso/tema4/1.png",
                data-aos="zoom-in"
              )

        separador
        
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.1 Consecuencias del incumplimiento
        
        p.mb-5 La falta de cumplimiento de esta libertad se considera una forma de negligencia grave, que puede ocasionar:

        .row.justify-content-center
          .col-lg-10
            .bg-color-2.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/2.png', alt='')
                .col-lg
                  .p-4
                    ul.lista-ul--color
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Desnutrición o deshidratación.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Enfermedades metabólicas.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Debilitamiento del sistema inmunológico.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Dolor, estrés y sufrimiento innecesario.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check.bg-color-3
                        p.mb-0 Alteraciones de comportamiento.

        p.mb-5 Por tanto, alimentar e hidratar correctamente a un animal no es solo una acción básica, sino una medida preventiva esencial para garantizar su bienestar integral.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto La libertad de hambre, sed y desnutrición como eje estructural del bienestar
        
    p.mb-5 Esta libertad es la base funcional del bienestar animal, pues sustenta el adecuado funcionamiento de todos los sistemas fisiológicos. Sin una nutrición e hidratación apropiadas, ninguna otra libertad puede mantenerse plenamente. Una dieta equilibrada y el acceso permanente al agua permiten:

    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/3.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Un sistema inmunológico eficiente.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Un crecimiento y desarrollo normales.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Un comportamiento emocional y social equilibrado.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Una adecuada capacidad de adaptación al entorno.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Un estado emocional estable.
    
    p.mb-5 Privar de comida o agua, ofrecer porciones insuficientes, o suministrar dietas inadecuadas vulnera directamente esta libertad, generando consecuencias físicas, conductuales y legales.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Aplicación en la tenencia de mascotas
    
    p.mb-5 En el caso de las mascotas, la correcta aplicación de esta libertad implica comprender que cada especie posee requerimientos nutricionales específicos. Por ello, deben evitarse prácticas como:

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.justify-content-center.mb-5
          .col-md-6.col-lg-2.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema4/4.svg', style="max-width: 90px" alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .bg-color-1.w-100.h-100.d-flex.align-items-center
                .p-4.text-center
                  h5.mb-0 Ofrecer restos de comida humana.
          .col-md-6.col-lg-2.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema4/5.svg', style="max-width: 90px" alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .bg-color-1.w-100.h-100.d-flex.align-items-center
                .p-4.text-center
                  h5.mb-0 Usar alimentos inadecuados para la especie.
          .col-md-6.col-lg-2.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema4/6.svg', style="max-width: 90px" alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .bg-color-1.w-100.h-100.d-flex.align-items-center
                .p-4.text-center
                  h5.mb-0 Omitir el acceso permanente al agua limpia y fresca.

        p.mb-5 Estas acciones, aunque comunes, representan riesgos graves para la salud y el bienestar animal, especialmente en especies no convencionales, más sensibles a deficiencias o desequilibrios nutricionales.
    
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Responsabilidad del tutor o cuidador
        
        p.mb-5 El tutor es el responsable directo de garantizar esta libertad, lo que implica ajustar la alimentación y la hidratación del animal según los siguientes factores:

        SlyderF(columnas="col-12 col-md-6 col-lg-4").mb-5
          .tarjeta.bg-color-8.p-4
            img.mb-5(src='@/assets/curso/tema4/7.png' alt='AvatarTop')
            h2.text-center Especie
            p.text-center Convencional o no convencional.
          .tarjeta.bg-color-8.p-4
            img.mb-5(src='@/assets/curso/tema4/8.png' alt='AvatarTop')
            h2.text-center Tamaño y peso corporal
            p.text-center Necesidades energéticas proporcionales.
          .tarjeta.bg-color-8.p-4
            img.mb-5(src='@/assets/curso/tema4/9.png' alt='AvatarTop')
            h2.text-center Edad y etapa de vida
            p.text-center Crecimiento, adultez, vejez.
          .tarjeta.bg-color-8.p-4
            img.mb-5(src='@/assets/curso/tema4/10.png' alt='AvatarTop')
            h2.text-center Nivel de actividad física
            p.text-center Más energía implica mayor requerimiento nutricional.
          .tarjeta.bg-color-8.p-4
            img.mb-5(src='@/assets/curso/tema4/11.png' alt='AvatarTop')
            h2.text-center Estado fisiológico o de salud
            p.text-center Gestación, lactancia, enfermedad o recuperación.
      
        p.mb-5 Este enfoque exige una atención individualizada y proactiva, así como el acompañamiento de profesionales veterinarios en la formulación de dietas, especialmente en animales con requerimientos específicos.

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Acceso constante a agua
    
    p.mb-5 El agua es un nutriente vital e indispensable para la vida animal. Participa en funciones fundamentales como la regulación de la temperatura corporal, la digestión, la absorción de nutrientes, el transporte de sustancias, la eliminación de desechos metabólicos y el correcto funcionamiento de todos los sistemas fisiológicos.

    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/12.png', alt='')
            .col-lg
              .p-4
                p.mb-5 Garantizar esta libertad no se limita a ofrecer agua, sino que implica asegurar que esta sea limpia, fresca, potable, disponible de forma permanente y en condiciones adecuadas de calidad y temperatura. La falta de acceso constante o el suministro de agua contaminada compromete gravemente el bienestar y la vida del animal.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Requerimientos generales de agua según tipo de mascota
    
    p.mb-5 A continuación se presentan los requerimientos generales de agua según el tipo de mascota. Esta información permite identificar las necesidades básicas de acceso y consumo, considerando las particularidades fisiológicas de cada especie.

    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Perros
                p.text-center Acceso permanente a agua potable; consumo variable según tamaño, dieta y actividad
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Gatos
                p.text-center Acceso continuo; mayor requerimiento con dietas secas
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Conejos
                p.text-center Agua fresca constante; alta dependencia por dieta rica en fibra
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Roedores
                p.text-center Agua diaria en bebederos higiénicos
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Aves
                p.text-center Agua limpia para beber y para el acicalamiento
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Peces
                p.text-center Calidad del agua como medio de vida (pH, temperatura, oxígeno)
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema4/13.png', alt='')

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Consumo diario aproximado en mascotas convencionales
    
    p.mb-5 La siguiente tabla muestra la cantidad aproximada de consumo diario de agua en perros y gatos, según la etapa de vida. Estos valores son orientativos y deben ajustarse de acuerdo con las condiciones ambientales, la dieta y el estado de salud del animal.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Consumo de agua según etapa de vida
    
    .tabla-a.color-acento-contenido.mb-5.tabl
      table
        thead
          tr
            th.bg-color-9 Mascota
            th.bg-color-9 Etapa de vida
            th.bg-color-9 Consumo diario estimado
            th.bg-color-9 Observaciones importantes
        tbody
          tr
            td Perro
            td Cachorro
            td 60–80 ml/kg/día
            td Mayor requerimiento por crecimiento y actividad
          tr.bg-color-sintesis
            td Perro
            td Adulto
            td 40–60 ml/kg/día
            td Aumenta con ejercicio, calor o lactancia
          tr
            td Perro
            td Senior
            td 40–60 ml/kg/día
            td Supervisar función renal
          tr.bg-color-sintesis
            td Gato
            td Cachorro
            td 50–60 ml/kg/día
            td Mayor riesgo de deshidratación
          tr
            td Gato
            td Adulto
            td 40–50 ml/kg/día
            td Incrementa con dieta seca
          tr.bg-color-sintesis
            td Gato
            td Senior
            td 45–60 ml/kg/día
            td Fundamental para salud renal

    

    p.mb-5 Las recomendaciones generales para mascotas convencionales:

    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/20.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Agua limpia y potable disponible en todo momento.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Uso de bebederos de acero inoxidable o cerámica.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Limpieza diaria para evitar proliferación bacteriana.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Disposición de varios puntos de agua en hogares con más de un animal.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 En gatos, fomentar el consumo mediante fuentes o recipientes distribuidos estratégicamente.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Parámetros recomendados de calidad del agua
    
    p.mb-5 Para garantizar el bienestar de las mascotas, no solo importa la disponibilidad del agua, sino también su calidad físico-química. La siguiente tabla detalla los parámetros recomendados de pH y temperatura del agua, diferenciados por especie.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Calidad del agua según tipo de mascota
        
        .tabla-a.color-acento-contenido.mb-5.tabl
          table 
            caption Nota técnica. En peces, los cambios bruscos de pH o temperatura generan estrés severo, alteraciones fisiológicas y alta mortalidad.
            thead
              tr
                th.bg-color-9 Mascota
                th.bg-color-9 pH recomendado
                th.bg-color-9 Temperatura del agua
            tbody
              tr
                td Perros y gatos
                td 6.5 – 8.5
                td 10 – 20 °C
              tr.bg-color-sintesis
                td Conejos y roedores
                td 6.0 – 8.0
                td 10 – 20 °C
              tr
                td Aves
                td 6.0 – 7.5
                td Temperatura ambiente
              tr.bg-color-sintesis
                td Peces de agua dulce
                td 6.5 – 7.5
                td 22 – 28 °C (según especie)
              tr
                td Peces de agua fría
                td 6.8 – 7.6
                td 18 – 22 °C



    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Requerimientos específicos del agua en peces
    
    p.mb-5 En los peces, el agua no es solo un recurso, sino su medio vital. Su calidad determina directamente:

    .row.justify-content-center
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 La respiración branquial.
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 La regulación osmótica.
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 La respuesta inmunológica.
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 El comportamiento natural.
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.mb-5.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 La supervivencia.
    
    p.mb-5 El manejo inadecuado del agua constituye maltrato por negligencia, incluso si se proporciona alimentación adecuada.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Parámetros esenciales de calidad del agua en peces
    
    p.mb-5 La siguiente tabla resume los requerimientos básicos del agua para peces de agua dulce y peces de agua fría, junto con su importancia para el bienestar animal.

 
    .titulo-sexto.color-acento-contenido
      h5 Tabla 3.
      span Requerimientos de agua en peces
    
    .tabla-a.color-acento-contenido.mb-5.tabl
      table
        thead
          tr
            th.bg-color-9 Parámetro
            th.bg-color-9 Peces de agua dulce
            th.bg-color-9 Peces de agua fría
            th.bg-color-9 Importancia
        tbody
          tr
            td pH
            td 6.5 – 7.5
            td 6.8 – 7.6
            td Mantiene equilibrio metabólico
          tr.bg-color-sintesis
            td Temperatura
            td 22 – 28 °C
            td 18 – 22 °C
            td Regula metabolismo y respiración
          tr
            td Oxígeno disuelto
            td ≥ 5 mg/L
            td ≥ 6 mg/L
            td Esencial para respiración branquial
          tr.bg-color-sintesis
            td Amoniaco (NH₃)
            td 0 mg/L
            td 0 mg/L
            td Altamente tóxico
          tr
            td Nitritos (NO₂)
            td < 0.5 mg/L
            td < 0.5 mg/L
            td Previene intoxicación
          tr.bg-color-sintesis
            td Nitratos (NO₃)
            td < 40 mg/L
            td < 40 mg/L
            td Controla estrés crónico
          tr
            td Filtración
            td Obligatoria
            td Obligatoria
            td Mantiene calidad del agua
          tr.bg-color-sintesis
            td Iluminación
            td 8–12 h/día
            td 8–10 h/día
            td Regula comportamiento

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Frecuencia recomendada de cambio de agua
    
    p.mb-5 El mantenimiento adecuado del acuario es esencial para conservar la salud de los peces. A continuación se presenta la frecuencia recomendada de cambios parciales de agua, según el tipo de instalación.

 
    .titulo-sexto.color-acento-contenido
      h5 Tabla 4.
      span Cambios de agua en acuarios
    
    .tabla-a.color-acento-contenido.mb-5.tabl
      table
        caption Advertencia. Los cambios totales de agua están contraindicados por provocar estrés extremo y alta mortalidad.
        thead
          tr
            th.bg-color-9 Tipo de acuario
            th.bg-color-9 Frecuencia de cambio
            th.bg-color-9 Cantidad de agua
            th.bg-color-9 Observaciones
        tbody
          tr
            td Acuario doméstico pequeño
            td 1 vez/semana
            td 20–30 %
            td Nunca cambiar el 100 %
          tr.bg-color-sintesis
            td Acuario comunitario
            td Cada 7–10 días
            td 20–25 %
            td Conservar bacterias benéficas
          tr
            td Alta carga biológica
            td Cada 5–7 días
            td 25–30 %
            td Monitorear niveles de amoníaco
          tr.bg-color-sintesis
            td Pecera sin filtro (no recomendada)
            td Cada 2–3 días
            td 30–40 %
            td Alto riesgo sanitario
          tr
            td Acuario hospital
            td Según necesidad
            td 20–50 %
            td Control estricto y supervisión
    
    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Alimentación equilibrada
    
    p.mb-5 La alimentación equilibrada es aquella que satisface los requerimientos nutricionales específicos de cada especie en cantidad, calidad, composición y frecuencia adecuadas. Una dieta incorrecta constituye una forma de negligencia, vulnera la libertad de hambre, sed y desnutrición, y afecta el bienestar físico y emocional del animal. La dieta debe ajustarse considerando:

    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/21.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Especie
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Edad
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Tamaño y peso corporal
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Nivel de actividad
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Estado fisiológico (crecimiento, gestación, lactancia, vejez)
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Estado de salud

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Mascotas convencionales
    
    p.mb-5 Los animales de compañía más comunes en los hogares, cuya convivencia con las personas implica cuidados específicos en alimentación, salud, manejo y bienestar, acordes con sus características biológicas y comportamentales.

    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Perros
    
    p.mb-5 Los perros tienen requerimientos variables según su etapa de vida, tamaño y nivel de actividad. Como omnívoros con predominio carnívoro, su dieta debe priorizar proteínas de origen animal, grasas saludables, vitaminas y minerales esenciales. La cantidad debe calcularse con base en su peso corporal y ajustarse en función del entorno, el clima y el estado de salud.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 5.
      span Requerimientos nutricionales aproximados en perros
    
    .tabla-a.color-acento-contenido.mb-5.tabl
      table
        thead
          tr
            th.bg-color-9 Etapa
            th.bg-color-9 Cantidad aproximada
            th.bg-color-9 Frecuencia
            th.bg-color-9 Observaciones
        tbody
          tr
            td Cachorros
            td 5–8 % del peso corporal/día
            td 3–4 comidas/día
            td Mayor requerimiento por crecimiento
          tr.bg-color-sintesis
            td Adultos
            td 2–3 % del peso corporal/día
            td 2 comidas/día
            td Control de peso
          tr
            td Seniors
            td 1.5–2.5 % según condición corporal
            td 2 comidas/día
            td Vigilar función renal


    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/22.png', alt='')
            .col-lg
              .p-4
                h5 Recomendaciones clave:
                ul.lista-ul--color
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Usar alimentos balanceados con registro sanitario.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Evitar cambios bruscos de dieta.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Prevenir la obesidad.

    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Gatos
    
    p.mb-5 Como carnívoros estrictos, los gatos requieren una dieta basada en proteína animal, taurina, grasas y micronutrientes específicos. No metabolizan bien carbohidratos y dependen de ciertos nutrientes que solo se encuentran en productos de origen animal.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Requerimientos nutricionales aproximados en gatos
        
        .tabla-a.color-acento-contenido.mb-5.tabl
          table
            thead
              tr
                th.bg-color-9 Peso promedio
                th.bg-color-9 Cantidad diaria
                th.bg-color-9 Frecuencia
                th.bg-color-9 Observaciones
            tbody
              tr
                td 4–5 kg
                td 40–60 g alimento seco
                td 2–3 comidas/día
                td Preferible fraccionada


    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/23.png', alt='')
            .col-lg
              .p-4
                h5 Recomendaciones clave:
                ul.lista-ul--color
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Dietas exclusivas para gatos.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Fomentar hidratación (fuentes, alimento húmedo).
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 No sustituir proteína animal por vegetal.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Mascotas no convencionales
    
    p.mb-5 La alimentación en especies no convencionales exige especial atención, ya que muchas presentan digestiones especializadas y necesidades nutricionales que no deben improvisarse. El uso de alimentos genéricos o caseros inadecuados puede causar problemas digestivos, deficiencias o enfermedades crónicas.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/24.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Conejos
              p Herbívoros estrictos con digestión por fermentación cecal. El heno de buena calidad constituye la base de la dieta (70–80 %) con acceso libre. Se complementa con vegetales frescos (10–15 %) y una cantidad limitada de concentrado específico (≤5 %) según indicación técnica. Agua fresca disponible de forma permanente.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/25.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Roedores domésticos
              p Cada especie presenta necesidades particulares. La dieta integra heno, verduras frescas y alimento balanceado formulado para la especie. La suplementación se ajusta por edad y condición corporal. Se deben evitar alimentos azucarados o no diseñados para roedores.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/26.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Aves ornamentales
              p La dieta se adapta a la especie (granívora, frugívora u omnívora). Se recomienda balancear semillas con frutas, verduras y alimentos formulados. El exceso de semillas oleaginosas incrementa el riesgo de obesidad y desequilibrios nutricionales. Agua limpia a diario.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/27.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Peces ornamentales
              p Requieren alimentos específicos según su tipo (herbívoros, omnívoros o carnívoros). La ración se suministra 1–2 veces al día, en cantidad que consuman en 1–2 minutos, para evitar sobrealimentación y deterioro de la calidad del agua.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Alimentación equilibrada – ampliación técnica
    
    p.mb-5 Esta sección amplía la información anterior incluyendo dietas alternativas, alimentación complementaria y medicada, así como la composición nutricional de concentrados comerciales según especie y etapa. Se destacan también frutas, verduras, semillas, forrajes y leguminosas seguras, esenciales para enriquecer la dieta y promover bienestar digestivo y emocional.

    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Dietas alternativas y alimentación complementaria
    
    p.mb-5 Estas dietas complementan el concentrado comercial, aportan variedad, micronutrientes y estimulación mental. Su uso debe ser controlado y adaptado a cada especie.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 7.
      span Frutas y verduras seguras
    
    .tabla-a.color-acento-contenido.mb-5.tabl
      table
        thead
          tr
            th.bg-color-9 Mascota
            th.bg-color-9 Etapa de vida
            th.bg-color-9 Consumo diario estimado
            th.bg-color-9 Observaciones importantes
        tbody
          tr
            td Perro
            td Cachorro
            td 60–80 ml/kg/día
            td Mayor requerimiento por crecimiento y actividad
          tr.bg-color-sintesis
            td Perro
            td Adulto
            td 40–60 ml/kg/día
            td Aumenta con ejercicio, calor o lactancia
          tr
            td Perro
            td Senior
            td 40–60 ml/kg/día
            td Supervisar función renal
          tr.bg-color-sintesis
            td Gato
            td Cachorro
            td 50–60 ml/kg/día
            td Mayor riesgo de deshidratación
          tr
            td Gato
            td Adulto
            td 40–50 ml/kg/día
            td Incrementa con dieta seca
          tr.bg-color-sintesis
            td Gato
            td Senior
            td 45–60 ml/kg/día
            td Fundamental para salud renal

    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Semillas complementarias (uso limitado)
    
    p.mb-5 Se deben ofrecer solo como parte de la dieta, nunca como base, especialmente en aves y roedores.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Semillas seguras por especie
        
        .tabla-a.color-acento-contenido.mb-5.tabl
          table
            thead
              tr
                th.bg-color-9 Especie
                th.bg-color-9 Semillas seguras
                th.bg-color-9 Proporción máxima
            tbody
              tr
                td Perros
                td Linaza, chía molida
                td 2–3 %
              tr.bg-color-sintesis
                td Gatos
                td Linaza molida
                td ≤1 %
              tr
                td Aves
                td Mijo, girasol, alpiste
                td 10–20 %
              tr.bg-color-sintesis
                td Roedores
                td Girasol, cebada, avena
                td 5–10 %

    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Forrajes y leguminosas
    
    p.mb-5 Las leguminosas y forrajes aportan fibra y proteína vegetal, pero su uso debe ser controlado, especialmente en conejos y cobayos para evitar problemas urinarios o digestivos.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 9.
      span  Forrajes y leguminosas recomendadas
    
    .tabla-a.color-acento-contenido.mb-5.tabl
      table
        thead
          tr
            th.bg-color-9 Especie
            th.bg-color-9 Forrajes
            th.bg-color-9 Leguminosas
            th.bg-color-9 Proporción segura
        tbody
          tr
            td Conejos
            td Heno de timothy, rye grass
            td Alfalfa, morera
            td Heno 70–80 %, leguminosas ≤10 %
          tr.bg-color-sintesis
            td Cobayos
            td Heno de gramíneas
            td Alfalfa, trébol
            td Heno 70 %, leguminosas 10–15 %
          tr
            td Aves
            td Pastos tiernos
            td Fríjol mungo germinado
            td ≤10 %

    p.mb-5 Leguminosas específicas: uso y beneficios

    .row.justify-content-center
      .col-lg-3.mb-3.mb-lg-0.d-flex
        .bg-color-7.mb-5.p-4.text-center.align-items-center.justify-content-center.w-100
          h5 Morera (Morus alba)
          p.mb-0 Conejos 5–8 %, Cobayos hasta 10 %
      .col-lg-3.mb-3.mb-lg-0.d-flex
        .bg-color-7.mb-5.p-4.text-center.align-items-center.justify-content-center.w-100
          h5 Alfalfa (Medicago sativa)
          p.mb-0 Útil en gestantes/lactantes, evitar exceso en adultos
      .col-lg-3.mb-3.mb-lg-0.d-flex
        .bg-color-7.mb-5.p-4.text-center.align-items-center.justify-content-center.w-100
          h5 Trébol (Trifolium spp.)
          p.mb-0 Introducción gradual, hasta 5–8 %
      .col-lg-3.mb-3.mb-lg-0.d-flex
        .bg-color-7.mb-5.p-4.text-center.align-items-center.justify-content-center.w-100
          h5 Vainas verdes (arveja/fríjol tierno)
          p.mb-0 Vainas verdes (arveja/fríjol tierno)
    
    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Alimentación medicada (uso controlado)
    
    p.mb-5 Indicada solo bajo fórmula veterinaria para tratamientos específicos.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10.
          span Ejemplos de dietas medicadas
        
        .tabla-a.color-acento-contenido.mb-5.tabl
          table
            thead
              tr
                th.bg-color-9 Especie
                th.bg-color-9 Indicación
                th.bg-color-9 Tipo de dieta
            tbody
              tr
                td Perros
                td Obesidad
                td Hipocalórica alta en fibra
              tr.bg-color-sintesis
                td Gatos
                td Tracto urinario
                td Acidificante
              tr
                td Conejos
                td Trastornos digestivos
                td Alta fibra, sin concentrado
              tr.bg-color-sintesis
                td Peces
                td Parasitismo
                td Alimento medicado específico


    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Uso de concentrados comerciales
    
    p.mb-5 Deben ser específicos para la especie y etapa de vida. Usar productos con registro sanitario.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 11.
      span Composición nutricional referencial de concentrados
    
    .tabla-a.color-acento-contenido.mb-5.tabl
      table
        thead
          tr
            th.bg-color-9 Especie
            th.bg-color-9 Etapa
            th.bg-color-9 Proteína %
            th.bg-color-9 Grasa %
            th.bg-color-9 Fibra %
        tbody
          tr
            td Perro
            td Cachorro
            td 26–30
            td 14–18
            td 3–5
          tr.bg-color-sintesis
            td Perro
            td Adulto
            td 20–24
            td 10–14
            td 3–5
          tr
            td Gato
            td Cachorro
            td 32–38
            td 18–22
            td 2–4
          tr.bg-color-sintesis
            td Gato
            td Adulto
            td 28–34
            td 15–20
            td 2–4
          tr
            td Conejo
            td Adulto
            td 14–16
            td 2–4
            td ≥18
          tr.bg-color-sintesis
            td Aves
            td Adultas
            td 16–20
            td 3–6
            td 4–6

    p.mb-5 Las diferencias nutricionales por etapa de vida son: 

    .bg-full-width.bg-color-4
      .p-4.p-md-5
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/28.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Cachorros/juveniles
                p.mb-0 Mayor demanda de proteína, energía, calcio y fósforo.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/29.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Adultos
                p.mb-0 Dieta de mantenimiento y balance energético.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/30.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Seniors
                p.mb-0 Mayor contenido de fibra, control calórico, suplementos articulares.
        p.mb-5 En especies no convencionales, evitar excesos de concentrado en herbívoros adultos.

        separador
        
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.4 Alimentos prohibidos por mascota

        p.mb-5 El suministro de alimentos prohibidos constituye una forma grave de maltrato por negligencia. Exponer a una mascota a sustancias tóxicas, irritantes o inadecuadas puede causar desde trastornos digestivos y daños orgánicos irreversibles hasta la muerte. Esta sección identifica los alimentos más peligrosos para cada tipo de mascota, con el fin de prevenir intoxicaciones y proteger su salud.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Mascotas convencionales
        
        p.mb-5 Las mascotas convencionales como perros y gatos presentan sensibilidades metabólicas específicas que hacen que muchos alimentos comunes en la dieta humana resulten tóxicos o perjudiciales para su salud.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.bg-color-1.p-5
        figure.mb-5
          img(src='@/assets/curso/tema4/31.png', alt='Texto descriptivo 1')
        h2 Perros
        p Chocolate y cacao; uvas y pasas; cebolla, ajo, puerro y cebollín; aguacate; alcohol; café, té y bebidas energizantes; xilitol (edulcorante artificial presente en chicles y productos light); huesos cocidos (riesgo de obstrucción y perforación intestinal); sal y alimentos muy salados; alimentos fritos o con exceso de grasa; medicamentos de uso humano; comida en descomposición.
    
      .col-md.tarjeta.color-primario.bg-color-7.p-5
        figure.mb-5
          img(src='@/assets/curso/tema4/32.png', alt='Texto descriptivo 2')
        h2.text-center Gatos
        p Chocolate; cebolla y ajo; alcohol; cafeína; leche y lácteos (por intolerancia a la lactosa); pescado crudo (puede causar deficiencia de tiamina); hígado en exceso (riesgo de hipervitaminosis A); comida para perros (desequilibrio nutricional); uvas y pasas; medicamentos de uso humano.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Mascotas no convencionales
    
    p.mb-5 Las mascotas no convencionales presentan sistemas digestivos delicados o altamente especializados, por lo que ciertos alimentos comunes pueden resultar tóxicos, irritantes o letales.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/33.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Perros
              p Chocolate y cacao; uvas y pasas; cebolla, ajo, puerro y cebollín; aguacate; alcohol; café, té y bebidas energizantes; xilitol (edulcorante artificial); huesos cocidos (riesgo de obstrucción y perforación intestinal); sal y alimentos muy salados; fritos o con exceso de grasa; medicamentos humanos; alimentos en descomposición.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/34.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Gatos
              p Chocolate; cebolla y ajo; alcohol; cafeína; leche y lácteos (intolerancia a la lactosa); pescado crudo (deficiencia de tiamina); hígado en exceso (hipervitaminosis A); comida para perros (desequilibrio nutricional); uvas y pasas; medicamentos humanos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/35.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Conejos
              p Pan, azúcar y dulces; cereales, galletas y snacks; papas, arroz y otros alimentos cocidos; hojas de papa o tomate (tóxicas); cebolla y ajo; lechuga iceberg (bajo valor nutricional, puede causar diarrea); alimentos procesados.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/36.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Roedores domésticos (hámster, cobayo, ratón)
              p Azúcar y productos azucarados; chocolate; cítricos (en algunas especies); alimentos salados y grasos; semillas tóxicas como manzana o durazno; comida humana procesada.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/36.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Aves ornamentales
              p Aguacate (contiene persina, altamente tóxica); chocolate; cafeína; alcohol; sal; semillas de manzana; cebolla y ajo; alimentos fritos, mohosos o vencidos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/36.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Peces ornamentales
              p Pan, arroz u otros alimentos humanos; carne cruda; exceso de alimento; insectos contaminados; alimentos vencidos o en mal estado, por el impacto negativo en la calidad del agua.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Relación con la normatividad colombiana de bienestar animal
    
    p.mb-5 La legislación colombiana considera el suministro de alimentos inadecuados como una forma de maltrato por negligencia. Los tutores deben conocer y cumplir con los principios legales de bienestar animal.

    .row.justify-content-center
      .col-lg-8
        LineaTiempoE.color-acento-contenido
          div(titulo="Ley 1774 de 2016")
            p Reconoce a los animales como seres sintientes y sanciona el maltrato, incluyendo el descuido alimentario.
          div(titulo="Ley 2054 de 2020")
            p Obliga al tutor a garantizar alimentación, hidratación y bienestar integral..
          div(titulo="Ley 1801 de 2016 (Código Nacional de Policía)")
            p Establece que el maltrato o negligencia en la alimentación es una infracción sancionable.
          div(titulo="Normas del ICA y guías de bienestar animal")
            p Prohíben el uso de alimentos vencidos, contaminados o perjudiciales para la salud animal.
    
    p.mb-5 Una nutrición adecuada es la base del bienestar animal. Garantizar una dieta balanceada, libre de alimentos prohibidos y ajustada a las necesidades fisiológicas de cada especie es una responsabilidad ética, técnica y legal del tutor. El desconocimiento de estas prohibiciones no exime de responsabilidad. Alimentar incorrectamente a una mascota, aunque sea de forma no intencional, constituye maltrato por negligencia









</template>

<script>
export default {
  name: 'Tema4',
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
