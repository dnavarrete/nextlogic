import { useState } from 'react'

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-slate-100">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Nexlogic" className="h-20" />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#problema" className="hover:text-brand-600 transition-colors">Problema</a>
            <a href="#solucion" className="hover:text-brand-600 transition-colors">Solución</a>
            <a href="#pilares" className="hover:text-brand-600 transition-colors">Pilares</a>
            <a href="#diferencial" className="hover:text-brand-600 transition-colors">Diferencial</a>
            <a
              href="#contacto"
              className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-colors"
            >
              Contactar
            </a>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm font-medium text-slate-600 bg-white border-b border-slate-100">
            <a href="#problema" onClick={() => setMobileMenuOpen(false)} className="py-2">Problema</a>
            <a href="#solucion" onClick={() => setMobileMenuOpen(false)} className="py-2">Solución</a>
            <a href="#pilares" onClick={() => setMobileMenuOpen(false)} className="py-2">Pilares</a>
            <a href="#diferencial" onClick={() => setMobileMenuOpen(false)} className="py-2">Diferencial</a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-slate-900 text-white px-5 py-2 rounded-full text-center hover:bg-slate-800 transition-colors"
            >
              Contactar
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 md:pt-44 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 via-white to-white"></div>
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-semibold tracking-widest text-brand-700 uppercase bg-brand-100 rounded-full">
            <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
            Smart Commerce Infrastructure
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 tracking-tight max-w-5xl leading-[1.1]">
            La ingeniería detrás de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
              cada venta.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
            No vendemos chats. Construimos la infraestructura invisible que conecta la intención del cliente
            con la realidad de tu inventario. Escalabilidad real para negocios en expansión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-brand-200 hover:bg-brand-700 transition-all duration-300"
            >
              Desplegar mi Bot
            </a>
            <a
              href="#solucion"
              className="border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section id="problema" className="py-20 md:py-32 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-brand-400 text-sm font-semibold tracking-widest uppercase">El problema</span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">
              El crecimiento desordenado genera fricción.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Cuando una empresa crece, la comunicación humana se vuelve el cuello de botella.
              Las empresas que escalan se enfrentan a un "techo de cristal" operativo.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-brand-500/30 transition-colors">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fugas de Ventas</h3>
              <p className="text-slate-400 leading-relaxed">
                Clientes que no reciben respuesta inmediata y se van a la competencia. Cada minuto sin respuesta es dinero perdido.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-brand-500/30 transition-colors">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Caos Logístico</h3>
              <p className="text-slate-400 leading-relaxed">
                Inventarios que no coinciden con lo que el bot o el vendedor ofrecen. Promesas que no se pueden cumplir.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-brand-500/30 transition-colors">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Falta de Data</h3>
              <p className="text-slate-400 leading-relaxed">
                Decisiones tomadas por intuición y no por analítica real de pedidos. Vuelas a ciegas en un mercado competitivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solucion" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-brand-600 text-sm font-semibold tracking-widest uppercase">Nuestra Solución</span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">
              Lógica y Evolución.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Nexlogic implementa sistemas de Smart Commerce mediante tres pilares de ingeniería
              que transforman tu operación comercial.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-200 transition-colors">
                <svg className="w-7 h-7 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sincronía Total</h3>
              <p className="text-slate-600 leading-relaxed">
                Integración profunda entre canales conversacionales (WhatsApp) y sistemas de inventario en tiempo real.
                Tu bot sabe exactamente qué hay disponible.
              </p>
            </div>
            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-200 transition-colors">
                <svg className="w-7 h-7 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Arquitectura Robusta</h3>
              <p className="text-slate-600 leading-relaxed">
                Soluciones construidas sobre .NET Core, garantizando seguridad, estabilidad y procesamiento
                de alto volumen sin compromisos.
              </p>
            </div>
            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-200 transition-colors">
                <svg className="w-7 h-7 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Dashboards Visuales</h3>
              <p className="text-slate-600 leading-relaxed">
                Interfaces limpias y minimalistas para que veas el crecimiento de tu negocio sin ruido innecesario.
                Decisiones rápidas con data real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pilares" className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-brand-600 text-sm font-semibold tracking-widest uppercase">Brand Values</span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">
              Los pilares de Nexlogic.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative bg-white p-10 rounded-2xl border border-slate-200 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-brand-600"></div>
              <div className="text-5xl font-black text-brand-100 mb-4">01</div>
              <h3 className="text-2xl font-bold mb-3">Precision</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Lógica de software con 18 años de experiencia.
              </p>
              <div className="bg-brand-50 px-4 py-2 rounded-lg inline-block">
                <span className="text-brand-700 text-sm font-medium">→ Cero errores en procesamiento de pedidos</span>
              </div>
            </div>
            <div className="relative bg-white p-10 rounded-2xl border border-slate-200 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-brand-600"></div>
              <div className="text-5xl font-black text-brand-100 mb-4">02</div>
              <h3 className="text-2xl font-bold mb-3">Scalability</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Diseñado para el futuro. Vértice Ascendente.
              </p>
              <div className="bg-brand-50 px-4 py-2 rounded-lg inline-block">
                <span className="text-brand-700 text-sm font-medium">→ De 10 a 10,000 ventas diarias</span>
              </div>
            </div>
            <div className="relative bg-white p-10 rounded-2xl border border-slate-200 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-brand-600"></div>
              <div className="text-5xl font-black text-brand-100 mb-4">03</div>
              <h3 className="text-2xl font-bold mb-3">Clarity</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Diseño visualmente agradable. Información sin ruido.
              </p>
              <div className="bg-brand-50 px-4 py-2 rounded-lg inline-block">
                <span className="text-brand-700 text-sm font-medium">→ Decisiones rápidas sin complicaciones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiator Section */}
      <section id="diferencial" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-600 text-sm font-semibold tracking-widest uppercase">¿Por qué Nexlogic?</span>
              <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">
                Software Factory liderada por arquitectos.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                A diferencia de las agencias de marketing o bots genéricos, nuestro enfoque no es el "mensaje", es el flujo.
                Entendemos que el éxito de una importación masiva depende de que el software sea tan sólido como el contenedor
                que trae la mercancía.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-slate-700">Arquitectura de software de alto nivel, no plantillas genéricas</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-slate-700">Integración con IA para automatizar flujos comerciales complejos</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-slate-700">Preparado para escalar de ventas locales a importaciones masivas</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-950 rounded-3xl p-10 text-white">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-sm text-slate-400 font-mono">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="ml-2">nexlogic-engine.cs</span>
                </div>
                <pre className="text-sm leading-relaxed overflow-x-auto">
                  <code className="text-slate-300">
{`public class OrderPipeline
{
  async Task<Result> Process(
    Order order)
  {
    await ValidateInventory(order);
    await SyncWhatsApp(order);
    await UpdateDashboard(order);
    
    return Result.Success(
      "Pedido procesado ✓");
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contacto" className="py-20 md:py-32 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            ¿Listo para romper tu techo de cristal?
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Nexlogic nace para romper ese techo operativo. Hablemos sobre cómo podemos construir
            la infraestructura que tu negocio necesita para escalar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/message"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-900/30 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="mailto:contacto@nexlogic.dev"
              className="inline-flex items-center justify-center gap-3 border-2 border-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-900 hover:border-slate-600 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo-icon.svg" alt="" className="h-6" />
            <span className="text-sm text-slate-500">© 2026 Nexlogic. Smart Commerce Infrastructure.</span>
          </div>
          <p className="text-sm text-slate-400">Designed for high-throughput commerce.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
