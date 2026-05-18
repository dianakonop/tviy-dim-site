import { Link, useNavigate } from 'react-router-dom'
import './CommissioningFlow.css'

const buildingExampleDocuments = [
  {
    name: ' Висновок про технічний стан ',
    file: '/documents/building-passport-1.pdf',
  },
  {
    name: 'Містобудівні умови та обмеження для проєктування',
    file: '/documents/building-passport-2.pdf',
  },
  {
    name: 'Схема забудови',
    file: '/documents/building-passport-3.pdf',
  },
]

function BuildingPassportDetails() {
  const navigate = useNavigate()

  return (
    <section className="commissioning-flow">
      <div className="container">
        <div className="commissioning-flow__card">
          <button
  type="button"
  className="commissioning-flow__back"
  onClick={() => {
    navigate('/')

    setTimeout(() => {
      const services = document.getElementById('services-block')

      if (services) {
        services.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 300)
  }}
  aria-label="Назад"
>
  ←
</button>

          <h1 className="commissioning-flow__title">
  Проєктування,
  <br />
  Будівельний паспорт,
  <br />
  Містобудівні умови
</h1>

<div className="commissioning-flow__docs-dropdown">
  <span className="commissioning-flow__docs-trigger">
    Приклад документів
  </span>

  <div className="commissioning-flow__docs-menu">
    {buildingExampleDocuments.map((doc, index) => (
      <a
        key={index}
        href={doc.file}
        target="_blank"
        rel="noopener noreferrer"
        className="commissioning-flow__docs-link"
      >
        {doc.name}
      </a>
    ))}
  </div>
</div>

          <p className="commissioning-flow__text">
            Під час воєнного стану будівництво індивідуальних житлових, садових,
            дачних будинків, а також інших будівель та споруд на його території
            може відбуватися без будівельного паспорту.
            <br />
            <br />
            Ця норма діє в Київській області. Можна робити ескізні наміри
            забудови земельної ділянки. Зареєструвати наміри забудови в органах
            місцевого самоврядування не потрібно.
            <br />
            <br />
            В Києві дана норма не діє. Затверджувати будівельний паспорт в Києві
            потрібно в санітарно епідеміальному реєстрі.
          </p>

          <div className="commissioning-flow__actions">
            <Link
              to="/services/building-passport/kyiv"
              className="commissioning-flow__choice commissioning-flow__choice--dark"
            >
              Київ
            </Link>

            <Link
              to="/services/building-passport/region"
              className="commissioning-flow__choice commissioning-flow__choice--light"
            >
              Київська область
            </Link>
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default BuildingPassportDetails