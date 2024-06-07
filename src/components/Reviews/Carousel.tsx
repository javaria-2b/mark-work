import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Comp() {
  return (
    <div className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <Image
              alt="Carousel Image 1"
              className="aspect-[3/1] w-full object-cover"
              height="400"
              src="/images.jpg"
              width="1200"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              alt="Carousel Image 2"
              className="aspect-[3/1] w-full object-cover"
              height="400"
              src="/images.jpg"
              width="1200"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              alt="Carousel Image 3"
              className="aspect-[3/1] w-full object-cover"
              height="400"
              src="/images.jpg"
              width="1200"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              alt="Carousel Image 4"
              className="aspect-[3/1] w-full object-cover"
              height="400"
              src="/images.jpg"
              width="1200"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              alt="Carousel Image 5"
              className="aspect-[3/1] w-full object-cover"
              height="400"
              src="/images.jpg"
              width="1200"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <Button size="icon" variant="ghost">
            <ChevronLeftIcon className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </Button>
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <Button size="icon" variant="ghost">
            <ChevronRightIcon className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </Button>
        </CarouselNext>
      </Carousel>
      <div className="absolute bottom-4 right-4">
        <Button size="sm" variant="ghost">
          View All Images
        </Button>
      </div>
    </div>
  )
}

function ChevronLeftIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}