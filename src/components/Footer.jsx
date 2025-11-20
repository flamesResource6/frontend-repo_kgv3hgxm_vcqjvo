import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h4 className="text-lg font-semibold">Dr. Harsh Chainani</h4>
            <p className="mt-2 text-slate-400">Board-Certified Psychiatrist</p>
          </div>
          <div>
            <h5 className="font-medium">Clinic</h5>
            <p className="mt-2 text-slate-300">123 Mindful Way, Suite 200<br/>City, ST 12345</p>
            <p className="mt-2"><a href="tel:+11234567890" className="text-emerald-300 hover:text-emerald-200">(123) 456-7890</a></p>
          </div>
          <div>
            <h5 className="font-medium">Connect</h5>
            <div className="mt-2 space-x-4">
              <a href="#" className="text-slate-300 hover:text-white">LinkedIn</a>
              <a href="#" className="text-slate-300 hover:text-white">Twitter</a>
              <a href="#" className="text-slate-300 hover:text-white">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Harsh Chainani, MD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
