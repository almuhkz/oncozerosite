import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Рекомендации по выращиванию сельскохозяйственных культур',
    message: `Какие сельскохозяйственные культуры подходят для Алматинской области?`
  },
  {
    heading: 'Борьба с вредителями',
    message: 'Каковы наиболее эффективные органические методы борьбы с вредителями в сельском хозяйстве? \n'
  },
  {
    heading: 'Состояние почвы',
    message: `Как фермеры могут улучшить состояние и плодородие почвы для повышения урожайности?\n`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Добро пожаловать в чатбот CultivaAI!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
        CultivaAI: сельскохозяйственный компаньон на базе искусственного интеллекта для персонализированных рекомендаций по выращиванию культур, получения информации в режиме реального времени и повышения рентабельности.
        </p>
        <p className="leading-normal text-muted-foreground">
          Вы можете начать разговор здесь или попробовать следующие примеры:
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
