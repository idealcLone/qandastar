import { useRef, useState } from "react";
import styles from "../styles/Form.module.scss";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

export const Form = () => {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    region: "",
    message: "",
  });
  const captchaRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = captchaRef.current?.getValue();
    console.log(token);
    captchaRef.current?.reset();

    // axios
    //   .post("/api/send_mail", form)
    //   .then(() => {
    //     setForm({
    //       fullName: "",
    //       phoneNumber: "",
    //       email: "",
    //       region: "",
    //       message: "",
    //     });
    //     alert("Ваше запрос обработан!");
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Өтініш</h2>
        <label htmlFor="fullName">Тегі, Аты, Жөні</label>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Электрондық пошта жәшігі (email)</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleInputChange}
        />
        <label htmlFor="phoneNumber">Ұялы телефон номері (жауап үшін)</label>
        <input
          type="text"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleInputChange}
        />
        <label htmlFor="region">Мемлекет, қала</label>
        <input
          type="text"
          name="region"
          value={form.region}
          onChange={handleInputChange}
        />
        <label htmlFor="message">Хабарлама</label>
        <textarea
          name="message"
          cols="30"
          rows="7"
          value={form.message}
          onChange={handleInputChange}
        />
        <ReCAPTCHA
          ref={captchaRef}
          sitekey={"6LeqWDoiAAAAAHkeocQieNsKaZNR2CrSMR23qazm"}
        />
        <button type="submit">Жіберу</button>
      </form>
    </div>
  );
};
