import style from '../../styles/headerBox.module.scss';

interface HeaderBoxProps {
  title: string;
  id: string;
}

const HeaderBox:React.FC<HeaderBoxProps> = ({title, id}) => {
  return (
    <section className={style['header-box']} id={id}>
      <h2>{title}</h2>
    </section>
  );
};

export default HeaderBox;
