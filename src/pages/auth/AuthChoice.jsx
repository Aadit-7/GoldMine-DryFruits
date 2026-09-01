import { ShieldCheck, User } from "lucide-react";

import AuthChoiceCard from "../../components/auth/AuthChoiceCard";

function AuthChoice() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-4 py-10">
      <section className="w-full max-w-3xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-primary">GoldMine</h1>

          <h2 className="mt-3 text-3xl font-semibold text-text-ink">
            Welcome to GoldMine
          </h2>

          <p className="mt-3 text-text-soft">
            Choose how you would like to continue.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <AuthChoiceCard
            title="Continue as User"
            description="Shop premium dry fruits, manage orders and save your favourites."
            icon={User}
            to="/auth/user/login"
          />

          <AuthChoiceCard
            title="Continue as Admin"
            description="Access the administration portal and manage the platform."
            icon={ShieldCheck}
            to="/auth/admin/login"
          />
        </div>
      </section>
    </main>
  );
}

export default AuthChoice;
