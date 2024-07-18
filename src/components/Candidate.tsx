import Link from "next/link"
import { Suspense } from "react"

interface props {
    id: Number,
    Name: String,
}

export default function Candidate({ Name, id }: props) {
    return (
        <Link href={`/candidate/${id}`}>
            <h3 className="my-2"> {Name}</h3>
        </Link>
    )
}
