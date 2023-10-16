'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link';

export function PredictButton() {

  return (
    <Link href={'https://cultiva-ai-predict.vercel.app/'} target='_blank' className='inline-block	'>
      <Button
        variant="outline"
        className="text-sm font-medium hover:bg-logogreen hover:text-white  px-4 rounded-full">
        Болезни Растений
      </Button>
    </Link>
  )

}
