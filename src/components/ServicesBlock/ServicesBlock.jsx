import { Link } from 'react-router-dom'
import './ServicesBlock.css'

const services = [
  {
    title: 'Технічний паспорт',
    text: 'Виготовлення технічного паспорта для будинків, квартир, гаражів та комерційної нерухомості.',
    to: '/services/tech-passport/prices',
  },
  {
    title: 'Введення в експлуатацію',
    text: 'Допомога з оформленням документів для законного введення об’єкта в експлуатацію.',
    to: '/services/commissioning/details',
  },
  {
    title: 'Оцінка нерухомого майна',
    text: 'Професійна оцінка нерухомості для продажу, спадщини, суду або оформлення документів.',
    to: '/services/property-valuation/details',
  },
  {
    title: 'Проєктування. Будівельний паспорт',
    text: 'Підготовка проєктної документації та будівельного паспорта для забудови земельної ділянки.',
    to: '/services/building-passport/details',
  },
  {
    title: 'Технічний звіт',
    text: 'Технічний огляд об’єкта та підготовка звіту для зміни призначення чи узаконення приміщень.',
    to: '/services/technical-report/prices',
  },
  {
    title: 'Отримання прав власності',
    text: 'Юридичне оформлення документів, що підтверджують законне право власності на нерухомість.',
    to: '/services/ownership-rights/details',
  },
]

function ServicesBlock() {
  return (
    <section className="services-block" id="services-block">
      <div className="services-block__glow services-block__glow--left"></div>
      <div className="services-block__glow services-block__glow--right"></div>

      <div className="container services-block__container">
        <div className="services-block__header">
          <p className="services-block__label">наші послуги</p>
          <h2 className="services-block__title">ПОСЛУГИ</h2>
        </div>

        <div className="services-block__grid">
          {services.map((service, index) => (
            <article className="services-block__card" key={service.title}>
              <span className="services-block__number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="services-block__card-title">{service.title}</h3>

              <p className="services-block__text">{service.text}</p>

              <Link className="services-block__button" to={service.to}>
                <span className="services-block__button-text">Детальніше</span>
                <span className="services-block__button-icon">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesBlock