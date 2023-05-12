import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps, Post } from '@/types';
import { formatDate } from '@/Utils/stringUtils';

type BlogDetailProps = PageProps & {
  post: Post;
};

export default function BlogDetail({ auth, post }: BlogDetailProps) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-3xl font-semibold mb-6">{post.title}</h2>
        <p className="text-gray-600 mb-2">投稿日: {formatDate(post.created_at)}</p>
        <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
      </div>
    </AuthenticatedLayout>
  );
}
