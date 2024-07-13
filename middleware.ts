/*
 * @Author: BINGWU
 * @Date: 2024-06-25 22:47:40
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-07-13 23:58:40
 * @FilePath: \twitch-clone\middleware.ts
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import { clerkMiddleware ,createRouteMatcher} from "@clerk/nextjs/server";
// 受保护的路由
const isProtectedRoute = createRouteMatcher([
  
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};