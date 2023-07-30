import { Link } from "react-router-dom";
import style from '../../styles/smallComponents.module.scss';

export const Logo: React.FC = (): JSX.Element => {
  return (
    <div className={style['logo']}>
      <Link to={'/'}>
        <img src="https://meinhof.ch/src/logo/meinhofLogoWeissID.png" />
      </Link>
    </div>
  );
};

