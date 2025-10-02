import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

export default function Header() {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  const isBlogPage = router.pathname.startsWith("/blog");

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur suppoorts-[backdrop-filter]:bg-background/60">
      <div className="max-auto max-w-7xl px-4 sm:px-6 lg:px-80">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">Logo</Link>
          <nav className="flex item-center gap-6">
            <Link
              className={cn(
                "text-sm font-medium, transition-colors hover:text-blue-500",
                isHomePage ? "text-blue-500" : "text-muted-foreground"
              )}
              href="/"
            >
              Inicio
            </Link>
            <Link
              href="/blog"
              className={cn(
                "text-sm font-medium, transition-colors hover:text-blue-500",
                isBlogPage ? "text-blue-500" : "text-muted-foreground"
              )}
            >
              Blog
            </Link>
            <Button variant="secondary">Começar</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
