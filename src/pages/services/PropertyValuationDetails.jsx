import { Link, useNavigate } from 'react-router-dom'
import './PropertyValuationFlow.css'

function PropertyValuationDetails() {
  const navigate = useNavigate()

  return (
    <section className="property-valuation-flow">
      <div className="container">
        <div className="property-valuation-flow__card">
          <button
            type="button"
            className="property-valuation-flow__back"
            onClick={() => navigate('/?service=property-valuation#services-block')}
            aria-label="Назад"
          >
            ←
          </button>

          <div className="property-valuation-flow__inner">
            <h1 className="property-valuation-flow__title">
              Оцінка нерухомого майна
            </h1>

            <div className="property-valuation-flow__content">
              <p className="property-valuation-flow__lead">
                Коли потрібна оцінка:
              </p>

              <ul className="property-valuation-flow__list">
                <li>
                  Продаж або купівля майна — для визначення реальної ринкової вартості.
                </li>
                <li>
                  Отримання іпотеки — банки вимагають оцінку як підтвердження вартості застави.
                </li>
                <li>
                  Страхування — для встановлення суми страхового покриття.
                </li>
                <li>
                  Спадщина чи дарування — для розрахунку податкових зобов&apos;язань.
                </li>
                <li>
                  Оподаткування — як база для нарахування податків.
                </li>
              </ul>

              <div className="property-valuation-flow__price-box">
                <div className="property-valuation-flow__price-label">
                  Київ та область
                </div>
                <div className="property-valuation-flow__price-value">
                  1 000 грн
                </div>
              </div>

              <Link to="/#contacts" className="property-valuation-flow__order-btn">
                ЗАМОВИТИ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyValuationDetails