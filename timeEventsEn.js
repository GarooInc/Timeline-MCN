const timeEventsEn = [
    {
      id: 1,
      date: "January 20, 2023",
      event: "Call for General Elections",
      observations: "The Supreme Electoral Tribunal published Decree 1-2023 in which it calls for general elections.",
      annexes: "DECREE 1-2023 TSE",
      left: true,
      icon: "/images/3.jpeg",
      link: "https://drive.google.com/file/d/14rGq9vmA8iQgui_Amcr6cLTRb8_5zLcf/view?usp=drive_link"
    },
    {
      id: 2,
      date: "January 21, 2023 to March 26, 2023",
      event: "Candidate Registration Phase",
      observations: "Political parties register their candidates for the positions of president, vice president, municipal corporation, national and district deputies, and the Central American Parliament.",
      annexes: "",
      left: true,
      icon: "/images/3.jpeg"
    },
    {
        id: 3,
        date: "March 13, 2023",
        event: "Complaint presented by Pedro Cruz",
        observations: "Pedro Cruz filed a complaint for the registration of Manuel Baldizón as a candidate for deputy for the CAMBIO party.",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
      id: 4,
      date: "March 27, 2023 to June 23, 2023",
      event: "Electoral Propaganda",
      observations: "Political parties carry out electoral propaganda for registered candidates.",
      annexes: "",
      left: true,
      icon: "/images/3.jpeg"
    },
    {
      id: 5,
      date: "June 25, 2023",
      event: "General Elections",
      observations: "On June 25, the general elections were held, in which the new officials who will serve as municipal corporation, national and district deputies and the Central American Parliament were appointed. Additionally, it was defined that the presidential binomials of the Movement parties Semilla and UNE will participate in the second round.",
      annexes: "",
      left: true,
      icon: "/images/3.jpeg"
    },
    {
      id: 6,
      date: "June 26, 2023-June 30, 2023",
      event: "Scrutiny review hearings",
      observations: "The Departmental Electoral Board proceeds in the scrutiny review hearings. The Vote Receiving Boards, the delegate of the Citizen Registry, the delegate of the General Inspection and the departmental prosecutor or the person designated by the departmental secretary participate in the hearings. or national of the political parties. Only cases in which the political party prosecutor has challenged the vote counting process and that is ratified in the review may be reviewed.",
      annexes: "",
      left: true,
      icon: "/images/3.jpeg"
    },
    {
        id:7,
        date: "June 29, 2023",
        event: "Complaint filed by Giovanni Fratti and Karen Fisher",
        observations: "Complaint filed by Giovanni Fratti and Karen Fisher against the Magistrates of the Supreme Electoral Tribunal",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id:8,
        date: "June 30, 2023",
        event: "Political Parties present protection before the Constitutional Court to suspend the electoral results",
        observations: "The parties Cambio, Mi Familia, Valor, Podemos, Vamos, CREO, UNE, Cabal and Azul presented an action for protection, indicating as the claimed act the threat of charges being awarded based on records in charge of the electoral authorities that were allegedly altered.",
        annexes: "Amparo Memorial presented by the 9 political groups",
        left: false,
        icon: "/images/1.jpeg",
        link: "https://drive.google.com/file/d/1LdPmau4JANbkd-sJF8ALJmyaapamvLg4/view?usp=drive_link"
    },
    {
        id: 9,
        date: "July 1, 2023",
        event: "The Constitutional Court decrees provisional protection so that the elections can be reviewed again",
        observations: "As a precautionary measure, the Constitutional Court decreed provisional protection, specifying as positive efectos that: a) The Departmental Electoral Boards and the Central District Electoral Boards convene a new hearing to review the scrutiny; b) after this activity has been carried out, that the competent electoral bodies carry out a comparison between the minutes that were part of the electoral process in order to determine whether each one of them complied with the legal requirements; c) while these situations are clarified, the Supreme Electoral Tribunal must suspend the qualification and officialization of the results.",
        annexes: "Resolution admitting the action for protection and decreeing provisional protection for prevention.",
        left: false,
        icon: "/images/1.jpeg",
        link: "https://drive.google.com/file/d/1hZ20inKAFN5ZRUcnHVUSLsHGUhfunFo-/view?usp=drive_link"
      },{
        id: 10,
        date: "July 5, 2023",
        event: "Departmental Electoral Boards and the Central District Board hold new hearings to review the scrutiny",
        observations: "In compliance with what was ordered by the Constitutional Court, the Departmental Electoral Boards and the Central District Board held new hearings to review the scrutiny.",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
      },
    {
        id: 11,
        date: "Week of July 3-7, 2023",
        event: "Officialization of results by the Supreme Electoral Tribunal",
        observations: "Once the review hearings have concluded, the Supreme Electoral Tribunal must disseminate the electoral results through all media and define the parties that will participate in the second election for the position of President and Vice President.",
        annexes: "",
        left: true,
        icon: "/images/3.jpeg"
    },
    {
        id: 12,
        date: "July 8, 2023",
        event: "Order of the Constitutional Court",
        observations: "Supreme Electoral Court renders a detailed report and requests that the Provisional Amparo decreed by the Constitutional Court be considered fulfilled",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"

    },
    {
        id: 13,
        date: "July 10, 2023",
        event: "Resolution of the Supreme Court of Justice",
        observations: "The Supreme Court of Justice resolves that the Supreme Electoral Tribunal complied with what was ordered by the Constitutional Court",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"

    },
    {
        id: 14,
        date: "July 12, 2023",
        event: "Order to suspend the Semilla Movement party",
        observations: "Judge 7th of Criminal Instance, Narcoactivity and Crimes against the Environment orders the suspension of the Semilla Movement party",
        annexes: "Official letter dated July 12, 2023, delivered to the Citizen Registry on July 12, 2023. SEED CORRUPTION CASE SHEET + MP PRESENTATION",
        left: false,
        icon: "/images/1.jpeg",
        links:[
        "https://drive.google.com/file/d/1QFRuF8mZ9W8bNgz0PfhQcfXTuRU5opKN/view?usp=drive_link",
        "https://drive.google.com/file/d/1VUZonLFoTW13KiOhH19h6Ge3boqwi0w8/view?usp=drive_link"
        ],
        file:{
            name:"Seed Corruption Case",
            desc: "According to statements by Prosecutor Rafael Curruchiche, there are indications that possibly more than 5,000 citizens were illegally joined the party, through falsification of their handwriting and signature, and 12 deceased people were registered. Furthermore, according to the statements of the Ministry Public, the Semilla Movement party hired signature collection services for which it would supposedly pay Q7.00 per signature collected. Which supposedly gives indications about the possible commission of crimes of money laundering or other assets.",
            sit: "The file is reserved by the FECI. The Public Ministry has been investigating the case for an unknown amount of time and it is not known with certainty what started the investigation, what they have collected or who would be involved. Well, no one has access to that file .<br> The Public Ministry can, at this stage, ask the judge to authorize raids. In this case, the 7th Criminal Instance Judge has authorized raids on the Supreme Electoral Tribunal, as well as on the headquarters of the Semilla Movement party and the kidnapping of documents.",
            efectos: "The Judge decreed as a precautionary measure the provisional suspension of the legal personality of the Semilla Movement party.<br> By losing their legal personality, the deputies of the Semilla Movement party could not join the Board of Directors, chair committees, nor participate as Block Leaders, space in which the Congress agenda is defined.",
            tipo:"Criminal procedure.",
            juez: "7th Judge of First Criminal Instance, Narcoactivity and Crimes against the Environment, Freddy Orellana."
        }

    },
    {
        id: 15,
        date: "July 12, 2023",
        event: "Validation of elections by the Supreme Electoral Tribunal",
        observations: "Supreme Electoral Court declares validity of the elections held on June 25 and confirmed parties that will participate in the second round",
        annexes: "AGREEMENT 1328-2023",
        left: false,
        icon: "/images/1.jpeg",
        link: "https://drive.google.com/file/d/1MooJQKfT_gd5Oui039m25Mqg2mdpLrpo/view?usp=drive_link"
    },{
        id: 16,
        date: "July 13, 2023",
        event: "Raid on the headquarters of the Supreme Electoral Tribunal",
        observations: "Public Ministry raids the headquarters of the Supreme Electoral Tribunal",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id: 17,
        date: "July 13, 2023",
        event: "Order of the Constitutional Court",
        observations: "General Directorate of the Citizen Registry refuses to comply with the order to suspend the Semilla Movement party",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id: 18,
        date: "July 13, 2023",
        event: "Order of the Constitutional Court",
        observations: "The Constitutional Court grants provisional protection, leaving in suspension the resolution of the 7th Criminal Instance Judge that orders the suspension of the Semilla Party",
        annexes: "Seed Provisional Amparo Resolution July 13, 2023",
        left: false,
        icon: "/images/1.jpeg",
        link: "https://drive.google.com/file/d/1Mg8p9EHkUD-s5yhvKNDzEuQ-h5pyHfwS/view?usp=drive_link"
    },
    {
        id: 19,
        date: "July 17, 2023",
        event: "Recusal presented by Movimiento Semilla",
        observations: "Movimiento Semilla presents a challenge against the 7th Judge of Criminal Instance, Narcoactivity and Crimes against the Environment",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id: 20,
        date: "July 18, 2023",
        event: "What is leading to the General Director of the Citizen Registry is certified",
        observations: "The 7th Criminal Instance Judge certified what was relevant to the General Director of the Citizen Registry",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },{
        id: 21,
        date: "July 19, 2023",
        event: "Judge 7th of Criminal Instance does not accept her recusal for processing",
        observations: "",
        annexes: "Resolution dated July 19, 2023 of the 7th Criminal Instance Judge.",
        left: false,
        icon: "/images/1.jpeg",
        link: "https://drive.google.com/file/d/1W3sU4y_CURybWMMnip1ZdoPO4ne78kwS/view?usp=drive_link"
    },
    {
        id: 22,
        date: "July 20, 2023",
        event: "Arrest warrant against Acting Director of the Citizens Registry",
        observations: "Judge 7th of Criminal Instance issues arrest warrant against the Acting Director of the Citizen Registry of the Supreme Electoral Tribunal",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id: 23,
        date: "July 20, 2023",
        event: "Breaking in",
        observations: "The Prosecutor's Office raids the headquarters of the Human Resources office of the Supreme Electoral Tribunal",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id: 24,
        date: "July 21, 2023",
        event: "Semilla Movement headquarters raid",
        observations: "The Prosecutor's Office raids the headquarters of the Semilla Movement political party",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id: 25,
        date: "July 21, 2023",
        event: "Information required by the 7th Criminal Instance Judge",
        observations: "Judge 7th of Criminal Instance tours requires information from the political party Movimiento Semilla",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id: 26,
        date: "July 21, 2023",
        event: "Communication from the Constitutional Court",
        observations: "Constitutional Court issues statement reiterating that the 7th Judge's order lacked legal effect",
        annexes: "CC PRESS RELEASE JULY 21, 2023",
        left: false,
        icon: "/images/1.jpeg",
        link: "https://drive.google.com/file/d/1HwMm0N9_b3gfEaRjedTL-jHmqt6RXWS-/view?usp=drive_link"
    },
    {
    id: 27,
    date: "August 20, 2023",
    event: "Second round for presidential election",
    observations: "In the second round the presidential duo of the Semilla Movement party won.",
    annexes: "",
    left: true,
    icon: "/images/3.jpeg"
    },
    {
        id: 28,
        date: "August 21, 2023",
        event: "UNE Party enters Permanent Session",
        observations: "",
        annexes: "UNE PARTY COMMUNICATE",
        left: false,
        icon: "/images/1.jpeg",
        link: "https://drive.google.com/file/d/15rdcZy_BUJzAVrQhULESwluEp45zKAWh/view?usp=drive_link"
    },
    {
        id: 29,
        date: "August 22, 2023",
        event: "Information about voting centers",
        observations: "The Public Ministry requires information about voting centers from the Supreme Electoral Tribunal",
        annexes: "4 Letters requesting information from the TSE",
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
        date: "August 23, 2023",
        event: "Request for withdrawal of pretrial",
        observations: "Administrative Crimes Prosecutor's Office presents a request for withdrawal of pretrial proceedings against Magistrates of the Supreme Electoral Tribunal",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },{
        id: 31,
        date: "August 24, 2023",
        event: "Pedro Cruz presents withdrawal of his complaint",
        observations: "",
        annexes: "First page of withdrawal memorial",
        left: false,
        icon: "/images/1.jpeg",
        link: "https://drive.google.com/file/d/1uaTLp0PzzxeANallosc8rIcQ1AhT81SA/view?usp=drive_link"
    },
    {
        id: 32,
        date: "August 24, 2023",
        event: "Cauteral measures in favor of Bernardo Arévalo and Karin Herrera",
        observations: "Inter-American Commission on Human Rights decrees precautionary measures in favor of Bernardo Arévalo and Karin Herrera",
        annexes: "RESOLUTION 48/2023 of the IACHR",
        left: false,
        icon: "/images/1.jpeg",
        link:"https://drive.google.com/file/d/1xJhlVYR4XuXBqSTc1Q4nN4U3L8EilTJl/view?usp=drive_link"
    },
    {
        id: 33,
        date: "August 26, 2023",
        event: "Election fraud complaint",
        observations: "UNE Party denounces fraud in the August 20 elections",
        annexes: "UNE Communiqué - Electoral Fraud",
        left: false,
        icon: "/images/1.jpeg",
        link: "https://drive.google.com/file/d/1IOSKia-7IquDG4gVz99xXdyhj-tAoHgn/view?usp=drive_link"
    },
    {
        id: 34,
        date: "August 28, 2023",
        event: "Legalization of the presidential binomial of the Movimiento Semilla party",
        observations: "Supreme Electoral Court declares the presidential binomial of the Semilla Movement party legally elected",
        annexes: "AGREEMENT 1659-2023 OF THE SUPREME ELECTORAL TRIBUNAL",
        left: false,
        icon: "/images/1.jpeg",
        link:"https://drive.google.com/file/d/1P0U9smEA2q-BS1g-kDB43aSJpyLYoLe7/view?usp=drive_link"
    },
    {
        id: 35,
        date: "August 28, 2023",
        event: "Seed Movement match suspension",
        observations: "General Directorate of the Citizen Registry temporarily suspends the Semilla Movement party",
        annexes: "Citizen Registration Resolution Suspends Seed",
        left: false,
        icon: "/images/1.jpeg",
        link:"https://drive.google.com/file/d/1AWL4SpG-mYF98aZyZw1ZokG1SHamkGwy/view?usp=drive_link"
    },
    {
        id: 36,
        date: "August 30, 2023",
        event: "Office suspending the Semilla Movement bench",
        observations: "The Congress of the Republic receives an Official Letter in which the registration of a legal entity of the Committee for the constitution of the Semilla Movement political party and the Semilla Movement Political Party is provisionally suspended",
        annexes: "Certification of the Congressional Board of Directors resolution that suspends the Semilla Movement bench, MINUTES OF THE PLENARY SESSION OF AUGUST 30, 2023 MINUTES 014-2023",
        left: false,
        icon: "/images/1.jpeg",
        links:[
            "https://drive.google.com/file/d/198PqZi_rIypEKgcdpfKlH9atSWb_l3tf/view?usp=drive_link",
            "https://drive.google.com/file/d/1o1M9MoAytvgzKJZ7gvZCHnnUmDbugh0k/view?usp=drive_link"
        ]
    },
    {
        id: 37,
        date: "August 2023",
        event: "Complaint against Magistrates of the Supreme Electoral Tribunal",
        observations: "They present an extension of the complaint against Magistrates of the Supreme Electoral Tribunal",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
    {
        id: 38,
        date: "September 2, 2023",
        event: "Suspension by the Supreme Electoral Tribunal",
        observations: "The Supreme Electoral Tribunal suspends the resolution of the Director of the Citizen Registry that provisionally suspended the Movimiento Semilla party",
        annexes: "TSE resolution dated September 2, 2023.",
        left: false,
        icon: "/images/1.jpeg",
        link:"https://drive.google.com/file/d/1z7eDdvB0E40-tyVf5KyVKYFwpSuaLNLQ/view?usp=drive_link"
    },
    {
        id: 39,
        date: "September 8, 2023",
        event: "Revocation of suspension",
        observations: "Congress of the Republic revokes decision to Suspend the Legislative Block of the Semilla Movement",
        annexes: "",
        left: false,
        icon: "/images/1.jpeg"
    },
  {
    id: 40,
    date: "September 11, 2023",
    event: "Command Transition - First stage",
    observations: "Delivery to the elected government of operational, administrative and institutional information.",
    annexes: "",
    left: true,
    icon: "/images/3.jpeg"
  },{
    id: 41,
    date: "September 12, 2023",
    event: "Breaking in",
    observations: "Raid on the facilities of the Citizen Registry Directorate",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 42,
    date: "September 12-14, 2023",
    event: "Breaking in",
    observations: "Raid on the Facilities of the Electoral Process Operations Center of the Supreme Electoral Tribunal, located in the Parque de la Industria",
    annexes: "SEARCH, INSPECTION AND REGISTRATION ORDER DATED SEPTEMBER 7, 2023.",
    left: false,
    icon: "/images/1.jpeg",
    link:"https://drive.google.com/file/d/1YOmugvqRZaQClfjIOkTwIDvkI8ojYkfv/view?usp=drive_link"
  },
  {
    id: 43,
    date: "September 13, 2023",
    event: "Question of Competence",
    observations: "Supreme Electoral Court presents a Question of Competence before the Constitutional Court.",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 44,
    date: "September 13, 2023",
    event: "Complaint",
    observations: "Public Ministry reports a new complaint associated with the Semilla Corruption Case",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 45,
    date: "September 27, 2023",
    event: "Pretrial request",
    observations: "Public Ministry presents request for pre-trial against the Magistrates of the Supreme Electoral Tribunal",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 46,
    date: "September 29, 2023",
    event: "Breaking in",
    observations: "Raid on the facilities of the Supreme Electoral Tribunal",
    annexes: "TSE PRESS RELEASE September 29",
    left: false,
    icon: "/images/1.jpeg",
    link:"https://drive.google.com/file/d/1FHww8kcOdnlVrxlNWLtjteMg2vMMniwp/view?usp=drive_link"
  },
  {
    id: 47,
    date: "October 5, 2023",
    event: "Competence issue resolution",
    observations: "The Constitutional Court resolves the Question of Competence presented by the Supreme Electoral Tribunal",
    annexes: "Resolution of Competence Issue",
    left: false,
    icon: "/images/1.jpeg",
    link:"https://drive.google.com/file/d/1cw1MUngLIFCBpR1O2Tc7fEJC28GG29j4/view?usp=drive_link"
  },
  {
    id: 48,
    date: "October 31, 2023",
    event: "End of the electoral process",
    observations: "The Supreme Court must proceed to the conclusion and disclosure of official results.",
    annexes: "",
    left: true,
    icon: "/images/3.jpeg"
  },

  {
    id: 49,
    date: "November 1 to January 2024",
    event: "Command Transition - Second stage",
    observations: "Transitional sector meetings.",
    annexes: "",
    left: true,
    icon: "/images/3.jpeg"
  },
  {
    id: 50,
    date: "November 7, 2023",
    event: "Antejuicio",
    observations: "Supreme Court of Justice admits pretrial proceedings against Magistrates of the Supreme Electoral Tribunal and sends proceedings to the Congress of the Republic to continue the process",
    annexes: "Resolution of Admission of Pretrial against Magistrates of the TSE and reasoned vote against.",
    left: false,
    icon: "/images/1.jpeg",
    link:"https://drive.google.com/file/d/1ZORku8vfYyYoy9r3T_gnSUQ25ufMMpSl/view?usp=drive_link",
    file:{
        name:"Karen Fisher and Giovanni Fratti denounce",
        desc: "The complaint was filed on 06/29/2023, alleging electoral fraud. However, according to statements from the complainants, the complaint was expanded in August 2023. In the extension, they pointed out irregularities in the acquisition of the System to the Transmission of Electoral Results (TREP). The complaint was filed against all the TSE magistrates.",
        sit: "The Public Ministry presented a request for a pretrial, which was admitted by the Supreme Court of Justice and the file was sent to the Congress of the Republic.<br>The Congress formed the Investigative Commission in charge of hearing the request for a pretrial that has been held sessions and has listened to different actors. <br>They are expected to render their report on November 28, given that the president's proposal to render it in January 2024 was rejected.",
        efectos: "In its statements the Public Ministry has stated that the complaint only refers to the acquisition of the TREP system and that it would not affect the results of the elections. However, the complainants during the session before the commission did refer to an alleged electoral fraud.",
        tipo:"Criminal procedure.",
        juez: "The complaint has not been sent to any Judge, because Congress is currently hearing the pre-trial process. In the event that Congress decides to withdraw the pre-trial from the magistrates, the proceedings will be sent to the Supreme Court of Justice who will order the proceedings to be returned to a criminal judge."
    }

  },
  {
    id:51,
    date: "November 9, 2023",
    event: "Action of Amparo",
    observations: "Magistrates of the Supreme Electoral Tribunal present an Amparo Action against the admission of the pretrial against them",
    annexes: "Memorial of Amparo presented by Magistrates Irma Elizabeth Valencia Orellana. Memorial of Amparo presented by Magistrates Marco Antonio Cornejo Marroquín, Marlon Josué Barahona Catalán and Alvaro Ricardo Cordón Paredes.",
    left: false,
    icon: "/images/1.jpeg",
    links:[
        "https://drive.google.com/file/d/1Y7fgFVOL5XiX2vxNahdlYuB03qXauImU/view?usp=drive_link",
        "https://drive.google.com/file/d/1uWl2NxB1t30Leud_sLBz5fHmLQHW8Dy6/view?usp=drive_link"
    ]
  },
  {
    id: 52,
    date: "November 15, 2023",
    event: "Integration of the Investigative Commission",
    observations: "Congress of the Republic integrates the Investigative Commission that hears the Pretrial against the Magistrates of the Supreme Electoral Tribunal",
    annexes: "Minutes of Ordinary Session 025-2023",
    left: false,
    icon: "/images/1.jpeg",
    link:"https://drive.google.com/file/d/19qGkP1PjCLfZNwpFMCfueJjRvP2sQNVb/view?usp=drive_link"
  },{
    id:53,
    date: "November 17, 2023",
    event: "Pretrial request",
    observations: "Public Ministry presents request for pre-trial against Bernardo Arévalo, Karin Herrera, Samuel Pérez, Raul Barrera, Carlos Barrera and Adán Pérez y Pérez",
    annexes: "CASE FILE + PRESENTATION OF THE MP ON THE CASE.",
    left: false,
    icon: "/images/1.jpeg",
    link:"https://drive.google.com/file/d/1_klwHTFyA9fv-n3O_4qdWQxlFQf3UieD/view?usp=drive_link",
    file:{
        name:"USAC Takeover Case: Political Loot",
        desc: "The process began following a complaint from the rector of the USAC, Walter Mazariegos. Who reported the structural damage to its facilities after having been taken over for more than a year and returned to the authorities on June 9, 2023. In the complaint It involves students, professors and other people such as: Bernardo Arévalo, Karin Herrera, Samuel Pérez, Román Castellanos, Aldo Dávila, Carlos Barrera, Raúl Barrera and Adán Pérez y Pérez; against whom a request for a pretrial was filed.",
        sit: "Requests for pre-trial were presented that have not been resolved by the Supreme Court of Justice. Some accused were detained and linked to proceedings.",
        efectos: "During the presentation of the case at a press conference, the Public Ministry denounced that the illicit acts served as a platform for the candidacies of Bernardo Arévalo and Karin Herrera, so there is a risk that an attempt will be made to attack the legality of their candidacies by arguing that these were founded on illicit acts.",
        tipo: "Criminal process for the crimes of continuous aggravated usurpation, depredation of cultural property, continuous sedition and illicit association.",
        juez: "10th Judge of First Instance Criminal, Narcoactivity and Crimes against the Environment, Víctor Manuel Cruz Rivera."
    }
  },
  {
    id:54,
    date: "November 20, 2023",
    event: "First Meeting",
    observations: "First Meeting of the Investigative Commission of the Supreme Electoral Tribunal",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id:55,
    date: "November 21, 2023",
    event: "Investigative Commission",
    observations: "Investigative Commission - Pretrial Magistrates Supreme Electoral Tribunal decides work schedule",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id:56,
    date: "November 21, 2023",
    event: "Provisional protection",
    observations: "The Constitutional Court decrees Provisional Amparo in favor of Magistrates Blanca Alfaro, current president of the Supreme Electoral Tribunal; and the Supplementary Magistrates Álvaro Cordón, Marlon Barahona and Marco Antonio Cornejo",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg",
    links:[
        "https://drive.google.com/file/d/1yFee2kixQ0-HlBabGgcREZD7-otAu4M8/view?usp=drive_link",
        "https://drive.google.com/file/d/1B9tBmjoO161rUHKUpvSG_y6ZkD5E829Y/view?usp=drive_link"
    ]
  },{
    id:57,
    date: "November 21, 2023",
    event: "Audience start",
    observations: "Beginning of hearing for the first statement of people detained for the USAC Takeover Case: Political Loot",
    annexes: "CASE FILE + PRESENTATION OF THE MP ON THE CASE.",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id:58,
    date: "November 22, 2023",
    event: "Investigative Commission",
    observations: "Investigative Commission - Pretrial Magistrates of the Supreme Electoral Court receives the Public Ministry",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id:59,
    date: "November 22, 2023",
    event: "Pretrial request",
    observations: "Public Ministry presents request for pre-trial against deputies Román Wilfredo Castellanos Caal and Aldo Iván Dávila Morales",
    annexes: "CASE FILE + PRESENTATION OF THE MP ON THE CASE.",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 60,
    date: "November 23, 2023",
    event: "Suspension of the Semilla Movement party",
    observations: "Public Ministry informs Congress about the suspension of the Semilla Movement party",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 61,
    date: "November 24, 2023",
    event: "End of hearing",
    observations: "The hearing of the first statement of people detained for the USAC Takeover Case: Political Loot ends",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 62,
    date: "November 24, 2023",
    event: "Investigative Commission",
    observations: "Investigative Commission -Pretrial Magistrates Supreme Electoral Tribunal receives Karen Fisher and Giovanni Fratti to ratify their complaint",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 63,
    date: "November 25, 2023",
    event: "Presentation of complaint",
    observations: "Comptroller General of Accounts presents 2 complaints against Magistrates of the Supreme Electoral Tribunal",
    annexes: "CASE FILE",
    left: false,
    icon: "/images/1.jpeg",
    file:{
        name:"Comptroller General of Accounts Complaint – TREP System Acquisition",
        desc: "The complaint was filed for possible abuse of authority and breach of duties against the TSE magistrates, related to the acquisition of the computer program for the Transmission of Electoral Results (TREP) for a value of Q148 million. According to statements from the Comptroller General of Accounts established a lack of efficient planning and supporting documentation.",
        sit: "The complaint was filed in the MP. It is important to note that there is already a complaint regarding the acquisition of the TREP, so there is the possibility that this will be accumulated with the complaint from Giovanni Fratti and Karen Fisher.",
        efectos: "According to statements from the Comptroller General of Accounts, the process will not affect the results of the elections.",
        tipo:"Criminal procedure.",
        juez:"No application has been submitted."
    }
  },
  {
    id: 64,
    date: "November 27, 2023",
    event: "Investigative Commission",
    observations: "Investigative Commission -Pretrial Magistrates Supreme Electoral Tribunal receives representatives of the company Datasys and some Magistrates of the Supreme Electoral Tribunal",
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 65,
    date: "November 29, 2023",
    event: "Investigative Commission issues report that recommends withdrawing the pretrial proceedings against the TSE Magistrates",
    observations: `
    The investigative commission issued the corresponding report. The commission decided, with 3 votes in favor and 2 votes against, to recommend withdrawing the immunity of the judges of the Supreme Electoral Tribunal to whom the Constitutional Court did not grant provisional protection.
    The votes were like this:<br>
    ▪️President of the commission: Julio Enrique Montano, voted against withdrawing immunity.<br>
    ▪️Secretary: Julio César Longo, voted in favor of withdrawing immunity.<br>
    ▪️Vocal I: Flavio Valdemar Muñoz, voted in favor.<br>
    ▪️Vocal II: Douglas Rivero Mérida, voted in favor.<br>
    ▪️Vocal III: Osmundo René Ponce, voted against.`,
    annexes: "",
    left: false,
    icon: "/images/1.jpeg",
    link: "https://drive.google.com/file/d/1NLO1OY6Fy7U96-3yGvBRqvAi25QZZtAh/view?usp=drive_link"
  },
  {
    id: 66,
    date: "November 30, 2023",
    event: "Plenary of Congress Knows the Report of the Investigative Commission of the pretrial against the Magistrates of the Supreme Electoral Tribunal",
    observations: `
    During the last plenary session of the ordinary period, Congress agreed to withdraw the pretrial proceedings against the TSE judges: Irma Palencia, Ranulfo Rojas, Gabriel Aguilera and Mynor Franco.`,
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },
  {
    id: 67,
    date: "December 8, 2023",
    event: "MP announces the presentation of the request for withdrawal of pretrial proceedings against Bernardo Arévalo",
    observations: `
    The request is presented in the context of the "Semilla Corruption" case for the crimes of continuous use of a falsified document with electoral aggravation, failure to report, disobedience and obstruction of justice.<br> It is argued that Bernardo Arévalo, as general secretary of the party, knew of the adhesion of citizens with false signatures to the political party at the time of its constitution. In addition, a request for a preliminary ruling for the crime of money laundering was also presented, because the source of money for a loan for US$44 thousand that the party received was not justified.
    `,
    annexes: "",
    left: false,
    icon: "/images/1.jpeg"
  },{
    id: 68,
    date:"December 8, 2023",
    event:"MP announces case on irregularities in the TREP, minutes number 4 and 8 of the electoral process",
    observations:`
    The MP carried out an investigation based on the electoral documents seized in the raids carried out at the TSE in September 2023.<br> According to the investigation, there were irregularities in the way of filling out minutes number 4 and number 8, as well as inconsistencies between the physical documents and those published in the TREP, for the same reason they stated that they would send the investigation to the TSE for decision-making on the electoral process.<br> In the opinion of the MP, minutes number 4 should be null given the inconsistencies found. For the same reason, the arrest of Jorge Salvador Santos - Director of IT of the TSE for the crimes of abuse of authority and material falsehood and Alejandra Chiroy - Director of the Department of Citizen Registration for abuse of authority was requested.
    `,
    annexes:"Presentation of the MP - ILLEGALITIES COMMITTED BY THE SUPREME ELECTORAL TRIBUNAL IN THE 2023 ELECTORAL PROCESS",
    left: false,
    icon: "/images/1.jpeg",
    link: "https://drive.google.com/file/d/1z5mV4LTpsebko2mgix7-Ee9ikvL8cmFv/view?usp=drive_link"
  },

/* {
    id: 65,
    date: "January 2024",
    event: "Command Transition - Third stage",
    observations: "Delivery of report by the outgoing government to the incoming government.",
    annexes: "",
    left: true,
    icon: "/images/3.jpeg"
  },
  {
    id: 66,
    date: "January 14, 2024 - 9:00",
    event: "Solemn Session of the Congress of the Republic",
    observations: "In the Solemn Session of Congress, the new elected deputies are sworn in and the new board of directors is elected.",
    annexes: "",
    left: true,
    icon: "/images/3.jpeg"
  },
  {
    id: 67,
    date: "January 14, 2024",
    event: "Presentation of the 4th Outgoing Government Report",
    observations: "During the Solemn Session of the Congress, the Fourth Government Report is presented by President Alejandro Giammattei.",
    annexes: "",
    left: true,
    icon: "/images/3.jpeg"
  },
  {
    id: 68,
    date: "January 14, 2024",
    event: "Recess of the Plenary Session and Transfer to the National Theater",
    observations: "A recess of the solemn session is granted with the purpose of the authorities moving to the National Theater, to continue with the act of transmission of command.",
    annexes: "",
    left: true,
    icon: "/images/3.jpeg"
  }, */
  {
    id: 69,
    date: "January 14, 2024",
    event: "Inauguration of elected authorities",
    observations: "",
    annexes: "",
    left: true,
    icon: "/images/7.png"
  },
];

export default timeEventsEn;
