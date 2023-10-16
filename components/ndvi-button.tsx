'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link';

export function NdviButton() {

  return (
    <Link href={'https://cultiva-ai.users.earthengine.app/view/ndvi'} target='_blank' className='inline-block mx-auto	'>
      <Button
        variant="outline"
        className="text-sm font-medium hover:bg-logogreen hover:text-white  px-4 rounded-full">
        Карта NDVI
      </Button>
    </Link>
  )

}
