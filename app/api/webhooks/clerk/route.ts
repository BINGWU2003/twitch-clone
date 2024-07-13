/*
 * @Author: BINGWU
 * @Date: 2024-06-29 17:58:46
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-06-29 22:06:10
 * @FilePath: \twitch-clone\app\api\webhooks\clerk\route.ts
 * @Describe: 增删改用户时的webhook
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { prisma } from '@/lib/db'
export async function POST(req: Request) {

  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    })
  }

  // Do something with the payload
  // For this guide, you simply log the payload to the console
  const { id } = evt.data;
  const eventType = evt.type;
  if (eventType === 'user.created') {
    const { id, username, image_url } = payload.data
    await prisma.user.create({
      data: {
        externalUserId: id,
        username,
        imageUrl: image_url,
      }
    })
  } else if (eventType === 'user.updated') {
    const { id, username, image_url } = payload.data
    const currentUser = await prisma.user.findUnique({
      where: {
        externalUserId: id,
      }
    })
    if (!currentUser) {
      return new Response('User not found', {
        status: 404
      })
    } else {
      await prisma.user.update({
        where: {
          externalUserId: id,
        },
        data: {
          username,
          imageUrl: image_url,
        }
      })
    }
  } else if(eventType === 'user.deleted'){
    const { id } = payload.data
    const currentUser = await prisma.user.findUnique({
      where: {
        externalUserId: id,
    }})
    if(!currentUser){
      return new Response('User not found', {
        status: 404
      })
    } else {
      await prisma.user.delete({
        where: {
          externalUserId: id,
        }
      })
    }
  }
  console.log(`Webhook with and ID of ${id} and type of ${eventType}`)
  return new Response('', { status: 200 })
}