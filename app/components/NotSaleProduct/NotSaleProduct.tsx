"use client";
import Image from "next/image";
import { useCart } from "@/app/context/cartContext";
interface Props {
    img: string;
    price: string;
    name: string;
    customWidth?: number;  // Optional custom width
    customHeight?: number; // Optional custom height
}


export default function NotSaleProduct({
    img,
    price,
    name,
    customWidth = 250,   // Default width is 250
    customHeight = 100   // Default height is 100
}: Props) {
    const { addToCart } = useCart();
    const handleAddToCart = () => {
        const item = {
          img,
          price: parseFloat(price), // Convert price to a number for better handling
          name,
          from: 0, // You can add a 'from' price here if necessary
          review: 0, // Add review count if available
        };
        addToCart(item);
      };
    return (
        
        <div className="flex flex-col w-[full]">
            <div>
                <Image 
                    src={img} 
                    alt="unable to load" 
                    width={customWidth} 
                    height={customHeight} 
                    className="hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="flex flex-col">
                <h1 className="font-bold">{name}</h1>
                <span className="flex justify-between p-2 items-center">
                    <span className="flex gap-2">
                        <p>${price}</p>
                    </span>
                    <span className="hover:bg-[#029FAE] rounded-lg p-2">
                    <button onClick={handleAddToCart}>
                    <Image 
                            src="/images/cart.png" 
                            alt="unable to load" 
                            width={20} 
                            height={20} 
                        />
    </button>
                    </span>
                </span>
            </div>
        </div>
    );
}