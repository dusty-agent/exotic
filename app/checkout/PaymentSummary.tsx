type Props = {
    total: number;
    shipping: number;
  };
  
  export default function PaymentSummary({
    total,
    shipping,
  }: Props) {
  
    const grandTotal =
      total + shipping;
  
    return (
      <section className="mt-16 border-t pt-10">
  
    <div className="flex justify-between">
    <span>Subtotal</span>
    <span>{total.toLocaleString()} KRW</span>
    </div>

    <div className="flex justify-between mt-4">
    <span>Shipping</span>

    <span>
        {shipping === 0
        ? "FREE"
        : `${shipping.toLocaleString()} KRW`}
    </span>
    </div>

    <div className="flex justify-between mt-8 text-3xl">
    <span>Total</span>

    <span>
        {grandTotal.toLocaleString()} KRW
    </span>
    </div>
  
        {shipping > 0 ? (

            <p className="mt-6 text-sm text-[#8A7A72]">
            Orders over 50,000 KRW qualify for free shipping.
            </p>

            ) : (

            <p className="mt-6 text-sm text-[#7A8B72]">
            ✓ Free shipping applied.
            </p>

        )}
  
      </section>
    );
  }