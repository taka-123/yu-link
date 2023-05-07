import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps, Post } from '@/types';

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
          {posts &&
            posts.map((post) => (
              <li key={post.id} className="mb-4">
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p className="text-gray-600">{post.created_at}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  className="prose"
                ></div>
              </li>
            ))}
        </ul>
      </div>
    </AuthenticatedLayout>
  );
}
