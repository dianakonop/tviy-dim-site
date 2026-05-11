import { Link, useNavigate } from 'react-router-dom'
import './CommissioningFlow.css'

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
            Проєктування,Будівельний
            <br />
            паспорт,Містобудівні умови
          </h1>

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