import { useState } from "react";
import { Calendar, Clock, MapPin, Users, ChevronRight, Star, Phone, MessageSquareText } from "lucide-react";

export default function App() {
    const [form, setForm] = useState({
        type: "Tour",
        from: "Port Vila",
        to: "",
        date: "",
        time: "",
        guests: 2,
        promo: "",
    });

    function update(key, value) {
        setForm({ ...form, [key]: value });
    }

    function submit() {
        alert(`Searching ${form.type}s for ${form.guests} guest(s) on ${form.date} ${form.time}\nFrom: ${form.from}  To: ${form.to || "—"}`);
    }

    const tours = [
        { id: 1, title: "Blue Lagoon & Turtle Sanctuary", dur: "Half-day", price: 6500, img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" },
        { id: 2, title: "Mele Cascades & Village Experience", dur: "Half-day", price: 5900, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop" },
        { id: 3, title: "Round-Island Highlights", dur: "Full day", price: 11900, img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop" },
    ];

    const transfers = [
        { id: 1, title: "Airport ↔ Hotel (Port Vila)", notes: "Private sedan (1–3 pax)", price: 3000 },
        { id: 2, title: "Airport ↔ Resort (North Efate)", notes: "Van (4–10 pax)", price: 6500 },
        { id: 3, title: "Custom Charter (Hourly)", notes: "Min 2 hours", price: 4500 },
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">
                        <div className="size-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600" />
                        <div className="leading-tight">
                            <div className="font-bold text-lg tracking-tight">Island Tours & Transfers</div>
                            <div className="text-xs text-slate-500 -mt-0.5">Book instantly. Travel easily.</div>
                        </div>
                    </div>
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        <a className="hover:text-teal-600" href="#tours">Tours</a>
                        <a className="hover:text-teal-600" href="#transfers">Transfers</a>
                        <a className="hover:text-teal-600" href="#why">Why Us</a>
                        <a className="hover:text-teal-600" href="#contact">Contact</a>
                    </nav>
                </div>
            </header>

            {/* Hero + Form */}
            <section className="relative">
                <div
                    className="h-[420px] w-full bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(2,6,23,.35), rgba(2,6,23,.35)), url(https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2000&auto=format&fit=crop)",
                    }}
                />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="-mt-28 bg-white rounded-3xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-semibold mb-1">Search & Book</h2>
                        <p className="text-slate-500 mb-6">Instant confirmation for tours and private transfers.</p>

                        <div className="grid md:grid-cols-6 gap-3">
                            <select value={form.type} onChange={(e) => update("type", e.target.value)} className="rounded-xl border p-2">
                                <option>Tour</option>
                                <option>Transfer</option>
                            </select>

                            <input className="rounded-xl border p-2 col-span-2" value={form.from} onChange={(e) => update("from", e.target.value)} placeholder="Pickup / Meeting point" />
                            <input className="rounded-xl border p-2 col-span-2" value={form.to} onChange={(e) => update("to", e.target.value)} placeholder="Drop-off (optional)" />
                            <input type="number" min="1" className="rounded-xl border p-2" value={form.guests} onChange={(e) => update("guests", Number(e.target.value || 1))} placeholder="Guests" />
                            <input type="date" className="rounded-xl border p-2" value={form.date} onChange={(e) => update("date", e.target.value)} />
                            <input type="time" className="rounded-xl border p-2" value={form.time} onChange={(e) => update("time", e.target.value)} />
                            <input className="rounded-xl border p-2" value={form.promo} onChange={(e) => update("promo", e.target.value)} placeholder="Promo code (optional)" />
                            <button onClick={submit} className="md:col-span-2 bg-teal-600 text-white font-semibold py-2 rounded-2xl hover:bg-teal-700">Search availability</button>
                        </div>

                        <p className="text-xs text-slate-500 mt-2">No credit card required to search. Secure payments powered by Stripe/PayPal (demo).</p>
                    </div>
                </div>
            </section>

            {/* Featured Tours */}
            <section id="tours" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
                <div className="flex items-end justify-between mb-6">
                    <h2 className="text-2xl font-bold tracking-tight">Popular Tours</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {tours.map((t) => (
                        <div key={t.id} className="bg-white rounded-3xl shadow overflow-hidden">
                            <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url(${t.img})` }} />
                            <div className="p-5">
                                <h3 className="font-semibold">{t.title}</h3>
                                <p className="text-sm text-slate-500">{t.dur} • Small group</p>
                                <p className="mt-2 text-xl font-bold text-teal-700">VUV {t.price.toLocaleString()}</p>
                                <button className="mt-3 bg-teal-600 text-white px-4 py-2 rounded-xl hover:bg-teal-700 w-full">See details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Transfers */}
            <section id="transfers" className="bg-white border-y border-slate-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
                    <h2 className="text-2xl font-bold tracking-tight mb-6">Private Transfers</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {transfers.map((x) => (
                            <div key={x.id} className="bg-white rounded-3xl shadow p-5">
                                <h3 className="font-semibold">{x.title}</h3>
                                <p className="text-sm text-slate-500 mb-3">{x.notes}</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-xs text-slate-500">From</div>
                                        <div className="text-xl font-bold text-teal-700">VUV {x.price.toLocaleString()}</div>
                                    </div>
                                    <button className="bg-teal-600 text-white px-4 py-2 rounded-xl hover:bg-teal-700">Book now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section id="why" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Instant confirmation", desc: "Real-time availability with WhatsApp/email ticket." },
                        { title: "Local, licensed guides", desc: "Experienced team, insured vehicles, DOT permits." },
                        { title: "Flexible & secure", desc: "Free rescheduling up to 24h. Secure payments." },
                    ].map((x, i) => (
                        <div key={i} className="bg-white rounded-3xl shadow p-6">
                            <h4 className="font-semibold mb-1">{x.title}</h4>
                            <p className="text-sm text-slate-600">{x.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600 text-center">
                    © {new Date().getFullYear()} Island Tours & Transfers. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
