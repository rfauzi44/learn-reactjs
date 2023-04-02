import React, { useEffect, useState } from "react";
import Header from "../component/header";
import CardProduct from "../component/CardProduct";
import axios from "axios";

function Home() {

  const [product, setProduct] = useState([])



  async function getData() {
    try {
      const {data} = await axios.get("https://hplussport.com/api/products/order/price");
      console.log(data)
      setProduct(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Centered hero</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Primary button
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Secondary
            </button>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row g-4">
          {product.map((e) => {
            return <CardProduct image={e.image} name={e.name} id={e.id} description={e.description} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
