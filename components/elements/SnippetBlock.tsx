interface Props {
    code: string
    language: string
  }
  
  export function SnippetBlock({ code, language }: Props) {
    return (
      <pre className="bg-[#1f1f23] text-code text-sm rounded-md p-4 font-mono overflow-x-auto">
        <code>{code}</code>
      </pre>
    )
  }
  