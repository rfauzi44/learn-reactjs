import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetailProduct() {
  const [data, setData] = useState({});
  const params = useParams()

  async function getData() {
    try {
      const { data } = await axios.get(
        `https://hplussport.com/api/products?id=${params.id}`
      );
      setData(data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold">{data.name}</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          {data.description}
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">
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
      <div className="overflow-hidden">
        <div className="container px-5">
          <img
            src={data.image}
            className="img-fluid border rounded-3 shadow-lg mb-4"
            alt="Example image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
