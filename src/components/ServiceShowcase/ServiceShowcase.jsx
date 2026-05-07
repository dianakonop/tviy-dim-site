import { Link } from 'react-router-dom'
import './ServiceShowcase.css'

function ServiceShowcase({
  title,
  description,
  image,
  detailsLink = '/contacts',
  onPrev,
  onNext,
}) {
  return (
    <section className="service-showcase">
      <div className="container">
        <div className="service-showcase__card">
          <div className="service-showcase__left">
            <div className="service-showcase__text-block">
              <h2 className="service-showcase__title">{title}</h2>
              <p className="service-showcase__description">{description}</p>
            </div>

            <div className="service-showcase__controls">
              <Link to={detailsLink} className="service-showcase__details">
                <span>Детальніше</span>
                <span className="service-showcase__details-circle">→</span>
              </Link>

              <div className="service-showcase__nav">
                <button
                  type="button"
                  className="service-showcase__nav-btn"
                  onClick={onPrev}
                >
                  ←
                </button>

                <button
                  type="button"
                  className="service-showcase__nav-btn"
                  onClick={onNext}
                >
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="service-showcase__right">
            <img
              src={image}
              alt={title}
              className="service-showcase__image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceShowcase