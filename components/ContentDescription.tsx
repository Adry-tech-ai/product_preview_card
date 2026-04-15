import PriceSection from "@/components/PriceSection";
import ProductDetails from "@/components/ProductDetails";
import CartButton from "@/components/CartButton";
import '@/components/ContentDescription.css'

function ContentDescription() {
  return (
    <div className="cont">
        <ProductDetails />
        <PriceSection />
        <CartButton />
    </div>
  )
}

export default ContentDescription