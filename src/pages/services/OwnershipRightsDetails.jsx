import { useNavigate } from 'react-router-dom'
import './OwnershipRightsDetails.css'

export default function OwnershipRightsDetails() {
  const navigate = useNavigate()

  const goBackToServices = () => {
    navigate('/')

    setTimeout(() => {
      document.getElementById('services-block')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 300)
  }

  const goToContacts = () => {
    navigate('/')

    setTimeout(() => {
      document.getElementById('contacts')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 300)
  }

  return (
    <section className="ownership-details">
      <div className="container">
        <div className="ownership-details__card">
          <button
            type="button"
            className="ownership-details__back"
            onClick={goBackToServices}
            aria-label="Назад до послуг"
          >
            ←
          </button>

          <div className="ownership-details__inner">
            <h1 className="ownership-details__title">
              Отримання права власності
              <br />
              на нерухоме майно
            </h1>

            <div className="ownership-details__content">
              <p className="ownership-details__subtitle">
                Послуга актуальна для:
              </p>

              <ul className="ownership-details__list">
                <li>Будинки, побудовані до 1992 року — проблемні об&apos;єкти будівництва</li>
                <li>Незавершене будівництво</li>
                <li>Об&apos;єкти, не введені в експлуатацію</li>
                <li>Самочинно збудовані, реконструйовані або переплановані об&apos;єкти</li>
              </ul>

              <button
                type="button"
                className="ownership-details__btn"
                onClick={goToContacts}
              >
                ЗАМОВИТИ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}