import React, { useEffect, useContext, useRef } from "react";
import { Container } from "reactstrap";
import Category from "./Category";
import MagicGrid from "react-magic-grid";
import { Context } from "../CategoryContext";
import Loader from "./Loader";

function Portfolio() {
  const grid = useRef(null);
  const [state, dispatch] = useContext(Context);
  const { loading, categories } = state;

  useEffect(() => {
    let getCategories = async () => {
      dispatch({ type: "CATEGORY_REQUEST" });

      try {
        let data = await fetch("/admin/data/categories.json");
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
    } else {
      let count = 0;
      (function interval() {
        if (count < 10) {
          if (grid.current !== null) grid.current.positionItems();

          window.setTimeout(() => {
            interval();
            count += 1;
            console.log("ref");
          }, 500);
        }
      })();
    }
  }, [categories.length, dispatch, grid]);

  return (
    <Container className="portfolio mb-5">
      <h1 className="text-center  mb-4">Check out my latest work</h1>
      <div className="categories w-100" id="categories">
        {loading || (categories.length === 0 && <Loader />)}
        {categories.length > 0 ? (
          <MagicGrid
            // container="#categories"
            gutter={0}
            useMin={true}
            animate={true}
            items={categories.length}
            ref={grid}
          >
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
