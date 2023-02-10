import React from 'react';
import style from '../styles/projectHeader.module.scss';

const ProjectHeader = () => {
  return (
    <div className={style['stichpunkte']}>
      <h2 className={style['projektart']}>Projektart:</h2>
      <p className={style['projektartText']}>Möblierung</p>

      <h2 className={style['projektgrösse']}>Projektgrösse:</h2>
      <p className={style['projektgrösseText']}>klein (0-50m2)</p>

      <h2 className={style['designethos']}>Designethos:</h2>
      <p className={style['designethosText']}>Klare geometrische Form, Naturelle Materialien und Farben, Form folgt Funktion</p>

      <h2 className={style['konzept']}>Konzept:</h2>
      <p className={style['konzeptText']}>Büro Dschungel</p>

      <h2 className={style['ansprueche']}>Ansprüche:</h2>

      <ul className={style['anspruecheText']}>
        <li>Aufteilung in Büro/Atelier und Besprechungsraum</li>
        <li>Platz für Muster, Material und Maschinen</li>
        <li>Besprechungsraum Repräsentative Ausgestaltung</li>
        <li>Ergonomische Ansprüche an den Arbeitsplatz</li>
        <li>Akustische Massnahmen zum Dämpfen des Schalls</li>
      </ul>
    </div>
  );
};
export default ProjectHeader;
