// ojo: voy a hacer que al fetchear todas las brands, tambien se
// fetchean sus faqs. Esto puede optimizarse despues

import { Brand } from "@/types/types";

export default async function fetchBrands(): Promise<Brand[]> {
  const response = await fetch('http://localhost:8000/brands')
  if (!response.ok) throw new Error(`Response status: ${response.status}`)

  const brands = await response.json()
  return brands
}
