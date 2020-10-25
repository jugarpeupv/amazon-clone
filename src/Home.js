import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        className="home__image"
      />
      <div className="home__row">
        <Product
          id="1123123"
          title="kwmobile 5X Práctica protección Compatible con cámaras Apple iPhone 6 / 6S en Negro/Plata/Rosa Fucsia"
          price={4.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zw8OVItTL._SR258,310_.jpg"
        />

        <Product
          id="21323"
          title="Theoutlettablet® Dock Cargador/Sincronización para Smartphone Vernee Apollo Lite con conexión Type-C - Charger"
          price={7.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41MFFEbLvhL._SR258,310_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="342342"
          title="Case Logic CDE24 - Estuche para Almacenamiento de CD"
          price={7.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41c0txw0MxL._SR258,310_.jpg"
        />

        <Product
          id="1234343"
          title="LAAT Cable USB 1m Cable de Datos Cable telefonico Transferencia de Datos Cable Trenzado USB 2.0"
          price={5.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/514czFiodpL._SR258,310_.jpg"
        />

        <Product
          id="3423423"
          title="Theoutlettablet® Brazalete Neopreno Deportivo para Smartphone Bq Aquaris X5"
          price={8.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71679m--lnL._SR258,310_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="321334324"
          title="SODIAL(R) Soporte de ventosa Soporte de GPS para Garmin GPS"
          price={3.69}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51C6px1jg0L._SR258,310_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
