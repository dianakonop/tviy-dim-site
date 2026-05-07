import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import ServiceDetailsCarousel from '../components/ServiceDetailsCarousel/ServiceDetailsCarousel'
import ReviewsSection from '../components/ReviewsSection/ReviewsSection'
import ContactsSection from '../components/ContactsSection/ContactsSection'

const services = [
  {
    key: 'tech-passport',
    theme: 'light',
    title: 'ТЕХНІЧНИЙ ПАСПОРТ',
    priceGroups: [
      {
        groupTitle: 'ЖИТЛОВІ / САДОВІ БУДИНКИ',
        items: [
          { label: 'До 150 м²', value: '2 000 грн' },
          { label: '150–200 м²', value: '2 500 грн' },
          { label: 'Понад 200 м²', value: 'Договірна' },
        ],
      },
      {
        groupTitle: 'КВАРТИРИ',
        items: [
          { label: 'До 100 м²', value: '1 500 грн' },
          { label: 'Понад 100 м²', value: 'Договірна' },
        ],
      },
      {
        groupTitle: 'ГАРАЖІ / МАШИНОМІСЦЯ',
        items: [{ label: 'Будь-яка площа', value: '1 200 грн' }],
      },
      {
        groupTitle: 'КОМЕРЦІЙНА НЕРУХОМІСТЬ',
        items: [
          { label: 'До 100 м²', value: '1 500 грн' },
          { label: 'Понад 100 м²', value: 'Договірна' },
        ],
      },
    ],
    actions: [{ label: 'ЗАМОВИТИ', to: '/#contacts', variant: 'dark' }],
  },
  {
    key: 'commissioning',
    theme: 'light',
    centered: true,
    title: 'ВВЕДЕННЯ В ЕКСПЛУАТАЦІЮ',
    text:
      'Маючи багаторічний досвід у введенні об’єктів в експлуатацію, ми добре знаємо всі тонкощі цього процесу та вміємо оформити необхідні документи у стислі терміни. Введення об’єкта в експлуатацію передбачає отримання погоджень і дозвільних документів.',
    actions: [
      { label: 'Київ', to: '/services/commissioning/kyiv', variant: 'dark' },
      { label: 'Київська область', to: '/services/commissioning/region', variant: 'light' },
    ],
  },
  {
    key: 'property-valuation',
    theme: 'light',
    title: 'Оцінка нерухомого майна',
    subtitle: 'Коли потрібна оцінка:',
    list: [
      'Продаж або купівля майна — для визначення реальної ринкової вартості.',
      'Отримання іпотеки — банки вимагають оцінку як підтвердження вартості застави.',
      'Страхування — для встановлення суми страхового покриття.',
      'Спадщина чи дарування — для розрахунку податкових зобов’язань.',
      'Оподаткування — як база для нарахування податків.',
    ],
    priceBox: {
      label: 'Київ та область',
      value: '1 000 грн',
    },
    actions: [{ label: 'ЗАМОВИТИ', to: '/#contacts', variant: 'dark' }],
  },
  {
    key: 'building-passport',
    theme: 'light',
    centered: true,
    title: 'ПРОЄКТУВАННЯ, БУДІВЕЛЬНИЙ ПАСПОРТ, МІСТОБУДІВНІ УМОВИ',
    text:
      'Під час воєнного стану будівництво індивідуальних житлових, садових, дачних будинків може відбуватися без будівельного паспорту. У Києві затвердження будівельного паспорта потрібне.',
    actions: [
      { label: 'Київ', to: '/services/building-passport/kyiv', variant: 'dark' },
      { label: 'Київська область', to: '/services/building-passport/region', variant: 'light' },
    ],
  },
  {
    key: 'technical-report',
    theme: 'light',
    title: 'Технічний звіт',
    reportCards: [
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
    ],
    actions: [{ label: 'ЗАМОВИТИ', to: '/#contacts', variant: 'dark' }],
  },
  {
    key: 'ownership-rights',
    theme: 'light',
    centered: true,
    title: 'Отримання прав власності на нерухоме майно',
    subtitle: 'Послуга актуальна для:',
    list: [
      'Будинки, побудовані до 1992 року — проблемні об’єкти будівництва',
      'Незавершене будівництво',
      'Об’єкти, не введені в експлуатацію',
      'Самочинно збудовані, реконструйовані або переплановані об’єкти',
    ],
    actions: [{ label: 'ЗАМОВИТИ', to: '/#contacts', variant: 'dark' }],
  },
]

function Home() {
  const location = useLocation()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const serviceKey = params.get('service')

    if (!serviceKey) {
      setCurrentIndex(0)
      return
    }

    const foundIndex = services.findIndex((service) => service.key === serviceKey)
    if (foundIndex !== -1) {
      setCurrentIndex(foundIndex)
      setTimeout(() => {
        const el = document.getElementById('services-block')
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 50)
    }
  }, [location.search])

  const prevService = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1))
  }

  const nextService = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <Hero />

      <div id="services-block">
        <ServiceDetailsCarousel
          service={services[currentIndex]}
          onPrev={prevService}
          onNext={nextService}
        />
      </div>

      <ReviewsSection />
      <ContactsSection />
    </>
  )
}

export default Home