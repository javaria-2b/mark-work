import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";

export default function CarouselComp() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem>
          <Image
            alt="Carousel Image 1"
            className="object-cover w-full h-[500px]"
            height="500"
            src="/images.jpg"
            style={{
              aspectRatio: "1200/500",
              objectFit: "cover",
            }}
            width="1200"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt="Carousel Image 2"
            className="object-cover w-full h-[500px]"
            height="500"
            src="/images.jpg"
            style={{
              aspectRatio: "1200/500",
              objectFit: "cover",
            }}
            width="1200"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt="Carousel Image 3"
            className="object-cover w-full h-[500px]"
            height="500"
            src="/images.jpg"
            style={{
              aspectRatio: "1200/500",
              objectFit: "cover",
            }}
            width="1200"
          />
        </CarouselItem>
      </CarouselContent>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-white drop-shadow-lg">
            start looking for restaurants, car detailers, boutiques...
          </p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Search anything
          </Link>
        </div>
      </div>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-900/50 p-2 text-white hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50/50 dark:text-gray-900 dark:hover:bg-gray-50 dark:focus:ring-gray-300" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-900/50 p-2 text-white hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50/50 dark:text-gray-900 dark:hover:bg-gray-50 dark:focus:ring-gray-300" />
    </Carousel>
  );
}
