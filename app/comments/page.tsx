import { Button } from "@/ui";
import Link from "next/link";

export default function CommentsPage() {
  return (
    <section className="flex flex-col items-stretch justify-center gap-8 py-8 md:py-10 m-auto">
      <Button className="btn-link ml-0">
        <Link href="/comments/add">Оставить отзыв</Link>
      </Button>
      <div>Asd</div>
    </section>
  );
}
