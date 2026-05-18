import { Link, useNavigate } from 'react-router-dom'
import './CommissioningFlow.css'

const commissioningExampleDocuments = [
  {
    name: 'Приклад введення в експлуатацію',
    file: '/documents/commissioning-example.pdf',
  },
]

function CommissioningDetails() {
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

  return (
    <section className="commissioning-flow">
      <div className="container">
        <div className="commissioning-flow__card">
          <button
            type="button"
            className="commissioning-flow__back"
            onClick={goBackToServices}
            aria-label="Назад до послуг"
          >
            ←
          </button>

          <h1 className="commissioning-flow__title">
            ВВЕДЕННЯ В ЕКСПЛУАТАЦІЮ
          </h1>

          <div className="commissioning-flow__docs-dropdown">
  <span className="commissioning-flow__docs-trigger">
    Приклад документів
  </span>

  <div className="commissioning-flow__docs-menu">
    {commissioningExampleDocuments.map((doc, index) => (
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
            Маючи багаторічний досвід у введенні об&apos;єктів в експлуатацію,
            ми добре знаємо всі тонкощі цього процесу та вміємо оформити
            необхідні документи у стислі терміни. Введення об&apos;єкта в
            експлуатацію передбачає отримання погоджень і дозвільних
            документів.
          </p>

          <div className="commissioning-flow__actions">
            <Link
              to="/services/commissioning/kyiv"
              className="commissioning-flow__choice commissioning-flow__choice--dark"
            >
              Київ
            </Link>

            <Link
              to="/services/commissioning/region"
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

export default CommissioningDetails