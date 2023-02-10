import { createContext } from 'react';

export const BlogContent = createContext([
  {
    text: ` Die Zusammenstellung der Farben und Materialien beruht auf Naturellen Farben. Das Ziel ist es, mit den Materialien, wie beispielsweise der
            Tapete, etwas Pflanzliches in den Innenraum zu bringen, ohne Pflanzen zu verwenden. Die generelle Farbgestaltung wird hier eher dunkel
            angesetzt, da sich im Innenraum bereits viele helle Flächen befinden, welche nicht überstrichen werden. Die eingebrachten Textilien dienen
            unter anderem der Akustik welche den Raumschall dämpfen.`,
    src: 'https://meinhof.ch/src/bueroHorw/bueroHorwMoodbord.jpg',
  },
  {
    text: ` Beim Besprechungsraum war das Ziel, möglichst viele Variationen der gestalterischen Ausarbeitung zu zeigen. Dafür wurden eigene Möbel 
            (Tisch, Sideboard, Barista Ecke, Wandregale etc.) sowie Designer-Stücke (Stühle, Schreibtischlampe, Tapete etc.) und ganz rudimentäre 
            Einrichtungsgegenstände und Accessoires aus bekannten Möbelhäusern (Tassen, Vase, Teppiche ct.) eingesetzt. Dabei ging es nicht darum, 
            dass Optimum oder die perfekte Serie zu zeigen, sondern möglichst viele Unterschiede im Detail sichtbar zu machen.`,
    src: 'https://meinhof.ch/src/bueroHorw/bueroHorwV02.jpg',
    src2: 'https://meinhof.ch/src/bueroHorw/bueroHorwV01.jpg',
  },
  {
    text: ` Im Atelier und Büroraum steht die Funktion und Ergonomie im Vordergrund. So gibt es einen hohen Bedarf an Stauraum für Bücher und 
            Muster sowie verschiedene Gerätschaften. Der Schreibtisch ist stufenlos Höhenverstellbar um das Arbeiten in verschiedenen Positionen zu 
            ermöglichen. Die Materialien sollen eine klare Verbindung zum Besprechungsraum aufweisen und das Materialkonzept komplementieren.`,
    src: 'https://meinhof.ch/src/bueroHorw/bueroHorwB02.jpg',
    src2: 'https://meinhof.ch/src/bueroHorw/bueroHorwB01.jpg',
  },
]);

export const Headers = createContext([{ header: 'Büro Horw' }, { header: 'Studio Neubau' }]);
