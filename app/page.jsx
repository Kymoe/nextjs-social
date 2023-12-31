import { prisma } from "@/lib/prisma";
import Link from "next/link";
//export const dynamic='force-dynamic';
export const dynamic='force-static';
export const revalidate=360; 
export {prisma}

export async function generateStaticParams(){
   const posts = await prisma.post.findMany()
   
   return posts.map((post)=>({slug:post.slug}))
}


export default async function Home() {
  const posts = await prisma.post.findMany()
 
 
  return (
    <main>
      <section>
        <div className="container mx-auto">
          <h2 className="text-center mt-4 font-semibold text-xl ">Newsfeed</h2>
          <ul className="max-w-3xl mx-auto space-y-4 mt-4">
            {posts.map((post) => (
              <article className="text-center border rounded shadow p-2" key={post.slug}>
                <Link href={`/posts/${post.slug}`}>
                  <h3>{post.title}</h3>
                </Link>
              </article>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
