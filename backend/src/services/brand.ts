import { Brand } from "../models/brand";
import brands from "../data/brands";

const BrandService = {
  retrieve(id: string): Promise<Brand> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const brand = brands.find((brand) => brand.id === id);
        if (!brand) {
          reject(new Error("Brand not found"));
          return;
        }
        resolve(brand);
      }, 1000);
    });
  },
  list(): Promise<Brand[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(brands as Brand[]);
      }, 1000);
    });
  },
};

export default BrandService;
