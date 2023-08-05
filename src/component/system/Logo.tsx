import { Link } from 'react-router-dom';
import style from '../../styles/logo.module.scss';

type Logo = { link?: boolean };

export const Logo: React.FC<Logo> = ({ link = true }): JSX.Element => {

  return link ? (
    <div className={style['logo-link']}>
      <Link to={'/'}>
        <img src="https://meinhof.ch/src/logo/meinhofLogoWeissID.png" />
      </Link>
    </div>
  ) : (
    <div className={style['logo-no-link']}>
      <img src="https://meinhof.ch/src/logo/meinhofLogoWeissID.png" />
    </div>
  );
};
