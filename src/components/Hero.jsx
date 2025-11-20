import React from 'react';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-green-50" />
      {/* Decorative shapes */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-slate-200/50 blur-2xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-emerald-200/40 blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-wider text-sm text-slate-500 mb-3">Psychiatry • Telehealth • In-Person</p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Compassionate, evidence‑based care for your mental well‑being
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Harsh Chainani, MD — supporting adults and adolescents with thoughtful diagnosis, medication management, and psychotherapy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-700 font-medium hover:bg-slate-50"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl ring-1 ring-slate-100">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-200 to-emerald-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-emerald-600/90 text-white flex items-center justify-center text-3xl font-bold shadow-md">HC</div>
                  <p className="text-slate-700 font-medium">Harsh Chainani, MD</p>
                  <p className="text-slate-500 text-sm">Board-Certified Psychiatrist</p>
                </div>
              </div>
              <div className="mt-4 text-slate-600 text-sm">
                New patients welcome • Insurance accepted • Telehealth available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
