import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './TechnicalReportFlow.css'

const reportItems = [
  {
    title: 'Звіт про технічний огляд дачного (садового) будинку',
    note: 'Для переведення в житловий',
    price: 'до 300 м²',
    value: '3000 грн',
  },
  {
    title: 'Звіт про технічний огляд дачного (садового) будинку',
    note: 'Для переведення в житловий',
    price: 'понад 300 м²',
    value: '4000 грн',
  },
  {
    title: 'Звіт щодо можливості влаштування мансарди',
    note: 'Для житлових приміщень, мансард, бань тощо',
    price: '',
    value: '3000 грн',
  },
  {
    title: 'Звіт щодо переведення квартири в нежитлове приміщення',
    note: '',
    price: '',
    value: '3000 грн',
  },
  {
    title: 'Звіт про технічний стан будівельних конструкцій та інженерних мереж',
    note: 'Для житлового або нежитлового будинку',
    price: '',
    value: 'Договірна',
  },
  {
    title: 'Звіт для введення будівлі в експлуатацію',
    note: 'Для будівель, зведених у період 1992–2015 рр. за спрощеною схемою',
    price: '',
    value: '3000 грн',
  },
  {
  title: 'Звіт про обстеження обʼєкта у звʼязку з пошкодженням внаслідок позапроектних впливів',
  note: 'Пожежі, стихійного лиха, аварії, воєнних дій або терористичних актів',
  price: '',
  value: '3000 грн',
  },
  {
  title: 'Звіт про проведення технічного обстеження будівель і споруд',
  note: 'Для обʼєктів з класом наслідків СС3',
  price: '',
  value: '3000 грн',
  }
]

function TechnicalReportPrices() {
  const navigate = useNavigate()
  const trackRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
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

    updateProgress()
    el.addEventListener('scroll', updateProgress)
    window.addEventListener('resize', updateProgress)

    return () => {
      el.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <section className="technical-report-flow technical-report-flow--mono">
      <div className="container">
        <div className="technical-report-flow__card technical-report-flow__card--mono">
          <button
            type="button"
            className="technical-report-flow__back technical-report-flow__back--mono"
            onClick={() => navigate('/?service=technical-report#services-block')}
            aria-label="Назад"
          >
            ←
          </button>

          <div className="technical-report-flow__inner">
            <h1 className="technical-report-flow__title technical-report-flow__title--mono">
              Технічний звіт
            </h1>

            <div className="technical-report-flow__viewport">
              <div className="technical-report-flow__track" ref={trackRef}>
                {reportItems.map((item, index) => (
                  <article
                    className="technical-report-flow__report-card technical-report-flow__report-card--mono"
                    key={index}
                  >
                    <h2 className="technical-report-flow__report-title technical-report-flow__report-title--mono">
                      {item.title}
                    </h2>

                    {item.note ? (
                      <p className="technical-report-flow__report-note technical-report-flow__report-note--mono">
                        {item.note}
                      </p>
                    ) : (
                      <div className="technical-report-flow__report-note technical-report-flow__report-note--empty">
                        &nbsp;
                      </div>
                    )}

                    {item.price ? (
                      <div className="technical-report-flow__report-price technical-report-flow__report-price--mono">
                        {item.price}
                      </div>
                    ) : (
                      <div className="technical-report-flow__report-price technical-report-flow__report-price--empty">
                        &nbsp;
                      </div>
                    )}

                    <div className="technical-report-flow__report-value technical-report-flow__report-value--mono">
                      {item.value}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="technical-report-flow__progress technical-report-flow__progress--mono">
              <div
                className="technical-report-flow__progress-thumb technical-report-flow__progress-thumb--mono"
                style={{ left: `${progress}%` }}
              ></div>
            </div>

            <Link
              to="/#contacts"
              className="technical-report-flow__order-btn technical-report-flow__order-btn--mono"
            >
              ЗАМОВИТИ
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalReportPrices