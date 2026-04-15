import '@/components/CartButton.css';

function CartButton() {
  return (
    <div className='boton'>
      <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          d="M3 3h2l.4 2M7 13h10l3-6H6.4M7 13L5.4 5M7 13l-1 5h12M9 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
      </svg>
        <span className='contenido'>Add to Cart</span>
    </div>
  )
}

export default CartButton