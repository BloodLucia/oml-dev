import { getXataClient } from '@/libs/xata'
import { NextApiRequest } from 'next'
import { NextRequest, NextResponse } from 'next/server'

const xata = getXataClient()
export async function GET() {
  const links = await xata.db.links.getAll()
  if (links.length) {
    return NextResponse.json(links)
  } else {
    return NextResponse.json({ message: 'No links found' })
  }
}
