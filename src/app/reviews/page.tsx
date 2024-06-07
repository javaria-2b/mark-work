import React from "react";
import Comp from "@/components/Reviews/Carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function page() {
  return (
    <div className="space-y-12">
      <Comp />
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="max-w-sm space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Store Name</h1>
            <Badge variant="secondary">LLC Verified</Badge>
          </div>
          <div>
            <Label htmlFor="business-category">Primary business category</Label>
            <Select>
              <SelectTrigger id="business-category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bars">Bars</SelectItem>
                <SelectItem value="lounge">Lounge</SelectItem>
                <SelectItem value="restaurant">Restaurant</SelectItem>
                <SelectItem value="cafe">Cafe</SelectItem>
                <SelectItem value="nightclub">Nightclub</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <p>Additional categories (2 max):</p>
            <ul className="list-disc pl-5">
              <li>Bars</li>
              <li>Lounge</li>
            </ul>
          </div>
          <div>
            <p className="flex items-center">
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-gray-300" />
              <span className="ml-2">AVG rating (123 ratings)</span>
            </p>
          </div>
          <div className="border p-4">
            <img
              src="/placeholder.svg"
              alt="video or photo of recent"
              className="h-36 w-full object-cover"
            />
          </div>
          <div className="space-y-1">
            <p className="font-bold">tagged products</p>
            <p>caption</p>
            <p>view count</p>
          </div>
          <div className="space-y-1">
            <h2 className="font-bold">Amenities</h2>
            <ul className="list-disc pl-5">
              <li>WiFi</li>
              <li>Lounge</li>
              <li>Full bar</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg ">
          <div className="flex space-x-2 mb-4">
            <Button variant="secondary">Write a review</Button>
            <Button variant="secondary">Share</Button>
            <Button variant="secondary">Favorite</Button>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Business information</h3>
              <a href="#" className="text-blue-600 block">
                www.store-website.com
              </a>
              <p>
                1-800-976-9999 <span className="text-gray-500">phone logo</span>
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>123 Main St</p>
              <p>Philadelphia, PA 19144</p>
              <p>Center City</p>
            </div>
            <div>
              <h3 className="font-semibold">Hours</h3>
              <p>Sun 11:00AM - 6:00PM</p>
              <p>Mon 11:00AM - 6:00PM</p>
              <p>Tues 11:00AM - 6:00PM</p>
              <p>Wed 11:00AM - 6:00PM</p>
              <p>Thu 11:00AM - 6:00PM</p>
              <p>Fri 11:00AM - 6:00PM (Open Now)</p>
              <p>Sat Closed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6">
      <h2 className="text-2xl font-bold">Reviews</h2>
      <div className="space-y-4">
        <div>
          <div className="flex items-center space-x-2">
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <StarIcon className="h-5 w-5 text-gray-300" />
            <span className="text-sm text-gray-600">01/01/2023</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Awesome Product</span>
            <span className="text-sm text-gray-600">John Doe / Anonymous</span>
          </div>
          <p className="text-gray-700">
            This product has exceeded my expectations in terms of quality and functionality!
          </p>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <StarIcon className="h-5 w-5 text-gray-300" />
            <StarIcon className="h-5 w-5 text-gray-300" />
            <span className="text-sm text-gray-600">01/01/2023</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Good, but could be better</span>
            <span className="text-sm text-gray-600">Emily Rose / Anonymous</span>
          </div>
          <p className="text-gray-700">
            The product is good overall, but I think it could be improved in the following areas...
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
