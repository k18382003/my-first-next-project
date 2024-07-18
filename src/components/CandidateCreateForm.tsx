'use client'
import { CreateCandidate } from "@/actions/action";
import { Datepicker } from "flowbite-react";
import { useRef } from "react";

export default function CandidateCreateForm() {
    const formRef = useRef<HTMLFormElement>(null)

    return (
        <form
            ref={formRef}
            action={async (formData) => {
                await CreateCandidate(formData)
                formRef.current?.reset();
            }}
            className="mt-4 border-b border-gray-900/10 pb-2 md:w-[60%] m-auto sm:w-[80%]"
        >
            <div>
                <h2 className="custom text-base font-semibold text-center text-gray-900">
                    Create A Candidate
                </h2>
                <div className="mt-5">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Candidate Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="flex gap-x-5 w-full">
                        <div className="mt-2 w-[50%]">
                            <label
                                htmlFor="interviewDate"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Interview Date
                            </label>
                            <Datepicker name="interviewDate" />
                        </div>

                        <div className="mt-2 w-[50%]">
                            <label
                                htmlFor="status"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Status
                            </label>
                            <div>
                                <select
                                    id="status"
                                    name="status"
                                    className="w-[100%] rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value={0}>Phone Screen</option>
                                    <option value={1}>Interview</option>
                                    <option value={2}>Hired</option>
                                    <option value={3}>Rejected</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label
                            htmlFor="notes"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Notes
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="notes"
                                name="notes"
                                rows={5}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button
                type="submit"
                className="rounded-md block  m-auto bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2"
            >
                Create
            </button>
        </form>
    )

}