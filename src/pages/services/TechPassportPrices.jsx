import { Link, useNavigate } from 'react-router-dom'
import './TechPassportFlow.css'

function TechPassportPrices() {
  const navigate = useNavigate()

  return (
    <section className="tech-passport-flow">
      <div className="container">
        <div className="tech-passport-flow__card tech-passport-flow__card--prices">
          <button
            type="button"
            className="tech-passport-flow__back"
            onClick={() => navigate('/?service=tech-passport#services-block')}
            aria-label="Назад"
          >
            ←
          </button>

          <div className="tech-passport-flow__watermark">ПАСПОРТ</div>

          <div className="tech-passport-flow__prices tech-passport-flow__prices--passport">
            <div className="tech-passport-flow__price-block">
              <div className="tech-passport-flow__price-block-title">
                ЖИТЛОВІ / САДОВІ БУДИНКИ
              </div>

              <div className="tech-passport-flow__price-item">
                <div className="tech-passport-flow__price-label">До 150 м²</div>
                <div className="tech-passport-flow__price-value">2 000 грн</div>
              </div>

              <div className="tech-passport-flow__price-item">
                <div className="tech-passport-flow__price-label">150–200 м²</div>
                <div className="tech-passport-flow__price-value">2 500 грн</div>
              </div>

              <div className="tech-passport-flow__price-item">
                <div className="tech-passport-flow__price-label">Понад 200 м²</div>
                <div className="tech-passport-flow__price-value">Договірна</div>
              </div>
            </div>

            <div className="tech-passport-flow__price-block">
              <div className="tech-passport-flow__price-block-title">
                КВАРТИРИ
              </div>

              <div className="tech-passport-flow__price-item">
                <div className="tech-passport-flow__price-label">До 100 м²</div>
                <div className="tech-passport-flow__price-value">1 500 грн</div>
              </div>

              <div className="tech-passport-flow__price-item">
                <div className="tech-passport-flow__price-label">Понад 100 м²</div>
                <div className="tech-passport-flow__price-value">Договірна</div>
              </div>
            </div>

            <div className="tech-passport-flow__price-block">
              <div className="tech-passport-flow__price-block-title">
                ГАРАЖІ МАШИНОМІСЦЯ
              </div>

              <div className="tech-passport-flow__price-item">
                <div className="tech-passport-flow__price-label">Будь-яка площа</div>
                <div className="tech-passport-flow__price-value">1 200 грн</div>
              </div>
            </div>

            <div className="tech-passport-flow__price-block">
              <div className="tech-passport-flow__price-block-title">
                КОМЕРЦІЙНА НЕРУХОМІСТЬ
              </div>

              <div className="tech-passport-flow__price-item">
                <div className="tech-passport-flow__price-label">До 100 м²</div>
                <div className="tech-passport-flow__price-value">1 500 грн</div>
              </div>

              <div className="tech-passport-flow__price-item">
                <div className="tech-passport-flow__price-label">Понад 100 м²</div>
                <div className="tech-passport-flow__price-value">Договірна</div>
              </div>
            </div>
          </div>

          <Link to="/#contacts" className="service-details-carousel__btn service-details-carousel__btn--dark">
            ЗАМОВИТИ
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TechPassportPrices