'use client';

import Layout from '@/pages/components/Layout';
import Home from '@/pages/components';
import Modal from '@/pages/components/Modal';

import './globals.css';

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          <Modal isOpen={true} title="Test Modal" actionLabel="Login" />
          <Home />
        </Layout>
      </body>
    </html>
  );
}
