import './ContactsSection.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

function ContactsSection() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_1q26b7i',   
        'template_fs4o2ev',  
        form.current,
        'Na1NUPOCAdJul8Q38'    
      )
      .then(
        () => {
          alert('Повідомлення успішно відправлено!')
          form.current.reset()
        },
        (error) => {
          alert('Помилка відправки...')
          console.log(error.text)
        }
      )
  }

  return (
    <section className="contacts-section" id="contacts">
      <div className="container">
        <div className="contacts-section__card">
          
          <div className="contacts-section__glow contacts-section__glow--1"></div>
          <div className="contacts-section__glow contacts-section__glow--2"></div>

          <div className="contacts-section__top">
            <h2 className="contacts-section__title">КОНТАКТИ</h2>

            <div className="contacts-section__content">
              
              
              <form ref={form} onSubmit={sendEmail} className="contacts-section__form">
                
                <label className="contacts-section__field">
                  <span>Ваше ім&apos;я</span>
                  <input type="text" name="name" required />
                </label>

                <label className="contacts-section__field">
                  <span>Email</span>
                  <input type="email" name="email" required />
                </label>

                <label className="contacts-section__field">
                  <span>Номер телефону</span>
                  <input type="tel" name="phone" required />
                </label>

                <label className="contacts-section__field">
                  <span>Повідомлення (не обов’язково)</span>
                  <textarea name="message" rows="2"></textarea>
                </label>

                <button type="submit" className="contacts-section__button">
                  НАДІСЛАТИ
                </button>
              </form>

             
              <div className="contacts-section__info">
                <a href="tel:+380679046488" className="contacts-section__contact-link">
                  +38 (067) 904-64-88
                </a>

                <a href="tel:+380956055708" className="contacts-section__contact-link">
                  +38 (095) 605-57-08
                </a>

                <a
                  href="mailto:denis.dabk@gmail.com"
                  className="contacts-section__contact-link contacts-section__contact-link--email"
                >
                  TVIYDIM@GMAIL.COM
                </a>

                <p className="contacts-section__schedule">
                  Пн.-Пт.: 9:00-18:00, Сб - за
                  <br />
                  домовленістю
                </p>

               
                <div className="contacts-section__socials">
  <a href="https://t.me/+380679046488" aria-label="Telegram">
    <img src="/images/icons/telegram.png" alt="Telegram" />
  </a>

  <a href="viber://chat?number=%2B380679046488" aria-label="Viber">
    <img src="/images/icons/viber.png" alt="Viber" />
  </a>

  <a href="tel:+380679046488" aria-label="Phone">
    <img src="/images/icons/phone.webp" alt="Phone" />
  </a>
</div>
              </div>
            </div>
          </div>

          {/* КАРТА */}
          <div className="contacts-section__map-wrap">
            <iframe
              className="contacts-section__map"
              title="Google Map"
              src="https://www.google.com/maps?q=м.+Київ,+вул.+Бульварно-Кудрявська,+31-А,+оф.+38&output=embed"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactsSection