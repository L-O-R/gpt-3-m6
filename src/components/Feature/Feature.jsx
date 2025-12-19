import "./Feature.css";
import featureImg from "../../assets/feature/Feature.png";

const Feature = () => {
  return (
    <section className="feature_section layout">
      <div className="feature_section__right">
        <img
          src={Feature}
          alt="Feature"
          width={540}
          height={607}
          loading="lazy"
        />
      </div>
      <div className="feature_section__left"></div>
    </section>
  );
};

export default Feature;
