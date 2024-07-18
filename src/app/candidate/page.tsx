import JokeList from "@/components/CandidateList";
import Loader from "@/components/Loader";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="text-center">
      <h1 className="text-[1.5rem] my-3">Candidates</h1>
      <Suspense fallback={<Loader />}>
        <JokeList />
      </Suspense>
    </main>
  );
}
