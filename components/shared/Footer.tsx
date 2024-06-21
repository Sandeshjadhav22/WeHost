import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className=" border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
        {/* <Image
        src={}
        /> */}
        <h3 className="text-xl font-bold">WeHost</h3>
        </Link>
        <p>2024 WeHost. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer