import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

function Header() {
  const navigate = useNavigate()

  const goToHero = (e) => {
    e.preventDefault()

    navigate('/')

    setTimeout(() => {
      document.getElementById('hero')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100)
  }

  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="header__logo" onClick={goToHero}>
          <img
            src="/images/icons/logo.jpg"
            alt='Логотип "Твій Дім"'
            className="header__logo-img"
          />
          <span className="header__logo-text">ТОВ "ТВІЙ ДІМ"</span>
        </Link>

        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item header__menu-item--dropdown">
              <a href="/#services-block" className="header__menu-link">
                послуги <span className="header__arrow">∨</span>
              </a>

              <ul className="header__submenu">
                <li>
                  <a href="/?service=tech-passport#services-block">Технічний паспорт</a>
                </li>
                <li>
                  <a href="/?service=commissioning#services-block">Введення в експлуатацію</a>
                </li>
                <li>
                  <a href="/?service=property-valuation#services-block">Оцінка нерухомого майна</a>
                </li>
                <li>
                  <a href="/?service=building-passport#services-block">Проєктування, Будівельний паспорт</a>
                </li>
                <li>
                  <a href="/?service=technical-report#services-block">Технічний звіт</a>
                </li>
                <li>
                  <a href="/?service=ownership-rights#services-block">Отримання прав власності</a>
                </li>
              </ul>
            </li>

            <li className="header__menu-item">
              <a href="/#reviews" className="header__menu-link">
                відгуки
              </a>
            </li>

            <li className="header__menu-item">
              <a href="/#contacts" className="header__menu-link">
                контакти
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__socials">
          <a href="https://t.me/+380679046488" className="header__social-link" aria-label="Telegram">
            <img src="/images/icons/telegram.png" alt="Telegram" />
          </a>
          <a href="viber://chat?number=%2B380679046488" className="header__social-link" aria-label="Viber">
            <img src="/images/icons/viber.png" alt="Viber" />
          </a>
          <a href="tel:+380679046488" className="header__social-link" aria-label="Phone">
            <img src="/images/icons/phone.webp" alt="Phone" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header