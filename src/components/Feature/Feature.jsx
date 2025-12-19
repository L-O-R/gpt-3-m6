import "./Feature.css";
import featureImg from "../../assets/feature/Feature.png";
import GradientText from "../../Ui/GradientText/GradientText";

const Feature = () => {
  return (
    <section className="feature_section layout">
      <div className="feature_section__right">
        <img
          src={featureImg}
          alt="Feature"
          width={540}
          height={607}
          loading="lazy"
        />
      </div>
      <div className="feature_section__right">
        <h3>Request Early Access to Get Started</h3>
        <GradientText>
          <h2>
            The possibilities are beyond your imagination
          </h2>
        </GradientText>
        <p>
          Yet bed any for travelling assistance indulgence
          unpleasing. Not thoughts all exercise blessing.
          Indulgence way everything joy alteration
          boisterous the attachment. Party we years to order
          allow asked of.
        </p>
        <a href="#">Request Early Access to Get Started</a>
      </div>
    </section>
  );
};

export default Feature;
