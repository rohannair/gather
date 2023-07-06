import { useRef, useState } from 'react'
import { conform, type FieldConfig, useInputEvent } from '@conform-to/react'
import MDEditor from '@uiw/react-md-editor'
import { ClientOnly } from 'remix-utils'

import { cn } from '@/lib/utils'

interface IEditorProps extends FieldConfig<string> {
  className?: string
}

export const Editor = ({ className, ...config }: IEditorProps) => {
  const shadowInputRef = useRef<HTMLInputElement>(null)
  const control = useInputEvent({ ref: shadowInputRef })
  const [value, setValue] = useState('')

  return (
    <ClientOnly>
      {() => (
        <>
          <MDEditor
            className={cn(
              'w-full rounded-lg border border-input bg-background px-3 py-2',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              className,
            )}
            value={value}
            data-color-mode="light"
            visibleDragbar={false}
            onChange={val => control.change(val ?? '')}
            onFocus={control.focus}
            onBlur={control.blur}
          />
          <input
            ref={shadowInputRef}
            onChange={(e?: React.ChangeEvent<HTMLInputElement>) => {
              setValue(e?.target?.value ?? '')
            }}
            {...conform.input(config, {
              ariaAttributes: true,
              hidden: true,
            })}
          />
        </>
      )}
    </ClientOnly>
  )
}

export const ParsedMarkdown = ({ text }: { text: string }) => (
  <ClientOnly>
    {() => (
      <MDEditor.Markdown
        style={{
          backgroundColor: 'inherit',
          color: 'gray',
          fontSize: '12px',
        }}
        source={text}
      />
    )}
  </ClientOnly>
)
