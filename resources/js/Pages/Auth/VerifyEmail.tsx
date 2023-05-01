import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function VerifyEmail({ status }: { status?: string }) {
  const { post, processing } = useForm({});

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('verification.send'));
  };

  return (
    <GuestLayout>
      <Head title="Email Verification" />

      <div className="mb-4 text-sm text-gray-600">
        ご登録頂きありがとうございます。
        <br />
        <span>メールアドレス確認のリンクを送付しましたので、</span>
        メールに記載のリンクをクリックしてください。
        <br />
        メールが届いていない場合には、再送も可能です
      </div>

      {status === 'verification-link-sent' && (
        <div className="mb-4 font-medium text-sm text-green-600">
          <span>ユーザ登録時に入力頂いたメールアドレス宛に</span>
          メールアドレス確認リンクを再送しました
        </div>
      )}

      <form onSubmit={submit}>
        <div className="mt-4 flex items-center justify-between">
          <PrimaryButton disabled={processing}>
            メールアドレス確認リンクの再送
          </PrimaryButton>

          <Link
            href={route('logout')}
            method="post"
            as="button"
            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            ログアウト
          </Link>
        </div>
      </form>
    </GuestLayout>
  );
}
