import Image from "next/image";
import PriceSection from "@/components/PriceSection";
import ProductDetails from "@/components/ProductDetails";
import CartButton from "@/components/CartButton";
import "@/components/ProductCard.css";

const ProductCard = () => {
    const imagenproducto = "/image-product-mobile.jpg";
    return (
        <div className="productcontainer">
            <div className="imagecontainer">
                <Image
                    src={imagenproducto}
                    alt="Imagen del producto"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="texto">
                <ProductDetails />
                <PriceSection />
                <CartButton />
            </div>
        </div>
    );
};

export default ProductCard;
