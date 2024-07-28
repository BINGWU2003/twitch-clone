/*
 * @Author: BINGWU
 * @Date: 2024-07-14 16:02:58
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-07-28 22:11:24
 * @FilePath: \twitch-clone\app\(browse)\_components\siderbar\hitn.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
interface HintProps {
  children: React.ReactNode;
  label: string;

}
export const Hint = ({ children, label }: HintProps) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {children}
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  )
}