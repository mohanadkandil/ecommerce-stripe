import formatPrice from "@/utils/priceFormat";
import Image from "next/image";

export default async function Product({ searchParams }: SearchParamType) {
  return (
    <div className="flex justify-between gap-24 p-12 text-gray-700">
      <Image
        src={searchParams.image}
        alt={searchParams.name}
        width={600}
        height={600}
      />
      <div className="font-medium text-gray-700">
        <h1 className="text-2xl py-2">{searchParams.name}</h1>
        <p className="py-2 ">{searchParams.description}</p>
        <div className="flex gap-2">
          <p className="font-bold text-teal-700">
            {searchParams.unit_amount
              ? formatPrice(searchParams.unit_amount)
              : "N/A"}
          </p>
        </div>
        <button
          className="my-12 text-white py-2 px-6 font-med
       rounded-md bg-teal-700 "
        >
          Add to card
        </button>
      </div>
    </div>
  );
}
