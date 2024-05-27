import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import Image from "next/image"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <Carousel
          className="w-full max-w-4xl mx-auto"
         
        >
          <CarouselContent>
            <CarouselItem>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                  <Image
                    alt="Business Ad 1"
                    className="object-cover w-full h-64"
                    height={400}
                    src="/images.jpg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="bg-white p-4 dark:bg-gray-950">
                    <h3 className="font-bold text-xl">Acme Consulting</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Providing expert business consulting services.
                    </p>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                  <Image
                    alt="Business Ad 2"
                    className="object-cover w-full h-64"
                    height={400}
                    src="/images.jpg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="bg-white p-4 dark:bg-gray-950">
                    <h3 className="font-bold text-xl">Bloom Florist</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Delivering beautiful floral arrangements.
                    </p>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                  <Image
                    alt="Business Ad 3"
                    className="object-cover w-full h-64"
                    height={400}
                    src="/images.jpg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="bg-white p-4 dark:bg-gray-950">
                    <h3 className="font-bold text-xl">Pixel Perfect Design</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Crafting stunning digital experiences.</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                  <Image
                    alt="Business Ad 4"
                    className="object-cover w-full h-64"
                    height={400}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="bg-white p-4 dark:bg-gray-950">
                    <h3 className="font-bold text-xl">Acme Consulting</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Providing expert business consulting services.
                    </p>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                  <Image
                    alt="Business Ad 5"
                    className="object-cover w-full h-64"
                    height={400}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="bg-white p-4 dark:bg-gray-950">
                    <h3 className="font-bold text-xl">Bloom Florist</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Delivering beautiful floral arrangements.
                    </p>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                  <Image
                    alt="Business Ad 6"
                    className="object-cover w-full h-64"
                    height={400}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="bg-white p-4 dark:bg-gray-950">
                    <h3 className="font-bold text-xl">Pixel Perfect Design</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Crafting stunning digital experiences.</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}