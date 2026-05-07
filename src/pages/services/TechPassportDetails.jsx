import { Link, useNavigate } from 'react-router-dom'
import './CommissioningFlow.css'

function TechPassportDetails() {
  const navigate = useNavigate()

  return (
    <section className="commissioning-flow">
      <div className="container">
        <div className="commissioning-flow__card">
          <button
            type="button"
            className="commissioning-flow__back"
            onClick={() => navigate('/?service=tech-passport')}
            aria-label="Назад"
          >
            ←
          </button>

          <h1 className="commissioning-flow__title">
            ТЕХНІЧНИЙ
            <br />
            ПАСПОРТ
          </h1>

          <p className="commissioning-flow__text">
            Технічний паспорт — це документ, який містить основні технічні
            характеристики об&apos;єкта нерухомості. Він необхідний для
            оформлення права власності, продажу, дарування, спадщини,
            реконструкції та інших юридичних дій. Ми допомагаємо швидко та
            професійно оформити технічний паспорт для різних типів нерухомості.
          </p>

          <div className="commissioning-flow__actions">
            <Link
              to="/services/tech-passport/prices"
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

export default TechPassportDetails