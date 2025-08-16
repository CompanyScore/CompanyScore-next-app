'use client';

import Link from 'next/link';

export function UserDataLink() {
  return (
    <Link href="/test/user_data" className="btn btn-sm btn-outline btn-primary">
      My Data
    </Link>
  );
}
