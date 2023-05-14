import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps, Post } from '@/types';
import { truncate, formatDate } from '@/Utils/stringUtils';

type BlogProps = PageProps & {
  posts: Post[];
};

export default function Blog({ auth, posts }: BlogProps) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="ブログ" />
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold mb-6">ブログ記事一覧</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-4">
              <Link href={`/blog/${post.id}`} className="block">
                <div className="p-4 rounded bg-white">
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <p className="text-gray-600">{formatDate(post.created_at)}</p>
                  <p className="text-gray-700">{truncate(post.content, 100)}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </AuthenticatedLayout>
  );
}
