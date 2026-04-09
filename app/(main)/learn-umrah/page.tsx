import type { Metadata } from "next";
import Image from "next/image";
import { Play, Clock, BookOpen, CheckCircle2, ChevronRight } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "How to Perform Umrah — Step by Step Guide | Al-Hidaayah Platinum Travels",
  description: "Learn how to perform Umrah correctly with our complete step-by-step guide. Covers Ihram, Tawaf, Sa'i, and Halq/Taqsir with Du'as and detailed instructions.",
};

const umrahSteps = [
  {
    step: 1,
    title: "Entering the State of Ihram",
    arabicTitle: "الإحرام",
    duration: "Before departure",
    description:
      "Ihram is the sacred state you must enter before performing Umrah. For men, this means wearing two unstitched white cloths (the Izar and the Rida). Women wear their normal modest clothing covering all except the face and hands.",
    instructions: [
      "Perform Ghusl (full body ritual wash) and apply non-perfumed Itr (if male)",
      "Men wear two pieces of white unstitched cloth — one wrapped around the lower body (Izar), one draped over the upper body (Rida)",
      "Women wear their normal modest clothing — no Niqab or gloves while in Ihram",
      "Perform two Rak'ahs of Salah with the intention of Ihram",
      "Make the Niyyah (intention) at or before the Miqat — the designated boundary points",
      "Recite the Talbiyah: لَبَّيْكَ اللّهُمَّ لَبَّيْكَ — 'Labbayk Allahumma Labbayk'",
    ],
    dua: "لَبَّيْكَ اللّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَك",
    duaTransliteration: "Labbayk Allahumma Labbayk, Labbayk la sharika laka Labbayk, Innal hamda wan-ni'mata laka wal-mulk, la sharika lak",
    duaTranslation: "Here I am, O Allah, here I am. Here I am — You have no partner — here I am. Verily, all praise, grace, and sovereignty belongs to You. You have no partner.",
    color: "from-emerald-600 to-primary",
  },
  {
    step: 2,
    title: "Entering Masjid al-Haram",
    arabicTitle: "دخول المسجد الحرام",
    duration: "Upon arrival in Makkah",
    description:
      "Upon entering Makkah, continue reciting the Talbiyah. Upon first sight of the Ka'bah, it is Sunnah to make Du'a as this is one of the most blessed moments — a time when Du'as are accepted.",
    instructions: [
      "Enter Masjid al-Haram with your right foot first",
      "Recite the Du'a for entering the mosque",
      "Upon first seeing the Ka'bah, raise your hands and make sincere Du'a — this is a moment of great acceptance",
      "Stop the Talbiyah before beginning Tawaf",
    ],
    dua: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
    duaTransliteration: "Allahumma anta as-Salamu wa minka as-Salamu, tabarakta ya Dhal-Jalali wal-Ikram",
    duaTranslation: "O Allah, You are Peace and from You comes peace. Blessed are You, O Possessor of Glory and Honour.",
    color: "from-primary to-primary/80",
  },
  {
    step: 3,
    title: "Performing Tawaf",
    arabicTitle: "الطواف",
    duration: "Approximately 30–60 minutes",
    description:
      "Tawaf means circling the Ka'bah seven times in an anticlockwise direction. Each circuit begins and ends at the Black Stone (Hajar al-Aswad). Tawaf is performed with the Ka'bah on your left side throughout.",
    instructions: [
      "Begin at the Black Stone (Hajar al-Aswad) — touch it, kiss it, or point towards it if crowded, saying 'Bismillah, Allahu Akbar'",
      "Circle the Ka'bah anticlockwise 7 times — keeping the Ka'bah on your left",
      "Men should perform Idtiba (exposing the right shoulder) and Ramal (brisk walking) for the first 3 circuits",
      "After each circuit, when passing the Black Stone, say 'Allahu Akbar' and point or touch",
      "During Tawaf, make your own Du'as or recite Quran — there is no fixed Du'a",
      "At the Yemeni Corner (Rukn al-Yamani), touch it with your right hand if possible — say: Rabbana atina fid-dunya hasanatan...",
      "After 7 circuits, cover both shoulders and pray 2 Rak'ahs behind Maqam Ibrahim if possible",
    ],
    dua: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    duaTransliteration: "Rabbana atina fid-dunya hasanatan, wa fil-akhirati hasanatan, wa qina 'adhaban-Nar",
    duaTranslation: "Our Lord! Grant us good in this world, and good in the Hereafter, and save us from the punishment of the Fire.",
    color: "from-gold/80 to-gold",
  },
  {
    step: 4,
    title: "Drinking ZamZam Water",
    arabicTitle: "شرب ماء زمزم",
    duration: "After Tawaf",
    description:
      "After completing Tawaf and your 2 Rak'ahs, proceed to drink ZamZam water. The Prophet ﷺ said: 'The water of ZamZam is for whatever purpose it is drunk for.' Drink it standing, facing the Ka'bah, in 3 sips.",
    instructions: [
      "Proceed to the ZamZam water coolers (available throughout the mosque)",
      "Face the Ka'bah before drinking",
      "Make your intention (Du'a) for why you are drinking ZamZam",
      "Drink in 3 sips, breathing between each",
      "Pour some on your head if you wish — it is Sunnah",
    ],
    dua: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا وَاسِعًا وَشِفَاءً مِنْ كُلِّ دَاءٍ",
    duaTransliteration: "Allahumma inni as'aluka 'ilman nafi'an, wa rizqan wasi'an, wa shifa'an min kulli da'",
    duaTranslation: "O Allah, I ask You for beneficial knowledge, abundant provision, and cure from every illness.",
    color: "from-sky-600 to-primary",
  },
  {
    step: 5,
    title: "Performing Sa'i",
    arabicTitle: "السعي",
    duration: "Approximately 30–45 minutes",
    description:
      "Sa'i is the act of walking seven times between the hills of Safa and Marwa, in remembrance of Hajar (Hagar), the wife of Prophet Ibrahim, who ran between these two hills searching for water for her son Ismail.",
    instructions: [
      "Proceed to the hill of Safa — climb it and face the Ka'bah",
      "Raise your hands and make Du'a at Safa — recite 'Innas-Safa wal-Marwata min sha'a'irillah' (Quran 2:158)",
      "Walk from Safa to Marwa — this counts as 1 circuit",
      "Men should jog/run briskly between the green lights — this section is marked",
      "At Marwa, face the Ka'bah and make Du'a",
      "Return from Marwa to Safa — this is 2 circuits",
      "Complete 7 circuits — you will end at Marwa on the 7th",
    ],
    dua: "إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ",
    duaTransliteration: "Innas-Safa wal-Marwata min sha'a'irillah",
    duaTranslation: "Indeed, Safa and Marwa are among the symbols of Allah. (Quran 2:158)",
    color: "from-amber-600 to-gold",
  },
  {
    step: 6,
    title: "Halq or Taqsir — Exiting Ihram",
    arabicTitle: "الحلق أو التقصير",
    duration: "After Sa'i",
    description:
      "Halq (shaving the head completely) or Taqsir (shortening the hair) marks the completion of your Umrah and your exit from the state of Ihram. Halq is more virtuous. Women only cut a small amount of hair (fingertip length) from the ends.",
    instructions: [
      "Men: Shave the head completely (Halq) or cut an equal amount of hair from all over (Taqsir)",
      "Halq is more rewarding — the Prophet ﷺ made Du'a three times for those who shave",
      "Women: Cut only a small amount (about 1-2cm) from the ends of their hair — do not shave",
      "After Halq/Taqsir, your Umrah is complete and you have exited the state of Ihram",
      "All Ihram restrictions are now lifted — you may resume normal clothing and activities",
    ],
    dua: "اللَّهُمَّ اغْفِرْ لِلْمُحَلِّقِينَ، اللَّهُمَّ اغْفِرْ لِلْمُحَلِّقِينَ، اللَّهُمَّ اغْفِرْ لِلْمُحَلِّقِينَ وَالْمُقَصِّرِينَ",
    duaTransliteration: "Allahummaghfir lil-muhalliqeen, Allahummaghfir lil-muhalliqeen, Allahummaghfir lil-muhalliqeena wal-muqassirin",
    duaTranslation: "O Allah, forgive those who shave. O Allah, forgive those who shave. O Allah, forgive those who shave and those who shorten their hair.",
    color: "from-primary/90 to-emerald-700",
  },
];

