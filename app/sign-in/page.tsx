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
    <div
      className="min-h-screen -mt-16 bg-cover bg-center bg-no-repeat"
    //style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="grid grid-cols-1 mt-24 mx-4 xl:place-items-center">
        <div className="bg-white px-6 shadow-xl ring-1 ring-gray-900/5 mx-auto xl:max-w-2xl rounded-lg opacity-[.9]">
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-5 text-base leading-7 text-gray-600">
              <div
                className="animate-fade-up"
                style={{
                  animationDelay: '0.15s',
                  animationFillMode: 'forwards',
                  color: '#145eb4'
                }}
              >
                <div className="font-bold text-4xl text-center pt-4">
                  OncoZero.AI
                </div>
              </div>
              <p
                className="mt-2 animate-fade-up text-center text-gray-500 opacity-75 xs:text-sm sm:text-base md:text-lg"
                style={{
                  animationDelay: '0.25s',
                  animationFillMode: 'forwards'
                }}
              >
                OncoZero.AI - компания, специализирующаяся на использовании
                искусственного интеллекта для поддержки врачей, предоставляя им
                ценные инсайты и рекомендации для точной диагностики и лечения
                медицинских состояний с уверенностью и точностью.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-24 mx-4 xl:place-items-center">
        <div className="bg-white px-6 shadow-xl ring-1 ring-gray-900/5 xl:mx-auto xl:max-w-2xl rounded-lg opacity-[.9]">
          <div className="mx-auto">
            <div className="divide-y divide-gray-300/50">
              <div className="space-y-6 py-5 text-base leading-7 text-gray-600">
                <div
                  className="animate-fade-up"
                  style={{
                    animationDelay: '0.15s',
                    animationFillMode: 'forwards',
                    color: '#145eb4'
                  }}
                >
                  <div className="font-bold text-4xl text-center pt-4">
                    Чат-Бот
                  </div>
                </div>
                <p
                  className="animate-fade-up text-center text-gray-500 opacity-75 xs:text-sm sm:text-base md:text-lg"
                  style={{
                    animationDelay: '0.25s',
                    animationFillMode: 'forwards'
                  }}
                >
                  Чат-бот предоставляет помощь и рекомендации в сфере медицины,
                  включая поставление диагноза исходя из анализов. Цель -
                  предоставить врачам дополнительное мнение и развеять их
                  сомнения.
                </p>
                <div className="grid justify-items-center">
                  <LoginButtonGoogle></LoginButtonGoogle>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}