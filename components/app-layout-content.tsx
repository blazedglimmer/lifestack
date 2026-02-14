'use client';

import { MotionDiv } from '@/motion-wrappers';

export function AppLayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 flex flex-col w-full">
      <div className="w-full px-6 md:px-8 py-8 md:py-12">
        <div className="mx-auto w-full max-w-6xl">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </MotionDiv>
        </div>
      </div>
    </main>
  );
}
