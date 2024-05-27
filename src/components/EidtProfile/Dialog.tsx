import { DialogTitle, DialogHeader, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Dialog defaultOpen>
      <DialogContent className="w-full max-w-md space-y-6 p-6 grid md:grid-cols-2 gap-6 md:gap-10">
        <div className="space-y-6">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input defaultValue="johndoe" id="username" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input defaultValue="John" id="firstName" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input defaultValue="Doe" id="lastName" />
              </div>
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
              <Input defaultValue="https://tiktok.com/johndoe" id="tiktok" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="instagram">Instagram</Label>
              <Input defaultValue="https://instagram.com/johndoe" id="instagram" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="facebook">Facebook</Label>
              <Input defaultValue="https://facebook.com/johndoe" id="facebook" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <Avatar className="h-20 w-20">
            <AvatarImage alt="@johndoe" src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Button variant="outline">Update Profile Image</Button>
        </div>
        <div className="col-span-2 flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}