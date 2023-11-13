import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const CategoryList = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = () => {
      fetch("http://localhost:3000/categories")
        .then((response) => response.json())
        .then((data) => setCategories(data));
    };

    getCategories();
  }, []);

  return (
    <div>
      <h2>{props.info.title}</h2>
      <ListGroup>
        {categories.map((category) => (
          <ListGroupItem
            onClick={() => props.chanceCategory(category)}
            key={category.id}
            active={category.categoryName === props.currentCategory}
          >
            {category.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default CategoryList;