export default function LearnUmrahPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-dark to-primary/90 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1600&q=70"
            alt="Masjid al-Haram"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/60" />
        </div>
        <div className="container-custom text-center relative z-10">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Pilgrimage Guidance</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-5">
            How to Perform Umrah
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            A complete, step-by-step guide to performing Umrah correctly — covering Ihram, Tawaf,
            Sa'i, and Halq, with the Du'as for every stage of your blessed journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm">
              <BookOpen size={14} className="text-gold" />
              6 Key Steps
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm">
              <Clock size={14} className="text-gold" />
              2–4 Hours to Complete
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm">
              <CheckCircle2 size={14} className="text-gold" />
              Du'as Included
            </div>
          </div>
        </div>
      </div>

      {/* Guidance Video Section */}
      <div className="container-custom py-12">
        <div className="bg-dark rounded-3xl overflow-hidden mb-16 shadow-card-hover">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto min-h-[280px]">
              <Image
                src="https://images.unsplash.com/photo-1520277739336-7bf67edfa768?w=800&q=80"
                alt="Umrah guidance video thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-dark/50 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-gold cursor-pointer hover:scale-110 transition-transform">
                  <Play size={28} className="text-dark ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-dark/70 text-white text-xs px-3 py-1 rounded-full">
                Video uploaded by admin
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Guidance Video</span>
              <h2 className="font-heading text-2xl font-bold text-white mb-4">
                Watch: Complete Umrah Walkthrough
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Our scholarly guide walks you through every step of the Umrah ritual — from entering
                Ihram at the Miqat all the way to completing Halq. Ideal for first-time pilgrims.
              </p>
              <div className="bg-white/10 rounded-xl p-4 text-white/60 text-sm">
                <p className="font-semibold text-white/80 mb-1">Admin Note</p>
                <p>Upload your Umrah guidance video in the Admin Studio at <span className="text-gold font-semibold">/studio → Pilgrimage Guidance Videos</span>. It will appear here automatically.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-step Guide */}
        <h2 className="font-heading text-3xl font-bold text-dark text-center mb-3">
          Step-by-Step Guide
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          Follow these six steps in order. Each step includes the correct Du'as in Arabic with transliteration and English translation.
        </p>

        <div className="space-y-8">
          {umrahSteps.map((step, index) => (
            <div key={step.step} className="bg-white rounded-3xl overflow-hidden shadow-card border border-gray-100">
              {/* Step header */}
              <div className={`bg-gradient-to-r ${step.color} p-6 flex items-center justify-between`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-heading font-bold text-xl">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-xl">{step.title}</h3>
                    <p className="text-white/70 text-sm font-arabic mt-0.5">{step.arabicTitle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1.5 text-white text-xs font-medium">
                  <Clock size={11} />
                  {step.duration}
                </div>
              </div>

              {/* Step body */}
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                {/* Instructions */}
                <div className="mb-8">
                  <h4 className="font-semibold text-dark text-sm uppercase tracking-wide mb-4">Instructions</h4>
                  <div className="space-y-3">
                    {step.instructions.map((instruction, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ChevronRight size={12} className="text-primary" />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{instruction}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Du'a Card */}
                <div className="bg-cream border border-gold/20 rounded-2xl p-6">
                  <h4 className="font-semibold text-dark text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center text-xs">☪</span>
                    Du'a for this Step
                  </h4>
                  {/* Arabic */}
                  <p className="text-right text-dark font-bold text-xl leading-loose mb-4 font-arabic" dir="rtl">
                    {step.dua}
                  </p>
                  {/* Transliteration */}
                  <p className="text-primary text-sm font-medium italic mb-2">{step.duaTransliteration}</p>
                  {/* Translation */}
                  <p className="text-gray-500 text-sm leading-relaxed border-t border-gold/20 pt-3 mt-3">
                    <span className="font-semibold text-dark">Meaning: </span>
                    {step.duaTranslation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Completion */}
        <div className="mt-12 bg-gradient-to-r from-primary to-emerald-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={32} className="text-white" />
          </div>
          <h2 className="font-heading text-2xl font-bold mb-3">Alhamdulillah — Umrah Complete!</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-6">
            After completing Halq or Taqsir, your Umrah is complete. You have exited the state of
            Ihram. May Allah accept your Umrah and grant you a complete, blessed journey. Ameen.
          </p>
          <p className="text-gold font-arabic text-2xl">تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ</p>
          <p className="text-white/60 text-sm mt-2">Taqabbalallahu minna wa minkum — May Allah accept from us and from you</p>
        </div>
      </div>

      <CTABanner />
    </div>
  );
}
