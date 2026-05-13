import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

function Header() {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const goToSection = (e, sectionId) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    navigate('/', {
      state: { scrollTo: sectionId },
    })
  }

  const goToHero = (e) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    navigate('/', {
      state: { scrollTo: 'hero' },
    })
  }

  const closeMenu = () => {
    setMobileMenuOpen(false)
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
            <li
              className={`header__menu-item header__menu-item--dropdown ${
                mobileMenuOpen ? 'header__menu-item--open' : ''
              }`}
            >
              <a
                href="/#services-block"
                className="header__menu-link"
                onClick={(e) => goToSection(e, 'services-block')}
              >
                послуги
              </a>

              <button
                type="button"
                className="header__arrow-button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Відкрити меню послуг"
              >
                {mobileMenuOpen ? '▲' : '∨'}
              </button>

              <ul className="header__submenu">
                <li>
                  <Link to="/services/tech-passport/prices" onClick={closeMenu}>
                    Технічний паспорт
                  </Link>
                </li>

                <li>
                  <Link to="/services/commissioning" onClick={closeMenu}>
                    Введення в експлуатацію
                  </Link>
                </li>

                <li>
                  <Link to="/services/property-valuation" onClick={closeMenu}>
                    Оцінка нерухомого майна
                  </Link>
                </li>

                <li>
                  <Link to="/services/building-passport" onClick={closeMenu}>
                    Проєктування, Будівельний паспорт
                  </Link>
                </li>

                <li>
                  <Link to="/services/technical-report/prices" onClick={closeMenu}>
                    Технічний звіт
                  </Link>
                </li>

                <li>
                  <Link to="/services/ownership-rights" onClick={closeMenu}>
                    Отримання прав власності
                  </Link>
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
          <a
            href="https://t.me/+380679046488"
            className="header__social-link"
            aria-label="Telegram"
          >
            <img src="/images/icons/telegram.png" alt="Telegram" />
          </a>

          <a
            href="viber://chat?number=%2B380679046488"
            className="header__social-link"
            aria-label="Viber"
          >
            <img src="/images/icons/viber.png" alt="Viber" />
          </a>

          <a
            href="tel:+380679046488"
            className="header__social-link"
            aria-label="Phone"
          >
            <img src="/images/icons/phone.webp" alt="Phone" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header