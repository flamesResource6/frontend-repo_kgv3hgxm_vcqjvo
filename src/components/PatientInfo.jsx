import React from 'react';

function PatientInfo() {
  return (
    <section id="patient-info" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 p-6 bg-slate-50/50">
            <h3 className="text-lg font-semibold text-slate-900">Insurance Accepted</h3>
            <p className="mt-2 text-slate-600 text-sm">Major plans accepted. Please contact the office for the latest list and coverage details.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-slate-50/50">
            <h3 className="text-lg font-semibold text-slate-900">Telehealth Available</h3>
            <p className="mt-2 text-slate-600 text-sm">Secure video visits for eligible patients anywhere in the state.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PatientInfo;
