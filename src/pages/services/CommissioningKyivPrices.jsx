import { useNavigate } from 'react-router-dom'
import './CommissioningFlow.css'

function CommissioningKyivPrices() {
  const navigate = useNavigate()

  const goToContacts = () => {
    navigate('/')

    setTimeout(() => {
      const contacts = document.getElementById('contacts')

      if (contacts) {
        contacts.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 300)
  }

  const goBackToDetails = () => {
    navigate('/services/commissioning/details')
  }

  return (
    <section className="commissioning-flow">
      <div className="container">
        <div className="commissioning-flow__card commissioning-flow__card--prices">
          <button
            type="button"
            className="commissioning-flow__back"
            onClick={goBackToDetails}
            aria-label="Назад"
          >
            ←
          </button>

          <div className="commissioning-flow__watermark">
            КИЇВ
          </div>

          <div className="commissioning-flow__prices commissioning-flow__prices--commissioning">
            <div className="commissioning-flow__price-card commissioning-flow__price-card--commissioning">
              <div className="commissioning-flow__price-title commissioning-flow__price-title--small">
                Житловий, садовий будинок по будівельному паспорту
              </div>

              <div className="commissioning-flow__price-note">
                побудований до квітня 2015 року
              </div>

              <div className="commissioning-flow__price-value commissioning-flow__price-value--small">
                30000 грн
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
                20000 грн
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
                20000 грн
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
            type="button"
            className="commissioning-flow__order-btn"
            onClick={goToContacts}
          >
            ЗАМОВИТИ
          </button>
        </div>
      </div>
    </section>
  )
}

export default CommissioningKyivPrices