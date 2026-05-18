import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './TechnicalReportFlow.css'

const reportItems = [
  {
    title: 'Звіт про технічний огляд дачного (садового) будинку',
    note: 'Для переведення в житловий',
    price: 'до 300 м²',
    value: '4000 грн',
  },
  {
    title: 'Звіт про технічний огляд дачного (садового) будинку',
    note: 'Для переведення в житловий',
    price: 'понад 300 м²',
    value: '5000 грн',
  },
  {
    title: 'Висновок про технічний стан несучих конструкцій',
    note: 'Для реконструкції та капітального ремонту',
    price: '',
    value: 'Договірна',
  },
  {
    title: 'Звіт щодо відповідності нормам безперешкодного доступу',
    note: 'Для осіб з інвалідністю та маломобільних груп населення',
    price: '',
    value: 'Договірна',
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
    value: '4000 грн',
  },
  {
    title: 'Звіт про обстеження обʼєкта у звʼязку з пошкодженням внаслідок позапроектних впливів',
    note: 'Пожежі, стихійного лиха, аварії, воєнних дій або терористичних актів',
    price: '',
    value: 'від 4000 грн',
  },
  {
    title: 'Звіт про проведення технічного обстеження будівель і споруд',
    note: 'Для обʼєктів з класом наслідків СС1 (СС2,СС3)',
    price: '',
    value: 'Договірна',
  },
  {
    title: 'Паспорт обʼєкта будівництва',
    note: 'За результатами обстеження відповідно до законодавства',
    price: '',
    value: 'Договірна',
  },
  {
    title: 'Звіт щодо можливості безпечної експлуатації самочинно збудованого обʼєкта',
    note: 'Для визнання права власності через суд',
    price: '',
    value: 'Договірна',
  },
]

const exampleDocuments = [
  {
    name: 'Звіт обстеження об’єктів класу СС1',
    file: '/documents/example-report-3.pdf',
  },
  {
    name: 'Звіт щодо доступності для осіб з інвалідністю',
    file: '/documents/example-report-2.pdf',
  },
  {
    name: ' Звіт про проведення технічного огляду',
    file: '/documents/example-report-1.pdf',
  },
]

function TechnicalReportPrices() {
  const navigate = useNavigate()
  const trackRef = useRef(null)
  const progressRef = useRef(null)

  const [progress, setProgress] = useState(0)

  const goBackToServices = () => {
    navigate('/')

    setTimeout(() => {
      const services = document.getElementById('services-block')

      if (services) {
        services.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 300)
  }

  const goToContacts = () => {
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

  const scrollByProgressPosition = (clientX) => {
    const track = trackRef.current
    const progressBar = progressRef.current

    if (!track || !progressBar) return

    const rect = progressBar.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.min(Math.max(x / rect.width, 0), 1)

    const maxScroll = track.scrollWidth - track.clientWidth

    track.scrollLeft = maxScroll * percent
  }

  const handleProgressPointerDown = (e) => {
    e.preventDefault()

    scrollByProgressPosition(e.clientX)

    const handleMove = (moveEvent) => {
      scrollByProgressPosition(moveEvent.clientX)
    }

    const handleUp = () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerup', handleUp)
    }

    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerup', handleUp)
  }

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
            onClick={goBackToServices}
            aria-label="Назад до послуг"
          >
            ←
          </button>

          <div className="technical-report-flow__inner">
            <h1 className="technical-report-flow__title technical-report-flow__title--mono">
              Технічний звіт
            </h1>

            <div className="technical-report-flow__docs-dropdown">
  <span className="technical-report-flow__docs-trigger">
    Приклад документів
  </span>

  <div className="technical-report-flow__docs-menu">
    {exampleDocuments.map((doc, index) => (
      <a
        key={index}
        href={doc.file}
        target="_blank"
        rel="noopener noreferrer"
        className="technical-report-flow__docs-link"
      >
        {doc.name}
      </a>
    ))}
  </div>
</div>

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

            <div
              className="technical-report-flow__progress technical-report-flow__progress--mono"
              ref={progressRef}
              onPointerDown={handleProgressPointerDown}
            >
              <div
                className="technical-report-flow__progress-thumb technical-report-flow__progress-thumb--mono"
                style={{ left: `${progress}%` }}
              ></div>
            </div>

            <button
              type="button"
              className="technical-report-flow__order-btn technical-report-flow__order-btn--mono"
              onClick={goToContacts}
            >
              ЗАМОВИТИ
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalReportPrices