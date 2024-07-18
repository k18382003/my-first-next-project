"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

interface myFormData {
    name: string,
    interviewDate: Date,
    notes: string,
    status: number,
}

export async function CreateCandidate(formData: FormData) {

    const newCandidate = {
        name: formData.get("name"),
        interviewDate: new Date(formData.get("interviewDate") as string),
        notes: formData.get("notes"),
        status: Number(formData.get("status")),
    } as myFormData;

    await prisma.candidates.create({
            data: {
                ...newCandidate
            }
        }
    )

    revalidatePath('/candidate')
}