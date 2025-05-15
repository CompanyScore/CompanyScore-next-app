import { Button } from "@/ui";
import Link from "next/link";

export default function CommentsPage() {
  return (
    <section className="flex flex-col items-stretch justify-center gap-8 py-8 md:py-10 m-auto">
        <Link href="/comments/comments-add" className="block w-[100%]" >
			<Button className="btn-secondary mr-0 w-[100%]">Оставить отзыв</Button>
		</Link>
      <div>Asd</div>
    </section>
  );
}
