import { useNavigate } from 'react-router-dom'
import './CommissioningFlow.css'

function BuildingPassportKyivPrices() {
  const navigate = useNavigate()

  return (
    <section className="commissioning-flow">
      <div className="container">
        <div className="commissioning-flow__card commissioning-flow__card--prices">
          <button
            type="button"
            className="commissioning-flow__back"
            onClick={() => navigate('/services/building-passport')}
            aria-label="Назад"
          >
            ←
          </button>

          <div className="commissioning-flow__watermark">КИЇВ</div>

          <div className="commissioning-flow__prices">
            <div className="commissioning-flow__price-card">
              <div className="commissioning-flow__price-title">
                Виготовлення будівельного паспорту будинку
              </div>
              <div className="commissioning-flow__price-value">25000 грн</div>
            </div>

            <div className="commissioning-flow__price-card">
              <div className="commissioning-flow__price-title">
                Містобудівні умови та обмеження
              </div>
              <div className="commissioning-flow__price-value">Договірна</div>
            </div>
          </div>

          <button
            type="button"
            className="commissioning-flow__order-btn"
            onClick={() => {
              navigate('/')
              setTimeout(() => {
                document.getElementById('contacts')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }, 300)
            }}
          >
            ЗАМОВИТИ
          </button>
        </div>
      </div>
    </section>
  )
}

export default BuildingPassportKyivPrices