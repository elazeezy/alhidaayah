import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Play, Clock, BookOpen, CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "How to Perform Hajj — Step by Step Guide | Al-Hidaayah Platinum Travels",
  description: "Learn how to perform Hajj correctly with our complete step-by-step guide. Covers all five pillars of Hajj — Ihram, Arafat, Muzdalifah, Mina, Tawaf al-Ifadah, and Sa'i.",
};

const hajjSteps = [
  {
    step: 1,
    day: "8th Dhul Hijjah — Yawm at-Tarwiyah",
    title: "Entering Ihram & Travelling to Mina",
    arabicTitle: "الإحرام والتوجه إلى منى",
    duration: "Day of Tarwiyah",
    description:
      "On the 8th of Dhul Hijjah, pilgrims enter the state of Ihram and proceed to Mina, where they spend the day and night in worship and preparation for the great day of Arafat.",
    instructions: [
      "Perform Ghusl, wear Ihram garments (men: two white unstitched cloths), and make the Niyyah for Hajj",
      "Recite the Talbiyah: Labbayk Allahumma Hajjan",
      "Travel to Mina and set up in your tent",
      "Pray Dhuhr, Asr, Maghrib, Isha, and Fajr in Mina — shortened (Qasr) but not combined",
      "Spend the night in worship, reciting Quran and making Du'a",
      "This is a day of spiritual preparation — reflect on the magnitude of what lies ahead",
    ],
    dua: "لَبَّيْكَ اللّهُمَّ حَجًّا",
    duaTransliteration: "Labbayk Allahumma Hajjan",
    duaTranslation: "Here I am O Allah, for Hajj.",
    color: "from-emerald-600 to-primary",
    isKeyDay: false,
  },
  {
    step: 2,
    day: "9th Dhul Hijjah — Yawm al-Arafah (THE MOST IMPORTANT DAY)",
    title: "Standing on the Plain of Arafat",
    arabicTitle: "الوقوف بعرفة",
    duration: "From midday until after sunset",
    description:
      "The Day of Arafat is the pinnacle of Hajj. The Prophet ﷺ said: 'Hajj is Arafat.' A pilgrim's Hajj is not valid without standing at Arafat. This is the day when Allah descends (in a manner befitting His Majesty) and forgives pilgrims. Make the most of every moment.",
    instructions: [
      "Travel from Mina to Arafat after Fajr",
      "The time of Wuquf (standing) begins after midday (Dhuhr time) and ends at sunset",
      "Pray Dhuhr and Asr combined and shortened at Dhuhr time (following the Imam or your group)",
      "Face the Qiblah and spend the afternoon in continuous Du'a, Dhikr, and Istighfar",
      "The Prophet ﷺ said the best Du'a is on the Day of Arafat: 'La ilaha illallah, wahdahu la sharika lah...'",
      "Do NOT leave Arafat before sunset — this is a condition of valid Hajj",
      "After sunset, depart for Muzdalifah without praying Maghrib — you will pray there",
    ],
    dua: "لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    duaTransliteration: "La ilaha illallahu wahdahu la sharika lah, lahul mulku wa lahul hamdu wa huwa 'ala kulli shay'in qadir",
    duaTranslation: "There is no deity worthy of worship except Allah alone, with no partner. To Him belongs the dominion, to Him belongs all praise, and He has power over all things.",
    color: "from-gold to-amber-600",
    isKeyDay: true,
  },
  {
    step: 3,
    day: "Night of 9th-10th Dhul Hijjah",
    title: "Spending the Night at Muzdalifah",
    arabicTitle: "المبيت بمزدلفة",
    duration: "Night — depart before dawn",
    description:
      "After leaving Arafat, pilgrims travel to Muzdalifah where they spend the night under the open sky. Here they pray Maghrib and Isha combined, collect pebbles for Rami (stoning), and rest before the major acts of the 10th.",
    instructions: [
      "Upon arriving at Muzdalifah, immediately pray Maghrib and Isha combined (3+2 Rak'ahs)",
      "Collect at least 49 pebbles (the size of chickpeas) — some scholars say 70 to be safe",
      "Spend the night in worship — sleeping here counts as an act of worship",
      "Pray Fajr at the earliest time",
      "After Fajr, go to Al-Mash'ar al-Haram and make Du'a until the sky brightens",
      "Elderly, women, and children may leave before Fajr to avoid the crush at Jamarat",
      "Depart for Mina before sunrise",
    ],
    dua: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    duaTransliteration: "Rabbana atina fid-dunya hasanatan, wa fil-akhirati hasanatan, wa qina 'adhaban-Nar",
    duaTranslation: "Our Lord, grant us good in this world, good in the Hereafter, and protect us from the punishment of the Fire.",
    color: "from-dark to-primary/80",
    isKeyDay: false,
  },
  {
    step: 4,
    day: "10th Dhul Hijjah — Yawm an-Nahr (Day of Sacrifice)",
    title: "Rami, Sacrifice, Halq & Tawaf al-Ifadah",
    arabicTitle: "رمي جمرة العقبة والنحر والحلق وطواف الإفاضة",
    duration: "Full day — the busiest day of Hajj",
    description:
      "This is the most action-packed day of Hajj. Four major acts must be performed, though they can span the days of Tashreeq. The preferred order is: Rami (stoning), Sacrifice, Halq (shaving), then Tawaf al-Ifadah.",
    instructions: [
      "1. RAMI: Stone Jamrat al-Aqabah (the largest pillar) with 7 pebbles, saying 'Allahu Akbar' with each throw",
      "2. SACRIFICE: Arrange for an animal sacrifice (Hadi) — your tour operator handles this — or buy a sacrifice voucher",
      "3. HALQ/TAQSIR: Men shave the head (Halq preferred) or shorten hair. Women cut fingertip length only",
      "4. After Halq, Ihram restrictions are partially lifted — normal clothes are worn, but marital relations remain prohibited until after Tawaf",
      "5. TAWAF AL-IFADAH: Travel to Makkah and perform Tawaf (7 circuits around Ka'bah) — this is a pillar (Rukn) of Hajj",
      "6. SA'I: Perform Sa'i (7 times between Safa and Marwa) if you did not do Sa'i after Tawaf al-Qudum",
      "7. Return to Mina to spend the nights of Tashreeq (11th and 12th Dhul Hijjah)",
    ],
    dua: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، لَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ",
    duaTransliteration: "Allahu Akbar, Allahu Akbar, La ilaha illallah, Wallahu Akbar, Allahu Akbar wa lillahil hamd",
    duaTranslation: "Allah is the Greatest, Allah is the Greatest, there is no deity but Allah. Allah is the Greatest, Allah is the Greatest, and all praise belongs to Allah.",
    color: "from-primary to-emerald-700",
    isKeyDay: true,
  },
  {
    step: 5,
    day: "11th–12th Dhul Hijjah — Ayyam at-Tashreeq",
    title: "Stoning the Three Jamarat in Mina",
    arabicTitle: "رمي الجمرات الثلاث في منى",
    duration: "After midday on both days",
    description:
      "During the days of Tashreeq, pilgrims remain in Mina and stone all three Jamarat (pillars) each day. Stoning must be done after midday (Dhuhr time). Pilgrims who choose early departure must leave before sunset on the 12th.",
    instructions: [
      "On each of the 11th and 12th, stone all three Jamarat with 7 pebbles each — 21 pebbles per day",
      "Begin with the smallest pillar (Jamrat as-Sughra), then middle (Jamrat al-Wusta), then largest (Jamrat al-Aqabah)",
      "Say 'Allahu Akbar' with each of the 7 throws at each pillar",
      "After stoning the first and second pillar, stop and make a long Du'a facing the Qiblah",
      "Do NOT make Du'a after the third pillar (Jamrat al-Aqabah) — move on",
      "Early departure: Leave Mina on the 12th before sunset (Rukhsah/concession)",
      "Staying until the 13th and completing stoning on that day is better (Afdal)",
    ],
    dua: "اللَّهُمَّ اجْعَلْهُ حَجًّا مَبْرُورًا وَذَنْبًا مَغْفُورًا وَسَعْيًا مَشْكُورًا",
    duaTransliteration: "Allahumma aj'alhu Hajjan mabruran, wa dhanban maghfuran, wa sa'yan mashkura",
    duaTranslation: "O Allah, make it an accepted Hajj, a forgiven sin, and a praised effort.",
    color: "from-amber-600 to-gold",
    isKeyDay: false,
  },
  {
    step: 6,
    day: "Before Leaving Makkah",
    title: "Tawaf al-Wida — The Farewell Tawaf",
    arabicTitle: "طواف الوداع",
    duration: "Final act before leaving Makkah",
    description:
      "The Farewell Tawaf (Tawaf al-Wida) is obligatory for all pilgrims before leaving Makkah. It should be the last act performed before departing the city. Women in their menstrual cycle are excused from this Tawaf.",
    instructions: [
      "Before departing Makkah, perform 7 final circuits of the Ka'bah",
      "This is your farewell to the Ka'bah — spend it in heartfelt Du'a and reflection",
      "After Tawaf al-Wida, do not remain in Makkah — proceed to depart",
      "If you must stay for a necessity (e.g. waiting for a flight), the Tawaf al-Wida still counts",
      "Make Du'a at the Multazam (the area between the Black Stone and the door of the Ka'bah) — this is a place of acceptance",
      "Take your last look at the Ka'bah — it may be your last, or it may not. Ask Allah to bring you back.",
    ],
    dua: "اللَّهُمَّ لَا تَجْعَلْ هَذَا آخِرَ عَهْدِي بِبَيْتِكَ الْحَرَامِ",
    duaTransliteration: "Allahumma la taj'al hadha akhira 'ahdi bi-baytikal-haram",
    duaTranslation: "O Allah, do not make this my last visit to Your Sacred House.",
    color: "from-primary/90 to-dark",
    isKeyDay: false,
  },
];

