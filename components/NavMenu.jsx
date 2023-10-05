import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthCheck from './AuthCheck';
import SignInButton, { SignOutButton } from './Buttons';

export default function NavMenu() {
  return (
    <nav className="py-3 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/next.svg" width={200} height={30} alt="social logo" />
        </Link>
        <ul className="max-w-3xl flex justify-between items-center gap-6">
          <li>
            <Link href="/about">About</Link>
          </li>
         
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <SignInButton />
          </li>
          <li>
            <AuthCheck>
              <SignOutButton />
            </AuthCheck>
          </li>
        </ul>
      </div>
    </nav>
  );
}

