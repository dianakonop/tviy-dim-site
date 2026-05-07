import { Link, useNavigate } from 'react-router-dom'
import './CommissioningFlow.css'

function CommissioningDetails() {
  const navigate = useNavigate()

  return (
    <section className="commissioning-flow">
      <div className="container">
        <div className="commissioning-flow__card">
          <button
            type="button"
            className="commissioning-flow__back"
            onClick={() => navigate('/?service=commissioning')}
            aria-label="Назад"
          >
            ←
          </button>

          <h1 className="commissioning-flow__title">
            ВВЕДЕННЯ В
            <br />
            ЕКСПЛУАТАЦІЮ
          </h1>

          <p className="commissioning-flow__text">
            Маючи багаторічний досвід у введенні об&apos;єктів в експлуатацію
            ми добре знаємо всі тонкощі цього процесу та вміємо оформити
            необхідні документи у стислі терміни. Введення об&apos;єкта в
            експлуатацію — не складне та часто затратне питання, що передбачає
            отримання численних погоджень і дозвільних документів.
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