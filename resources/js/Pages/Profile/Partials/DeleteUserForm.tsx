import { useRef, useState, FormEventHandler } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function DeleteUserForm({
  className = '',
}: {
  className?: string;
}) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef<HTMLInputElement>();

  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
  } = useForm({
    password: '',
  });

  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };

  const deleteUser: FormEventHandler = (e) => {
    e.preventDefault();

    destroy(route('profile.destroy'), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current?.focus(),
      onFinish: () => reset(),
    });
  };

  const closeModal = () => {
    setConfirmingUserDeletion(false);

    reset();
  };

  return (
    <section className={`space-y-6 ${className}`}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">アカウントを削除</h2>

        <p className="mt-1 text-sm text-gray-600">
          アカウントを削除すると、全てのデータとファイルも完全に削除されます。
          <br />
          <span>アカウントを削除する前に必要なデータがあれば</span>
          事前にダウンロードの実施をお願いします。
        </p>
      </header>

      <DangerButton onClick={confirmUserDeletion}>アカウントを削除</DangerButton>

      <Modal show={confirmingUserDeletion} onClose={closeModal}>
        <form onSubmit={deleteUser} className="p-6">
          <h2 className="text-lg font-medium text-gray-900">
            本当にアカウントを削除してもよいですか？
          </h2>

          <p className="mt-1 text-sm text-gray-600">
            アカウントを削除すると、全てのデータとファイルも完全に削除されます。
            <br />
            <span>完全にアカウントを削除するためには、</span>
            確認のために再度パスワードを入力してください。
          </p>

          <div className="mt-6">
            <InputLabel
              htmlFor="password"
              value="パスワード"
              className="sr-only"
            />

            <TextInput
              id="password"
              type="password"
              name="password"
              ref={passwordInput}
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              className="mt-1 block w-3/4"
              isFocused
              placeholder="Password"
            />

            <InputError message={errors.password} className="mt-2" />
          </div>

          <div className="mt-6 flex justify-end">
            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

            <DangerButton className="ml-3" disabled={processing}>
              アカウントを削除
            </DangerButton>
          </div>
        </form>
      </Modal>
    </section>
  );
}
