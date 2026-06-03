import React from 'react'

const FAQ = () => {
  return (
    <section class="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16">
        <h2 class="font-headline-md text-headline-md text-center mb-16">Frequently Asked Questions</h2>
        <div class="max-w-3xl mx-auto space-y-4">
            <div class="glass-card rounded-xl overflow-hidden">
                <button class="w-full p-6 text-left flex justify-between items-center group">
                <span class="font-bold">How secure is my data?</span>
                <span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors">expand_more</span>
                </button>
                <div class="px-6 pb-6 text-on-surface-variant font-body-md">
                We use enterprise-grade AES-256 encryption at rest and TLS 1.3 in transit. Our infrastructure is SOC2 Type II compliant and we undergo regular third-party security audits.</div>
            </div>
            <div class="glass-card rounded-xl overflow-hidden">
                <button class="w-full p-6 text-left flex justify-between items-center group">
                <span class="font-bold">Can I import from Trello or Jira?</span>
                <span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors">expand_more</span>
                </button>
                <div class="px-6 pb-6 text-on-surface-variant font-body-md">
                                        Yes! We have a one-click migration tool that imports all your boards, tasks, labels, and historical data from Trello, Jira, and Linear.
                </div>
            </div>
            <div class="glass-card rounded-xl overflow-hidden">
                <button class="w-full p-6 text-left flex justify-between items-center group">
                <span class="font-bold">Is there a limit on file attachments?</span>
                <span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors">expand_more</span>
                </button>
                <div class="px-6 pb-6 text-on-surface-variant font-body-md">
                Starter plans have a 100MB per file limit, while Pro and Enterprise plans have unlimited storage with up to 5GB per individual file upload.</div>
            </div>
        </div>
    </section>
  )
}

export default FAQ