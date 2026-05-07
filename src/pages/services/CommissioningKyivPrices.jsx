import { Link, useNavigate } from 'react-router-dom'
import './CommissioningFlow.css'

function CommissioningKyivPrices() {
  const navigate = useNavigate()

  return (
    <section className="commissioning-flow">
      <div className="container">
        <div className="commissioning-flow__card commissioning-flow__card--prices">
          <button
            type="button"
            className="commissioning-flow__back"
            onClick={() => navigate('/?service=commissioning#services-block')}
            aria-label="Назад"
          >
            ←
          </button>

          <div className="commissioning-flow__watermark">КИЇВ</div>

          <div className="commissioning-flow__prices commissioning-flow__prices--commissioning">
            <div className="commissioning-flow__price-card commissioning-flow__price-card--commissioning">
              <div className="commissioning-flow__price-title commissioning-flow__price-title--small">
                Житловий, садовий будинок по будівельному паспорту
              </div>
              <div className="commissioning-flow__price-note">
                побудований до квітня 2015 року
              </div>
              <div className="commissioning-flow__price-value commissioning-flow__price-value--small">
                2000 грн
              </div>
            </div>

            <div className="commissioning-flow__price-card commissioning-flow__price-card--commissioning">
              <div className="commissioning-flow__price-title commissioning-flow__price-title--small">
                Житловий, садовий будинок
              </div>
              <div className="commissioning-flow__price-note">
                побудований після 09 квітня 2015
              </div>
              <div className="commissioning-flow__price-value commissioning-flow__price-value--small">
                5000 грн
              </div>
            </div>

            <div className="commissioning-flow__price-card commissioning-flow__price-card--commissioning">
              <div className="commissioning-flow__price-title commissioning-flow__price-title--small">
                Виготовлення будівельного паспорту будинку
              </div>
              <div className="commissioning-flow__price-note commissioning-flow__price-note--empty">
                &nbsp;
              </div>
              <div className="commissioning-flow__price-value commissioning-flow__price-value--small">
                2500 грн
              </div>
            </div>

            <div className="commissioning-flow__price-card commissioning-flow__price-card--commissioning">
              <div className="commissioning-flow__price-title commissioning-flow__price-title--small">
                Містобудівні умови та обмеження
              </div>
              <div className="commissioning-flow__price-note commissioning-flow__price-note--empty">
                &nbsp;
              </div>
              <div className="commissioning-flow__price-value commissioning-flow__price-value--small">
                Договірна
              </div>
            </div>
          </div>

          <button
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

export default CommissioningKyivPrices