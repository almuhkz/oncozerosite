import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'AI-поддержка для врачей',
    message: `Как искусственный интеллект помогает врачам в точной диагностике и лечении?`
  },
  {
    heading: 'Инновационные решения OncoZero.AI',
    message: 'Какие инсайты и рекомендации предоставляет OncoZero.AI для врачей в медицинской практике? \n'
  },
  {
    heading: 'Уверенная диагностика с OncoZero.AI',
    message: `Повышение точности и уверенности врачей благодаря технологиям OncoZero.AI.\n`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Добро пожаловать в чатбот OncoZero.AI!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          OncoZeroAI: компаньон на базе искусственного интеллекта для помощи врачам.
        </p>
        <p className="leading-normal text-muted-foreground">
          Начните с любого вопроса или же прикрепите анализы пациента.
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
