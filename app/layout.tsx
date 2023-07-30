'use client';

import Layout from '@/pages/components/Layout';
import Home from '@/pages/components';
import { LoginModal } from '@/pages/components/modals/LoginModal';

import './globals.css';
import RegisterModal from '@/pages/components/modals/RegisterModal';

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RegisterModal />
        <LoginModal />
        <Layout>
          <Home />
        </Layout>
      </body>
    </html>
  );
}
