import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import LoginForm from "@/components/LoginForm";

export default function loginPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-black md:shadow-xl">
      <LoginForm />
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
        ]}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[180%] skew-y-12"
        )}
      />
    </div>
  );
}
