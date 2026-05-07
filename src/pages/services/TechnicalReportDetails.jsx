import { Link, useNavigate } from 'react-router-dom'
import './CommissioningFlow.css'

function TechnicalReportDetails() {
  const navigate = useNavigate()

  return (
    <section className="commissioning-flow">
      <div className="container">
        <div className="commissioning-flow__card">
          <button
            type="button"
            className="commissioning-flow__back"
            onClick={() => navigate('/?service=technical-report')}
            aria-label="Назад"
          >
            ←
          </button>

          <h1 className="commissioning-flow__title">Технічний звіт</h1>

          <p className="commissioning-flow__text">
            Технічний звіт — це обстеження об&apos;єкта нерухомості або окремих
            конструкцій з визначенням їхнього технічного стану. Такий документ
            може бути потрібний для перепланування, реконструкції, введення в
            експлуатацію, а також для оформлення документів на нерухомість.
          </p>

          <div className="commissioning-flow__actions">
            <Link
              to="/services/technical-report/prices"
              className="commissioning-flow__choice commissioning-flow__choice--dark"
            >
              ЦІНИ
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalReportDetails