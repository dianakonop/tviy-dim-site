import { useEffect, useState } from 'react'
import './Hero.css'

function CountUp({ end, suffix = '', duration = 1500 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const stepTime = 18
    const steps = duration / stepTime
    const increment = end / steps

    const timer = setInterval(() => {
      current += increment

      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [end, duration])

  return (
    <>
      {count.toLocaleString('uk-UA')} {suffix}
    </>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__glow hero__glow--1"></div>
      <div className="hero__glow hero__glow--2"></div>
      <div className="hero__glow hero__glow--3"></div>
      <div className="hero__glow hero__glow--4"></div>

      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            ВИГОТОВЛЕННЯ ТА
            <br />
            РЕЄСТРАЦІЯ
            <br />
            ДОКУМЕНТІВ НА
            <br />
            НЕРУХОМІСТЬ
          </h1>

          <p className="hero__text">
            Ми — команда професіоналів, яка працює з 2012 року і допомагає
            клієнтам у виготовленні документів технічної інвентаризації та
            введенні в експлуатацію
          </p>

          <div className="hero__contact-wrapper">
            <button className="hero__button">
              Отримати консультацію
            </button>

            <div className="hero__contact-dropdown">
              <a href="https://t.me/+380679046488" target="_blank" rel="noreferrer">
                Telegram
              </a>

              <a href="viber://chat?number=%2B380679046488">
                Viber
              </a>

              <a href="tel:+380679046488">
                Подзвонити
              </a>
            </div>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__image-wrap">
            <img
              src="/images/hero/house.png"
              alt="Будинок"
              className="hero__image"
            />
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <div className="hero__stat-number">
                <CountUp end={15} />
              </div>
              <div className="hero__stat-line"></div>
              <div className="hero__stat-text">Років успішної роботи</div>
            </div>

            <div className="hero__stat">
              <div className="hero__stat-number">
                <CountUp end={12500} suffix="+" />
              </div>
              <div className="hero__stat-line"></div>
              <div className="hero__stat-text">Готових документів</div>
            </div>

            <div className="hero__stat">
              <div className="hero__stat-number">
                <CountUp end={10000} suffix="+" />
              </div>
              <div className="hero__stat-line"></div>
              <div className="hero__stat-text">Задоволених клієнтів</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero