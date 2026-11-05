import Image from "next/image";
import Link from "next/link";
import { products } from "../lib/products";

export default function Home() {
  return (
    <>
      <h1>Products</h1>
      <div className="grid">
        {products.map((p, i) => (
          <Link key={p.id} href={`/products/${p.id}`} className="card">
            <Image
              src={p.thumb}
              alt={p.name}
              width={360}
              height={270}
              priority={i < 3}
              sizes="(max-width: 600px) 100vw, 320px"
            />
            <h2>{p.name}</h2>
            <p>${p.price}</p>
          </Link>
        ))}
      </div>
    </>
  );
}