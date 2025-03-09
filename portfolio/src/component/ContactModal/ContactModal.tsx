/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

import * as React from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
  AnimatePresence,
} from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "../../assets/icons";
import { useTranslation } from "react-i18next";
import PinkButton from "./components/PinkButton";
import Alert from "../Alert/Alert";


interface DragCloseDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function ContactModal({ open, setOpen }: DragCloseDrawerProps): React.ReactElement {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');

  const y = useMotionValue(0);
  const controls = useDragControls();

  const { t } = useTranslation("translations");

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${t('details.emailAdd')}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${t('details.phoneNum')}`;
  };



  // Check if form is valid
  // Email validation
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isFormValid = formData.name &&
    formData.email &&
    EMAIL_REGEX.test(formData.email) &&
    formData.message;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        setAlertType('success');
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          handleClose();
          setShowAlert(false);
        }, 2000);
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
        setAlertType('error');
        setTimeout(() => setShowAlert(false), 3000);
      }
    } catch (error) {
      setResult("Failed to send message. Please try again.");
      setAlertType('error');
    } finally {
      setIsSubmitting(false);
      setShowAlert(true);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showAlert && (
          <Alert
            message={result}
            type={alertType}
            onClose={() => setShowAlert(false)}
          />
        )}
      </AnimatePresence>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50  mx-auto bg-rose-200/50"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 min-h-[30vh] lg:min-h-[50vh] w-[95%] md:w-9/12 lg:w-6/12 overflow-hidden rounded-t-3xl bg-white"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-white p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-rose-200 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-hidden p-4 pt-12 px-5 md:px-10 py-15 md:py-10">
              <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="coquette-font">{t('contactModal.intro')}</h2>
                <div className="flex flex-row gap-4">
                  <a href={t('details.socials.github')} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <GithubIcon className='size-6 hover:text-rose-300' />
                  </a>
                  <a href={t('details.socials.linkedin')} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <LinkedinIcon className='size-6 hover:text-rose-300' />
                  </a>
                </div>
              </div>
              <div className="py-3 flex flex-col md:flex-row gap-5">
                <PinkButton
                  onClick={handleEmailClick}
                  icon={<MailIcon className="size-5" />}
                >
                  {t('details.emailAdd')}
                </PinkButton>
                <PinkButton
                  onClick={handlePhoneClick}
                  icon={<PhoneIcon className="size-5" />}
                >
                  {t('details.phoneNum')}
                </PinkButton>
              </div>
              <h2 className="coquette-font text-center mb-4">{t('contactModal.others')}</h2>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="input"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <PinkButton
                  type="submit"
                  className={`send ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={!isFormValid}
                >
                  {t('contactModal.sendMessage')}
                </PinkButton>
              </form>

            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}