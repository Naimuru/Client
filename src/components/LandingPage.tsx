import React, { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/ladingpage.module.css";
import { Row, Col } from "react-bootstrap";
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import ModalLoginRegister from "./ModalLoginRegister";

function LandingPage() {
  const [showLogin, setShowLogin] = React.useState(false);
  const [loginMode, setLoginMode] = React.useState<"chaza" | "cliente" | "">(
    ""
  );
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  return (
    <>
      <ModalLoginRegister
        loginMode={loginMode}
        show={showLogin}
        handleClose={handleCloseLogin}
      ></ModalLoginRegister>
      <div className={`${styles.landingpage}`}>
        <section className={`${styles.landing}  pb-5`}>
          <div className="p-5">
            <div>
              <h1 className="mt-5">UNFood</h1>
              <p>Comprar en la Nacho nunca fue tan facil . . .</p>
            </div>
            <Row className="mt-5 ">
              <Col className="mb-3">
                <div
                  className={`${styles.landingbtn} rounded rounded-4 d-flex justify-content-evenly align-items-center `}
                  onClick={() => {
                    setLoginMode("cliente");
                    handleShowLogin();
                  }}
                >
                  CLIENTE
                  <Image
                    src="/images/donut.png"
                    alt="donut"
                    width={87}
                    height={85}
                  ></Image>
                </div>
              </Col>
              <Col className="mb-3">
                <div
                  className={`${styles.landingbtn} float-end rounded rounded-4 d-flex justify-content-evenly align-items-center`}
                  onClick={() => {
                    setLoginMode("chaza");
                    handleShowLogin();
                  }}
                >
                  <Image
                    src="/images/tienda.png"
                    alt="tienda"
                    width={116}
                    height={60}
                  ></Image>
                  CHAZA
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section className={`${styles.aboutus} p-5`}>
          <Row className="gx-0">
            <Col md={12} lg={6}>
              <h1 className="mt-5">¿Quienes somos?</h1>
              <p>
                Somos el soporte tanto para consumidores como chaceros en busca
                de reducir los tiempos de atención presencial en las chazas. En
                esta plataforma los clientes podrán realizar sus pedidos a las
                chazas con anticipación y con ello, los chaceros tendrán el
                espacio suficiente para la preparación de estos productos. Con
                esto buscamos reducir la alta demanda en horas pico y los
                tiempos de atención de manera significativa.
              </p>
            </Col>
            <Col md={12} lg={6} className="text-center m-auto">
              <div className={`${styles.img_container} `}>
                <Image src="/images/logoUNFood_3.png" alt="logo" layout= 'fill'></Image>
              </div>
            </Col>
          </Row>
        </section>
        <footer className={`${styles.footer} pb-3`}>
          <div className="pt-5 d-flex flex-row">
            <a
              className="ms-3"
              href="https://www.instagram.com/unfood"
              target="_blank"
            >
              <FaInstagram size={30} color="white"></FaInstagram>
            </a>
            <a
              className="ms-3"
              href="https://twitter.com/unfood"
              target="_blank"
            >
              <FaTwitter size={30} color="white"></FaTwitter>
            </a>
            <a
              className="ms-3"
              href="https://www.facebook.com/unfood"
              target="_blank"
            >
              <FaFacebook size={30} color="white"></FaFacebook>
            </a>
            <a
              className="ms-3"
              href="https://www.youtube.com/@unfood"
              target="_blank"
            >
              <FaYoutube size={30} color="white"></FaYoutube>
            </a>
          </div>
          <hr className="hr text-light" />
          <div>
            <a href="#" className="link-secondary ms-3">
              Politica de privacidad
            </a>
            <a href="#" className="link-secondary ms-3">
              Terminos y condiciones
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
