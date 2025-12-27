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
    
    p.mb-5 Un plan de vacunación bien diseñado contribuye a los siguientes beneficios:

    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-down")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema6/3.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Reduce la mortalidad, especialmente en animales jóvenes, geriátricos o inmunocomprometidos
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Disminuye la diseminación de enfermedades infecciosas, favoreciendo la inmunidad individual y colectiva
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Previene riesgos zoonóticos y protege a otras poblaciones animales y humanas
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Evita tratamientos costosos, hospitalizaciones y pérdidas irreversibles
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Mejora la calidad y expectativa de vida del animal
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Fortalece el bienestar animal al evitar sufrimiento innecesario

    p.mb-5 La aplicación de vacunas debe realizarse exclusivamente por un médico veterinario, quien evaluará previamente las condiciones físicas, inmunológicas y ambientales del animal. Vacunar animales enfermos, debilitados o sin un esquema adecuado puede generar fallas en la respuesta inmune o reacciones adversas.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Vacunación en mascotas convencionales

    p.mb-5 La vacunación en perros y gatos es clave para la prevención de enfermedades infecciosas de alto impacto sanitario, muchas de ellas con riesgo zoonótico o potencialmente mortales. Los esquemas deben adaptarse a la edad, el entorno y el historial clínico de cada animal. 

    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Perros 
    
    p.mb-5 En los perros, el esquema de vacunación inicia entre las seis y ocho semanas de edad, cuando disminuye la inmunidad maternal, y continúa con refuerzos periódicos para mantener la protección a lo largo de la vida.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 12.
      span Plan de vacunación en caninos
    
    .tabla-a.color-acento-contenido.mb-5.tabl
      table
        thead
          tr
            th.bg-color-9 Enfermedad
            th.bg-color-9 Vacuna
            th.bg-color-9 Vía de aplicación
            th.bg-color-9 Edad / Frecuencia
        tbody
          tr
            td Moquillo canino
            td Polivalente
            td Subcutánea
            td Desde las 6–8 semanas
          tr.bg-color-sintesis
            td Parvovirus canino
            td Polivalente
            td Subcutánea
            td Refuerzos cada 3–4 semanas hasta las 16 semanas
          tr
            td Hepatitis infecciosa
            td Polivalente
            td Subcutánea
            td Refuerzo anual
          tr.bg-color-sintesis
            td Leptospirosis
            td Polivalente
            td Subcutánea
            td Refuerzo anual
          tr
            td Rabia
            td Antirrábica
            td Subcutánea
            td Anual (vacuna obligatoria por ley)
    
    p.mb-5 La vacuna antirrábica es de carácter obligatorio debido a que la rabia es una enfermedad zoonótica, mortal y de notificación obligatoria. Su control constituye una prioridad de salud pública.

    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Gatos 
    
    p.mb-5 En los gatos, la vacunación previene enfermedades virales respiratorias y sistémicas que pueden causar cuadros crónicos o estados de portador. Incluso los gatos que viven en interiores deben ser vacunados debido al riesgo de exposición indirecta.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 13.
          span Plan de vacunación en felinos
        
        .tabla-a.color-acento-contenido.mb-5.tabl
          table
            thead
              tr
                th.bg-color-9 Enfermedad
                th.bg-color-9 Vacuna
                th.bg-color-9 Vía de aplicación
                th.bg-color-9 Frecuencia
            tbody
              tr
                td Panleucopenia felina
                td Triple felina
                td Subcutánea
                td Anual
              tr.bg-color-sintesis
                td Rinotraqueítis viral felina
                td Triple felina
                td Subcutánea
                td Anual
              tr
                td Calicivirus felino
                td Triple felina
                td Subcutánea
                td Anual
              tr.bg-color-sintesis
                td Rabia
                td Antirrábica
                td Subcutánea
                td Anual
    
    p.mb-5 La triple felina es la base del esquema vacunal en gatos. Es indispensable para prevenir enfermedades altamente contagiosas que pueden ser mortales si no se tratan oportunamente.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Vacunación en mascotas no convencionales
    
    p.mb-5 En el caso de mascotas no convencionales, la vacunación no se realiza de forma rutinaria en todas las especies debido a factores como disponibilidad de biológicos, respuesta inmunológica variable, condiciones de manejo y riesgo epidemiológico. La decisión de vacunar debe tomarse bajo criterio veterinario, considerando variables específicas.

    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Conejos 
    
    p.mb-5 Los conejos son susceptibles a enfermedades virales de rápida evolución y alta letalidad. La vacunación representa una estrategia preventiva esencial.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 14.
          span Vacunación en conejos
        
        .tabla-a.color-acento-contenido.mb-5.tabl
          table
            thead
              tr
                th.bg-color-9 Enfermedad
                th.bg-color-9 Vacuna
                th.bg-color-9 Vía de aplicación
                th.bg-color-9 Frecuencia
            tbody
              tr
                td Mixomatosis
                td Vacuna específica
                td Subcutánea
                td Anual
              tr.bg-color-sintesis
                td Enfermedad hemorrágica viral
                td Vacuna específica
                td Subcutánea
                td Anual

    

    p.mb-5 Estas enfermedades presentan alta mortalidad y no cuentan con tratamientos curativos eficaces, por lo que la vacunación es la principal herramienta de protección.

    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Aves ornamentales  
    
    p.mb-5 En aves, la vacunación se aplica solo bajo ciertas condiciones epidemiológicas o en criaderos autorizados.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 15.
          span Vacunación en aves ornamentales (según riesgo)
        
        .tabla-a.color-acento-contenido.mb-5.tabl
          table
            thead
              tr
                th.bg-color-9 Enfermedad
                th.bg-color-9 Observación
            tbody
              tr
                td Newcastle
                td Se vacuna únicamente en criaderos, colecciones o situaciones de riesgo
              tr.bg-color-sintesis
                td Viruela aviar
                td La vacunación debe aplicarse bajo criterio veterinario especializado
    
    p.mb-5 En especies como reptiles y roedores, muchas vacunas no están disponibles comercialmente o no son necesarias cuando los animales viven en condiciones controladas y de forma individual.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Consideraciones finales sobre vacunación
    
    p.mb-5 Todo esquema vacunal debe quedar documentado en el carné sanitario del animal, y los refuerzos periódicos son indispensables para mantener la inmunidad. Las vacunas no reemplazan otras prácticas sanitarias como la desparasitación, la higiene o el manejo responsable. Vacunar es una obligación ética y legal del cuidador del animal, y su cumplimiento impacta positivamente en el bienestar animal, la salud pública y la convivencia segura entre animales y personas.

    separador
    
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Desparasitación
    
    p.mb-5 La desparasitación es una medida sanitaria esencial para el control de parásitos internos (endoparásitos) y externos (ectoparásitos) que afectan directa o indirectamente la salud de los animales de compañía. Estos parásitos pueden generar desde cuadros subclínicos hasta enfermedades graves, comprometiendo el bienestar animal y representando riesgos para la salud humana.Los principales efectos de los parásitos incluyen:

    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-down")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema6/4.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Alteración en la absorción de nutrientes, lo que provoca pérdida de peso, retraso en el crecimiento y debilidad
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Afectación del sistema inmunológico, predisponiendo a infecciones secundarias
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Disminución del bienestar general, generando prurito, dolor, anemia, estrés y cambios de comportamiento
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Riesgos para la salud pública, especialmente con parásitos zoonóticos como Toxocara spp., Ancylostoma spp. o Dipylidium caninum
    
    p.mb-5 La desparasitación debe ser periódica, preventiva y supervisada por un médico veterinario, quien determinará el producto, la dosis y la frecuencia adecuados según especie, edad, peso, estado fisiológico y condiciones de vida del animal. Los tipos de parásitos son: 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.bg-color-1.p-5
        figure.mb-5
          img(src='@/assets/curso/tema6/5.png', alt='Texto descriptivo 1')
        h2 Endoparásitos
        p Nematodos, cestodos y protozoarios que se alojan en el tracto digestivo, pulmones o tejidos. Provocan diarrea, vómitos, anemia, obstrucciones intestinales y debilidad general.
      .col-md.tarjeta.color-primario.bg-color-7.p-5
        figure.mb-5
          img(src='@/assets/curso/tema6/6.png', alt='Texto descriptivo 2')
        h2 Ectoparásitos
        p Pulgas, garrapatas, ácaros y piojos que causan dermatitis, anemia, transmisión de enfermedades infecciosas y reacciones alérgicas severas.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Desparasitación en mascotas convencionales

    p.mb-5 La desparasitación en perros y gatos es clave desde etapas tempranas de vida, ya que están expuestos a múltiples vías de infestación, incluyendo transmisión vertical y contacto ambiental.

    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Caninos  
    
    p.mb-5 En los perros, los programas de desparasitación deben iniciarse durante las primeras semanas de vida y mantenerse durante toda la vida del animal, ajustándose según el entorno y el estilo de vida.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 16.
          span Desparasitación de caninos 
        
        .tabla-a.color-acento-contenido.mb-5.tabl
          table
            caption *Advertencia sanitaria: La ivermectina está contraindicada en razas como Collie, Pastor Australiano y Shetland, debido al riesgo de neurotoxicidad.
            thead
              tr
                th.bg-color-9 Producto
                th.bg-color-9 Tipo de acción
                th.bg-color-9 Vía de administración
                th.bg-color-9 Frecuencia recomendada
            tbody
              tr
                td Albendazol
                td Endoparásitos
                td Oral
                td Cada 3 meses
              tr.bg-color-sintesis
                td Praziquantel
                td Endoparásitos
                td Oral
                td Cada 3 a 6 meses
              tr
                td Ivermectina*
                td Endo / ectoparásitos
                td Oral o inyectable
                td Según peso y raza
              tr.bg-color-sintesis
                td Fipronil
                td Ectoparásitos
                td Tópico
                td Mensual
              tr
                td Fluralaner
                td Ectoparásitos
                td Oral
                td Cada 12 semanas

    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Felinos  
    
    p.mb-5 En los gatos, el esquema debe considerar su sensibilidad a diversos compuestos y su metabolismo particular. Incluso los gatos que viven en interiores deben ser desparasitados regularmente.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 17.
          span Desparasitación de felinos  
        
        .tabla-a.color-acento-contenido.mb-5.tabl
          table
            thead
              tr
                th.bg-color-9 Producto
                th.bg-color-9 Tipo de acción
                th.bg-color-9 Vía de administración
                th.bg-color-9 Frecuencia recomendada
            tbody
              tr
                td Fenbendazol
                td Endoparásitos
                td Oral
                td Cada 3 meses
              tr.bg-color-sintesis
                td Selamectina
                td Endo / ectoparásitos
                td Tópico
                td Mensual
              tr
                td Fipronil
                td Ectoparásitos
                td Tópico
                td Mensual

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Desparasitación en mascotas no convencionales
    
    p.mb-5 La desparasitación en mascotas no convencionales requiere conocimientos especializados, ya que presentan alta sensibilidad a ciertos fármacos y diferencias metabólicas que exigen protocolos específicos.

    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Conejos   
    
    p.mb-5 Los conejos pueden verse afectados por parásitos internos y externos. La automedicación está contraindicada debido a la posibilidad de reacciones graves, como la enterotoxemia.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 18.
          span Desparasitación de conejos   
        
        .tabla-a.color-acento-contenido.mb-5.tabl
          table
            thead
              tr
                th.bg-color-9 Producto
                th.bg-color-9 Tipo de acción
                th.bg-color-9 Vía de administración
                th.bg-color-9 Frecuencia recomendada
            tbody
              tr
                td Fenbendazol
                td Endoparásitos
                td Oral
                td Cada 6 meses
              tr.bg-color-sintesis
                td Ivermectina
                td Ectoparásitos
                td Subcutánea
                td Solo bajo control veterinario

    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Aves   
    
    p.mb-5 La desparasitación en aves debe realizarse únicamente tras diagnóstico, ya que el uso innecesario de antiparasitarios puede generar toxicidad.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 19.
          span Desparasitación de aves    
        
        .tabla-a.color-acento-contenido.mb-5.tabl
          table
            thead
              tr
                th.bg-color-9 Producto
                th.bg-color-9 Tipo de acción
                th.bg-color-9 Vía de administración
                th.bg-color-9 Frecuencia recomendada
            tbody
              tr
                td Ivermectina
                td Endo / ectoparásitos
                td Tópico
                td Según diagnóstico
              tr.bg-color-sintesis
                td Levamisol
                td Endoparásitos
                td Oral
                td Bajo criterio veterinario

    separador
    
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Tratamientos oportunos
    
    p.mb-5 Todo animal que presente signos clínicos de dolor, enfermedad o alteraciones en su comportamiento debe recibir atención veterinaria inmediata. Los signos de alerta incluyen:

    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-down")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema6/7.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Dolor manifiesto, vocalizaciones o posturas anómalas.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Fiebre o descenso de temperatura corporal.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Cojeras o dificultad para moverse.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Presencia de heridas, inflamaciones o sangrados.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Pérdida del apetito o consumo excesivo de agua.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Cambios de comportamiento, aislamiento o agresividad.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Vómitos o diarreas persistentes..
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Letargo, debilidad o decaimiento general.

    p.mb-5 Los tratamientos deben cumplir con los siguientes criterios:

    .row.justify-content-center.mb-5
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Ser prescritos por un médico veterinario
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Estar ajustados a la especie, edad, peso y condición clínica
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Administrarse de forma correcta en dosis, vía y duración

    p.mb-5 La automedicación está estrictamente prohibida, especialmente en animales no convencionales, debido al alto riesgo de toxicidad por su metabolismo particular.

    separador
    
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Prevención de accidentes y lesiones
    
    p.mb-5 La prevención de accidentes es una estrategia clave para evitar lesiones, sufrimiento y dolor en los animales de compañía. Estas medidas son especialmente importantes en especies que tienden a ocultar el dolor, como mecanismo de defensa. Las medidas generales de prevención:

    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-down")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema6/8.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Mantener espacios seguros, higiénicos y libres de objetos cortopunzantes
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Supervisar a los animales durante paseos y manipulaciones.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Utilizar jaulas, terrarios o acuarios adecuados a cada especie.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Protegerlos de caídas, golpes térmicos o descargas eléctricas.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Emplear arneses, bozales o transportadoras cuando sea necesario.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Implementar enriquecimiento ambiental para reducir el estrés, la agresividad y las conductas autolesivas.
    
    p.mb-5 En animales no convencionales, la detección del dolor suele ser tardía, por lo que la prevención adquiere un papel aún más relevante en la protección de su bienestar.

    separador
    
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.5 Medicamentos prohibidos en mascotas convencionales y no convencionales
    
    p.mb-5 El uso inadecuado de medicamentos es una de las principales causas de intoxicación, daño orgánico severo y muerte en animales de compañía. Esto ocurre principalmente por prácticas de automedicación, uso de fármacos destinados a humanos o por la administración sin considerar la especie, el peso, el metabolismo o el estado fisiológico del animal.

    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-down")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema6/9.png', alt='')
            .col-lg
              .p-4
                p.mb-0 Cada especie animal posee particularidades metabólicas que hacen que un medicamento seguro para humanos, o incluso para otras especies animales, pueda ser altamente tóxico o letal. Por ello, el uso racional de medicamentos constituye un pilar fundamental del bienestar animal y de la tenencia responsable.
    
    p.mb-5 Los principales riesgos del uso indebido de medicamentos son: 

    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-down")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema6/10.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Toxicidad hepática y renal.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Alteraciones neurológicas graves.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Trastornos hematológicos (como anemia o metahemoglobinemia).
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Ulceraciones gastrointestinales y hemorragias internas.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Fallo multiorgánico.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Muerte súbita o progresiva.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Medicamentos prohibidos o de uso restringido en caninos
    
    p.mb-5 Aunque los perros presentan mayor tolerancia metabólica que otras especies, no deben recibir medicamentos de uso humano sin control veterinario. En particular, los antiinflamatorios no esteroideos (AINEs) representan un riesgo elevado.

    .bg-full-width-2.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema6/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Diclofenaco
                p.text-center Daño renal agudo, ulceración gástrica, hemorragias internas
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema6/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ibuprofeno
                p.text-center Ulcerogénico y nefrotóxico, incluso en dosis bajas
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema6/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Naproxeno
                p.text-center Vida media prolongada en caninos, favorece toxicidad acumulativa
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema6/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Aspirina sin control veterinario
                p.text-center Alteraciones de coagulación, sangrado digestivo, daño renal
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema6/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Paracetamol (acetaminofén)
                p.text-center Hepatotoxicidad; solo bajo prescripción estricta, en dosis controladas y por tiempos limitados
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema6/11.png', alt='')
    
    p.mb-5 Los caninos cuentan con alternativas veterinarias seguras para el manejo del dolor, por lo que nunca se deben usar medicamentos humanos como sustitutos.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Medicamentos prohibidos en felinos
    
    p.mb-5 Los gatos tienen una capacidad metabólica muy limitada, especialmente a nivel hepático. Esto los hace extremadamente vulnerables a múltiples medicamentos de uso humano.

    .titulo-con-imagen-2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo-2
        img.titulo-con-imagen__imagen-2(src="@/assets/componentes/2.svg")
        h3.titulo-con-imagen__texto-2 Paracetamol (acetaminofén): sustancia extremadamente tóxica   
    
    p.mb-5 El acetaminofén es uno de los compuestos más letales para los gatos, incluso en cantidades mínimas. Esto se debe a que los felinos carecen de la enzima glucuronil transferasa, indispensable para su metabolismo y eliminación.

    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-down")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema6/17.png', alt='')
            .col-lg
              .p-4
                p Las consecuencias del uso de paracetamol en gatos son:
                ul.lista-ul--color
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Acumulación de metabolitos tóxicos.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Daño hepático severo.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Formación de metahemoglobina, que impide el transporte de oxígeno.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 20.
          span Dosis tóxica en felinos   
        
        .tabla-a.color-acento-contenido.mb-5.tabl
          table
            thead
              tr
                th.bg-color-9 Cantidad ingerida
                th.bg-color-9 Efecto potencial
            tbody
              tr
                td 50–60 mg/kg
                td Dosis potencialmente letal
              tr.bg-color-sintesis
                td 1 tableta infantil
                td Puede ser mortal
    

    p.mb-5 Los signos clínicos de intoxicación son:

    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-down")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema6/18.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Edema facial y de extremidades
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Dificultad respiratoria.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Salivación excesiva
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Vómitos
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Ictericia (mucosas amarillas)
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Hipotermia, depresión
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Necrosis hepática
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Muerte en 24 a 72 horas si no se trata de inmediato
    
    p.mb-5 Otros medicamentos prohibidos en felinos son:

    .row.justify-content-center.mb-5
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Diclofenaco
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Ibuprofeno
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Ketoprofeno
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.p-4.text-center.d-flex.align-items-center.justify-content-center.w-100
          h5.mb-0 Aspirina sin fórmula veterinaria

    p.mb-5  El acetaminofén nunca debe ser administrado a gatos, bajo ninguna circunstancia. El manejo del dolor en felinos debe ser realizado exclusivamente con medicamentos veterinarios específicos y ajustados a su metabolismo.


    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Medicamentos prohibidos en conejos

    p.mb-5 Los conejos poseen un sistema digestivo altamente sensible, basado en la fermentación cecal. El uso de ciertos antibióticos orales puede alterar gravemente su microbiota intestinal y provocar disbiosis severa o enterotoxemia.

    .row.justify-content-center.mb-5
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.p-4.text-center.align-items-center.justify-content-center.w-100
          h5 Penicilinas orales
          p.mb-0 Disbiosis, diarrea aguda, enterotoxemia, muerte
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.p-4.text-center.align-items-center.justify-content-center.w-100
          h5 Amoxicilina
          p.mb-0 Alteración de microbiota, riesgo digestivo elevado
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.p-4.text-center.align-items-center.justify-content-center.w-100
          h5 Clindamicina
          p.mb-0 Tóxica por vía oral
      .col-lg-2.mb-3.mb-lg-0.d-flex
        .bg-color-1.p-4.text-center.align-items-center.justify-content-center.w-100
          h5 Lincomicina
          p.mb-0 Altamente disruptiva a nivel intestinal

    p.mb-5 La administración de estos antibióticos debe evitarse completamente, salvo bajo prescripción veterinaria en contextos muy específicos.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Medicamentos prohibidos en aves
    
    p.mb-5 Las aves ornamentales tienen un metabolismo acelerado y son altamente sensibles a sustancias tóxicas. Además, pueden absorber compuestos por vía respiratoria, digestiva o cutánea con gran rapidez.

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/19.svg', style="max-width: 90px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          div.w-100
            .bg-color-6.w-100.d-flex.align-items-center.justify-content-center
              .p-3.text-center
                h5.mb-0 Medicamentos humanos sin receta
            .bg-color-1.w-100.d-flex.align-items-center.justify-content-center
              .p-3.text-center
                p.mb-0 Alta toxicidad y riesgo de muerte rápida
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/19.svg', style="max-width: 90px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          div.w-100
            .bg-color-6.w-100.d-flex.align-items-center.justify-content-center
              .p-3.text-center
                h5.mb-0 Ivermectina sin dosificación precisa
            .bg-color-1.w-100.d-flex.align-items-center.justify-content-center
              .px-3.py-4.p-lg-3.text-center
                p.mb-0 Riesgo de neurotoxicidad severa
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/19.svg', style="max-width: 90px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          div.w-100
            .bg-color-6.w-100.d-flex.align-items-center.justify-content-center
              .p-3.text-center
                h5.mb-0 Metales pesados (zinc, plomo)
            .bg-color-1.w-100.d-flex.align-items-center.justify-content-center
              .p-3.text-center
                p.mb-0 Intoxicación crónica por objetos o jaulas contaminadas

    p.mb-5 La intoxicación por metales pesados es una causa frecuente de enfermedad y muerte en aves que viven en contacto con jaulas oxidadas, alambres o elementos decorativos no seguros.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Medicamentos prohibidos en reptiles y roedores
    
    p.mb-5 Estas especies presentan metabolismos lentos y variables, lo que incrementa significativamente el riesgo de sobredosis y acumulación tóxica.

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/19.svg', style="max-width: 90px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          div.w-100
            .bg-color-6.w-100.d-flex.align-items-center.justify-content-center
              .p-4.text-center
                h5.mb-0 Paracetamol
            .bg-color-1.w-100.d-flex.align-items-center.justify-content-center
              .p-3.text-center
                p.mb-0 Altamente tóxico, incluso en dosis bajas
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/19.svg', style="max-width: 90px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          div.w-100
            .bg-color-6.w-100.d-flex.align-items-center.justify-content-center
              .p-3.text-center
                h5.mb-0 Antiinflamatorios humanos
            .bg-color-1.w-100.d-flex.align-items-center.justify-content-center
              .p-3.text-center
                p.mb-0 Potencialmente mortales por acumulación
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/19.svg', style="max-width: 90px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          div.w-100
            .bg-color-6.w-100.d-flex.align-items-center.justify-content-center
              .p-3.text-center
                h5.mb-0 Antibióticos no ajustados
            .bg-color-1.w-100.d-flex.align-items-center.justify-content-center
              .px-4.py-3.text-center
                p.mb-0 Peligro de toxicidad hepática y renal
    
    p.mb-5 La administración de medicamentos en reptiles y roedores debe estar basada en protocolos específicos, considerando factores como temperatura ambiental, tasa metabólica y peso corporal exacto.




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
