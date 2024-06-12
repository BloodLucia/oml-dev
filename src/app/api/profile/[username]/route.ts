import { getXataClient } from '@/libs/xata'
import { NextApiRequest } from 'next'
import { NextRequest, NextResponse } from 'next/server'

const xata = getXataClient()
export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  const { username } = params

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 422 })
  }

  // 获取所有links

  const data = await xata.db.pages
    .filter('userId.username', username)
    .getFirst()

    // xata.db.users.create({ username, email: '', password: ''})

  
  const links = await xata.db.links.filter('pageId.id', data?.id).getAll()
  return NextResponse.json({ profile: data, links }, { status: 200 })
}
