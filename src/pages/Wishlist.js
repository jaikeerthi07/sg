import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Wishlist() {
  const { wishlist } = useContext(CartContext);

  return (
    <>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? <p>No items in wishlist</p> : null}
    </>
  );
}
