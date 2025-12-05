"use client";
import Image from "next/image";
import { fetchBrands } from "@/services/fetch";
import { useEffect, useState } from "react";
import { Brand } from "@/types/types";

export default function Page() {
  
  const [brands, setBrands] = useState([] as Brand[])

  useEffect(() => {
    fetchBrands()
      .then((result) => setBrands(result))
  }) 

  return (
    <main>
      <div className="flex h-full w-full flex-col p-8 items-center">
        <Image
          className="h-14 w-auto" 
          src="/images/Logo-Bloom.png"
          alt="Logo"
          width={400}
          height={100}
        />
        <div>
          <h1 className="text-center text-4xl font-[350] my-22">Selecciona una marca para ver sus preguntas frecuentes</h1>
        </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-10 pb-16">
            {brands.map((brand) => (
              <a key={brand.id} href={'/' + brand.id}>
                <div className="opacity-0 animate-fadein drop-shadow-xl bg-white px-8 py-4 rounded-xl transition hover:scale-110 hover:drop-shadow-3xl">
                  <Image 
                    alt={brand.name}
                    src={brand.imageUrl}
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                  <div className="text-m text-center font-medium py-4">{brand.name}</div>
                </div>
              </a>
            ))}
          </div>
      </div>
    </main>
  );
}
