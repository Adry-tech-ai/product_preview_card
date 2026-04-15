import PriceSection from "@/components/PriceSection";
import ProductDetails from "@/components/ProductDetails";
import CartButton from "@/components/CartButton";
import "@/components/ProductCard.css";

const ProductCard = () => {
    return (
        <div className="productcontainer">
            <div className="imagecontainer">
                <picture>
                    <source
                        srcSet="/image-product-desktop.jpg"
                        media="(min-width: 1440px)"
                    />
                    <img
                        src="/image-product-mobile.jpg"
                        alt="Imagen del producto"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </picture>
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
