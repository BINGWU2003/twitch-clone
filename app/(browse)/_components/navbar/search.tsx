"use client";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation";
export const Search = () => {
  const router = useRouter()
  const [inputValue, setInputValue] = useState<string>('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) {
      return
    } else {
      router.push(`/search?keyword=${inputValue}`)
      setInputValue('')
    }
  }
  return (
    <>
      <form className="flex items-center" onSubmit={handleSubmit}>
        <Input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="请输入内容" className="bg-[#1f2029] w-96 " />
        <Button type="submit" variant="secondary" className="bg-[#252630] hover:bg-transparent ml-2">
          <SearchIcon className="color-[#252630]"/>
        </Button>
      </form>
    </>
  )
}