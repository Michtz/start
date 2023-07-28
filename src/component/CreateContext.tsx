import { createContext } from 'react';

export const MainContent = createContext([
  {
    offer: [
      {
        title: 'Angebot',
        content: [
          {
            title: 'Beratung',
            content:
              'Sie möchten Räumlichkeiten neu gestalten und brauchen Unterstützung? Wir beraten Sie gerne bei der Inneneinrichtung, der Farbwahl, der Raumgestaltung und vielem mehr.'
          },
          {
            title: 'Konzept',
            content:
              'Sie wollen einen konkreten Gestaltungsvorschlag für ihre Innenräume? Wir veranschaulichen durch Moodboards, Visualisierungen (3D-Zeichnung) und Pläne die Neugestaltung ihrer Räumlichkeiten.'
          },
          {
            title: 'Ausführung',
            content:
              'Sie bauen um oder Gestalten neu und wollen ihr gestalterisches Konzept detailgetreu umgesetzt wissen? Wir begleiten das Projekt von der Beratung über das Konzept, bis hin zur Schlüsselübergabe!'
          }
        ]
      }
    ],
    overUs: [
      {
        title: 'Über uns',
        content: [
          {
            title: 'Beratung',
            content:
              'Sie möchten Räumlichkeiten neu gestalten und brauchen Unterstützung? Wir beraten Sie gerne bei der Inneneinrichtung, der Farbwahl, der Raumgestaltung und vielem mehr.'
          },
          {
            title: 'Konzept',
            content:
              'Sie wollen einen konkreten Gestaltungsvorschlag für ihre Innenräume? Wir veranschaulichen durch Moodboards, Visualisierungen (3D-Zeichnung) und Pläne die Neugestaltung ihrer Räumlichkeiten.'
          },
          {
            title: 'Ausführung',
            content:
              'Sie bauen um oder Gestalten neu und wollen ihr gestalterisches Konzept detailgetreu umgesetzt wissen? Wir begleiten das Projekt von der Beratung über das Konzept, bis hin zur Schlüsselübergabe!'
          }
        ]
      }
    ],
    about: {
      title: 'Über uns',
      content:
        'Wir sind die Meinhof GmbH, ein Innenarchitektur Büro mit Sitz im Kanton Luzern. Wir beraten, planen und führen Umbau-, Möblierungs- und Umgestaltungsprojekte aus. Mit Leidenschaft und viel liebe zum Detail verwirklichen wir Ihren Traum vom neuen Lebensraum. Über eine Kontaktaufnahme würden wir uns sehr Freuen!',
      id: 'about'
    },
    offerTest: {
      title: 'Angebot',
      content: [
        {
          title: 'Beratung',
          content:
            'Sie möchten Räumlichkeiten neu gestalten und brauchen Unterstützung? Wir beraten Sie gerne bei der Inneneinrichtung, der Farbwahl, der Raumgestaltung und vielem mehr.'
        },
        {
          title: 'Konzept',
          content:
            'Sie wollen einen konkreten Gestaltungsvorschlag für ihre Innenräume? Wir veranschaulichen durch Moodboards, Visualisierungen (3D-Zeichnung) und Pläne die Neugestaltung ihrer Räumlichkeiten.'
        },
        {
          title: 'Ausführung',
          content:
            'Sie bauen um oder Gestalten neu und wollen ihr gestalterisches Konzept detailgetreu umgesetzt wissen? Wir begleiten das Projekt von der Beratung über das Konzept, bis hin zur Schlüsselübergabe!'
        }
      ],
      id: 'offert'
    },
    project: {
      title: 'Projekte',
      content: [
        {
          title: 'Beratung',
          content:
            'Sie möchten Räumlichkeiten neu gestalten und brauchen Unterstützung? Wir beraten Sie gerne bei der Inneneinrichtung, der Farbwahl, der Raumgestaltung und vielem mehr.'
        },
        {
          title: 'Konzept',
          content:
            'Sie wollen einen konkreten Gestaltungsvorschlag für ihre Innenräume? Wir veranschaulichen durch Moodboards, Visualisierungen (3D-Zeichnung) und Pläne die Neugestaltung ihrer Räumlichkeiten.'
        },
        {
          title: 'Ausführung',
          content:
            'Sie bauen um oder Gestalten neu und wollen ihr gestalterisches Konzept detailgetreu umgesetzt wissen? Wir begleiten das Projekt von der Beratung über das Konzept, bis hin zur Schlüsselübergabe!'
        }
      ],
      id: 'projects'
    },
    customersAndClients: {
      title: 'Kunden und Partner',
      content: [
        {
          title: 'Beratung',
          content:
            'Sie möchten Räumlichkeiten neu gestalten und brauchen Unterstützung? Wir beraten Sie gerne bei der Inneneinrichtung, der Farbwahl, der Raumgestaltung und vielem mehr.'
        },
        {
          title: 'Konzept',
          content:
            'Sie wollen einen konkreten Gestaltungsvorschlag für ihre Innenräume? Wir veranschaulichen durch Moodboards, Visualisierungen (3D-Zeichnung) und Pläne die Neugestaltung ihrer Räumlichkeiten.'
        },
        {
          title: 'Ausführung',
          content:
            'Sie bauen um oder Gestalten neu und wollen ihr gestalterisches Konzept detailgetreu umgesetzt wissen? Wir begleiten das Projekt von der Beratung über das Konzept, bis hin zur Schlüsselübergabe!'
        }
      ],
      id: 'customersAndClients'
    },
    location: {
      title: 'Standort',
      content: [
        {
          title: 'Beratung',
          content:
            'Sie möchten Räumlichkeiten neu gestalten und brauchen Unterstützung? Wir beraten Sie gerne bei der Inneneinrichtung, der Farbwahl, der Raumgestaltung und vielem mehr.'
        },
        {
          title: 'Konzept',
          content:
            'Sie wollen einen konkreten Gestaltungsvorschlag für ihre Innenräume? Wir veranschaulichen durch Moodboards, Visualisierungen (3D-Zeichnung) und Pläne die Neugestaltung ihrer Räumlichkeiten.'
        },
        {
          title: 'Ausführung',
          content:
            'Sie bauen um oder Gestalten neu und wollen ihr gestalterisches Konzept detailgetreu umgesetzt wissen? Wir begleiten das Projekt von der Beratung über das Konzept, bis hin zur Schlüsselübergabe!'
        }
      ],
      id: 'location'
    }
  }
]);

