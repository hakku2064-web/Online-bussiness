import { useParams } from "react-router-dom";
import productdetail from "../../data/productdetail";

function ProductDetail() {
  const { id } = useParams();
  const product = productdetail.find((item) => item.id.toString() === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="detail-image" />
      <h2>{product.name}</h2>
      <p>
        Rs. {product.afterdiscounted}{" "}
        <span className="old-price">Rs. {product.price}</span>
      </p>
      <p>{product.description}</p>

      <div className="product-meta">
        <p><strong>Sizes:</strong> {product.size.join(", ")}</p>
        {product.color && <p><strong>Color:</strong> {product.color}</p>}
        {product.fabric && <p><strong>Fabric:</strong> {product.fabric}</p>}
        {product.fit && <p><strong>Fit:</strong> {product.fit}</p>}
      </div>
    </div>
  );
}

export default ProductDetail;
