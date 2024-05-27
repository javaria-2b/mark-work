import React from 'react'
import { Input } from "@/components/ui/input"
import { CiUser } from "react-icons/ci";
import { Button } from '../ui/button'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center px-12 py-6'>
      <p>Logo</p>
      <div className='flex'>
        <Button variant={'outline'}>What are you looking for?</Button>
        <Input className='text-black max-w-xs' type="email" placeholder="Location" />
      </div>
      <Button variant={'ghost'}>Discover</Button>
      <Button variant={'ghost'}>Notifications</Button>
      <p className='flex items-center'>
        <CiUser />
        Username
      </p>
    </div>
  )
}