export default function LearnHajjPage() {
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
            How to Perform Hajj
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            A complete, day-by-day guide to performing Hajj — from entering Ihram on the 8th
            of Dhul Hijjah to the Farewell Tawaf, with Du'as for every stage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm">
              <BookOpen size={14} className="text-gold" />
              6 Key Stages
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm">
              <Clock size={14} className="text-gold" />
              5–6 Days
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm">
              <CheckCircle2 size={14} className="text-gold" />
              Du'as Included
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Important Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 flex items-start gap-4">
          <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-dark text-sm mb-1">Hajj is one of the five pillars of Islam</p>
            <p className="text-gray-600 text-sm">
              Hajj is obligatory once in a lifetime for every Muslim who is physically and financially able.
              This guide is for educational purposes. Always seek guidance from a qualified scholar and travel with experienced guides like our team at Al-Hidaayah.
            </p>
          </div>
        </div>

        {/* Guidance Video Section */}
        <div className="bg-dark rounded-3xl overflow-hidden mb-16 shadow-card-hover">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto min-h-[280px]">
              <Image
                src="https://images.unsplash.com/photo-1520277739336-7bf67edfa768?w=800&q=80"
                alt="Hajj guidance video thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-dark/50 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-gold cursor-pointer hover:scale-110 transition-transform">
                  <Play size={28} className="text-dark ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Guidance Video</span>
              <h2 className="font-heading text-2xl font-bold text-white mb-4">
                Watch: Complete Hajj Walkthrough
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Our scholar walks you through every stage of Hajj — from the Day of Tarwiyah
                to the Farewell Tawaf. Essential viewing for all pilgrims.
              </p>
              <div className="bg-white/10 rounded-xl p-4 text-white/60 text-sm">
                <p className="font-semibold text-white/80 mb-1">Admin Note</p>
                <p>Upload your Hajj guidance video in the Admin Studio at <span className="text-gold font-semibold">/studio → Pilgrimage Guidance Videos</span>.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Day-by-day Guide */}
        <h2 className="font-heading text-3xl font-bold text-dark text-center mb-3">
          Day-by-Day Guide
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          Hajj spans five days during Dhul Hijjah. Each stage must be performed in sequence.
        </p>

        <div className="space-y-8">
          {hajjSteps.map((step) => (
            <div key={step.step} className={`bg-white rounded-3xl overflow-hidden shadow-card border ${step.isKeyDay ? "border-gold/40" : "border-gray-100"}`}>
              {step.isKeyDay && (
                <div className="bg-gold/10 border-b border-gold/20 px-6 py-2 flex items-center gap-2">
                  <span className="text-gold text-xs font-bold uppercase tracking-widest">Most Important Day</span>
                </div>
              )}
              {/* Step header */}
              <div className={`bg-gradient-to-r ${step.color} p-6`}>
                <div className="flex items-start justify-between gap-4 flex-col sm:flex-row">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-heading font-bold text-xl">{step.step}</span>
                    </div>
                    <div>
                      <p className="text-white/70 text-xs font-semibold uppercase tracking-wide mb-1">{step.day}</p>
                      <h3 className="font-heading font-bold text-white text-xl leading-tight">{step.title}</h3>
                      <p className="text-white/60 text-sm mt-0.5">{step.arabicTitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1.5 text-white text-xs font-medium flex-shrink-0">
                    <Clock size={11} />
                    {step.duration}
                  </div>
                </div>
              </div>

              {/* Step body */}
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                <div className="mb-8">
                  <h4 className="font-semibold text-dark text-sm uppercase tracking-wide mb-4">What to Do</h4>
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
                    Du'a for this Stage
                  </h4>
                  <p className="text-right text-dark font-bold text-xl leading-loose mb-4" dir="rtl">
                    {step.dua}
                  </p>
                  <p className="text-primary text-sm font-medium italic mb-2">{step.duaTransliteration}</p>
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
          <h2 className="font-heading text-2xl font-bold mb-3">May Allah Accept Your Hajj</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-6">
            Completing Hajj is one of the greatest acts of worship a Muslim can perform. The Prophet ﷺ
            said: "Whoever performs Hajj for the sake of Allah and does not utter any obscene speech or
            do any evil deed, will come back as the day his mother gave birth to him." — Bukhari
          </p>
          <p className="text-gold font-arabic text-2xl">حَجٌّ مَبْرُورٌ وَسَعْيٌ مَشْكُورٌ وَذَنْبٌ مَغْفُورٌ</p>
          <p className="text-white/60 text-sm mt-2 mb-8">An accepted Hajj, a praised effort, and a forgiven sin</p>
          <Link
            href="/hajj-packages"
            className="inline-flex items-center gap-2 bg-gold text-dark font-bold px-8 py-4 rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-gold"
          >
            View Our Hajj Packages
          </Link>
        </div>
      </div>

      <CTABanner />
    </div>
  );
}
