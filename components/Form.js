import { useRef, useState } from "react";
import styles from "../styles/Form.module.scss";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslations } from "../hooks/useTranslations";

export const Form = () => {
  const { t } = useTranslations();
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    region: "",
    message: "",
  });
  const captchaRef = useRef(null);
  const messageRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "message") {
      messageRef.current.style.height = "1px";
      messageRef.current.style.height =
        25 + messageRef.current.scrollHeight + "px";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = captchaRef.current?.getValue();

    if (token) {
      axios
        .post("/api/send_mail", { form, token })
        .then(() => {
          setForm({
            fullName: "",
            phoneNumber: "",
            email: "",
            region: "",
            message: "",
          });
          captchaRef.current?.reset();
          alert(t("request_success"));
        })
        .catch((err) => console.log(err));
    } else {
      alert(t("pass_captcha"));
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>{t("request")}</h2>
        <label htmlFor="fullName">{t("full_name")}</label>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="email">{t("email")}</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
        />
        <label htmlFor="phoneNumber">{t("phone_number")}</label>
        <input
          type="tel"
          name="phoneNumber"
          pattern="7-[0-9]{3}-[0-9]{7}"
          placeholder="7-777-1234567"
          value={form.phoneNumber}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="region">{t("location")}</label>
        <input
          type="text"
          name="region"
          value={form.region}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="message">{t("message")}</label>
        <textarea
          ref={messageRef}
          name="message"
          cols="30"
          rows="5"
          maxLength="1000"
          value={form.message}
          onChange={handleInputChange}
        />
        <ReCAPTCHA
          ref={captchaRef}
          sitekey={"6LeqWDoiAAAAAHkeocQieNsKaZNR2CrSMR23qazm"}
        />
        <button type="submit">{t("send")}</button>
      </form>
    </div>
  );
};
