export default function Plantillas() {
  return (
    <main className="container py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Plantillas</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({length:9}).map((_,i)=>(
          <div key={i} className="aspect-[9/16] rounded-2xl bg-gradient-to-br from-pink-100 via-rose-100 to-amber-100 p-3">
            <div className="bg-white/70 rounded-xl backdrop-blur p-2 text-sm">Plantilla {i+1}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