export const BlogContent = createContext([
  // Buero Horw
  {
    project: [
      {
        text: ` Die Zusammenstellung der Farben und Materialien beruht auf Naturellen Farben. Das Ziel ist es, mit den Materialien, wie beispielsweise der
            Tapete, etwas Pflanzliches in den Innenraum zu bringen, ohne Pflanzen zu verwenden. Die generelle Farbgestaltung wird hier eher dunkel
            angesetzt, da sich im Innenraum bereits viele helle Flächen befinden, welche nicht überstrichen werden. Die eingebrachten Textilien dienen
            unter anderem der Akustik welche den Raumschall dämpfen.`,
        src: 'https://meinhof.ch/src/bueroHorw/bueroHorwMoodbord.jpg'
      },
      {
        text: ` Beim Besprechungsraum war das Ziel, möglichst viele Variationen der gestalterischen Ausarbeitung zu zeigen. Dafür wurden eigene Möbel 
            (Tisch, Sideboard, Barista Ecke, Wandregale etc.) sowie Designer-Stücke (Stühle, Schreibtischlampe, Tapete etc.) und ganz rudimentäre 
            Einrichtungsgegenstände und Accessoires aus bekannten Möbelhäusern (Tassen, Vase, Teppiche ct.) eingesetzt. Dabei ging es nicht darum, 
            dass Optimum oder die perfekte Serie zu zeigen, sondern möglichst viele Unterschiede im Detail sichtbar zu machen.`,
        src: 'https://meinhof.ch/src/bueroHorw/bueroHorwV02.jpg',
        src2: 'https://meinhof.ch/src/bueroHorw/bueroHorwV01.jpg'
      },
      {
        text: ` Im Atelier und Büroraum steht die Funktion und Ergonomie im Vordergrund. So gibt es einen hohen Bedarf an Stauraum für Bücher und 
            Muster sowie verschiedene Gerätschaften. Der Schreibtisch ist stufenlos Höhenverstellbar um das Arbeiten in verschiedenen Positionen zu 
            ermöglichen. Die Materialien sollen eine klare Verbindung zum Besprechungsraum aufweisen und das Materialkonzept komplementieren.`,
        src: 'https://meinhof.ch/src/bueroHorw/bueroHorwB02.jpg',
        src2: 'https://meinhof.ch/src/bueroHorw/bueroHorwB01.jpg'
      }
    ]
  },

  // Buero Videolution
  {
    project: [
      {
        text: `Die Zusammenstellung der Farben und Materialien beruht auf 
    Naturellen Farben. Das Ziel ist es mit den Materialien 
    wie Beispielsweise der Tapete etwas Pflanzliches in den 
    Innenraum zubringen ohne Pflanzen zu verwenden. Die Generelle 
    Farbgestaltung wird hier ehr Dunkel angesetzt da sich im 
    Innenraum bereits viele helle Flächen befinden, welche 
    nicht überstrichen werden. Die Eingebrachten Textilien 
    dienen unteranderem der Akustik und Dämpfen den Raumschall.`,
        src: 'https://meinhof.ch/src/bueroVideolution/videolutionsMoodboard.jpg'
      },
      {
        text: `Im Besprechungsraum war das Ziel möglichst viele Variationen
   der Gestalterischen Ausarbeitung zu zeigen. Dafür wurden 
   Eigene Möbel (Tisch, Sideboard, Baristaecke, Wandregale ect.)
   sowie Designer Stücke (Stühle, Schreibtischlampe, Tapete ect.)
   und ganz rudimentäre Einrichtung und Accessoires aus Bekannten 
   Möbelhäusern (Tassen, Vase, Teppich ect.) eingesetzt. 
   Dabei ging es nicht Darum das Optimum oder die Perfekte 
   Serie zu zeigen sondern möglichst viele Unterschiede.`,
        src: 'https://meinhof.ch/src/bueroVideolution/videolutions01.jpg',
        src2: 'https://meinhof.ch/src/bueroVideolution/videolutions01.jpg'
      },
      {
        text: ` Im Atelier und Büro-Raum steht die Funktion und Ergonomie im 
   Vordergrund. So gibt es einen hohen Bedarf an Stauraum für 
   Bücher und Muster sowie verschiedene Gerätschaften. 
   Der Schreibtisch ist Stufenlos Höhenverstellbar um das Arbeiten 
   in verschiedenen Positionen zu ermöglichen. Die Materialien 
   sollen eine klare Verbindung zum Besprechungsraum aufweisen 
   und das Materialkonzept komplementieren.`,
        src: 'https://meinhof.ch/src/bueroVideolution/videolutionsPlan.jpg',
        src2: 'https://meinhof.ch/src/bueroVideolution/videolutionsPlan.jpg'
      }
    ]
  },

  // PuristischesBadezimmer
  {
    project: [
      {
        text: `Bei der Materialwahl dieses Badezimmer ging die 
   Konzeptidee von Beginn an stark mit in die Gestaltung 
   ein. So soll ein Badezimmer entstehen, welches sowohl 
   farblich als auch förmlich puristisch wirkt. Farblich 
   heisst das: Grau bis Schwarztöne. Diese Farbkombination 
   wird durch glänzende und matte, strukturierte und glatte, 
   sowie warme und kalte Elemente unterschieden.`,
        src: 'https://meinhof.ch/src/puristischesBadezimmer/puristischeBadezimmerMoodbord.jpg'
      },
      {
        text: `Die bestehenden Anschlüsse werden wiederverwendet. Der Boden
   wird herausgenommen und neu gelegt. Die bestehenden Fliesen
   an den Wänden bleiben bestehen, sie werden mit einem Spezialputz 
   verspachtelt. So bleibt der bauliche Eingriff sehr gering.`,
        src: 'https://meinhof.ch/src/puristischesBadezimmer/puristischesBadezimmerOg01.jpg',
        src2: 'https://meinhof.ch/src/puristischesBadezimmer/puristischesBadezimmerOg02.jpg'
      },
      {
        text: `Die Badmöbel wurden für das Badezimmer geplant, um möglichst 
   viele der benötigten Funktionen  zu bekommen. Der Raum wurde 
   farblich  wie strukturell klar reduziert. Die Reduzierung bewirkt 
   eine deutlich luftigere Atmosphäre in dem kleinen Badezimmer. 
   Alle Materialien und Beschläge wurden so gewählt, dass die 
   Oberflächen miteinander harmonieren und ein stimmiges Gesamtbild 
   erzeugen.`,
        src: 'https://meinhof.ch/src/puristischesBadezimmer/puristischesBadezimmerEg01.jpg',
        src2: 'https://meinhof.ch/src/puristischesBadezimmer/puristischesBadezimmerEg02.jpg'
      }
    ]
  },

  // Studio Neubau
  {
    project: [
      {
        text: `Bei der Wahl der Materialien stand bei diesem Projekt 
   die Nachhaltigkeit und die regionale Verfügbarkeit im 
   Vordergrund. So wurden  natürliche Baustoffe eingesetzt 
   wie z.B. Lehmputz, Holz und Naturstein. Bei der Farbgestaltung 
   wurde darauf geachtet, ein Spiel verschiedener warmer 
   buntöne zu kreieren. So entsteht im Innenbereich des 
   Anbaus eine sehr warme und heimelige Atmosphäre.`,
        src: 'https://meinhof.ch/src/neubauStudio/projektRoggwilMoodboard.jpg'
      },
      {
        text: ` Da das Gebäude eher klein ausfällt, wurde zusammen mit der 
   Bauherrschaft ein Grundriss entwickelt, welcher die verschiedenen 
   Funktionen über eine Verschachtelung des Innenraumes aufnimmt. 
   Da die Konstruktion des Gebäudes den Innenraum komplett überspannt, 
   können die Wände als Leichtbauwand ausgeführt werden, so dass sie 
   bei einer Umnutzung des Gebäudes, leicht zurück gebaut werden können.`,
        src: 'https://meinhof.ch/src/neubauStudio/projektRoggwil01.jpg',
        src2: 'https://meinhof.ch/src/neubauStudio/projektRoggwil02.jpg'
      },
      {
        text: `Da das Gebäude die Nutzung einer Gesundheitspraxis bekommt, 
   sollten alle Architektur psychologischen Aspekte möglichst 
   eingehalten werden. Dazu zählen Gestaltungselemente wie Raumhöhe, 
   Raumgeometrie, Farbe, Materialien, Ausblick, Licht und vieles weitere. 
   Diese Aspekte waren wegweisend für die definitive Ausarbeitung des Projekts.`,
        src: 'https://meinhof.ch/src/neubauStudio/projektRoggwil03.jpg',
        src2: 'https://meinhof.ch/src/neubauStudio/projektRoggwil04.jpg'
      }
    ]
  },

  // Wohnung am See
  {
    project: [
      {
        text: ` Die Farbwahl der Einrichtung wurde bereits bei der 
   Vorbesprechung mit der Bauherrschaft von dieser klar 
   gewünscht. Die meisten Materialien im Raum waren bereits 
   festgelegt. Mit den bereits vorhandenen Materialien und 
   den festgelegten Farben wurden Möbel entweder zusammengestellt 
   oder geplant, so dass am Ende die Farbzusammensetzung 
   entstanden ist.`,
        src: 'https://meinhof.ch/src/wohnungAmSee/wohnungAmSeeMoodboard.jpg'
      },
      {
        text: ` Bei der Planung der Wohnung wurden  zu Beginn die Bedürfnisse 
   der Bauherrschaft die Bedürfnisse ermittelt. Mit dieser Analyse 
   wurde dann ein Grundkonzept, mit den einzuplanenden Möbel, 
   entwickelt. In diesem Fall wurden einige Handelsprodukte 
   eingesetzt und mit Eigenkreationen kombiniert.`,
        src: 'https://meinhof.ch/src/wohnungAmSee/wohnungAmSee01.jpg',
        src2: 'https://meinhof.ch/src/wohnungAmSee/wohnungAmSee02.jpg'
      },
      {
        text: ` Bei der Auswahl der Möbel wurde darauf geachtet, 
   dass sie sich mit den bestehenden Materialien harmonieren 
   und eine Verbindung unter ihnen entsteht. Der Teppich zum 
   Beispiel, ist eine Spezialanfertigung, welche nur für dieses 
   Wohnzimmer, in der Kombination angefertigt wurde. So integriert 
   und verbindet dieser das Farbkonzept im Raum.`,
        src: 'https://meinhof.ch/src/wohnungAmSee/wohnungAmSee03.jpg',
        src2: 'https://meinhof.ch/src/wohnungAmSee/wohnungAmSee04.jpg'
      }
    ]
  }
]);

