import { useNavigate } from 'react-router-dom'
import './TechPassportFlow.css'

const exampleDocuments = [
  {
    name: 'Технічний паспорт квартири',
    file: '/documents/tech-passport-example-1.pdf',
  },
  {
    name: 'Технічний паспорт нежитлового приміщення',
    file: '/documents/tech-passport-example-2.pdf',
  },
  {
    name: 'Технічний паспорт житлового будинку',
    file: '/documents/tech-passport-example-3.pdf',
  },
]

function TechPassportPrices() {
  const navigate = useNavigate()

  const goBackToServices = () => {
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
  }

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

  return (
    <section className="tech-passport-flow">
      <div className="container">
        <div className="tech-passport-flow__card">
          <button
            type="button"
            className="tech-passport-flow__back"
            onClick={goBackToServices}
            aria-label="Назад до послуг"
          >
            ←
          </button>

          <h1 className="tech-passport-flow__title">
            ТЕХНІЧНИЙ ПАСПОРТ
          </h1>

          <div className="tech-passport-flow__docs-dropdown">
  <span className="tech-passport-flow__docs-trigger">
    Приклад документів
  </span>

  <div className="tech-passport-flow__docs-menu">
    {exampleDocuments.map((doc, index) => (
      <a
        key={index}
        href={doc.file}
        target="_blank"
        rel="noopener noreferrer"
        className="tech-passport-flow__docs-link"
      >
        {doc.name}
      </a>
    ))}
  </div>
</div>

          <div className="tech-passport-flow__watermark">
            ПАСПОРТ
          </div>

          <div className="tech-passport-flow__prices">
            <div className="tech-passport-flow__price-block">
              <h2 className="tech-passport-flow__price-block-title">
                ЖИТЛОВІ / САДОВІ БУДИНКИ
              </h2>

              <div className="tech-passport-flow__price-item">
                <div className="tech-passport-flow__price-label">
                  До 150 м²
                </div>

                <div className="tech-passport-flow__price-value">
                  2 000 грн
                </div>
              </div>

              <div className="tech-passport-flow__price-item">
                <div className="tech-passport-flow__price-label">
                  150–200 м²
                </div>

                <div className="tech-passport-flow__price-value">
                  2 500 грн
                </div>
              </div>

              <div className="tech-passport-flow__price-item">
                <div className="tech-passport-flow__price-label">
                  Понад 200 м²
                </div>

                <div className="tech-passport-flow__price-value">
                  Договірна
                </div>
              </div>
            </div>

            <div className="tech-passport-flow__price-block">
              <h2 className="tech-passport-flow__price-block-title">
                КВАРТИРИ
              </h2>

              <div className="tech-passport-flow__price-item">
                <div className="tech-passport-flow__price-label">
                  До 100 м²
                </div>

                <div className="tech-passport-flow__price-value">
                  1 500 грн
                </div>
              </div>

              <div className="tech-passport-flow__price-item">
                <div className="tech-passport-flow__price-label">
                  Понад 100 м²
                </div>

                <div className="tech-passport-flow__price-value">
                  Договірна
                </div>
              </div>
            </div>

            <div className="tech-passport-flow__price-block">
              <h2 className="tech-passport-flow__price-block-title">
                ГАРАЖІ / МАШИНОМІСЦЯ
              </h2>

              <div className="tech-passport-flow__price-item">
                <div className="tech-passport-flow__price-label">
                  Будь-яка площа
                </div>

                <div className="tech-passport-flow__price-value">
                  1 200 грн
                </div>
              </div>
            </div>

            <div className="tech-passport-flow__price-block">
              <h2 className="tech-passport-flow__price-block-title">
                КОМЕРЦІЙНА НЕРУХОМІСТЬ
              </h2>

              <div className="tech-passport-flow__price-item">
                <div className="tech-passport-flow__price-label">
                  До 100 м²
                </div>

                <div className="tech-passport-flow__price-value">
                  1 500 грн
                </div>
              </div>

              <div className="tech-passport-flow__price-item">
                <div className="tech-passport-flow__price-label">
                  Понад 100 м²
                </div>

                <div className="tech-passport-flow__price-value">
                  Договірна
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="tech-passport-flow__order-btn"
            onClick={goToContacts}
          >
            ЗАМОВИТИ
          </button>
        </div>
      </div>
    </section>
  )
}

export default TechPassportPrices