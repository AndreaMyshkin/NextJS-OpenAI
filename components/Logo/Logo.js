import Image from "next/image"
export const Logo = () =>  {
  return (
    <div className="flex  items-center justify-center font-heading">
        <span className="font-heading">
        Numquam sine animo...
        </span>

    <Image src="/logo.webp" width={100} height={100} alt="logo" />
    </div>
  )
}
