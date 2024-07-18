import Candidate from "./Candidate";
import prisma from "@/lib/db";

export default async function CandidateList() {
    if (process.env.NODE_ENV === "development") {
        await new Promise<void>((resolve) => {
            setTimeout(resolve, 1000);
        })
    }
    const data = await prisma.candidates.findMany({
        orderBy:
        {
            interviewDate: 'desc',
        }
    });

    return (
        <>
            {data.length > 0 ?
                <div className="mt-5">
                    {data.map((candidate, i: number) => {
                        return <Candidate key={candidate.id} id={candidate.id} Name={candidate.name} />;
                    })}
                </div>
                :
                <h1 className="text-center">No Records</h1>
            }
        </>
    )
}