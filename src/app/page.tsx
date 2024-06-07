import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="flex flex-col">
<Link href={'/search'}>Search</Link>
<Link href={'/reviews'}>Reviews</Link>
<Link href={'/profile'}>Profile</Link>
   </div>
  );
}
