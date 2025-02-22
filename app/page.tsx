'use client'
import { useState } from 'react';
import Glaxy from './ui/glaxy';
import PdfViewer from '@/components/PdfViewer';
import clsx from 'clsx';
import ResumeTab from '@/components/resume-tab';

export default function Page() {
  const [resumeShow, setResumeShow] = useState(false);
  
  return (
    <main className='w-full h-full relative'>
      <div className='w-full h-full'>
        <Glaxy classNames='flex-1' />
      </div>
      <ResumeTab />
      <span className='text-white text-base font-bold absolute bottom-2 right-2 cursor-pointer z-10 px-2 py-1 bg-gray-800 rounded-md' onClick={() => setResumeShow(!resumeShow)}>简历</span>
      {resumeShow && <div className='absolute top-0 left-0'>
        <PdfViewer url={"/resume.pdf"} />
      </div>}
    </main>
  );
}
