import React from 'react';

function About() {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-[1fr,1.3fr] gap-12 items-start">
          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-br from-slate-100 to-emerald-50 ring-1 ring-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
              <div className="h-28 w-28 rounded-full bg-emerald-600 text-white text-3xl font-bold flex items-center justify-center">HC</div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">About Dr. Harsh Chainani</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Dr. Chainani is a board-certified psychiatrist providing comprehensive mental health care for adults and adolescents. He combines a thoughtful, evidence-based approach with warmth, respect, and collaboration.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 p-5 bg-slate-50/50">
                <p className="text-sm text-slate-500">Credentials</p>
                <p className="mt-1 font-medium text-slate-800">MD (Doctor of Medicine)</p>
                <p className="text-slate-600 text-sm">Board Certified in Psychiatry</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-5 bg-slate-50/50">
                <p className="text-sm text-slate-500">Philosophy</p>
                <p className="mt-1 text-slate-700">Compassionate, patient-centered care that integrates psychotherapy and, when appropriate, medication.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
