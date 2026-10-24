import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function RegisterPage({ onShowToast }) {
  // Form fields state
  const initialFormState = {
    fullName: '',
    username: '',
    password: '',
    email: '',
    dob: '1996-05-12',
    socialLink: '',
    favColor: '#C68642',
    cupsPerWeek: 7,
    visitTime: '08:30',
    moodSlider: 82,
    aboutYou: 'Avid pour-over enthusiast looking for natural Ethiopian microlots and quiet sunlit plant reading spots.',
    favDrink: 'Lavender Honey Latte',
    gender: 'female',
    interests: ['Coffee', 'Desserts'],
    termsAccepted: false
  };

  const [form, setForm] = useState(initialFormState);
  const [showPassword, setShowPassword] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState({});

  // Dynamic validations
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(form.email);
  const isUsernameValid = form.username.length >= 4 && form.username.length <= 20;
  const isPasswordValid = form.password.length >= 8;

  const handleInputChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleInterestToggle = (interest) => {
    setForm((prev) => {
      const exists = prev.interests.includes(interest);
      const updated = exists
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests: updated };
    });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarPreview(url);
      onShowToast('Profile photo uploaded successfully!', 'success');
    }
  };

  const handleReset = () => {
    setForm(initialFormState);
    setAvatarPreview(null);
    setTouched({});
    setIsSubmitted(false);
    onShowToast('Form fields reset to defaults.');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fullName) {
      onShowToast('Please provide your Full Name.', 'error');
      return;
    }
    if (!isUsernameValid) {
      onShowToast('Username must be between 4 and 20 characters.', 'error');
      return;
    }
    if (!isPasswordValid) {
      onShowToast('Password must be at least 8 characters.', 'error');
      return;
    }
    if (!isEmailValid) {
      onShowToast('Please provide a valid Email Address.', 'error');
      return;
    }
    if (!form.termsAccepted) {
      onShowToast('Please accept the Terms & Conditions.', 'error');
      return;
    }

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }

    setIsSubmitted(true);
    onShowToast(`Welcome to the Coffee Club, ${form.fullName}!`, 'success');
  };

  return (
    <div className="w-full pt-20 bg-[#F5EBDD] dark:bg-[#1a1412] min-h-screen py-12 px-2 sm:px-6 transition-colors">
      <div className="w-[95%] max-w-5xl mx-auto">
        {/* Header Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6B8E6B]/15 text-[#2E7D32] dark:text-[#abd0a9] text-xs font-bold uppercase tracking-wider mb-2.5">
            <span className="material-symbols-outlined text-[16px]">stars</span>
            <span>Artisan Loyalty Guild</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3E2723] dark:text-white tracking-tight">
            Join our Coffee Club
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#504442] dark:text-[#d3c3c0] max-w-2xl mx-auto mt-2 leading-relaxed">
            Personalize your morning ritual, receive complimentary birthday beans, early workshop invitations, and earn botanical stamps.
          </p>
        </div>

        {/* Success Modal / Banner */}
        {isSubmitted && (
          <div className="mb-8 p-6 bg-white dark:bg-[#241c19] rounded-3xl shadow-xl border-2 border-[#6B8E6B] animate-fadeIn flex flex-col sm:flex-row items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#6B8E6B]/20 text-[#6B8E6B] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-serif text-xl font-bold text-[#271310] dark:text-white">
                Registration Confirmed!
              </h3>
              <p className="text-xs sm:text-sm text-[#504442] dark:text-[#d3c3c0] mt-1">
                Your Member Card <strong>BB-94812</strong> has been activated for <strong>{form.fullName}</strong>. Present your badge on your next visit for a complimentary oat milk flat white!
              </p>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-4 py-2 bg-[#885210] text-white text-xs font-bold rounded-xl hover:bg-[#c68642] transition-colors shrink-0 cursor-pointer"
            >
              Edit Details
            </button>
          </div>
        )}

        {/* Centered Form Card with reduced side spaces */}
        <div className="bg-white dark:bg-[#241c19] rounded-3xl p-5 sm:p-10 shadow-xl border border-[#3E2723]/10 dark:border-white/10">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* SECTION 1: CREDENTIALS */}
            <fieldset className="border-0 p-0 m-0 space-y-5">
              <legend className="font-serif text-base sm:text-lg font-bold text-[#3E2723] dark:text-white flex items-center gap-2.5 pb-2.5 border-b border-[#3E2723]/10 dark:border-white/10 w-full">
                <span className="w-7 h-7 rounded-full bg-[#fdb56c] text-[#774401] text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <span>Account &amp; Security Credentials</span>
              </legend>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 1. Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde] flex items-center justify-between">
                    <span>
                      Full Name <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-[#504442] dark:text-[#d3c3c0]">
                      badge
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julian Thorne"
                      value={form.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#f7edde]/50 dark:bg-[#2b221f] text-[#1f1b13] dark:text-white text-sm border border-[#3e2723]/20 dark:border-white/15 focus:outline-none focus:ring-2 focus:ring-[#C68642] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* 2. Username */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde] flex items-center justify-between">
                    <span>
                      Username <span className="text-red-500">*</span>
                    </span>
                    <span className="text-xs font-mono text-[#504442] dark:text-[#d3c3c0]">
                      {form.username.length}/20 (min 4)
                    </span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[20px] text-[#504442] dark:text-[#d3c3c0]">
                      alternate_email
                    </span>
                    <input
                      type="text"
                      required
                      minLength={4}
                      maxLength={20}
                      placeholder="e.g. julian_roast"
                      value={form.username}
                      onBlur={() => handleBlur('username')}
                      onChange={(e) => handleInputChange('username', e.target.value)}
                      className={`w-full pl-11 pr-11 py-3 rounded-xl bg-[#f7edde]/50 dark:bg-[#2b221f] text-[#1f1b13] dark:text-white text-base border transition-all ${
                        touched.username && !isUsernameValid
                          ? 'border-red-500 ring-2 ring-red-400/20 bg-red-50/20'
                          : touched.username && isUsernameValid
                          ? 'border-green-600 ring-2 ring-green-500/20'
                          : 'border-[#3e2723]/20 dark:border-white/15 focus:ring-2 focus:ring-[#C68642]'
                      }`}
                    />
                    {touched.username && isUsernameValid && (
                      <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-green-600 text-[20px]">
                        check_circle
                      </span>
                    )}
                  </div>
                  {touched.username && !isUsernameValid && (
                    <span className="text-xs text-red-500 font-medium">
                      Username must be between 4 and 20 characters.
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 3. Password */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde] flex items-center justify-between">
                    <span>
                      Password <span className="text-red-500">*</span>
                    </span>
                    <span className="text-xs text-[#504442] dark:text-[#d3c3c0]">Min 8 chars</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[20px] text-[#504442] dark:text-[#d3c3c0]">
                      lock
                    </span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      minLength={8}
                      placeholder="••••••••"
                      value={form.password}
                      onBlur={() => handleBlur('password')}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="w-full pl-11 pr-11 py-3 rounded-xl bg-[#f7edde]/50 dark:bg-[#2b221f] text-[#1f1b13] dark:text-white text-base border border-[#3e2723]/20 dark:border-white/15 focus:outline-none focus:ring-2 focus:ring-[#C68642] transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#504442] dark:text-[#d3c3c0] hover:text-[#271310] cursor-pointer"
                      aria-label="Toggle password view"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {showPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                  {/* Strength Bar */}
                  <div className="w-full bg-[#f7edde] dark:bg-[#352b27] h-2 rounded-full overflow-hidden mt-1">
                    <div
                      className={`h-full transition-all duration-300 ${
                        form.password.length >= 10
                          ? 'w-full bg-green-600'
                          : form.password.length >= 8
                          ? 'w-2/3 bg-[#C68642]'
                          : form.password.length > 0
                          ? 'w-1/3 bg-orange-400'
                          : 'w-0'
                      }`}
                    ></div>
                  </div>
                </div>

                {/* 4. Email Address with Live Validation */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde] flex items-center justify-between">
                    <span>
                      Email Address <span className="text-red-500">*</span>
                    </span>
                    {form.email && (
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded ${isEmailValid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {isEmailValid ? 'Valid Format' : 'Invalid Format'}
                      </span>
                    )}
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[20px] text-[#504442] dark:text-[#d3c3c0]">
                      mail
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="e.g. julian@botanicalcoffee.co"
                      value={form.email}
                      onBlur={() => handleBlur('email')}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full pl-11 pr-11 py-3 rounded-xl bg-[#f7edde]/50 dark:bg-[#2b221f] text-[#1f1b13] dark:text-white text-base border transition-all ${
                        touched.email && !isEmailValid
                          ? 'border-red-500 ring-2 ring-red-400/20'
                          : touched.email && isEmailValid
                          ? 'border-green-600 ring-2 ring-green-600/20'
                          : 'border-[#3e2723]/20 dark:border-white/15 focus:ring-2 focus:ring-[#C68642]'
                      }`}
                    />
                    {isEmailValid && (
                      <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-green-600 text-[20px]">
                        check_circle
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </fieldset>

            {/* SECTION 2: PALATE & VISIT PREFERENCES */}
            <fieldset className="border-0 p-0 m-0 space-y-5">
              <legend className="font-serif text-base sm:text-lg font-bold text-[#3E2723] dark:text-white flex items-center gap-2.5 pb-2.5 border-b border-[#3E2723]/10 dark:border-white/10 w-full">
                <span className="w-7 h-7 rounded-full bg-[#fdb56c] text-[#774401] text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <span>Palate &amp; Visitation Preferences</span>
              </legend>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* 5. Date of Birth */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde]">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={form.dob}
                    onChange={(e) => handleInputChange('dob', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f7edde]/50 dark:bg-[#2b221f] text-[#1f1b13] dark:text-white text-sm border border-[#3e2723]/20 dark:border-white/15 focus:ring-2 focus:ring-[#C68642]"
                  />
                </div>

                {/* 6. Website or Social Link */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde]">
                    Social / Website URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://instagram.com/..."
                    value={form.socialLink}
                    onChange={(e) => handleInputChange('socialLink', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f7edde]/50 dark:bg-[#2b221f] text-[#1f1b13] dark:text-white text-sm border border-[#3e2723]/20 dark:border-white/15 focus:ring-2 focus:ring-[#C68642]"
                  />
                </div>

                {/* 7. Favourite Colour (Picker + Swatch) */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde]">
                    Favourite Palette Shade
                  </label>
                  <div className="flex items-center gap-3 p-1.5 rounded-xl bg-[#f7edde]/50 dark:bg-[#2b221f] border border-[#3e2723]/20 dark:border-white/15">
                    <input
                      type="color"
                      value={form.favColor}
                      onChange={(e) => handleInputChange('favColor', e.target.value)}
                      className="w-8 h-8 rounded-lg cursor-pointer border-0 bg-transparent p-0"
                    />
                    <span
                      className="w-4 h-4 rounded-full border border-black/10 shrink-0"
                      style={{ backgroundColor: form.favColor }}
                    />
                    <span className="font-mono text-xs font-bold text-[#3E2723] dark:text-white">
                      {form.favColor.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 8. Cups of Coffee per Week */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde] flex items-center justify-between">
                    <span>Cups per week</span>
                    <span className="text-[11px] text-[#885210] dark:text-[#c68642] font-semibold">Min 1 • Max 50</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-[#504442] dark:text-[#d3c3c0]">
                      coffee_maker
                    </span>
                    <input
                      type="number"
                      min={1}
                      max={50}
                      value={form.cupsPerWeek}
                      onChange={(e) => handleInputChange('cupsPerWeek', Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#f7edde]/50 dark:bg-[#2b221f] text-[#1f1b13] dark:text-white text-sm border border-[#3e2723]/20 dark:border-white/15 focus:ring-2 focus:ring-[#C68642]"
                    />
                  </div>
                </div>

                {/* 9. Preferred Visit Time */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde]">
                    Preferred Visit Hour
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-[#504442] dark:text-[#d3c3c0]">
                      schedule
                    </span>
                    <input
                      type="time"
                      value={form.visitTime}
                      onChange={(e) => handleInputChange('visitTime', e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#f7edde]/50 dark:bg-[#2b221f] text-[#1f1b13] dark:text-white text-sm border border-[#3e2723]/20 dark:border-white/15 focus:ring-2 focus:ring-[#C68642]"
                    />
                  </div>
                </div>
              </div>

              {/* 10. Mood / Satisfaction Range Slider */}
              <div className="p-4 rounded-2xl bg-[#fcf2e4] dark:bg-[#2b221f] border border-[#3e2723]/10 dark:border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#3E2723] dark:text-white">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-[#885210] dark:text-[#c68642]">
                      sentiment_very_satisfied
                    </span>
                    Morning Energy &amp; Satisfaction Spectrum:
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#885210] text-white text-xs font-bold">
                    {form.moodSlider}% {form.moodSlider > 70 ? 'Zen Flow ✨' : form.moodSlider > 40 ? 'Balanced Roast ☕' : 'Sleepy Groggy 🥱'}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={form.moodSlider}
                  onChange={(e) => handleInputChange('moodSlider', Number(e.target.value))}
                  className="w-full h-2.5 bg-[#ebe1d3] dark:bg-[#352b27] rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#504442] dark:text-[#d3c3c0] font-medium">
                  <span>😴 Groggy Needs Caffeine</span>
                  <span>☕ Dialed In</span>
                  <span>✨ Mindful Zen Sanctuary</span>
                </div>
              </div>

              {/* 11. About You (Textarea) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde]">
                  About Your Palate &amp; Coffee Journey
                </label>
                <textarea
                  rows={3}
                  value={form.aboutYou}
                  onChange={(e) => handleInputChange('aboutYou', e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#f7edde]/50 dark:bg-[#2b221f] text-[#1f1b13] dark:text-white text-sm border border-[#3e2723]/20 dark:border-white/15 focus:ring-2 focus:ring-[#C68642] resize-y leading-relaxed"
                  placeholder="Tell us what roast profiles, botanical notes, or pastry pairings you love..."
                />
              </div>

              {/* 12. Favourite Drink (Select Dropdown) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde]">
                  Favourite Go-To Order
                </label>
                <select
                  value={form.favDrink}
                  onChange={(e) => handleInputChange('favDrink', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f7edde]/50 dark:bg-[#2b221f] text-[#1f1b13] dark:text-white text-sm border border-[#3e2723]/20 dark:border-white/15 focus:ring-2 focus:ring-[#C68642]"
                >
                  <option value="Single-Origin Pour Over">Single-Origin Pour Over (Oaxaca / Sidama)</option>
                  <option value="Lavender Honey Latte">Lavender Honey Cardamom Latte</option>
                  <option value="Kyoto Cold Brew">Kyoto Cold Drip 18-Hour</option>
                  <option value="Velvet Cappuccino">Velvet Cappuccino with Organic Cinnamon</option>
                  <option value="Matcha Botanical Tonic">Matcha Botanical Tonic</option>
                </select>
              </div>
            </fieldset>

            {/* SECTION 3: AVATAR, GENDER & INTERESTS */}
            <fieldset className="border-0 p-0 m-0 space-y-5">
              <legend className="font-serif text-base sm:text-lg font-bold text-[#3E2723] dark:text-white flex items-center gap-2.5 pb-2.5 border-b border-[#3E2723]/10 dark:border-white/10 w-full">
                <span className="w-7 h-7 rounded-full bg-[#fdb56c] text-[#774401] text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <span>Profile &amp; Member Customization</span>
              </legend>

              {/* 13. Upload Profile Photo */}
              <div className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-2xl bg-[#fcf2e4] dark:bg-[#2b221f] border border-[#3e2723]/10 dark:border-white/10">
                <div className="w-20 h-20 rounded-2xl bg-[#ebe1d3] dark:bg-[#352b27] overflow-hidden flex items-center justify-center shadow-md border-2 border-white dark:border-black shrink-0">
                  {avatarPreview ? (
                    <img src={avatarPreview} alt="Avatar Preview" className="w-full h-full object-cover" />
                  ) : (
                    <span className="material-symbols-outlined text-3xl text-[#885210] dark:text-[#c68642]">
                      account_circle
                    </span>
                  )}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E2723] dark:text-white block mb-0.5">
                    Upload Profile Photo
                  </label>
                  <p className="text-xs text-[#504442] dark:text-[#d3c3c0] mb-2.5 leading-relaxed">
                    PNG, JPG, or WEBP up to 5MB. Rendered directly on your digital member pass.
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="text-xs text-[#504442] dark:text-[#d3c3c0] file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#885210] file:text-white hover:file:bg-[#c68642] cursor-pointer"
                  />
                </div>
              </div>

              {/* 14. Gender (Radio Buttons, one pre-checked) */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde] block">
                  Gender Identity
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'female', label: 'Female' },
                    { id: 'male', label: 'Male' },
                    { id: 'non-binary', label: 'Non-Binary' },
                    { id: 'prefer-not', label: 'Prefer not to say' }
                  ].map((g) => (
                    <label
                      key={g.id}
                      className={`flex items-center gap-2.5 p-3 rounded-2xl border text-xs sm:text-sm font-semibold cursor-pointer transition-all ${
                        form.gender === g.id
                          ? 'bg-[#885210] text-white border-[#885210] shadow-sm'
                          : 'bg-[#f7edde]/50 dark:bg-[#2b221f] text-[#3e2723] dark:text-[#f7edde] border-[#3e2723]/10 dark:border-white/10 hover:bg-[#f7edde]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={g.id}
                        checked={form.gender === g.id}
                        onChange={() => handleInputChange('gender', g.id)}
                        className="accent-[#C68642] w-3.5 h-3.5 cursor-pointer"
                      />
                      <span>{g.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 15. Interests (Checkboxes, Coffee & Desserts pre-checked) */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde] block">
                  Club Interests (Select all that apply)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {['Coffee', 'Tea', 'Desserts', 'Events'].map((interest) => {
                    const isChecked = form.interests.includes(interest);
                    return (
                      <label
                        key={interest}
                        className={`flex items-center gap-2.5 p-3 rounded-2xl border text-xs sm:text-sm font-semibold cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-[#6B8E6B] text-white border-[#6B8E6B] shadow-sm'
                            : 'bg-[#f7edde]/50 dark:bg-[#2b221f] text-[#3e2723] dark:text-[#f7edde] border-[#3e2723]/10 dark:border-white/10 hover:bg-[#f7edde]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleInterestToggle(interest)}
                          className="accent-[#6B8E6B] w-3.5 h-3.5 cursor-pointer"
                        />
                        <span>{interest}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* 16 & 17: Read-Only and Disabled Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                {/* 16. Read-Only Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde] flex items-center justify-between">
                    <span>Membership Tier (Read-Only)</span>
                    <span className="text-[10px] text-[#885210] dark:text-[#c68642] font-mono">LOCKED</span>
                  </label>
                  <input
                    type="text"
                    readOnly
                    value="Standard Artisan Tier (Active)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#ebe1d3]/80 dark:bg-[#352b27] text-[#504442] dark:text-[#d3c3c0] text-sm border border-[#3e2723]/15 cursor-not-allowed font-medium"
                  />
                </div>

                {/* 17. Disabled Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E2723] dark:text-[#f7edde] flex items-center justify-between">
                    <span>Member ID (Disabled / System)</span>
                    <span className="text-[10px] text-gray-500 font-mono">AUTO-GENERATED</span>
                  </label>
                  <input
                    type="text"
                    disabled
                    value="BB-94812 (Encrypted)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-200/80 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm border border-gray-300 dark:border-gray-700 cursor-not-allowed font-mono"
                  />
                </div>
              </div>

              {/* 18. Terms & Conditions Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#fcf2e4] dark:bg-[#2b221f] border border-[#3e2723]/10 dark:border-white/10 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={form.termsAccepted}
                    onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                    className="mt-0.5 accent-[#885210] w-4 h-4 cursor-pointer shrink-0"
                  />
                  <span className="text-xs sm:text-sm text-[#504442] dark:text-[#d3c3c0] leading-relaxed">
                    I agree to the <strong>Brew &amp; Bloom Coffee Club Membership Terms</strong>, ethical sourcing privacy charter, and consent to receiving seasonal roast invitations. <span className="text-red-500 font-bold">*</span>
                  </span>
                </label>
              </div>
            </fieldset>

            {/* 19. Submit and Reset Buttons */}
            <div className="pt-4 border-t border-[#3e2723]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3.5">
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-[#3e2723]/20 dark:border-white/20 text-[#3e2723] dark:text-white font-bold text-xs uppercase tracking-wider hover:bg-black/5 transition-all cursor-pointer"
              >
                Reset Form
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto px-9 py-3 rounded-full bg-[#885210] hover:bg-[#c68642] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                <span>Complete Registration</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
