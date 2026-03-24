"use client";
import { motion } from "framer-motion";

const inView = { once: true, amount: 0.35 };

const fadeUp = (delay = 0, y = 32) => ({
  initial: { opacity: 0, y, scale: 0.99 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.65, delay, ease: "easeOut" as const },
  viewport: inView,
});

const popIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.96 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
  viewport: inView,
});

export default function Home() {
  const tractionCards = [
    {
      value: "$16,9M CLP",
      label: "de deuda gestionada en marzo 2026",
      insight: "Volumen real operando en cartera activa.",
    },
    {
      value: "$13,8M CLP",
      label: "recuperados en el mismo periodo",
      insight: "Caja que vuelve al negocio, no promesas.",
    },
    {
      value: "431",
      label: "medios de pago registrados",
      insight: "Adopción concreta desde etapas tempranas.",
    },
    {
      value: "WebPay",
      label: "ya en uso temprano",
      insight: "Integración validada con hábito local.",
    },
  ];

  const roadmap = [
    {
      title: "Q1 2026",
      text: "Motor de cobranza y flujos de recordatorio validados.",
    },
    {
      title: "Q2 2026",
      text: "Automatización de conciliación y priorización por riesgo de mora.",
    },
    {
      title: "Q3 2026",
      text: "Integraciones con core asegurador y ERP financiero.",
    },
    {
      title: "Q4 2026",
      text: "Escalamiento comercial con aseguradoras regionales.",
    },
  ];

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-white text-zinc-950">
      {/* 1. HERO */}
      <section className="h-screen snap-start px-6 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <motion.img
              {...fadeUp(0)}
              src="/paid-logo.png"
              alt="PAID"
              className="w-[220px] md:w-[320px] mb-7"
            />

            <motion.p
              {...fadeUp(0.08)}
              className="text-xs md:text-sm tracking-[0.22em] uppercase text-paid font-semibold"
            >
              Plataforma de pagos y cobranzas para seguros
            </motion.p>

            <motion.h1
              {...fadeUp(0.16)}
              className="text-5xl md:text-7xl font-semibold tracking-tight mt-7 leading-[0.95]"
            >
              Primas recurrentes.
              <br />
              Caja predecible.
            </motion.h1>

            <motion.p
              {...fadeUp(0.24)}
              className="text-lg md:text-2xl text-zinc-600 mt-8 max-w-2xl"
            >
              PAID convierte cobranza en crecimiento operativo.
            </motion.p>
          </div>

          <motion.div
            {...popIn(0.2)}
            className="rounded-3xl border border-paid-200 bg-paid-50 p-6 md:p-8 mt-[116px] md:mt-[128px] lg:mt-[136px]"
          >
            <p className="text-sm uppercase tracking-[0.14em] text-paid-600 font-semibold">
              Resumen ejecutivo
            </p>
            <p className="text-3xl md:text-4xl font-semibold mt-3 leading-tight">
              Menos mora.
              <br />
              Más recuperación.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4">
                <p className="text-2xl font-semibold text-paid-600">82%</p>
                <p className="text-sm text-zinc-600 mt-1">recuperación actual</p>
              </div>
              <div className="bg-white rounded-2xl p-4">
                <p className="text-2xl font-semibold text-paid-600">431</p>
                <p className="text-sm text-zinc-600 mt-1">medios de pagos inscritos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <section className="h-screen snap-start px-6 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr_1fr] gap-8 md:gap-12 items-center">
          <div>
            <motion.p
              {...fadeUp(0)}
              className="text-xs md:text-sm uppercase tracking-[0.16em] text-zinc-500 font-semibold"
            >
              Problema estructural
            </motion.p>

            <motion.h2
              {...fadeUp(0.08)}
              className="text-5xl md:text-7xl font-semibold tracking-tight mt-5 leading-[0.95]"
            >
              Cobranza fragmentada,
              <br />
              operación saturada.
            </motion.h2>
          </div>

          <motion.div
            {...popIn(0.16)}
            className="grid grid-cols-2 gap-4 md:gap-5"
          >
            <div className="rounded-2xl bg-zinc-100 p-5 md:p-6 min-h-[140px]">
              <p className="text-sm md:text-base text-zinc-700">
                Primas vencidas que se acumulan cada ciclo.
              </p>
            </div>
            <div className="rounded-2xl bg-zinc-900 text-white p-5 md:p-6 min-h-[140px]">
              <p className="text-sm md:text-base">
                Conciliación manual y tiempo operativo perdido.
              </p>
            </div>
            <div className="rounded-2xl bg-paid-50 border border-paid-200 p-5 md:p-6 col-span-2">
              <p className="text-sm md:text-base text-zinc-800">
                Fricción para el asegurado justo en el momento de pago.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. INSIGHT */}
      <section className="h-screen snap-start flex justify-center items-center text-center px-6">
        <motion.h2
          {...fadeUp(0)}
          className="text-5xl md:text-8xl font-semibold tracking-tight max-w-6xl leading-[0.95]"
        >
          No es ventas.
          <br />
          Es cobranza.
        </motion.h2>
      </section>

      {/* 4. IMPACTO */}
      <section className="h-screen snap-start px-6 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end">
          <div>
            <motion.p
              {...fadeUp(0)}
              className="text-xs md:text-sm uppercase tracking-[0.16em] text-zinc-500 font-semibold"
            >
              Impacto económico
            </motion.p>

            <motion.h2
              {...fadeUp(0.08)}
              className="text-5xl md:text-7xl font-semibold tracking-tight mt-5 leading-[0.95]"
            >
              Cada prima atrasada
              <br />
              destruye margen.
            </motion.h2>

            <motion.p
              {...fadeUp(0.16)}
              className="text-lg md:text-2xl text-zinc-600 mt-7 max-w-2xl"
            >
              Lo que no se cobra hoy, se transforma en costo mañana.
            </motion.p>
          </div>

          <motion.div
            {...popIn(0.18)}
            className="rounded-3xl bg-zinc-950 text-white p-7 md:p-8"
          >
            <p className="text-sm uppercase tracking-[0.16em] text-zinc-400">Impacto observado</p>
            <p className="text-4xl md:text-6xl font-semibold mt-4 leading-none">$13,8M CLP</p>
            <p className="text-paid-300 text-sm md:text-base mt-3">recuperados en marzo</p>
            <p className="text-zinc-300 mt-4 text-sm md:text-base">
              La cobranza eficiente se convierte en caja real, no en proyecciones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. PRODUCTO */}
      <section className="h-screen snap-start px-6 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[0.95fr_1.05fr] gap-10 md:gap-14 items-center">
          <div>
            <motion.p
              {...fadeUp(0)}
              className="text-xs md:text-sm uppercase tracking-[0.16em] text-paid-600 font-semibold"
            >
              Producto
            </motion.p>

            <motion.h2
              {...fadeUp(0.08)}
              className="text-5xl md:text-7xl font-semibold tracking-tight mt-5 leading-[0.95]"
            >
              Cobranza en
              <br />
              un solo flujo.
            </motion.h2>

            <motion.p
              {...fadeUp(0.16)}
              className="text-lg md:text-2xl text-zinc-600 mt-7 max-w-xl"
            >
              Recordatorio, pago y conciliación en una experiencia continua.
            </motion.p>
          </div>

          <motion.div
            {...popIn(0.16)}
            className="relative min-h-[430px] md:min-h-[560px] flex items-center justify-center"
          >
            <div className="absolute inset-6 rounded-[2.5rem] bg-paid-50 border border-paid-200 blur-[1px]" />
            <img
              src="/paid-mobile-angle.png"
              alt="PAID mobile cobranza flow"
              className="relative z-10 w-[370px] md:w-[560px] mix-blend-multiply drop-shadow-[0_32px_45px_rgba(0,0,0,0.24)]"
            />
          </motion.div>
        </div>
      </section>

      {/* 6. TRACTION */}
      <section className="h-screen snap-start px-6 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h2
            {...fadeUp(0)}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-center"
          >
            Tracción validada en cartera real.
          </motion.h2>

          <motion.div
            {...fadeUp(0.1)}
            className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5"
          >
            <div className="md:col-span-7 rounded-3xl border border-paid-200 bg-paid-50 px-6 py-7">
              <p className="text-3xl md:text-5xl font-semibold tracking-tight">{tractionCards[0].value}</p>
              <p className="mt-2 text-zinc-700">{tractionCards[0].label}</p>
              <p className="mt-3 text-sm text-zinc-600">{tractionCards[0].insight}</p>
            </div>

            <div className="md:col-span-5 rounded-3xl bg-zinc-950 text-white px-6 py-7">
              <p className="text-3xl md:text-5xl font-semibold tracking-tight">{tractionCards[1].value}</p>
              <p className="mt-2 text-zinc-300">{tractionCards[1].label}</p>
              <p className="mt-3 text-sm text-zinc-400">{tractionCards[1].insight}</p>
            </div>

            <div className="md:col-span-4 rounded-3xl bg-zinc-100 px-6 py-6">
              <p className="text-3xl md:text-4xl font-semibold tracking-tight">{tractionCards[2].value}</p>
              <p className="mt-2 text-zinc-700">{tractionCards[2].label}</p>
            </div>

            <div className="md:col-span-8 rounded-3xl border border-paid-200 bg-white px-6 py-6">
              <p className="text-2xl md:text-3xl font-semibold tracking-tight text-paid-600">{tractionCards[3].value}</p>
              <p className="mt-2 text-zinc-700">{tractionCards[3].label}</p>
              <p className="mt-3 text-sm text-zinc-600">{tractionCards[3].insight}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. RECOVERY RATE */}
      <section className="h-screen snap-start px-6 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div>
            <motion.p
              {...fadeUp(0)}
              className="text-xs md:text-sm uppercase tracking-[0.16em] text-zinc-500 font-semibold"
            >
              Tasa de recuperación
            </motion.p>
            <motion.p
              {...fadeUp(0.08)}
              className="text-[96px] md:text-[180px] leading-none font-semibold text-paid"
            >
              82%
            </motion.p>
            <motion.p
              {...fadeUp(0.16)}
              className="text-base md:text-xl text-zinc-600 max-w-md"
            >
              Señal temprana de demanda y cumplimiento en pagos recurrentes.
            </motion.p>
          </div>

          <motion.div {...fadeUp(0.18)} className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm md:text-base text-zinc-600">Deuda procesada</p>
                <p className="text-sm md:text-base font-medium text-zinc-700">100%</p>
              </div>
              <div className="w-full bg-zinc-200 h-7 rounded-full overflow-hidden">
                <div className="h-full w-full bg-zinc-900" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm md:text-base text-zinc-600">Monto recuperado</p>
                <p className="text-sm md:text-base font-medium text-paid-600">~82%</p>
              </div>
              <div className="w-full bg-zinc-200 h-7 rounded-full overflow-hidden">
                <div className="h-full w-[82%] bg-paid" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. KEY INSIGHT */}
      <section className="h-screen snap-start px-6 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            {...popIn(0)}
            className="rounded-3xl bg-zinc-100 p-7 md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.14em] text-zinc-500 font-semibold">
              Sin optimización
            </p>
            <p className="text-3xl md:text-5xl font-semibold mt-4 leading-[0.95]">
              Recordatorios tardíos.
              <br />
              Pago postergado.
            </p>
          </motion.div>

          <motion.div
            {...popIn(0.08)}
            className="rounded-3xl border border-paid-200 bg-paid-50 p-7 md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.14em] text-paid-600 font-semibold">
              Con PAID
            </p>
            <p className="text-3xl md:text-5xl font-semibold mt-4 leading-[0.95]">
              Sí pagan.
              <br />
              Cuando es simple.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 9. OPPORTUNITY */}
      <section className="h-screen snap-start px-6 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <motion.h2
              {...fadeUp(0)}
              className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]"
            >
              Con prueba temprana,
              <br />
              la escala es enorme.
            </motion.h2>
            <motion.p
              {...fadeUp(0.12)}
              className="text-lg md:text-2xl text-zinc-600 mt-7 max-w-2xl"
            >
              Cada punto de recuperación impacta directo en ingresos y eficiencia.
            </motion.p>
          </div>

          <motion.div
            {...popIn(0.18)}
            className="rounded-3xl bg-zinc-100 p-6 md:p-8"
          >
            <p className="text-sm uppercase tracking-[0.14em] text-zinc-500 font-semibold">
              Oportunidad
            </p>
            <p className="text-3xl md:text-5xl font-semibold mt-3 leading-tight">
              Miles de primas
              <br />
              por optimizar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 10. BUSINESS MODEL */}
      <section className="h-screen snap-start px-6 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h2
            {...fadeUp(0)}
            className="text-5xl md:text-7xl font-semibold tracking-tight text-center"
          >
            Modelo alineado a resultados.
          </motion.h2>

          <motion.div
            {...fadeUp(0.1)}
            className="mt-10 grid md:grid-cols-3 gap-4 md:gap-5"
          >
            <div className="rounded-3xl bg-zinc-950 text-white p-6">
              <p className="text-sm uppercase tracking-[0.14em] text-zinc-400">Base</p>
              <p className="text-xl md:text-2xl font-semibold mt-3">Fee mensual</p>
              <p className="text-sm text-zinc-300 mt-2">Operación continua de plataforma.</p>
            </div>
            <div className="rounded-3xl border border-paid-200 bg-paid-50 p-6">
              <p className="text-sm uppercase tracking-[0.14em] text-paid-600">Performance</p>
              <p className="text-xl md:text-2xl font-semibold mt-3">Comisión por transacción</p>
              <p className="text-sm text-zinc-700 mt-2">Ingresos ligados a recuperación y pago.</p>
            </div>
            <div className="rounded-3xl bg-zinc-100 p-6">
              <p className="text-sm uppercase tracking-[0.14em] text-zinc-500">Expansión</p>
              <p className="text-xl md:text-2xl font-semibold mt-3">Capas premium</p>
              <p className="text-sm text-zinc-700 mt-2">Automatización e inteligencia de cobranza.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 11. ROADMAP */}
      <section className="h-screen snap-start px-6 md:px-12 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2
            {...fadeUp(0)}
            className="text-5xl md:text-7xl font-semibold tracking-tight text-center mb-12"
          >
            Roadmap de expansión.
          </motion.h2>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-1 bottom-1 w-[2px] bg-paid-300 md:-translate-x-1/2" />

            <div className="space-y-8 md:space-y-10">
              {roadmap.map((item, index) => (
                <motion.div
                  key={item.title}
                  {...fadeUp(0.04 * index)}
                  className="relative md:grid md:grid-cols-2 md:gap-10 items-start"
                >
                  <div className="hidden md:block text-right pr-8">
                    <p className="text-sm tracking-[0.14em] uppercase text-paid-600 font-semibold">
                      {item.title}
                    </p>
                  </div>

                  <div className="relative pl-12 md:pl-8 pb-2">
                    <div className="absolute left-[0.2rem] md:left-[-0.55rem] top-1 w-4 h-4 rounded-full bg-paid ring-8 ring-paid-100" />
                    <p className="md:hidden text-xs tracking-[0.14em] uppercase text-paid-600 font-semibold mb-2">
                      {item.title}
                    </p>
                    <p className="text-base md:text-lg text-zinc-700">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. CIERRE */}
      <section className="h-screen snap-start px-6 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
          <div>
            <motion.img
              {...fadeUp(0)}
              src="/paid-logo.png"
              alt="PAID"
              className="w-[180px] md:w-[260px]"
            />

            <motion.p
              {...fadeUp(0.1)}
              className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.95] mt-8"
            >
              Menos mora.
              <br />
              Más caja.
            </motion.p>

            <motion.p
              {...fadeUp(0.18)}
              className="text-base md:text-lg text-zinc-600 mt-6 max-w-lg"
            >
              Es momento de profesionalizar la cobranza de primas.
            </motion.p>

            <motion.div
              {...fadeUp(0.26)}
              className="mt-8 inline-flex items-center rounded-2xl border border-paid-200 bg-paid-50 px-5 py-3"
            >
              <p className="text-sm md:text-base font-semibold text-paid-600">
                Propuesta: piloto ejecutivo en 30 días
              </p>
            </motion.div>
          </div>

          <motion.div
            {...popIn(0.14)}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="/paid-dashboard-tablet.png"
              alt="PAID dashboard"
              className="w-[340px] md:w-[540px] mix-blend-multiply drop-shadow-[0_24px_36px_rgba(0,0,0,0.18)]"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}