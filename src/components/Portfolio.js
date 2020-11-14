import React, { useEffect, useContext } from "react";
import { Container } from "reactstrap";
import Category from "./Category";
import MagicGrid from "react-magic-grid";
import { Context } from "../CategoryContext";
import Loader from "./Loader";

function Portfolio() {
  const [state, dispatch] = useContext(Context);
  const { loading, categories } = state;

  useEffect(() => {
    let getCategories = async () => {
      dispatch({ type: "CATEGORY_REQUEST" });

      try {
        let data = await fetch("categories/categories.json");
        data = await data.json();
        dispatch({
          type: "CATEGORY_REQUEST_SUCCESS",
          payload: data.categories,
        });
      } catch (e) {
        dispatch({
          type: "CATEGORY_REQUEST_ERROR",
          payload: e,
        });
      }
    };
    if (categories.length === 0) {
      getCategories();
    }
  }, [categories.length, dispatch]);

  return (
    <Container className="portfolio mb-5">
      <h1 className="text-center  mb-4">Check out my latest work</h1>
      <div className="categories">
        {loading && <Loader />}
        {categories.length > 0 ? (
          <MagicGrid gutter={0} items={categories.length}>
            {categories.map((category, index) => (
              <Category
                key={index}
                name={category.name}
                img={category.thumbnail}
              />
            ))}
          </MagicGrid>
        ) : (
          <Loader />
        )}
      </div>
    </Container>
  );
}

export default Portfolio;
