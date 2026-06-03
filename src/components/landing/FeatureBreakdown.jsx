import React from 'react'

const FeatureBreakdown = () => {
  return (
    <section class="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-32">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div class="order-2 md:order-1">
                <h2 class="font-headline-md text-headline-md mb-6">Custom Automations for <br/><span class="purple-gradient-text">Extreme Efficiency</span></h2>
                <p class="font-body-lg text-body-lg text-on-surface-variant mb-8">Stop doing the same manual tasks over and over. CommandBoard's visual logic builder allows your team to define triggers and actions that keep the momentum going without manual intervention.</p>
                <ul class="space-y-4">
                <li class="flex items-center gap-3 text-on-surface">
                <span class="material-symbols-outlined text-primary">check_circle</span>
                <span>Auto-assign reviewers based on code ownership</span>
                </li>
                <li class="flex items-center gap-3 text-on-surface">
                <span class="material-symbols-outlined text-primary">check_circle</span>
                <span>Transition states based on GitHub PR status</span>
                </li>
                <li class="flex items-center gap-3 text-on-surface">
                <span class="material-symbols-outlined text-primary">check_circle</span>
                <span>Slack notifications for high-priority blockers</span>
                </li>
                </ul>
            </div>
            <div class="order-1 md:order-2 glass-card rounded-2xl aspect-video flex items-center justify-center p-8 bg-gradient-to-br from-primary/10 to-transparent">
                <span class="material-symbols-outlined text-[120px] text-primary/40">settings_suggest</span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div class="glass-card rounded-2xl aspect-video flex items-center justify-center p-8 bg-gradient-to-bl from-tertiary/10 to-transparent">
                <span class="material-symbols-outlined text-[120px] text-tertiary/40">admin_panel_settings</span>
            </div>
            <div>
            <h2 class="font-headline-md text-headline-md mb-6">Advanced Security <br/><span class="text-tertiary">Built-in by Design</span></h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant mb-8">We understand your source code and internal roadmaps are your most valuable assets. CommandBoard implements enterprise-grade security standards to keep your data protected.</p>
            <ul class="space-y-4">
                <li class="flex items-center gap-3 text-on-surface">
                <span class="material-symbols-outlined text-tertiary">verified_user</span>
                <span>SOC2 Type II Compliant &amp; SOC3 Certified</span>
                </li>
                <li class="flex items-center gap-3 text-on-surface">
                <span class="material-symbols-outlined text-tertiary">verified_user</span>
                <span>End-to-end encryption for all project data</span>
                </li>
                <li class="flex items-center gap-3 text-on-surface">
                <span class="material-symbols-outlined text-tertiary">verified_user</span>
                <span>SSO Integration with Okta, Azure AD, &amp; Google</span>
                </li>
            </ul>
            </div>
        </div>
    </section>
  )
}

export default FeatureBreakdown