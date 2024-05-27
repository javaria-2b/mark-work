import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>
<Link href={'/search'}>Search</Link>
<Link href={'/search'}>Edit-Profile</Link>

   </div>
  );
}
