const timeEvents = [
    {
      id: 1,
      date: "20 de Enero de 2023",
      event: "Convocatoria a Elecciones Generales",
      observations: "El Tribunal Supremo Electoral publicó el Decreto 1-2023 en el que convoca a elecciones generales.",
      annexes: "DECRETO 1-2023 TSE",
      left: true,
      icon: "/images/3.jpeg",
      link: "https://drive.google.com/file/d/14rGq9vmA8iQgui_Amcr6cLTRb8_5zLcf/view?usp=drive_link"
    },
    {
      id: 2,
      date: "21 Enero 2023 al 26 de Marzo de 2023",
      event: "Fase de Inscripción de Candidatos",
      observations: "Los partidos políticos inscriben a sus candidatos a los cargos de presidente, vicepresidente, corporación municipal, diputados nacionales, distritales y al Parlamento Centroamericano.",
      annexes: "",
      left: true,
      icon: "/images/3.jpeg"
    },
    {
        id: 3,
        date: "13 de Marzo de 2023",
        event: "Denuncia presentada por Pedro Cruz",
        observations: "Pedro Cruz presentó denuncia por la inscripción de Manuel Baldizón como candidato a diputado por el partido CAMBIO.",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
      id: 4,
      date: "27 Marzo 2023 al 23 de Junio 2023",
      event: "Propaganda Electoral",
      observations: "Los partidos políticos llevan a cabo la propaganda electoral de los candidatos inscritos.",
      annexes: "",
      left: true,
      icon: "/images/3.jpeg"
    },
    {
      id: 5,
      date: "25 de Junio de 2023",
      event: "Elecciones Generales",
      observations: "El 25 de junio se llevaron a cabo las elecciones generales, en las que se designaron a los nuevos funcionarios que fingirán como corporación municipal, diputados nacionales, distritales y al Parlamento Centroamericano. Adicionalmente se definió que los binomios presidenciales de los partidos Movimiento Semilla y UNE participarán en la segunda vuelta.",
      annexes: "",
      left: true,
      icon: "/images/3.jpeg"
    },
    {
      id: 6,
      date: "26 de Junio 2023-30 de Junio de 2023",
      event: "Audiencias de revisión de escrutinios",
      observations: "La Junta Electoral Departamental procede en las audiencias de revisión de escrutinios. En las audiencias participan las Juntas Receptoras de Votos, el delegado del Registro de Ciudadanos, el delegado de Inspección General y el fiscal departamental o la persona designada por el secretario departamental o nacional de los partidos políticos. Podrán revisarse únicamente los casos en los que el fiscal de partido político haya realizado una impugnación el proceso de conteo de votos y que se ratifique en la revisión.",
      annexes: "",
      left: true,
      icon: "/images/3.jpeg"
    },
    {
        id: 7,
        date: "29 de Junio de 2023",
        event: "Denuncia presentada por Giovanni Fratti y Karen Fisher",
        observations: "Denuncia presentada por Giovanni Fratti y Karen Fisher en contra de los Magistrados del Tribunal Supremo Electoral",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id: 8,
        date: "30 de Junio de 2023",
        event: "Partidos Políticos presentan amparo ante la Corte de Constitucionalidad para suspender los resultados electorales",
        observations: "Los partidos Cambio, Mi Familia, Valor, Podemos, Vamos, CREO, UNE, Cabal y Azul presentaron una acción de amparo señalando como acto reclamado la amenaza de que se adjudiquen cargos con base a actas a cargo de las autoridades electorales que fueron presuntamente alteradas.",
        annexes: "Memorial de Amparo presentado por las 9 agrupaciones políticas",
        left: false,
        icon: "/images/1.jpeg",
        link: "https://drive.google.com/file/d/1LdPmau4JANbkd-sJF8ALJmyaapamvLg4/view?usp=drive_link"
    },
    {
        id: 9,
        date: "1 de Julio de 2023",
        event: "La Corte de Constitucionalidad decreta amparo provisional para que se revisen nuevamente los escrutinios",
        observations: "A prevención la Corte de Constitucionalidad decretó amparo provisional, precisando como efectos positivos que: a) Las Juntas Electorales Departamentales y la del Distrito Central convoquen a una nueva audiencia de revisión de escrutinios; b) luego de realizada esta actividad, que los órganos electorales competentes realicen un cotejo entre las actas que formaron parte del proceso electoral a efecto de determinar si cada una de ellas cumplió con los requisitos legales; c) en tanto se dilucidan estas situaciones el Tribunal Supremo Electoral debe suspender la calificación y oficialización de los resultados.",
        annexes: "Resolución admitiendo la acción de amparo y decretando amparo provisional a prevención.",
        left: false,
        icon: "/images/1.jpeg",
        link: "https://drive.google.com/file/d/1hZ20inKAFN5ZRUcnHVUSLsHGUhfunFo-/view?usp=drive_link"
      },
      {
        id: 10,
        date: "5 de Julio de 2023",
        event: "Juntas Electorales Departamentales y la del Distrito Central llevan a cabo nuevas audiencias de revisión de escrutinios",
        observations: "En cumplimiento a lo ordenado por la Corte de Constitucionalidad las Juntas Electorales Departamentales y la del Distrito Central realizaron nuevas audiencias de revisión de escrutinios.",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
      },
    {
        id: 11,
        date: "Semana del 3 al 7 de julio de 2023",
        event: "Oficialización resultados por parte del Tribunal Supremo Electoral",
        observations: "Concluidas las audiencias de revisión el Tribunal Supremo Electoral debe divulgar por todos los medios de comunicación, los resultados electorales y definir los partidos que participarán de la segunda elección para el cargo de Presidente y Vicepresidente.",
        annexes: "",
        left: true,
        icon: "/images/3.jpeg"
    },
    {
        id: 12,
        date: "8 de Julio de 2023",
        event: "Orden de la Corte de Constitucionalidad",
        observations: "Tribunal Supremo Electoral rinde informe circunstanciado y solicita que se tenga por cumplido el Amparo Provisional decretado por la Corte de Constitucionalidad",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"

    },
    {
        id: 13,
        date: "10 de Julio de 2023",
        event: "Resolución de la Corte Suprema de Justicia",
        observations: "La Corte Suprema de Justicia resuelve que el Tribunal Supremo Electoral cumplió con lo ordenado por la Corte de Constitucionalidad ",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"

    },
    {
        id: 14,
        date: "12 de julio de 2023",
        event: "Orden de suspensión del partido Movimiento Semilla",
        observations: "Juez 7° de Instancia Penal, Narcoactividad y Delitos contra el Ambiente ordena la suspensión del partido Movimiento Semilla",
        annexes: "Oficio del 12 de julio de 2023, entregado en el Registro de Ciudadanos el 12 de julio de 2023. file DE CASO CORRUPCIÓN SEMILLA + PRESENTACIÓN MP",
        left: false,
        icon: "/images/1.jpeg",
        links:[
        "https://drive.google.com/file/d/1QFRuF8mZ9W8bNgz0PfhQcfXTuRU5opKN/view?usp=drive_link",
        "https://drive.google.com/file/d/1VUZonLFoTW13KiOhH19h6Ge3boqwi0w8/view?usp=drive_link"
        ],
        file:{
            name:"Caso Corrupción Semilla",
            desc: "Según declaraciones del Fiscal Rafael Curruchiche existen indicios de que posiblemente más de 5,000 ciudadanos fueron adheridos ilegalmente al partido, por medio de falsificación de su letra y firma y se inscribieron a 12 personas fallecidas. Además, de acuerdo con las declaraciones del Ministerio Público, el partido Movimiento Semilla contrató los servicios de recolección de firmas por las que supuestamente pagaría Q7.00 por firma recolectada. Lo que supuestamente da indicios sobre la posible comisión de los delitos de lavado de dinero u otros activos.",
            sit: "El expediente está en reserva por parte de la FECI. El Ministerio Público lleva investigando el caso por tiempo desconocido y no se sabe con certeza qué inició la investigación, qué han recaudado ni quiénes estarían implicados. Pues nadie tiene acceso a ese expediente.<br> El Ministerio Público puede, en esta fase, pedir al juez que autorice allanamientos. En este caso el Juez 7º de Instancia Penal ha autorizado la realización de allanamientos al Tribunal Supremo Electoral, así como a la sede del partido Movimiento Semilla y el secuestro de documentos. ",
            efectos:"El Juez decretó como medida precautoria la suspensión provisional de la personalidad jurídica del partido Movimiento Semilla.<br> Al perder su personalidad jurídica los diputados del partido Movimiento Semilla no podrían integrar Junta Directiva, presidir comisiones, ni participar Jefes de Bloque, espacio en el que se define la agenda del Congreso.",
            tipo:"Proceso penal.",
            juez:"Juez 7º de Primera Instancia Penal, Narcoactividad y Delitos contra el Ambiente, Freddy Orellana."
        }

    },
    {
        id: 15,
        date: "12 de julio de 2023",
        event: "Validación de elecciones por parte del Tribunal Supremo Electoral",
        observations: "Tribunal Supremo Electoral declara validez de las elecciones realizadas el 25 de junio y confirmó partidos que participarán en la segunda vuelta",
        annexes: "ACUERDO 1328-2023",
        left: false,
        icon: "/images/1.jpeg",
        link: "https://drive.google.com/file/d/1MooJQKfT_gd5Oui039m25Mqg2mdpLrpo/view?usp=drive_link"
    },
    {
        id: 16,
        date: "13 de julio de 2023",
        event: "Allanamiento a sede del Tribunal Supremo Electoral",
        observations: "Ministerio Público allana la sede del Tribunal Supremo Electoral ",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id: 17,
        date: "13 de julio de 2023",
        event: "Orden de la Corte de Constitucionalidad",
        observations: "Dirección General del Registro de Ciudadanos se niega a atender la orden de suspender al partido Movimiento Semilla",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id: 18,
        date: "13 de julio de 2023",
        event: "Orden de la Corte de Constitucionalidad",
        observations: "La Corte de Constitucionalidad otorga amparo provisional dejando en suspenso la resolución del Juez 7° de Instancia Penal que ordena la suspensión del Partido Semilla",
        annexes: "Resolución de Amparo Provisional Semilla 13 de julio de 2023",
        left: false,
        icon: "/images/1.jpeg",
        link: "https://drive.google.com/file/d/1Mg8p9EHkUD-s5yhvKNDzEuQ-h5pyHfwS/view?usp=drive_link"
    },
    {
        id: 19,
        date: "17 de julio de 2023",
        event: "Recusación presentada por Movimiento Semilla",
        observations: "Movimiento Semilla presenta recusación contra el Juez 7° de Instancia Penal, Narcoactividad y Delitos contra el Ambiente",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id: 20,
        date: "18 de julio de 2023",
        event: "Se certifica lo conducente al Director General del Registro de Ciudadanos",
        observations: "El Juez 7° de Instancia Penal certificó lo conducente al Director General del Registro de Ciudadanos ",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id: 21,
        date: "19 de julio de 2023",
        event: "Juez 7° de Instancia Penal no admite para su trámite recusación",
        observations: "",
        annexes: "Resolución de fecha 19 de julio de 2023 del Juez 7° de Instancia Penal. ",
        left: false,
        icon: "/images/1.jpeg",
        link: "https://drive.google.com/file/d/1W3sU4y_CURybWMMnip1ZdoPO4ne78kwS/view?usp=drive_link"
    },
    {
        id: 22,
        date: "20 de julio de 2023",
        event: "Orden de captura en contra de Directora en Funciones del Registro de Ciudadanos",
        observations: "Juez 7° de Instancia Penal gira orden de captura en contra de la Directora en Funciones del Registro de Ciudadanos del Tribunal Supremo Electoral",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id: 23,
        date: "20 de julio de 2023",
        event: "Allanamiento",
        observations: "La Fiscalia allana la sede la oficina de Recursos Humanos del Tribunal Supremo Electoral ",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id: 24,
        date: "21 de julio de 2023",
        event: "Allanamiento sede Movimiento Semilla",
        observations: "La Fiscalia allana la sede del partido político Movimiento Semilla ",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id: 25,
        date: "21 de julio de 2023",
        event: "Información requerida por Juez 7° de Instancia Penal",
        observations: "Juez 7° de Instancia Penal gira requiere información al partido político Movimiento Semilla",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id: 26,
        date: "21 de julio de 2023",
        event: "Comunicado de la Corte de Constitucionalidad",
        observations: "Corte de Constitucionalidad emite comunicado reiterando que la orden del Juez 7° carecía de efectos legales",
        annexes: "COMUNICADO DE PRENSA CC 21 JULIO 2023",
        left: false,
        icon: "/images/1.jpeg",
        link: "https://drive.google.com/file/d/1HwMm0N9_b3gfEaRjedTL-jHmqt6RXWS-/view?usp=drive_link"
    },
    {
    id: 27,
    date: "20 de agosto de 2023",
    event: "Segunda vuelta para elección presidencial",
    observations: "En la segunda vuelta ganó el binomio presidencial del partido Movimiento Semilla.",
    annexes: "",
    left: true,
    icon: "/images/3.jpeg"
    },
    {
        id: 28,
        date: "21 de agosto de 2023",
        event: "Partido UNE entra en Sesión Permanente ",
        observations: "",
        annexes: "COMUNICADO PARTIDO UNE",
        left: false,
        icon: "/images/1.jpeg",
        link: "https://drive.google.com/file/d/15rdcZy_BUJzAVrQhULESwluEp45zKAWh/view?usp=drive_link"
    },
    {
        id: 29,
        date: "22 de agosto de 2023",
        event: "Información sobre centros de votación",
        observations: "El Ministerio Público requiere información sobre centros de votación al Tribunal Supremo Electoral ",
        annexes: "4 Oficios requerimiento de información al TSE ",
        left: false,
        icon: "/images/1.jpeg",
        links: [
            "https://drive.google.com/file/d/1qSvUZobTZcuohzT_ram9JCMvHa_2Wvg1/view?usp=drive_link",
            "https://drive.google.com/file/d/1wnxvLt_qzqS6jwBEPt9DaZTjdtvERvug/view?usp=drive_link",
            "https://drive.google.com/file/d/1-IUdKwQ81KXNHfDw2__ID2rMtlEhEtaO/view?usp=drive_link",
            "https://drive.google.com/file/d/13V2lmH4VXKYTOG-3YvNp8paa4DhZQ1Va/view?usp=drive_link"
        ]
    },
    {
        id: 30,
        date: "23 de agosto de 2023",
        event: "Solicitud de retiro de antejuicio",
        observations: "Fiscalía de Delitos Administrativos presenta solicitud de retiro de antejuicio contra Magistrados del Tribunal Supremo Electoral ",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id: 31,
        date: "24 de agosto de 2023",
        event: "Pedro Cruz presenta desistimiento de su denuncia",
        observations: "",
        annexes: "Primera página memorial de desistimento ",
        left: false,
        icon: "/images/1.jpeg",
        link: "https://drive.google.com/file/d/1uaTLp0PzzxeANallosc8rIcQ1AhT81SA/view?usp=drive_link"
    },
    {
        id: 32,
        date: "24 de agosto de 2023",
        event: "Medidas cauterales a favor Bernardo Arévalo y Karin Herrera",
        observations: "Comisión Interamericana de Derechos Humanos decreta medidas cauterales a favor Bernardo Arévalo y Karin Herrera",
        annexes: "RESOLUCIÓN 48/2023 de la CIDH",
        left: false,
        icon: "/images/1.jpeg",
        link:"https://drive.google.com/file/d/1xJhlVYR4XuXBqSTc1Q4nN4U3L8EilTJl/view?usp=drive_link"
    },
    {
        id: 33,
        date: "26 de agosto de 2023",
        event: "Denuncia de fraude electoral",
        observations: "Partido UNE denuncia Fraude en las elecciones del 20 de agosto",
        annexes: "Comunicado UNE - Fraude Electoral ",
        left: false,
        icon: "/images/1.jpeg",
        link: "https://drive.google.com/file/d/1IOSKia-7IquDG4gVz99xXdyhj-tAoHgn/view?usp=drive_link"
    },
    {
        id: 34,
        date: "28 de agosto de 2023",
        event: "Legalización de binomio presidencial del partido Movimiento Semilla",
        observations: "Tribunal Supremo Electoral declara legalmente electo el binomio presidencial del partido Movimiento Semilla",
        annexes: "ACUERDO 1659-2023 DEL TRIBUNAL SUPREMO ELECTORAL ",
        left: false,
        icon: "/images/1.jpeg",
        link:"https://drive.google.com/file/d/1P0U9smEA2q-BS1g-kDB43aSJpyLYoLe7/view?usp=drive_link"
    },
    {
        id: 35,
        date: "28 de agosto de 2023",
        event: "Suspensión partido Movimiento Semilla",
        observations: "Dirección General del Registro de Ciudadanos suspende temporalmente al partido Movimiento Semilla",
        annexes: "Resolución Registro de Ciudadanos Suspende Semilla ",
        left: false,
        icon: "/images/1.jpeg",
        link:"https://drive.google.com/file/d/1AWL4SpG-mYF98aZyZw1ZokG1SHamkGwy/view?usp=drive_link"
    },
    {
        id: 36,
        date: "30 de agosto de 2023",
        event: "Oficio suspendiendo bancada de Movimiento Semilla",
        observations: "El Congreso de la República recibe Oficio en el que se suspende de forma provisional la inscripción de persona jurídica del Comité para la constitución del partido político Movimiento Semilla y del Partido Político Movimiento Semilla ",
        annexes: "Certificación resolución Junta Directiva del Congreso que  suspende la bancada de Movimiento Semilla, ACTA DE LA SESIÓN PLENARIA DEL 30 DE AGOSTO DE 2023 ACTA 014-2023",
        left: false,
        icon: "/images/1.jpeg",
        links:[
            "https://drive.google.com/file/d/198PqZi_rIypEKgcdpfKlH9atSWb_l3tf/view?usp=drive_link",
            "https://drive.google.com/file/d/1o1M9MoAytvgzKJZ7gvZCHnnUmDbugh0k/view?usp=drive_link"
        ]
    },
    {
        id: 37,
        date: "agosto de 2023",
        event: "Denuncia en contra de Magistrados del Tribunal Supremo Electoral",
        observations: "Presentan ampliación de denuncia en contra de Magistrados del Tribunal Supremo Electoral ",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id: 38,
        date: "2 de septiembre de 2023",
        event: "Suspensión por parte del Tribunal Supremo Electoral",
        observations: "El Tribunal Supremo Electoral suspende la resolución del Director del Registro de Ciudadanos que suspendió provisionalmente el partido Movimiento Semilla",
        annexes: "Resolución del TSE de fecha 2 de septiembre de 2023. ",
        left: false,
        icon: "/images/1.jpeg",
        link:"https://drive.google.com/file/d/1VHfdy5Emv8RGmSLAdbzLL83NiaiwpXpx/view?usp=sharing"
    },
    {
        id: 39,
        date: "8 de septiembre de 2023",
        event: "Revocatoria de suspensión",
        observations: "Congreso de la Republica revoca decisión de Suspender el Bloque Legislativo de Movimiento Semilla ",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
  {
    id: 40,
    date: "11 de septiembre de 2023",
    event: "Transición de Mando - Primera etapa",
    observations: "Entrega al gobierno electo de información operativa, administrativa e información institucional.",
    annexes: "",
    left: true,
    icon: "/images/3.jpeg"
  },
  {
    id: 41,
    date: "12 de septiembre de 2023",
    event: "Allanamiento",
    observations: "Allanamiento a las instalaciones de la Dirección del Registro de Ciudadanos",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 42,
    date: "12-14 de septiembre de 2023",
    event: "Allanamiento",
    observations: "Allanamiento a las Instalaciones del Centro de Operaciones del Proceso Electoral del Tribunal Supremo Electoral, ubicadas en el Parque de la Industria",
    annexes: "ORDEN DE ALLANAMIENTO, INSPECCIÓN Y REGISTRO DE FECHA 07 DE SEPTIEMBRE DE 2023.",
    left: false,
    icon: "/images/1.jpeg",
    link:"https://drive.google.com/file/d/1YOmugvqRZaQClfjIOkTwIDvkI8ojYkfv/view?usp=drive_link"
  },
  {
    id: 43,
    date: "13 de septiembre de 2023",
    event: "Cuestión de Competencia",
    observations: "Tribunal Supremo Electoral presenta Cuestión de Competencia ante la Corte de Constitucionalidad. ",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 44,
    date: "13 de septiembre de 2023",
    event: "Denuncia",
    observations: "Ministerio Público informa de una nueva denuncia asociada al Caso Corrupción Semilla",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 45,
    date: "27 de septiembre de 2023",
    event: "Solicitud de antejuicio",
    observations: "Ministerio Público presenta solicitud de antejuicio en contra de los Magistrados del Tribunal Supremo Electoral",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 46,
    date: "29 de septiembre de 2023",
    event: "Allanamiento",
    observations: "Allanamiento a las instalaciones del Tribunal Supremo Electoral ",
    annexes: "COMUNICADO DE PRENSA TSE 29 septiembre",
    left: false,
    icon: "/images/1.jpeg",
    link:"https://drive.google.com/file/d/1FHww8kcOdnlVrxlNWLtjteMg2vMMniwp/view?usp=drive_link"
  },
  {
    id: 47,
    date: "5 de octubre de 2023 ",
    event: "Resolución cuestión de competencia",
    observations: "La Corte de Constitucionalidad resuelve Cuestión de Competencia presentada por el Tribunal Supremo Electoral ",
    annexes: "Resolución de Cuestión de Competencia",
    left: false,
    icon: "/images/1.jpeg",
    link:"https://drive.google.com/file/d/1cw1MUngLIFCBpR1O2Tc7fEJC28GG29j4/view?usp=drive_link"
  },
  {
    id: 48,
    date: "31 de octubre de 2023",
    event: "Fin del Proceso electoral",
    observations: "El Tribunal Supremo debe proceder a la conclusión y divulgación de resultados oficiales.",
    annexes: "",
    left: true,
    icon: "/images/3.jpeg"
  },

  {
    id: 49,
    date: "1 de noviembre a enero de 2024",
    event: "Transición de Mando - Segunda etapa",
    observations: "Reuniones sectoriales de transición.",
    annexes: "",
    left: true,
    icon: "/images/3.jpeg"
  },

  {
    id: 50,
    date: "7 de noviembre de 2023",
    event: "Antejuicio",
    observations: "Corte Suprema de Justicia admite antejuicio contra Magistrados del Tribunal Supremo Electoral y remite actuaciones al Congreso de la República para que continúe el trámite",
    annexes: "Resolución de Admisión de Antejuicio contra Magistrados del TSE y Voto razonado en contra. ",
    left: false,
    icon: "/images/1.jpeg",
    link:"https://drive.google.com/file/d/1ZORku8vfYyYoy9r3T_gnSUQ25ufMMpSl/view?usp=drive_link",
    file:{
        name:" Denuncia Karen Fisher y Giovanni Fratti",
        desc: "La denuncia se presentó el 29/06/2023, denunciando un fraude electoral. Sin embargo, de acuerdo con declaraciones de los denunciantes, la denuncia fue ampliada en agosto de 2023. En la ampliación señalaron irregularidades en la adquisición del Sistema para la Transmisión de Resultados Electorales (TREP). La denuncia fue presentada contra todos los magistrados del TSE.",
        sit: "El Ministerio Público presentó solicitud de antejuicio, que fue admitida por la Corte Suprema de Justicia y se remitió el expediente al Congreso de la República.<br>El Congreso integró la Comisión Pesquisidora a cargo de conocer la solicitud de antejuicio que ha llevado a cabo sesiones y ha escuchado a distintos actores. <br>Se espera que rindan su informe el 28 de noviembre, dado que la propuesta del presidente de rendirlo en enero 2024 fue rechazada.",
        efectos:"En sus declaraciones el Ministerio Público ha manifestado que la denuncia únicamente se refiere a la adquisición del sistema TREP y que no afectaría los resultados de las elecciones. Sin embargo, los denunciantes durante la sesión ante la comisión sí se refirieron a un supuesto fraude electoral.",
        tipo:"Proceso penal.",
        juez:"La denuncia no se ha remitido a ningún Juez, debido a que actualmente el Congreso está conociendo el proceso de antejuicio. En caso de que el Congreso resuelva retirar el antejuicio a los magistrados, las actuaciones se remitirán a la Corte Suprema de Justicia quien mandará a que se devuelvan las actuaciones a un juez penal."
    }

  },
  {
    id: 51,
    date: "9 de noviembre de 2023",
    event: "Acción de Amparo",
    observations: "Magistrados del Tribunal Supremo Electoral presentan Acción de Amparo en contra de la admisión del antejuicio en su contra ",
    annexes: "Memorial de Amparo presentado por Magistradas Irma Elizabeth Valencia Orellana. Memorial de Amparo presentado por Magistrados Marco Antonio Cornejo Marroquín, Marlon Josué Barahona Catalán y Alvaro Ricardo Cordón Paredes.",
    left: false,
    icon: "/images/1.jpeg",
    links:[
        "https://drive.google.com/file/d/1Y7fgFVOL5XiX2vxNahdlYuB03qXauImU/view?usp=drive_link",
        "https://drive.google.com/file/d/1uWl2NxB1t30Leud_sLBz5fHmLQHW8Dy6/view?usp=drive_link"
    ]
  },
  {
    id: 52,
    date: "15 de noviembre de 2023",
    event: "Integración de Comisión Pesquisidora",
    observations: "Congreso de la República integra Comisión Pesquisidora que conoce Antejuicio en contra de los Magistrados del Tribunal Supremo Electoral ",
    annexes: "Acta de Sesión Ordinaria 025-2023 ",
    left: false,
    icon: "/images/1.jpeg",
    link:"https://drive.google.com/file/d/19qGkP1PjCLfZNwpFMCfueJjRvP2sQNVb/view?usp=drive_link"
  },
  {
    id: 53,
    date: "17 de noviembre de 2023",
    event: "Solicitud de antejuicio",
    observations: "Ministerio Público presenta solicitud de antejuicio en contra de Bernardo Arévalo, Karin Herrera, Samuel Pérez, Raul Barrera, Carlos Barrera y Adán Pérez y Pérez",
    annexes: "file DE CASO + PRESENTACIÓN DEL MP SOBRE EL CASO. ",
    left: false,
    icon: "/images/1.jpeg",
    link:"https://drive.google.com/file/d/1_klwHTFyA9fv-n3O_4qdWQxlFQf3UieD/view?usp=drive_link",
    file:{
        name:"Caso Toma de la USAC: Botín Político",
        desc: "El proceso inició por denuncia del rector de la USAC, Walter Mazariegos. Quien denunció los daños estructurales a sus instalaciones luego de haber sido tomada por más de un año y devuelta a las autoridades el 9 de junio de 2023. En la denuncia se involucra a estudiantes, catedráticos y a otras personas como: Bernardo Arévalo, Karin Herrera, Samuel Pérez, Román Castellanos, Aldo Dávila, Carlos Barrera, Raúl Barrera y Adán Pérez y Pérez; contra quienes se presentó solicitud de antejuicio.",
        sit: "Se presentaron solicitudes de antejuicio que no han sido resueltas por la Corte Suprema de Justicia. Algunos sindicados fueron detenidos y ligados a proceso.",
        efectos:"Durante la exposición del caso en conferencia de prensa, el Ministerio Público denunció que los actos ilícitos sirvieron de plataforma para las candidaturas de Bernardo Arévalo y Karin Herrera por lo que existe un riesgo de que se pretenda atacar la legalidad de sus candidaturas argumentando que estas fueron fundadas en actos ilícitos.",
        tipo:"Proceso penal por los delitos de usurpación agravada de forma continuada, depredación de bienes culturales, sedición en forma continuada y asociación ilícita.",
        juez:"Juez 10º de Primera Instancia Penal, Narcoactividad y Delitos contra el Ambiente, Víctor Manuel Cruz Rivera."
    }
  },
  {
    id: 54,
    date: "20 de noviembre de 2023",
    event: "Primera Reunión",
    observations: "Primera Reunión de Comisión Pesquisidora del Tribunal Supremo Electoral ",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 55,
    date: "21 de noviembre de 2023",
    event: "Comisión Pesquisidora",
    observations: "Comisión Pesquisidora -Antejuicio Magistrados Tribunal Supremo Electoral decide cronograma de trabajo",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 56,
    date: "21 de noviembre de 2023",
    event: "Amparo provisional",
    observations: "Corte de Constitucionalidad decreta Amparo Provisional a favor de Magistrados Blanca Alfaro, actual presidenta del Tribunal Supremo Electoral; y a los Magistrados Suplementes Álvaro Cordón, Marlon Barahona y Marco Antonio Cornejo",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg",
    links:[
        "https://drive.google.com/file/d/1yFee2kixQ0-HlBabGgcREZD7-otAu4M8/view?usp=drive_link",
        "https://drive.google.com/file/d/1B9tBmjoO161rUHKUpvSG_y6ZkD5E829Y/view?usp=drive_link"
    ]
  },
  {
    id: 57,
    date: "21 de noviembre de 2023",
    event: "Inicio de audiencia",
    observations: "Inicio de audiencia de primera declaración de personas detenida por el Caso Toma de la USAC: Botín Político ",
    annexes: "file DE CASO + PRESENTACIÓN DEL MP SOBRE EL CASO. ",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 58,
    date: "22 de noviembre de 2023",
    event: "Comisión Pesquisidora",
    observations: "Comisión Pesquisidora - Antejuicio Magistrados del Tribunal Suprremo Electoral recibe al Ministerio Público ",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 59,
    date: "22 de noviembre de 2023",
    event: "Solicitud de antejuicio",
    observations: "Ministerio Público presenta solicitud de antejuicio contra los diputados Román Wilfredo Castellanos Caal y Aldo Iván Dávila Morales",
    annexes: "file DE CASO + PRESENTACIÓN DEL MP SOBRE EL CASO. ",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 60,
    date: "23 de noviembre de 2023",
    event: "Suspensión del partido Movimiento Semilla",
    observations: "Ministerio Público informa al Congreso sobre la suspensión del partido Movimiento Semilla",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 61,
    date: "24 de noviembre de 2023",
    event: "Fin de audiencia",
    observations: "Finaliza audiencia de primera declaración de personas detenidas por el Caso Toma de la USAC: Botín Político ",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 62,
    date: "24 de noviembre de 2023",
    event: "Comisión Pesquisidora",
    observations: "Comisión Pesquisidora -Antejuicio Magistrados Tribunal Supremo Electoral recibe a Karen Fisher y Giovanni Fratti para ratificar su denuncia ",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 63,
    date: "25 de noviembre de 2023",
    event: "Presentación de denuncia",
    observations: "Contraloría General de cuentas presenta 2 denuncias contra Magistrados del Tribunal Supremo Electoral ",
    annexes: "file DE CASO ",
    left: false,
    icon: "/images/1.jpeg",
    file:{
        name:"Denuncia Contraloría General de Cuentas – Adquisición Sistema TREP",
        desc: "La denuncia se presentó por posible abuso de autoridad e incumplimiento de deberes en contra de los magistrados del TSE, relacionada a la adquisición del programa informático para la Transmisión de Resultados Electorales (TREP) por un valor de Q148 millones. De acuerdo con declaraciones de la Contraloría General de Cuentas se estableció falta de planificación eficiente y documentación de soporte.",
        sit: "La denuncia fue presentada en el MP. Es importante señalar que ya existe una denuncia sobre la adquisición del TREP, por lo que existe la posibilidad de que esta se acumule con la denuncia de Giovanni Fratti y Karen Fisher.         ",
        efectos:"De acuerdo con declaraciones de la Contraloría General de Cuentas el proceso no afectará los resultados de las elecciones.         ",
        tipo:"Proceso penal.",
        juez:"No se ha presentado ninguna solicitud."
    }
  },
  {
    id: 64,
    date: "27 de noviembre de 2023",
    event: "Comisión Pesquisidora",
    observations: "Comisión Pesquisidora -Antejuicio Magistrados Tribunal Supremo Electoral recibe a representantes de la empresa Datasys y los algunos Magistrados del Tribunal Supremo Electoral ",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 65,
    date: "29 de noviembre de 2023",
    event: "Comisión Pesquisidora emite informe que recomienda retirar el antejuicio a los Magistrados del TSE",
    observations: `
    La comisión pesquisidora emitió el informe correspondiente. La comisión decidió, con 3 votos a favor y 2 votos en contra, recomendar retirar la inmunidad a los magistrados del Tribunal Supremo Electoral a los que la Corte de Constitucionalidad no les otorgó amparo provisional. 
    Las votaciones fueron así:<br>
    ▪️Presidente de la comisión: Julio Enrique Montano, votó en contra de retirar la inmunidad.<br>
    ▪️Secretario: Julio César Longo, votó a favor de retirar la inmunidad.<br>
    ▪️Vocal I: Flavio Valdemar Muñoz, votó a favor.<br>
    ▪️Vocal II: Douglas Rivero Mérida, votó a favor.<br>
    ▪️Vocal III: Osmundo René Ponce, votó en contra.`,
    annexes: "",
    left: false,
    icon: "/images/1.jpeg",
    link: "https://drive.google.com/file/d/1NLO1OY6Fy7U96-3yGvBRqvAi25QZZtAh/view?usp=drive_link"
  },
  {
    id: 66,
    date: "30 de noviembre de 2023",
    event: "Pleno del Congreso Conoce el Informe de la Comisión Pesquisidora del antejuicio contra los Magistrados del Tribunal Supremo Electoral",
    observations: `
    Durante la última sesión plenaria del periodo ordinario, el Congreso acordó retirar el antejuicio a los magistrados del TSE: Irma Palencia, Ranulfo Rojas, Gabriel Aguilera y Mynor Franco.`,
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 67,
    date: "8 de diciembre de 2023",
    event: "MP anuncia la presentación de la solicitud de retiro de antejuicio contra Bernardo Arévalo",
    observations: `
    La solicitud se presenta en el contexto del caso "Corrupción Semilla" por los delitos de uso de documento falsificado con agravante electoral de forma continuada, omisión de denuncia, desobediencia y obstrucción de justicia.<br> Se argumenta que Bernardo Arévalo, como secretario general del partido, conocía de la adhesión de ciudadanos con firmas falsas al partido político al momento de su constitución. Además se presentó también solicitud de antejucio por el delito de lavado de dinero, debido a que no se justificó la fuente de dinero de un préstamo por US$44mil que recibió el partido. 
    `,
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },{
    id: 68,
    date:"8 de diciembre de 2023",
    event:"MP anuncia caso sobre irregularidades en el TREP, las actas número 4 y 8 del proceso electoral",
    observations:`
    El MP realizó una investigación con base en los documentos electorales secuestrados en los allanamientos desarrollados en el TSE en septiembre de 2023.<br> Según la investigación, existieron irregularidades en la forma de llenar las actas número 4 y número 8, así como inconsistencias entre los documentos físicos y los publicados en el TREP, por lo mismo manifestaron que enviarían la investigación al TSE para la toma de decisiones sobre el proceso electoral.<br> A criterio del MP, las actas número 4 deberían ser nulas dadas las inconsistencias encontradas. Por lo mismo se solicitó la captura de Jorge Salvador Santos - Director de Informática del TSE por los delitos de abuso de autoridad y falsededad material y Alejandra Chiroy - Directora del Departamento de Inscripción de Ciudadanos por abuso de autoridad.
    `,
    annexes:"Presentación del MP -  ILEGALIDADES COMETIDAS POR EL TRIBUNAL SUPREMO ELECTORAL EN EL PROCESO ELECTORAL 2023",
    left: false,
    icon: "/images/1.jpeg",
    link: "https://drive.google.com/file/d/1z5mV4LTpsebko2mgix7-Ee9ikvL8cmFv/view?usp=drive_link"
  },{
    id: 69,
    date:"14 de diciembre de 2023",
    event:"Corte de Constitucionalidad otorga amparo solicitado por abogados particulares en contra de la amenaza del régimen democrático (expediente 6175 - 2023)",
    observations:`
    Los efectos que se le otorga a la sentencia son los siguientes:<br><br>
    1. Se conmina al Congreso de la República y su Junta Directiva garantizar la efectiva toma de posesión de todo funcionario electo en el proceso electoral 2023, conforme los Decretos de oficialización y validación de resultados emitidos por el TSE. <br><br>
    2. Se exhorta al Congreso a actuar conforme al deber que tiene de preservar el régimen democrático y realizar todos los actos que les competen observando que, imperativamente, la renovación de los integrantes del Poder Legislativo y el Poder Ejecutivo se lleve a cabo el 14 de enero de 2024, con las personas que resultaron electas conforme los resultados avalados por el TSE.<br><br>
    3. Lo decidido es sin perjuicio de las facultades de investigación que corresponden al MP y los jueces del orden penal y de las facultades del TSE sobre las incidencias que surgen en el ámbito de las organizaciones electorales.
    `,
    annexes:"EXPEDIENTE 6175-2023",
    left: false,
    icon: "/images/1.jpeg",
    link:"https://drive.google.com/file/d/1-5DgmX048ImjWPvrprtPImYlwsNAGtLx/view?usp=sharing"
  },
  {
    id: 70,
    date:"14 de diciembre de 2023",
    event:"MP presenta solicitud de retiro de antejuicio en contra de la magistrada presidente del TSE, Blanca Alfaro. ",
    observations:`
    La solicitud se presenta por los delitos de obstaculización a la acción penal e incumplimiento de deberes. 
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 71,
    date:"15 de diciembre de 2023",
    event:"Juzgado 9no Pluripersonal de Instancia Penal otorga amparo solicitado por grupo de abogados en contra de la amenaza del régimen democrático.",
    observations:`
    El amparo presentado por un grupo de abogados fue distribuido a distintos organos jurisdiccionales, de acuerdo a su competencia.<br><br> 
    El Juzgado Noveno Pluripersonal Instancia Penal resolvió en sentencia otrogar el amparo en definitiva y girar instrucciones tanto a la FECI como a la PNC, a efecto de que garanticen el principio de alternabilidad de poder y se abstengan de cualquier acción que atente contra este. 
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 72,
    date:"17 de diciembre de 2023",
    event:"FECI apela sentencia de amparo emitida por el Juzgado Noveno Pluripersonal de Instancia Penal. ",
    observations:`
    La FECI fundamenta su apelación indicando que no exisiten argumentos reales sobre el supuesto atentado contra la alternabilidad de las autoridades. 
    `,
    left: false,
    icon: "/images/1.jpeg",

  },
  {
    id: 73,
    date:"20 de diciembre de 2023",
    event:"Corte de Constitucionalidad resuelve acciones de inconstitucionalidad general parcial contra artículo de la Ley Orgánica del Ministerio Público.",
    observations:`
    La Corte de Constitucionalidad emitió sentencia a las acciones de inconstitucionalidad general parcial promovida por distintos actores, en contra del artículo 14 de la Ley Orgánica del Ministerio Público.<br>
    La Corte consideró que la normativa impugnada con colisiona con la Constitución, por lo que declaró sin lugar las  acciones de inconstitucional general parcial promovidas.<br>
    Los efectos de esta sentencia es que se concluye el trámite de las inconstitucionalidades y el artículo 14 de la Ley Orgánica del Ministerio Público, continúa vigente.<br>
    En contra de esta resolución los interesados pueden interponer recurso de aclaración y ampliación en las próximas 48 horas. 
    `,
    left: false,
    icon: "/images/1.jpeg",
    link:"https://drive.google.com/file/d/1ZzDu9dDOfHjV0Na0juEbCduOaYlD-eta/view?usp=drive_link"
  },
  {
    id: 74,
    date:"27 de diciembre de 2023",
    event:"Corte de Constitucionalidad resuelve suspender acción de amparo promovida por ciudadanos en contra del proceso de antejuicio en contra de los Magistrados del TSE",
    observations:`
    La Corte consideró que los 14 ciudadanos que promovieron el amparo no tenían legitimación activa para promover el amparo.<br>
    Por lo que confirmó el retiro de la inmunidad de los 4 magistrados del TSE. 
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 75,
    date:"27 de diciembre de 2023",
    event:"Corte de Constitucionalidad no otorga amparo provisional a Karen Fischer, quien promovió acción de amparo para que el Congreso elija a los 2 magistrados suplentes que faltan para integrar el TSE. ",
    observations:`
    La acción de amparo presentada por Karen Fischer el 7 de diciembre de 2023, fue admitida por la Corte de Constitucionalidad.<br>
    El amparo busca que la Corte de Constitucionalidad ordene al Congreso llevar a cabo la elección de los 2 magistrados suplentes para integrar el pleno del TSE.<br>
    La Corte de Constitucionalidad resolvió continuar con el trámite del amparo, sin embargo no accedió a decretar el amparo provisional a favor de la amparista. Además, requirió al Congreso que amplíe el informe y explique la razón por la que no se han elegido los magistrados suplentes que hacían falta.
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 76,
    date:"28 de diciembre de 2023",
    event:"Corte Suprema de Justicia no otorga amparo provisional a Néstor Estuardo Pérez Felipe.    ",
    observations:`
    La acción de amparo presentada por Karen Fischer, se refirió a la falta de elección de magistrados suplentes por parte del Congreso de la República y denunció que la presidente del TSE ha contribuido a la "desintegración" del pleno al otorgar licencias a algunos magistrados. 
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 77,
    date:"2 de enero de 2024",
    event:"Magistrado Mynor Custodio Franco presenta acción de amparo en contra del TSE    ",
    observations:`
    El magistrado denunció como acto reclamado en su amparo  la resolución 1-2023 del Congreso de la República en que se declaró con lugar a la formación de causa las diligencias de antejuicio en contra de los magistrados titulares del TSE: Irma Elizabeth Palencia Orellana, Ranulfo Rafael Rojas Cetina, Gabriel Vladimir Aguilera Bolaños y Mynor Custodio Franco Flores. 
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 78,
    date:"5 de enero de 2024",
    event:"Diputado Rudio Lecsan, presenta amparo ante la Corte de Constitucionalidad en contra del Congreso y el TSE, solicitando que el binomio presidencial no tome posesión.",
    observations:`
    El acto reclamado es la amenaza de que tome posesión y se instale un gobierno ilegítimo, antidemocrático y no representantivo, derivado de unas elecciones viciadas y sujetas a investigación penal por responsabilidad de la máxima autoridad electoral. 
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 79,
    date:"5 de enero de 2024",
    event:"Congreso de la República conoció en el Pleno nuevo oficio enviado por FECI sobre la suspensión del partido Movimiento Semilla",
    observations:`
    La presidenta del Congreso, Shirley Rivera, informó al pleno del informe recibido.<br>Posteriormente manifestó que harían una consulta através de la Dirección de Asuntos Jurídicos sobre el estatus del partido para determinar qué procedía al Tribunal Supremo Electoral y Registro de Ciudadanos. 

    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 80,
    date:"5 de enero de 2024",
    event:"Presidenta del Congreso informa sobre requisitos para la toma de posesión de diputados electos    ",
    observations:`
    Los requisitos que se solicitan a diputados electos para la toma de posesión son: a) DPI, b) Credencial del TSE y c)Finiquito de la CGC
    `,
    left: false,
    annexes:"Carta de requisitos diputados para toma de posesión",
    link:"https://drive.google.com/file/d/1Yg8c1K4H0Vb4dlTe8G3-ZgeT1B-g6pNk/view?usp=sharing",
    icon: "/images/1.jpeg",
  },
  {
    id: 81,
    date:"8 de enero de 2024",
    event:"Juez 7o de Instancia Penal requiere informe al Congreso",
    observations:`
    Por medio de un oficio el Juez Freddy Orellana a requerimiento de la FECI, ordenó remitir copia del Informe de aAvances de la investigación el proceso en el que se decretó la suspensión de la persona jurídica del partido Movimiento Semilla, para que el Congreso proceda con los efectos legales que son competencia de este organismo y que informe al Pleno del Congreso sobre este informe. 
    `,
    left: false,
    annexes:"Oficio Juez 7o",
    link:"https://drive.google.com/file/d/13p0-R6r1x5hBwHOjlTsImqsqi0Ld1F-e/view?usp=sharing",
    icon: "/images/1.jpeg",
  },
  {
    id: 82,
    date:"9 de enero de 2024",
    event:"Liga Pro Patria  presenta amparo ante la Corte de Constitucionaliidad en contra el Congreso de la República contra la amenaza de toma de posesión del binomio presidencial electo    ",
    observations:`
    El acto reclamado es la amenaza de que el Congreso juramente y dé posesión del cargo de presidente y vicepresidenta al binomio ganador de la elecciones presidenciales, dado que estas fueron nulas de pleno derecho debido a la posibilidad de existencia de fraude electoral. 
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 83,
    date:"9 de enero de 2024",
    event:"Registro de Ciudadanos confirma vigencia del partido Movimiento Semilla",
    observations:`
    El Registro de Ciudadanos del Tribunal Supremo Electoral (TSE), informó a la Dirección de Asuntos Jurídicos del Congreso de la República que el partido político Movimiento Semilla está vigente como organización política. 
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 84,
    date:"11 de enero de 2024",
    event:"Vicepresidenta electa Karin Herrera presenta acción de amparo contra la amenaza de orden de captura en su contra",
    observations:`
    La Vicepresidenta electa, Karin Herrera presentó acción de Amparo ante la Corte de Constitucionalidad, ante la amenaza de una posible orden de detención en su contra, sin que se tramitara el antejuicio correspondiente.
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 85,
    date:"11 de enero de 2024",
    event:"Corte de Constitucionalidad decreta Amparo Provisional a favor de Karin Herrera",
    observations:`
    La Corte de Constitucionalidad otorgó amparo provisional a favor de la Vicepresidenta electa. El efecto de este amparo provisional es que no se pueda ejecutar ninguna orden de captura sin que previamente se agote el proceso de antejuicio establecido en la ley. 
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 86,
    date:"12 de enero de 2024",
    event:"Corte de Constitucionalidad deniega amparos a Rudio Lecsan y Liga Pro Patria ",
    observations:`
    La Corte de Constitucionalidad confirmó que el binomio electo puede asumir el 14 de enero, al no otorgar los amparos a Rudio Lecsan Mérida y Liga Pro Patria que buscaban impedir que se llevara a cabo la toma de posesión aduciando irregularidades en el proceso legislativo. 
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 87,
    date:"12 de enero de 2024",
    event:"Comisión Permanente del Congreso declara provisionalmente a los diputados del partido Semilla como independientes",
    observations:`
    La Comisión Permente del Congreso notifició a los diputados de semilla la resolución en la que toman nota de la suspensión temporal de la persona jurídica del partido Movimiento Semilla y declara provisionalmente a los diputados de este bloque legislativo cmo diputados independientes, por orden del juez 7o de Instancia penal.<br> 
    Por lo que los  diputados de semilla quedan excluidos de integrar la Junta Directiva del Congreso, liderar comites o participar en la preparacion de la agenda legislativa.
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 88,
    date:"13 de enero de 2024",
    event:"Diputado Julio Héctor Estrada presenta acción de amparo ante la Corte de Constitucionalidad  en contra de los requisitos requeridos por la Junta Directiva del Congreso para dar toma de posesión. El Amparo provisional fue denegado por la Corte de Constitucionalidad.",
    observations:`
    La corte resolvió denegar el amparo provisional al diputado electo Julio Héctor Estrada, quien denunció la amenaza de que no se le diera posesión. 
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 89,
    date:"13 de enero de 2024",
    event:"El partido Movimiento Semilla presentó una acción de amparo contra la decisión de la Comisión Permanente de declarar a sus diputados independientes. El Amparo Provisional fue denegado por la Corte de Constitucionalidad",
    observations:`
    La corte resolvió denegar el amparo provisional al partido Movimiento Semilla, promovida en contra de la decisión de la Comisión Permanente de declarar a los diputados de este partido como independientes en cumplimiento a lo ordenado por el Juez 7o de Instancia Penal. 
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 90,
    date:"14 de enero de 2024",
    event:"Partido Movimiento Semilla presenta debida ejecución ante la Corte de Constitucionalidad.",
    observations:`
    El partido Movimiento Semilla presentó una debida ejecución de la Sentencia de Amparo dictada el 14 de diciembre de 2023. Con el propósito de revocar la decisión de declarar a los diputados electos de este partido como independientes, por orden de suspensión del partido dictada por el Juez 7o de Instancia Penal.<br>
    La Corte de Constitucionalidad resolvió denegar la debida ejecución ordenando que se juramente a los diputados electos. Sin embargo, estos serán declarados como diputados independientes. 
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 91,
    date:"14 de enero de 2024 - 9:00",
    event:"Sesión Solemne del Congreso de la República",
    observations:`
    Se aperturó la sesión solemne y la diputada Shirley Rivera, presidenta del Congreso, dio un discurso previo a que se procediera a votar el acta de la sesión extraordinaria anterior. 
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 92,
    date:"14 de enero de 2024 - 11:00 - 14:00",
    event:"Se suspende Sesión Solemne para que Comisión revisora de Credenciales lleve a cabo su labor",
    observations:`
    La sesión solemne se suspendió para darle espacio a la Comisión Revisora de Credenciales para que lleve a cabo la revisión de los requisitos para juramentar a los nuevos diputados que conformarán la décima legislatura.<br><br> 
    Sin embargo, durante la labor de esta comisión se denunció el desconocimiento respecto a los mecanismos empleados para integrarla. Finalmente, la labor de esta comisión se suspendió debido a disturbios entre diputados electos, diputados salientes, seguridad del Congreso y periodistas.
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 93,
    date:"14 de enero de 2024 - 15:44",
    event:"Grupo de abogados presenta solicitud de debida ejecución de sentencia de Amparo de la Corte de Constitucionalidad",
    observations:`
    Abogados presentan ante la Corte de Constitucionalidad solicitud de debida ejecución de la sentencia de amparo dictada el 14 de diciembre de 2023.<br> 
    A efecto de que la Corte de Constitucionalidad se pronuncie para asegurar el cumplimiento del amparo y garantizar la transición de mando. 
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 94,
    date:"14 de enero de 2024 - 16:00 ",
    event:"Comisión Revisora de Credenciales retoma su labor",
    observations:`
    Luego de que la diputada Shirley Rivera, presidenta del Congreso, llevara a cabo una conferencia de prensa, la Comisión Revisora de Credenciales retomó su labor previa a la juramentación de los diputados electos.<br>
    Los diputados de la comisión acordaron recomendar la no juramentación del diputado Julio Héctor Estrada y someter a discusión del Pleno el estatus en el que tomarán posesión los diputados del partido Movimiento Semilla. Si se les dará la calidad de diputados independientes o si se reconocerán como un bloque legislativo. 
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 95,
    date:"14 de enero de 2024 - 17:00 ",
    event:"Luis Almagro junto a representantes de delegaciones internacionales, hacen un llamado al Congreso de la República para continuar con la transición de gobierno.",
    observations:`
    Luego de un retraso de horas en la sesión solemne para la juramentación de los diputados electos, Luis Almagro junto a representantes de delegaciones internacionales, hacen un llamado al Congreso de la República para que continúe el proceso conforme a la ley y se realice la transición de mando el 14 de enero. 
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 96,
    date:"14 de enero de 2024 - 18:00 ",
    event:"Se reanuda Sesión Plenaria del Congreso.",
    observations:`
    Concluida la labor de la Comisión Revisora de Credenciales se reanudó la Sesión Solemne para juramentar a los diputados electos que integran la décima legislatura.<br> 
    Previo a la Juramentación el Congreso aprobó acuerdo en el que decidieron:<br>
    <br>1. No juramentar del diputado Julio Héctor Estrada (Cabal) quien, a pesar de haber presentado su finiquito del 2024, al validarse en el sistema de la Contraloría General de Cuentas, la Comisión identificó que existe una denuncia en su contra.
    <br><br>2. Declarar independientes a los diputados:
    <br>a) Adim Maldonado, por haber sido expulsado del partido UNE
    <br>b) José Inés Castillo, por haber sido expulsado del partido UNE
    <br>c) 23 diputados del partido Movimiento Semilla, por suspensión de la personalidad jurídica del partido político ordenada por el juez Freddy Orellana. 

    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 97,
    date:"14 de enero de 2024 - 19:50",
    event:"Juramentación de los diputados Electos.",
    observations:`
    Se juramentaron los diputados.
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 98,
    date:"14 de enero de 2024 - 20:40",
    event:"Corte de Constitucionalidad de oficio da audiencia",
    observations:`
    La Corte de Constitucionalidad de oficio da audiencia por 2 horas al Presidente del Congreso para que informe sobre la sesión solemne que se está llevando a cabo en un término máximo de 1 hora.
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 99,
    date:"14 de enero de 2024 - 20:40",
    event:"Corte de Constitucionalidad da audiencia dentro de debida ejecución presentada por abogados en defensa de la democracia ",
    observations:`
    La Corte de Constitucionalidad resolvió dar audiencia al Presidente de la República, el Congreso de la República y la Junta Directiva del Congreso por 2 horas para que rindan informe circunstanciado sobre el cumplimiento a la sentencia dictada por la corte el 14 de diciembre de 2023.
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 100,
    date:"14 de enero de 2024 - 21:30",
    event:"Elección Junta Directiva.",
    observations:`
    El Congreso de la República eligió a la junta directiva para el 2024-2025, la que estará integrada de la siguiente forma:<br> 
    <br> Samuel Pérez - Presidente
    <br> Adim Maldonado - Primer Vicepresidente 
    <br> César Amézquita - Segundo Vicepresidente
    <br> Nery Rodas - Tercer Vicepresidente
    <br> Andrea Villagrán - Primer Secretario 
    <br> Raúl Solórzano – Segundo Secretario
    <br> César Roberto Dávila - Tercer Secretario
    <br> Juan Carlos Rivera - Cuarto Secretario 
    <br> Sonia Gutiérrez Raguay - Quinto secretario

    <br><br>Posteriormente la pleno de la décima legislatura acordó reformar el acuerdo 1-2024 a efecto de incluir al diputado Julio Héctor Estrada en el listado de los diputados a tomar posesión, revertir la expulsión de los diputados Adim Maldonado e Inés Castillo del partido UNE y reconcer al Bloque Semilla como un Bloque Legislativo. 
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 101,
    date:"14 de enero de 2024 - 22:00",
    event:"Presentación del 4to Informe de Gobierno Saliente ",
    observations:`
    Durante la Sesión Solemne se informó sobre la presentación por escrito del Cuarto Informe de Gobierno por parte del Presidente Alejandro Giammattei.
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 102,
    date:"14 de enero de 2024 - 22:30",
    event:"Receso de la Sesión Plenaria y Traslado a Centro Cultura Miguel Ángel Asturias ",
    observations:`
    Se otorga un receso de la sesión solemne con el propósito de que las autoridades se trasladen al Centro Cultural Miguel Ángel Asturias, para continuar con el acto de transmisión de mando. 
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 103,
    date:"14 de enero de 2024 - 23:40",
    event:"Se reinicia la sesión solemne en el Centro Cultural Miguel Ángel Asturias",
    observations:`
    `,
    left: false,
    icon: "/images/1.jpeg",
  },
  {
    id: 104,
    date:"15 de enero de 2024 - 00:15",
    event:"Juramentación y Toma  de Posesión del Presidente y Vicepresidente para el periodo 2024-2028",
    observations:`
    En la Gran Sala Efraín Recinos del Centro Cultura Miguel Ángel Asturias, se continúa con la Sesión Solemene y se realiza la juramentación y toma de posición del Presidente Bernardo Arévalo y Vicepresidenta Karin Herrera.<br>
    Posteriormente se coloca la banda presidencial al nuevo gobernante, se le impone el pin presidencial y se le entregan las llaves de la urna de la primera Constitución Política de la República, para finalizar con la firma del libro de oro del Congreso. 
    `,
    left: true,
    icon: "/images/2.jpeg",
  },
  

/*   {
    id: 65,
    date: "Enero de 2024",
    event: "Transición de Mando - Tercera etapa",
    observations: "Entrega de informe por parte del gobierno saliente al gobierno entrante.",
    annexes: "",
    left: true,
    icon: "/images/3.jpeg"
  },
  {
    id: 66,
    date: "14 de enero de 2024 - 9:00",
    event: "Sesión Solemne del Congreso de la República",
    observations: "En la Sesión Solemne del Congreso se juramenta a los nuevos diputados electos y se elige a la nueva junta directiva.",
    annexes: "",
    left: true,
    icon: "/images/3.jpeg"
  },
  {
    id: 67,
    date: "14 de enero de 2024",
    event: "Presentación del 4to Informe de Gobierno Saliente ",
    observations: "Durante la Sesión Solemne del Congreo se presenta el Cuarto Informe del Gobierno por el Presidente Alejandro Giammattei.",
    annexes: "",
    left: true,
    icon: "/images/3.jpeg"
  },
  {
    id: 68,
    date: "14 de enero de 2024",
    event: "Receso de la Sesión Plenaria y Traslado a Teatro Nacional ",
    observations: "Se otorga un receso de la sesión solemne con el propósito de que las autoridades se trasladen al Teatro Nacional, para continuar con el acto de transmisión de mando. ",
    annexes: "",
    left: true,
    icon: "/images/3.jpeg"
  }, 
  {
    id: 86,
    date: "14 de enero de 2024",
    event: "Toma de posesión de autoridades electas",
    observations: "",
    annexes: "",
    left: true,
    icon: "/images/7.png"
  },*/
  ];
  
    export default timeEvents;