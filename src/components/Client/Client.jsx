import "./Client.css";
import client1 from "../../assets/clients/google.png";
import client2 from "../../assets/clients/slack.png";
import client3 from "../../assets/clients/Bitmap.png";
import client4 from "../../assets/clients/dropbox.png";
import client5 from "../../assets/clients/shopify.png";
const Client = () => {
  return (
    <section className="client_section layout">
      <div>
        <img
          src={client1}
          alt="google"
          width={100}
          height={50}
          loading="lazy"
        />
        <img
          src={client2}
          alt="google"
          width={100}
          height={50}
          loading="lazy"
        />
        <img
          src={client3}
          alt="google"
          width={100}
          height={50}
          loading="lazy"
        />
        <img
          src={client4}
          alt="google"
          width={100}
          height={50}
          loading="lazy"
        />
        <img
          src={client5}
          alt="google"
          width={100}
          height={50}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Client;
