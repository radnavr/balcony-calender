const Card = ({ apartment, cue, isActive, span }) => {
  return (
    <section
      className={` ${isActive ? "card--active" : "card--inactive"} card`}
    >
      <div
        className={`${
          isActive
            ? "bg-green stripe--active stripe--top--active"
            : "bg-red stripe--inactive stripe--top--inactive"
        } stripe stripe--top`}
      >
        <p>{cue}</p>
      </div>
      <div
        className={`${
          isActive
            ? "bg-green number-container--active"
            : "bg-red number-container--inactive"
        } number-container`}
      >
        <span
          className={`${
            isActive ? "apartment-type-active" : "apartment-type-inactive"
          }`}
        >
          {apartment}
        </span>
      </div>
      <div
        className={`${
          isActive
            ? "bg-green stripe--active stripe--bottom--active"
            : "bg-red stripe--inactive stripe--bottom--inactive"
        } stripe`}
      >
        <p>{span}</p>
      </div>
    </section>
  );
};

export default Card;
