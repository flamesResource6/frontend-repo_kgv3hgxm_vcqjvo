import React from 'react';

const services = [
  { title: 'Medication Management', desc: 'Thoughtful prescribing with regular follow-up and side-effect monitoring.' },
  { title: 'Psychotherapy', desc: 'Collaborative therapy tailored to your goals and strengths.' },
  { title: 'Anxiety & Depression', desc: 'Evaluation and treatment plans to help you regain balance and resilience.' },
  { title: 'ADHD', desc: 'Assessment and ongoing care for attention and executive functioning challenges.' },
];

function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Services</h2>
          <p className="mt-2 text-slate-600">Individualized care guided by science and compassion.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
