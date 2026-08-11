import Typewriter from 'typewriter-effect'

function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="text-center">

        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-white/60">
          Hello, I'm
        </p>

        <h1 className="text-6xl font-black tracking-tight md:text-8xl">
          Genesis
        </h1>

        <div className="mt-6 text-2xl font-bold text-pink-400 md:text-4xl">
          <Typewriter
            options={{
              strings: [
                'Computational Renewables & Sustainability Analyst',
                'Python & SQL Developer',
                'Building Scalable Data Applications and Developing Insightful Policy Briefs',
                'Data Science & AI Enthusiast',
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </div>

      </div>
    </section>
  )
}

export default Hero