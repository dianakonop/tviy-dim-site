import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './ServiceDetailsCarousel.css'

function ServiceDetailsCarousel({ service, onPrev, onNext }) {
  const trackRef = useRef(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const [progress, setProgress] = useState(0)
  const navigate = useNavigate()

  const serviceTitle = service.title?.toLowerCase() || ''

  const isTechnicalReport = serviceTitle.includes('технічний звіт')
  const isBuildingPassport = serviceTitle.includes('проєктування')
  const isCommissioning = serviceTitle.includes('введення в експлуатацію')
  const isOwnershipRights = serviceTitle.includes('отримання прав власності')

  const exampleDocument =
    service.exampleDocument ||
    (isBuildingPassport
      ? '/documents/proektuvannya.pdf'
      : isTechnicalReport
        ? '/documents/tekhnichnyy-zvit.pdf'
        : isCommissioning
          ? '/documents/commissioning.pdf'
          : isOwnershipRights
            ? '/documents/ownership-rights.pdf'
            : '')

  const handleOrderClick = (e) => {
    e.preventDefault()

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

  useEffect(() => {
    if (!service.reportCards) return

    const el = trackRef.current
    if (!el) return

    const updateProgress = () => {
      const maxScroll = el.scrollWidth - el.clientWidth

      if (maxScroll <= 0) {
        setProgress(0)
        return
      }

      setProgress((el.scrollLeft / maxScroll) * 100)
    }

    const handleMouseDown = (e) => {
      isDown.current = true
      el.classList.add('service-details-carousel__report-track--dragging')
      startX.current = e.pageX - el.offsetLeft
      scrollLeft.current = el.scrollLeft
    }

    const handleMouseLeave = () => {
      isDown.current = false
      el.classList.remove('service-details-carousel__report-track--dragging')
    }

    const handleMouseUp = () => {
      isDown.current = false
      el.classList.remove('service-details-carousel__report-track--dragging')
    }

    const handleMouseMove = (e) => {
      if (!isDown.current) return

      e.preventDefault()

      const x = e.pageX - el.offsetLeft
      const walk = (x - startX.current) * 1.4

      el.scrollLeft = scrollLeft.current - walk
    }

    updateProgress()

    el.addEventListener('scroll', updateProgress)
    el.addEventListener('mousedown', handleMouseDown)
    el.addEventListener('mouseleave', handleMouseLeave)
    el.addEventListener('mouseup', handleMouseUp)
    el.addEventListener('mousemove', handleMouseMove)

    window.addEventListener('resize', updateProgress)

    return () => {
      el.removeEventListener('scroll', updateProgress)
      el.removeEventListener('mousedown', handleMouseDown)
      el.removeEventListener('mouseleave', handleMouseLeave)
      el.removeEventListener('mouseup', handleMouseUp)
      el.removeEventListener('mousemove', handleMouseMove)

      window.removeEventListener('resize', updateProgress)
    }
  }, [service])

  return (
    <section className={`service-details-carousel service-details-carousel--${service.theme}`}>
      <div className="container">
        <div className={`service-details-carousel__card service-details-carousel__card--${service.theme}`}>
          {service.theme === 'dark' && (
            <>
              <div className="service-details-carousel__glow service-details-carousel__glow--1"></div>
              <div className="service-details-carousel__glow service-details-carousel__glow--2"></div>
              <div className="service-details-carousel__glow service-details-carousel__glow--3"></div>
            </>
          )}

          <div className="service-details-carousel__content">
            <h2 className="service-details-carousel__title">{service.title}</h2>

            {isTechnicalReport && exampleDocument && (
              <a
                href={exampleDocument}
                target="_blank"
                rel="noreferrer"
                className="service-details-carousel__example service-details-carousel__example--under-title"
              >
                Приклад документа
              </a>
            )}

            {service.subtitle && (
              <p className="service-details-carousel__subtitle">{service.subtitle}</p>
            )}

            {service.text && (
              <p className="service-details-carousel__text">{service.text}</p>
            )}

            {service.list && (
              <ul className="service-details-carousel__list">
                {service.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            {service.priceBox && (
              <div className="service-details-carousel__price-box">
                <div className="service-details-carousel__price-label">
                  {service.priceBox.label}
                </div>
                <div className="service-details-carousel__price-value">
                  {service.priceBox.value}
                </div>
              </div>
            )}

            {service.priceGroups && (
              <div className="service-details-carousel__price-groups">
                {service.priceGroups.map((group, groupIndex) => (
                  <article
                    key={groupIndex}
                    className="service-details-carousel__price-group"
                  >
                    <h3 className="service-details-carousel__price-group-title">
                      {group.groupTitle}
                    </h3>

                    <div className="service-details-carousel__price-group-items">
                      {group.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="service-details-carousel__price-group-item"
                        >
                          <div className="service-details-carousel__price-group-label">
                            {item.label}
                          </div>
                          <div className="service-details-carousel__price-group-value">
                            {item.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            )}

            {service.reportCards && (
              <>
                <div className="service-details-carousel__report-viewport">
                  <div className="service-details-carousel__report-track" ref={trackRef}>
                    {service.reportCards.map((item, index) => (
                      <article
                        className="service-details-carousel__report-card"
                        key={index}
                      >
                        <h3 className="service-details-carousel__report-title">
                          {item.title}
                        </h3>

                        {item.note ? (
                          <p className="service-details-carousel__report-note">
                            {item.note}
                          </p>
                        ) : (
                          <div className="service-details-carousel__report-note service-details-carousel__report-note--empty">
                            &nbsp;
                          </div>
                        )}

                        {item.price ? (
                          <div className="service-details-carousel__report-price">
                            {item.price}
                          </div>
                        ) : (
                          <div className="service-details-carousel__report-price service-details-carousel__report-price--empty">
                            &nbsp;
                          </div>
                        )}

                        <div className="service-details-carousel__report-value">
                          {item.value}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="service-details-carousel__report-progress">
                  <div
                    className="service-details-carousel__report-progress-thumb"
                    style={{ left: `${progress}%` }}
                  ></div>
                </div>
              </>
            )}

            {isOwnershipRights && exampleDocument && (
              <a
                href={exampleDocument}
                target="_blank"
                rel="noreferrer"
                className="service-details-carousel__example service-details-carousel__example--ownership"
              >
                Приклад документа
              </a>
            )}

            <div className="service-details-carousel__actions">
              {service.actions.map((action, index) =>
                action.label.toLowerCase() === 'замовити' ? (
                  <button
                    key={index}
                    type="button"
                    onClick={handleOrderClick}
                    className={`service-details-carousel__btn service-details-carousel__btn--${action.variant || 'dark'}`}
                  >
                    {action.label}
                  </button>
                ) : (
                  <Link
                    key={index}
                    to={action.to}
                    className={`service-details-carousel__btn service-details-carousel__btn--${action.variant || 'dark'}`}
                  >
                    {action.label}
                  </Link>
                )
              )}
            </div>

            {(isBuildingPassport || isCommissioning) && exampleDocument && (
              <a
                href={exampleDocument}
                target="_blank"
                rel="noreferrer"
                className="service-details-carousel__example service-details-carousel__example--under-buttons"
              >
                Приклад документа
              </a>
            )}
          </div>

          <div className="service-details-carousel__nav">
            <button
              type="button"
              className="service-details-carousel__nav-btn"
              onClick={onPrev}
              aria-label="Попередня послуга"
            >
              ←
            </button>

            <button
              type="button"
              className="service-details-carousel__nav-btn"
              onClick={onNext}
              aria-label="Наступна послуга"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetailsCarousel