import { Button } from "@/components/ui/button"
import type { ChangeEvent, FormEvent } from "react"
import { FileText } from "lucide-react"
import { cn } from "@/lib/utils"

type UploadPDFProps = {
  handleGenerateQuiz: (e: FormEvent) => Promise<string | number | undefined>
  handleFileChange: (
    event: ChangeEvent<HTMLInputElement>,
  ) => Promise<string | number | undefined>
  fileName?: string
  isQuestionnaireGenerated?: boolean
}

function UploadPDF({
  handleGenerateQuiz,
  handleFileChange,
  fileName,
  isQuestionnaireGenerated,
}: UploadPDFProps) {
  return (
    <form
      onSubmit={handleGenerateQuiz}
      className={cn(
        "w-full flex-col items-center justify-center h-full max-w-[800px]",
        isQuestionnaireGenerated ? "hidden" : "flex",
      )}
    >
      <label
        aria-label="upload pdf"
        htmlFor="upload-pdf"
        className="w-fit border-2 border-gray-400 rounded-md p-2 h-fit cursor-pointer text-gray-400 flex text-sm items-center"
        role="button"
        tabIndex={0}
      >
        <FileText className="mr-1" />
        {fileName ? fileName : "Upload PDF"}
      </label>
      <input
        className="border-gray-400 border-2 rounded-md p-1 cursor-pointer hidden"
        type="file"
        name="upload-pdf"
        id="upload-pdf"
        accept="application/pdf"
        onChange={handleFileChange}
      />
      {fileName && (
        <Button
          type="submit"
          className="p-2 mt-4 text-white font-bold bg-[var(--dlb)]"
        >
          Generate Quiz
        </Button>
      )}
    </form>
  )
}

export { UploadPDF }
