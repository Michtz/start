import React from 'react';
import style from '../../styles/footer.module.scss';
import { Link } from 'react-router-dom';
interface FooterProps {
  fixed?: boolean;
}
// Todo Make the real react (old code from html only site)
const Footer: React.FC<FooterProps> = ({ fixed }) => {
  
  return (
    <footer className={style['footer']} data-fixed={fixed}>
      <div className={style['socialmedia']}>
        <a
          className={style['testt']}
          href="https://wa.me/789715031?text=Guten%20Tag%20Herr%20Meinhof,%20ich%20bin%20interessiert%20an%20einer%20Beratung%20von%20Ihnen."
        >
          <img src="https://meinhof.ch/src/icons/whatsappIconWhite.svg" />
        </a>
        <a href="https://www.linkedin.com/in/julius-meinhof-9b361910a/">
          <img src="https://meinhof.ch/src/icons/linkedinIconWhite.svg" />
        </a>
        <a href="https://www.instagram.com/meinhof.innenarchitektur/">
          <img src="https://meinhof.ch/src/icons/instagramIconWhite.svg" />
        </a>
        <a href="mailto:julius@meinhof.ch?subject=Kontaktaufnahme%20über%20Webseite&amp;body=Guten%20Tag%20Herr%20Meinhof,%20ich%20bin%20interessiert%20an%20einer%20Beratung%20von%20Ihnen.">
          <img src="https://meinhof.ch/src/icons/mailIcon2.png" />
        </a>
      </div>
      <div className={style['copyright']}>
        <p>
          Copyright <script>document.write(new Date().getFullYear());</script> &copy All rights Reserved,
          by Meinhof GmbH
        </p>
      </div>
      <div className={style['rechtliches']}>
        <div className={style['impressum']}>
          <Link to={'Impressum'}>
            <h3>Impressum</h3>
          </Link>
        </div>

        <div className={style['datenschutz']}>
          <Link to={'Datenschutz'}>
            <h3>Datenschutz</h3>
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
