import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import bg from '../../public/back10.gif'
import { NdviButton } from '@/components/ndvi-button'
import { LoginButtonGoogle } from '@/components/login-button-google'
import { PredictButton } from '@/components/predict-button'



export default async function SignInPage() {
  const session = await auth()

  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/')
  }
  return (
    <div className="min-h-screen -mt-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg.src})` }}>
      <div className='grid grid-cols-1 mt-24 mx-4 xl:place-items-center'>
        <div className="bg-white px-6 shadow-xl ring-1 ring-gray-900/5 mx-auto xl:max-w-2xl rounded-lg opacity-[.9]" >
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-5 text-base leading-7 text-gray-600">
              <div className='animate-fade-up'
                style={{ animationDelay: "0.15s", animationFillMode: "forwards", color: "#66BB6A" }}
              >
                <div className='font-bold text-4xl text-center pt-4'>
                  CultivaAI
                </div>
              </div>
              <p
                className="mt-2 animate-fade-up text-center text-gray-500 opacity-75 xs:text-sm sm:text-base md:text-lg"
                style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
              >
                Ваш набор AI инструментов для сельского хозяйства
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='grid gap-4 grid-cols-1 xl:grid-cols-3 pt-4 mx-4 mb-10'>
        <div className="bg-white px-6 shadow-xl ring-1 ring-gray-900/5 xl:mx-auto xl:max-w-2xl rounded-lg opacity-[.9]" >
          <div className="mx-auto">
            <div className="divide-y divide-gray-300/50">
              <div className="space-y-6 py-5 text-base leading-7 text-gray-600">
                <div className='animate-fade-up'
                  style={{ animationDelay: "0.15s", animationFillMode: "forwards", color: "#66BB6A" }}
                >
                  <div className='font-bold text-4xl text-center pt-4'>
                    Чат-Бот
                  </div>
                </div>
                <p
                  className="animate-fade-up text-center text-gray-500 opacity-75 xs:text-sm sm:text-base md:text-lg"
                  style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
                >
                  Чат-бот предоставляет точные ответы и рекомендации по сельскому хозяйству, включая выбор культур, борьбу с вредителями и анализ рынка. Цель - поддержать вас в успешном ведении бизнеса и принятии обоснованных решений.
                </p>
                <div className='grid justify-items-center' >
                  <LoginButtonGoogle></LoginButtonGoogle>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white px-6 shadow-xl ring-1 ring-gray-900/5 xl:mx-auto xl:max-w-2xl rounded-lg opacity-[.9]" >
          <div className="mx-auto">
            <div className="divide-y divide-gray-300/50">
              <div className="space-y-6 py-5 text-base leading-7 text-gray-600">
                <div className='animate-fade-up'
                  style={{ animationDelay: "0.15s", animationFillMode: "forwards", color: "#66BB6A" }}
                >

                  <div className='font-bold text-4xl text-center pt-4'>
                    Карта NDVI
                  </div>
                </div>
                <p
                  className="animate-fade-up text-center text-gray-500 opacity-75 xs:text-sm sm:text-base md:text-lg"
                  style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
                >
                  Уникальная карта показывает состояние растений по всему миру в реальном времени. Этот инструмент поможет вам легко понять, где растения здоровы и густо растут, и принять правильные решения для вашего сельского хозяйства.
                </p>
                <div className='grid justify-items-center' >
                  <NdviButton></NdviButton>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="bg-white px-6 shadow-xl ring-1 ring-gray-900/5 xl:mx-auto xl:max-w-2xl rounded-lg opacity-[.9]" >
          <div className="mx-auto">
            <div className="divide-y divide-gray-300/50">
              <div className="space-y-6 py-5 text-base leading-7 text-gray-600">
                <div className='animate-fade-up'
                  style={{ animationDelay: "0.15s", animationFillMode: "forwards", color: "#66BB6A" }}
                >

                  <div className='font-bold text-4xl text-center pt-4'>
                    Болезни Растений
                  </div>
                </div>
                <p
                  className="animate-fade-up text-center text-gray-500 opacity-75 xs:text-sm sm:text-base md:text-lg"
                  style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
                >

                  Этот инструмент анализирует фото растений и может предположить название возможных болезней. Он станет полезным помощником в уходе за растениями, позволяя вам своевременно реагировать на проблемы на ваших полях.
                </p>
                <div className='grid justify-items-center' >
                  <PredictButton></PredictButton>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}