export const Headers = createContext([
  {
    header: 'Büro Horw',
    src: 'https://meinhof.ch/src/zugeschnittenProject/titelHorw.jpg',
    path: 'BueroHorw'
  },
  {
    header: 'Büro Videolution',
    src: 'https://meinhof.ch/src/zugeschnittenProject/titelVideolution.jpg',
    path: 'BueroVideolution'
  },
  {
    header: 'Puristisches Badezimmer',
    src: 'https://meinhof.ch/src/zugeschnittenProject/titelBadezimmer.jpg',
    path: 'PuristischesBadezimmer'
  },
  {
    header: 'Studio Neubau',
    src: 'https://meinhof.ch/src/zugeschnittenProject/titelRoggwil.jpg',
    path: 'StudioNeubau'
  },
  {
    header: 'Wohnung am See',
    src: 'https://meinhof.ch/src/zugeschnittenProject/titelNeuenburg.jpg',
    path: 'WohnungamSee'
  }
]);

export const Projects = createContext([
  {
    header: 'Büro Horw',
    src: 'https://meinhof.ch/src/zugeschnittenProject/titelHorw.jpg',
    path: 'BueroHorw'
  },
  {
    header: 'Studio Neubau',
    src: 'https://meinhof.ch/src/zugeschnittenProject/titelRoggwil.jpg',
    path: 'StudioNeubau'
  },

  {
    header: 'Wohnung am See',
    src: 'https://meinhof.ch/src/zugeschnittenProject/titelNeuenburg.jpg',
    path: 'WohnungamSee'
  },
  {
    header: 'Puristisches Badezimmer',
    src: 'https://meinhof.ch/src/zugeschnittenProject/titelBadezimmer.jpg',
    path: 'PuristischesBadezimmer'
  },
  {
    header: 'Büro Videolution',
    src: 'https://meinhof.ch/src/zugeschnittenProject/titelVideolution.jpg',
    path: 'BueroVideolution'
  }
]);

export const NavContent = createContext([
  {
    header: 'Kontakt',
    src: '',
    path: '#contact'
  },
  {
    header: 'Über Uns',
    src: '',
    path: '#about'
  },
  {
    header: 'Projekte',
    src: '',
    path: '#projects'
  }
]);

export const ClientsAndCustomers = createContext([
  {
    name: 'Videolution',
    src: 'https://usercontent.one/wp/www.meinhof.ch/wp-content/uploads/2022/07/videolutions-logo_white.png?media=1653409358&quot',
    path: ''
  },
  {
    name: 'Schreinerei Meer',
    src: 'https://usercontent.one/wp/www.meinhof.ch/wp-content/uploads/2022/07/1477141671-e1658220760603.png?media=1653409358&quot',
    path: ''
  },
  {
    name: 'Zentrum Eichgut',
    src: 'https://meinhof.ch/src/logoPartner/healthManagementWeiss.png',
    path: ''
  }
]);
