import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Glaxy from './ui/glaxy';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Glaxy classNames='flex-1' />
    </main>
  );
}
