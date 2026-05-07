import { Link } from 'react-router-dom'
import './ReviewsSection.css'

const reviewImages = [
  '/images/reviews/review-1.jpg',
  '/images/reviews/review-2.jpg',
  '/images/reviews/review-3.jpg',
  '/images/reviews/review-4.jpg',
  '/images/reviews/review-5.jpg',
  '/images/reviews/review-6.jpg',
  '/images/reviews/review-7.jpg',
  '/images/reviews/review-8.jpg',
  '/images/reviews/review-9.jpg',
  '/images/reviews/review-10.jpg',
  '/images/reviews/review-11.jpg',
  '/images/reviews/review-12.jpg',
  '/images/reviews/review-13.jpg',
  '/images/reviews/review-14.jpg',
  '/images/reviews/review-15.jpg',
  '/images/reviews/review-16.jpg',
]

function ReviewsSection() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="reviews-section__stage">
          
          {/* СЕТКА С ФОТО */}
          <div className="reviews-section__grid">
            {reviewImages.map((src, index) => (
              <div className="reviews-section__card" key={index}>
                <img
                  src={src}
                  alt={`Відгук ${index + 1}`}
                  className="reviews-section__image"
                />
              </div>
            ))}
          </div>

          {/* затемнение */}
          <div className="reviews-section__overlay"></div>

          {/* контент */}
          <div className="reviews-section__content">
            <h2 className="reviews-section__title">ВІДГУКИ</h2>

            <p className="reviews-section__text">
              Ми працюємо з душею - і це
              <br />
              відчувають наші клієнти.
            </p>

            <a href="#contacts" className="reviews-section__button">
  ЗВ’ЯЗАТИСЯ
</a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ReviewsSection