"use client";
import { useEffect, useState } from "react";
import { fetchBrand } from "@/services/fetch";
import { useParams } from "next/navigation";
import { Brand } from "@/types/types";
import Image from "next/image";

export default function BrandPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = useParams<{ id: string }>()

  const [brand, setBrand] = useState<Brand>({} as Brand)

  useEffect(() => {
    fetchBrand(id)
      .then((result) => {
        setBrand(result)
      })
  })

  return (
    <div className={`opacity-0 ${Object.keys(brand).length === 0 ? "" : "animate-fadein"} flex flex-col items-center p-8`}>
      <div className="pt-8">
        <Image
          alt={brand.id}
          src={brand.logoImageUrl}
          width={250}
          height={250}
        />
      </div>
      <div className="mt-8 border-gray-700 border-t w-full"></div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-[350] mt-22 mb-16">Preguntas frecuentes</h1>
        <div className="flex flex-col space-y-6 mx-100 items-start">
        {brand.faqs === undefined ? (
          <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24"/>
        ) : (
          brand.faqs.map(({ question, answer }) => (
            <>
              <div className="text-xl font-normal">{question}</div>
              <div className="text-base font-light">{answer}</div>
            </>
          )))}
          <a href="/" className="text-blue-700 py-8 self-end font-extralight text-sm">Volver al inicio</a>
          </div>
    </div>
    </div >
  )
}
