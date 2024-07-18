import prisma from "@/lib/db"
import Image from "next/image"

export default async function Page({ params }: { params: { id: string } }) {
  const data = await prisma.candidates.findFirst({
    where: {
      id: Number(params.id)
    }
  })

  enum Status {
    "Phone Screen",
    "Interview",
    "Hired",
    "Rejected"
  }

  enum StatusColor {
    "text-blue-600",
    "text-orange-400",
    "text-green-500",
    "text-gray-600"
  }

  const color = "green"

  return (
    <div className="flex flex-col items-center flex-grow mt-20">
      <div className="text-center">
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
          className="m-auto w-32 rounded-full"
          alt="Avatar" />
        <h5 className="mt-2 mb-2 text-xl font-medium leading-tight">{data?.name}</h5>
        <div>
          <span className="mr-2">Stage: </span>
          <span className={StatusColor[data?.status!]}>{Status[data?.status!]}</span>
        </div>
        <div className="flex flex-col items-start mt-3">
          <span className="text-[0.9rem]">Notes: </span>
          <span className="text-[0.9rem]">{data?.notes}</span>
        </div>
      </div>
    </div>

  )
}
