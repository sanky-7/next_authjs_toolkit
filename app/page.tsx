import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import LoginButton from "@/components/auth/LoginButton";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-400 to-sky-400">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-4xl sm:text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          MahoragaAuth
        </h1>
        <p className="text-pink-200 text-2xl sm:text-lg">A simple, strong and adaptable authentication service</p>
        <div>
          <LoginButton asChild>
            <Button className="bg-sky-300 text-gray-500" variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
