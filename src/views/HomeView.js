import Container from 'components/Container/Container';
import data from 'data/facts.json';
import s from './HomeView.module.scss';

function HomeView() {
  console.log(data);
  const generatedNumber = () => {
    return Math.floor(Math.random() * (10 - 0) + 0);
  };
  return (
    <Container additionalClass={s.HomeView__container}>
      <div className={s.HomeView__random}>
        <h2 className={s.HomeView_heading}>
          {data[generatedNumber()].heading}
        </h2>
        <p className={s.HomeView__text}>{data[generatedNumber()].text}</p>
      </div>
    </Container>
  );
}

export default HomeView;
