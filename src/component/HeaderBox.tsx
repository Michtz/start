import style from '../styles/headerBox.module.scss';

interface HeaderBoxProps {
  titel: string;
  id: string;
}

const HeaderBox = (props: HeaderBoxProps) => {
  const context = props;

  return (
    <section className={style['header-box']} id={context.id}>
      <h2>{context.titel}</h2>
    </section>
  );
};

export default HeaderBox;
