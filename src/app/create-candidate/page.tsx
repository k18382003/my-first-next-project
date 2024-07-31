import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { redirect } from 'next/navigation';
import CandidateCreateForm from '@/components/CandidateCreateForm';

export default async function Page() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) {
    redirect('/api/auth/login');
  }

  return (
    <main>
      <div className="w-full flex justify-end">
        <button
          type="button"
          className="rounded-md mr-5 bg-slate-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2"
        >
          <LogoutLink>Log Out</LogoutLink>
        </button>
      </div>
      <CandidateCreateForm />
    </main>
  );
}
