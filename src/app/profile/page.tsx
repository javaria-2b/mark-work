/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XLd2b7Zc722
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogHeader, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export default function Component() {
  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-2xl space-y-6 p-6 grid md:grid-cols-2 gap-6 md:gap-10">
        <div className="space-y-6">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input className="w-full" defaultValue="johndoe" id="username" />
            </div>
              <div className="grid gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input className="w-full" defaultValue="John" id="firstName" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input className="w-full" defaultValue="Doe" id="lastName" />
              </div>
            <div className="grid gap-2">
              <Label htmlFor="gender">Gender</Label>
              <RadioGroup className="flex items-center gap-4" defaultValue="male" id="gender">
                <Label className="flex items-center gap-2 cursor-pointer" htmlFor="gender-male">
                  <RadioGroupItem id="gender-male" value="male" />
                  Male
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer" htmlFor="gender-female">
                  <RadioGroupItem id="gender-female" value="female" />
                  Female
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer" htmlFor="gender-other">
                  <RadioGroupItem id="gender-other" value="other" />
                  Other
                </Label>
              </RadioGroup>
            </div>
          </div>
          <Separator />
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="tiktok">TikTok</Label>
              <Input className="w-full" defaultValue="https://tiktok.com/johndoe" id="tiktok" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="instagram">Instagram</Label>
              <Input className="w-full" defaultValue="https://instagram.com/johndoe" id="instagram" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="facebook">Facebook</Label>
              <Input className="w-full" defaultValue="https://facebook.com/johndoe" id="facebook" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 pl-4">
            <Avatar className="h-32 w-32">
              <AvatarImage alt="@johndoe" src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button variant="outline">Update Profile Image</Button>
          </div>
        </div>
        <div className="col-span-2 flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}