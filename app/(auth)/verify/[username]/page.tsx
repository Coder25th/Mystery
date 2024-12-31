import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import VerifyForm from "@/components/VerifyForm";
import FlipText from "@/components/ui/flip-text";

export default function VerifyPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-black md:shadow-xl">
      <FlipText
        className="text-4xl font-bold -tracking-widest text-white dark:text-white md:text-5xl md:leading-[5rem]"
        word="Verify Your Account"
      />
      <FlipText
        className="text-4xl font-bold -tracking-widest text-white md:text-xl md:leading-[5rem]"
        word="Enter the verification code sent to your email"
      />
      <VerifyForm />
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
