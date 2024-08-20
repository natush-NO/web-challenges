import useSWR from "swr";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  ProductCard,
  StyledDiv,
  StyledInput,
  StyledTextarea,
} from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import { StyledButton } from "../Button/Button.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const [isEditMode, setIsEditMode] = useState(false);
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    currency: "",
  });

  const { data, error } = useSWR(id ? `/api/products/${id}` : null);

  useEffect(() => {
    if (data) {
      setProductData({
        name: data.name || "",
        description: data.description || "",
        price: data.price || "",
        currency: data.currency || "",
      });
    }
  }, [data]);

  async function handleDeleteProduct() {
    if (!id) {
      console.error("No product ID available");
      return;
    }

    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/");
    } else {
      console.error("Failed to delete the product");
    }
  }

  async function handleEditProduct() {
    if (!id) {
      console.error("No product ID available");
      return;
    }

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      router.push(`/products/${id}`);
    } else {
      console.error("Failed to update the product");
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  if (!data && !error) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error loading product</h1>;
  }

  if (!data) {
    return <h1>Product not found</h1>;
  }

  return (
    <ProductCard>
      {isEditMode ? (
        <StyledDiv>
          <StyledInput
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <StyledTextarea
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
          <StyledInput
            type="number"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            placeholder="Price"
          />
          <StyledInput
            type="text"
            name="currency"
            value={productData.currency}
            onChange={handleInputChange}
            placeholder="Currency"
          />
          <StyledButton type="button" onClick={handleEditProduct}>
            Save
          </StyledButton>
          <StyledButton type="button" onClick={() => setIsEditMode(false)}>
            Cancel
          </StyledButton>
        </StyledDiv>
      ) : (
        <>
          <h2>{data.name}</h2>
          <p>Description: {data.description}</p>
          <p>
            Price: {data.price} {data.currency}
          </p>
          {data.reviews && data.reviews.length > 0 && (
            <Comments reviews={data.reviews} />
          )}
          <StyledButton type="button" onClick={() => setIsEditMode(true)}>
            Edit
          </StyledButton>
          <StyledButton type="button" onClick={handleDeleteProduct}>
            Delete
          </StyledButton>
          <StyledLink href="/">Back to all</StyledLink>
        </>
      )}
    </ProductCard>
  );
}
