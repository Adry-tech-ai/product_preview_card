import Image from "next/image";
import ContentDescription from "@/components/ContentDescription";
import "@/components/ProductCard.css";

const ProductCard = () => {
  const imagenproducto = "/image-product-mobile.jpg";
  return (
    <div className="productcontainer">
      <Image
        src={imagenproducto}
        alt="Imagen del producto"
        width={350}
        height={350}
      />
      <ContentDescription />
    </div>
  );
};

export default ProductCard;
