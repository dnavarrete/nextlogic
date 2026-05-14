import { useState, useEffect } from 'react'

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      {/* Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-nex-border' : ''}`} aria-label="Navegación principal">
        <div className="flex justify-between items-center px-6 lg:px-12 py-5 max-w-[1400px] mx-auto">
          <a href="#" className="relative -my-4">
            <img src="/logo.svg" alt="Nexlogic" className="h-24" />
          </a>
          <div className="hidden md:flex items-center gap-10 text-sm text-nex-muted">
            <a href="#problema" className="hover:text-slate-900 transition-colors">Problema</a>
            <a href="#solucion" className="hover:text-slate-900 transition-colors">Solución</a>
            <a href="#pilares" className="hover:text-slate-900 transition-colors">Pilares</a>
            <a href="#diferencial" className="hover:text-slate-900 transition-colors">Diferencial</a>
            <a href="#contacto" className="bg-nex-dark text-white px-5 py-2 rounded-md font-medium hover:bg-nex-dark-surface transition-colors">
              Contactar
            </a>
          </div>
          <button
            className="md:hidden p-2 text-nex-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-sm text-nex-muted bg-white border-b border-nex-border">
            <a href="#problema" onClick={() => setMobileMenuOpen(false)} className="py-2">Problema</a>
            <a href="#solucion" onClick={() => setMobileMenuOpen(false)} className="py-2">Solución</a>
            <a href="#pilares" onClick={() => setMobileMenuOpen(false)} className="py-2">Pilares</a>
            <a href="#diferencial" onClick={() => setMobileMenuOpen(false)} className="py-2">Diferencial</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="bg-nex-dark text-white px-5 py-2.5 rounded-md font-medium text-center">Contactar</a>
          </div>
        )}
      </nav>

      {/* Hero — left-aligned, asymmetric */}
      <header className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none"></div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full pt-28 pb-20">
          <div className="max-w-3xl animate-slide-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-nex-green"></div>
              <span className="text-nex-green text-xs font-mono tracking-wider uppercase">Smart Commerce Infrastructure</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight mb-8">
              La ingeniería detrás de{' '}
              <span className="text-nex-green">cada venta.</span>
            </h1>
            <p className="text-nex-muted text-lg leading-relaxed max-w-xl mb-12">
              No vendemos chats. Construimos la infraestructura invisible que conecta la intención del cliente
              con la realidad de tu inventario. Escalabilidad real para negocios en expansión.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contacto" className="bg-nex-dark text-white px-7 py-3.5 rounded-md font-semibold hover:bg-nex-dark-surface transition-colors">
                Desplegar mi Bot
              </a>
              <a href="#solucion" className="border border-nex-border text-slate-900 px-7 py-3.5 rounded-md font-medium hover:border-slate-400 transition-colors">
                Ver cómo funciona
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section id="problema" className="py-24 md:py-36 bg-nex-dark text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-12 lg:gap-24 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-nex-green"></div>
                <span className="text-nex-green text-xs font-mono tracking-wider uppercase">El problema</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                El crecimiento desordenado genera fricción.
              </h2>
            </div>
            <p className="text-green-200/60 text-lg leading-relaxed self-end">
              Cuando una empresa crece, la comunicación humana se vuelve el cuello de botella.
              Las empresas que escalan se enfrentan a un "techo de cristal" operativo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-green-800/30 rounded-lg overflow-hidden">
            <div className="bg-nex-dark-surface p-8 md:p-10">
              <div className="text-red-400 font-mono text-sm mb-5">// fugas</div>
              <h3 className="text-xl font-semibold mb-3">Fugas de Ventas</h3>
              <p className="text-green-200/50 leading-relaxed">
                Clientes que no reciben respuesta inmediata y se van a la competencia. Cada minuto sin respuesta es dinero perdido.
              </p>
            </div>
            <div className="bg-nex-dark-surface p-8 md:p-10">
              <div className="text-amber-400 font-mono text-sm mb-5">// caos</div>
              <h3 className="text-xl font-semibold mb-3">Caos Logístico</h3>
              <p className="text-green-200/50 leading-relaxed">
                Inventarios que no coinciden con lo que el bot o el vendedor ofrecen. Promesas que no se pueden cumplir.
              </p>
            </div>
            <div className="bg-nex-dark-surface p-8 md:p-10">
              <div className="text-purple-400 font-mono text-sm mb-5">// ceguera</div>
              <h3 className="text-xl font-semibold mb-3">Falta de Data</h3>
              <p className="text-green-200/50 leading-relaxed">
                Decisiones tomadas por intuición y no por analítica real de pedidos. Vuelas a ciegas en un mercado competitivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solucion" className="py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-nex-green"></div>
            <span className="text-nex-green text-xs font-mono tracking-wider uppercase">Nuestra Solución</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Lógica y Evolución.
            </h2>
            <p className="text-nex-muted text-lg leading-relaxed self-end">
              Nexlogic implementa sistemas de Smart Commerce mediante tres pilares de ingeniería
              que transforman tu operación comercial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-t-2 border-nex-green pt-8">
              <h3 className="text-xl font-semibold mb-3">Sincronía Total</h3>
              <p className="text-nex-muted leading-relaxed mb-6">
                Integración profunda entre canales conversacionales (WhatsApp) y sistemas de inventario en tiempo real.
                Tu bot sabe exactamente qué hay disponible.
              </p>
              <span className="text-xs font-mono text-nex-muted">WhatsApp API · Real-time · Webhooks</span>
            </div>
            <div className="border-t-2 border-nex-green pt-8">
              <h3 className="text-xl font-semibold mb-3">Arquitectura Robusta</h3>
              <p className="text-nex-muted leading-relaxed mb-6">
                Soluciones construidas sobre .NET Core, garantizando seguridad, estabilidad y procesamiento
                de alto volumen sin compromisos.
              </p>
              <span className="text-xs font-mono text-nex-muted">.NET 8 · Azure · CQRS · DDD</span>
            </div>
            <div className="border-t-2 border-nex-green pt-8">
              <h3 className="text-xl font-semibold mb-3">Dashboards Visuales</h3>
              <p className="text-nex-muted leading-relaxed mb-6">
                Interfaces limpias y minimalistas para que veas el crecimiento de tu negocio sin ruido innecesario.
                Decisiones rápidas con data real.
              </p>
              <span className="text-xs font-mono text-nex-muted">React · Analytics · KPIs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pilares" className="py-24 md:py-36 bg-nex-surface border-y border-nex-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-nex-green"></div>
            <span className="text-nex-green text-xs font-mono tracking-wider uppercase">Brand Values</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-16">
            Los pilares de Nexlogic.
          </h2>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <div>
              <div className="text-6xl font-bold text-nex-border mb-4">01</div>
              <h3 className="text-xl font-semibold mb-2">Precision</h3>
              <p className="text-nex-muted leading-relaxed mb-4">
                Lógica de software con 18 años de experiencia.
              </p>
              <p className="text-sm font-medium text-nex-green">→ Cero errores en procesamiento de pedidos</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-nex-border mb-4">02</div>
              <h3 className="text-xl font-semibold mb-2">Scalability</h3>
              <p className="text-nex-muted leading-relaxed mb-4">
                Diseñado para el futuro. Vértice Ascendente.
              </p>
              <p className="text-sm font-medium text-nex-green">→ De 10 a 10,000 ventas diarias</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-nex-border mb-4">03</div>
              <h3 className="text-xl font-semibold mb-2">Clarity</h3>
              <p className="text-nex-muted leading-relaxed mb-4">
                Diseño visualmente agradable. Información sin ruido.
              </p>
              <p className="text-sm font-medium text-nex-green">→ Decisiones rápidas sin complicaciones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiator Section */}
      <section id="diferencial" className="py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-nex-green"></div>
                <span className="text-nex-green text-xs font-mono tracking-wider uppercase">¿Por qué Nexlogic?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Software Factory liderada por arquitectos.
              </h2>
              <p className="text-nex-muted text-lg leading-relaxed mb-10">
                A diferencia de las agencias de marketing o bots genéricos, nuestro enfoque no es el "mensaje", es el flujo.
                Entendemos que el éxito de una importación masiva depende de que el software sea tan sólido como el contenedor
                que trae la mercancía.
              </p>
              <div className="space-y-4">
                {[
                  'Arquitectura de software de alto nivel, no plantillas genéricas',
                  'Integración con IA para automatizar flujos comerciales complejos',
                  'Preparado para escalar de ventas locales a importaciones masivas',
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-nex-green mt-2.5 flex-shrink-0"></div>
                    <p className="text-slate-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Code terminal */}
            <div className="bg-nex-dark rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-green-800/40">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
                <span className="ml-3 text-xs text-green-200/40 font-mono">nexlogic-engine.cs</span>
              </div>
              <pre className="p-6 text-[13px] leading-relaxed font-mono overflow-x-auto">
<code className="text-green-100/70"><span className="text-green-200/30">01</span>  <span className="text-purple-400">public class</span> <span className="text-white">OrderPipeline</span>
<span className="text-green-200/30">02</span>  {'{'}
<span className="text-green-200/30">03</span>    <span className="text-purple-400">async</span> Task{'<'}Result{'>'} <span className="text-nex-green">Process</span>(Order order)
<span className="text-green-200/30">04</span>    {'{'}
<span className="text-green-200/30">05</span>      <span className="text-purple-400">await</span> ValidateInventory(order);
<span className="text-green-200/30">06</span>      <span className="text-purple-400">await</span> SyncWhatsApp(order);
<span className="text-green-200/30">07</span>      <span className="text-purple-400">await</span> UpdateDashboard(order);
<span className="text-green-200/30">08</span>
<span className="text-green-200/30">09</span>      <span className="text-purple-400">return</span> Result.<span className="text-nex-green">Success</span>(
<span className="text-green-200/30">10</span>        <span className="text-nex-lime">"Pedido procesado ✓"</span>);
<span className="text-green-200/30">11</span>    {'}'}
<span className="text-green-200/30">12</span>  {'}'}
</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contacto" className="py-24 md:py-36 bg-nex-dark text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para romper tu techo de cristal?
          </h2>
          <p className="text-green-200/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Nexlogic nace para romper ese techo operativo. Hablemos sobre cómo podemos construir
            la infraestructura que tu negocio necesita para escalar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573193196004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-nex-green text-slate-900 px-7 py-4 rounded-md font-semibold text-lg hover:bg-nex-lime transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="mailto:info@nexlogic.com.co"
              className="inline-flex items-center justify-center gap-3 border border-green-700/50 text-white px-7 py-4 rounded-md font-semibold text-lg hover:border-green-500/50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-nex-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo-icon.svg" alt="" className="h-5 opacity-50" />
            <span className="text-xs text-nex-muted">© 2026 Nexlogic. Smart Commerce Infrastructure.</span>
          </div>
          <span className="text-[10px] font-mono text-nex-muted tracking-widest uppercase">Designed for high-throughput commerce</span>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
