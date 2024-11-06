import { RegexTester } from "@/components/regex-tester";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <RegexTester />
    </Suspense>
  );
}
