import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

function Header() {
  const navigate = useNavigate()

  const goToSection = (e, sectionId) => {
    e.preventDefault()

    navigate('/', {
      state: { scrollTo: sectionId },
    })
  }

  const goToHero = (e) => {
    e.preventDefault()

    navigate('/', {
      state: { scrollTo: 'hero' },
    })
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
              <a
                href="/#services-block"
                className="header__menu-link"
                onClick={(e) => goToSection(e, 'services-block')}
              >
                послуги <span className="header__arrow">∨</span>
              </a>

              <ul className="header__submenu">
                <li>
                  <Link to="/services/tech-passport/prices">Технічний паспорт</Link>
                </li>

                <li>
                  <Link to="/services/commissioning">Введення в експлуатацію</Link>
                </li>

                <li>
                  <Link to="/services/property-valuation">Оцінка нерухомого майна</Link>
                </li>

                <li>
                  <Link to="/services/building-passport">Проєктування, Будівельний паспорт</Link>
                </li>

                <li>
                  <Link to="/services/technical-report/prices">Технічний звіт</Link>
                </li>

                <li>
                  <Link to="/services/ownership-rights">Отримання прав власності</Link>
                </li>
              </ul>
            </li>

            <li className="header__menu-item">
              <a
                href="/#reviews"
                className="header__menu-link"
                onClick={(e) => goToSection(e, 'reviews')}
              >
                відгуки
              </a>
            </li>

            <li className="header__menu-item">
              <a
                href="/#contacts"
                className="header__menu-link"
                onClick={(e) => goToSection(e, 'contacts')}
              >
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