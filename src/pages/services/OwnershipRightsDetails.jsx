import "./OwnershipRightsDetails.css";
import { useNavigate } from "react-router-dom";

export default function OwnershipRightsDetails() {
  const navigate = useNavigate();

  return (
    <div className="ownership-details">
      <div className="ownership-details__card">
        <button
          className="ownership-details__back"
          onClick={() => navigate('/?service=ownership-rights#services-block')}
          aria-label="Назад"
        >
          ←
        </button>

        <div className="ownership-details__glow ownership-details__glow--1"></div>
        <div className="ownership-details__glow ownership-details__glow--2"></div>
        <div className="ownership-details__glow ownership-details__glow--3"></div>

        <div className="ownership-details__inner">
          <h1 className="ownership-details__title">
            Отримання права власності
            <br />
            на нерухоме майно
          </h1>

          <div className="ownership-details__content">
            <p className="ownership-details__subtitle">
              Послуга актуальна для:
            </p>

            <ul className="ownership-details__list">
              <li>Будинки, побудовані до 1992 року — проблемні об&apos;єкти будівництва</li>
              <li>Незавершене будівництво</li>
              <li>Об&apos;єкти, не введені в експлуатацію</li>
              <li>Самочинно збудовані, реконструйовані або переплановані об&apos;єкти</li>
            </ul>

            <button
              className="ownership-details__btn"
              onClick={() => navigate("/#contacts")}
            >
              ЗАМОВИТИ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}