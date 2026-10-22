// Original CSS/React interface mockups: no external images.
const bars = [40, 62, 48, 78, 58, 92, 70]

function Dashboard() {
  const rows = [['Steel rods', '1,240', 'ok'], ['PVC fittings', '86', 'low'], ['Cable 2.5mm', '412', 'ok'], ['Fasteners', '23', 'low']]
  return (
    <div className="grid h-full grid-cols-3 gap-3 p-4 text-[10px]">
      <div className="col-span-2 rounded border border-bone/10 p-3">
        {rows.map(([n, q, s]) => (
          <div key={n} className="flex items-center justify-between border-b border-bone/10 py-1.5 last:border-0">
            <span className="text-bone/70">{n}</span><span className="font-mono">{q}</span>
            <span className={`h-1.5 w-1.5 rounded-full ${s === 'low' ? 'bg-orange-400' : 'bg-lime'}`} />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-end gap-1 rounded border border-bone/10 p-3">
        <div className="flex h-16 items-end gap-1">
          {bars.map((h, i) => <span key={i} className="flex-1 rounded-sm bg-lime/70" style={{ height: `${h}%` }} />)}
        </div>
        <span className="label !text-[9px]">Sales, 7 days</span>
      </div>
    </div>
  )
}

function Listings() {
  return (
    <div className="grid h-full grid-cols-5 gap-3 p-4">
      <div className="col-span-3 flex flex-col gap-2">
        <div className="rounded border border-bone/15 px-3 py-1.5 text-[10px] text-bone/50">Kochi · 2 BHK · under ₹25k</div>
        {[['2 BHK, Edappally', '₹22,000'], ['2 BHK, Kakkanad', '₹19,500'], ['Studio, Marine Dr', '₹14,000']].map(([t, p]) => (
          <div key={t} className="flex items-center gap-2 rounded border border-bone/10 p-2">
            <span className="h-8 w-10 rounded-sm bg-gradient-to-br from-bone/20 to-bone/5" />
            <span className="flex-1 text-[10px]">{t}</span><span className="font-mono text-[10px] text-lime">{p}</span>
          </div>
        ))}
      </div>
      <div className="relative col-span-2 overflow-hidden rounded border border-bone/10"
        style={{ backgroundImage: 'linear-gradient(rgba(236,235,228,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(236,235,228,.08) 1px,transparent 1px)', backgroundSize: '18px 18px' }}>
        {[['30%', '35%'], ['58%', '60%'], ['70%', '25%']].map(([l, t], i) => (
          <span key={i} className="absolute h-3 w-3 rounded-full border-2 border-ink bg-lime" style={{ left: l, top: t }} />
        ))}
      </div>
    </div>
  )
}

function Store() {
  return (
    <div className="grid h-full grid-cols-5 gap-3 p-4">
      <div className="relative col-span-3 grid place-items-center overflow-hidden rounded bg-gradient-to-b from-bone/10 to-transparent">
        <span className="h-24 w-24 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ecebe4,#3a3a3d_60%,#09090a)] shadow-[0_20px_40px_rgba(0,0,0,.6)]" />
        <span className="absolute bottom-2 left-3 text-[10px]">Nova Buds <span className="text-lime">₹4,999</span></span>
      </div>
      <div className="col-span-2 flex flex-col gap-2">
        {['Nova Watch', 'Nova Dock'].map((n) => (
          <div key={n} className="flex-1 rounded border border-bone/10 p-2 text-[10px]">
            <span className="mb-1 block h-6 rounded-sm bg-bone/10" />{n}
          </div>
        ))}
        <span className="rounded bg-lime py-1 text-center font-mono text-[10px] text-ink">Add to cart</span>
      </div>
    </div>
  )
}

function Board() {
  const cols = [['To do', [70, 50]], ['Doing', [60, 85]], ['Done', [100]]]
  return (
    <div className="grid h-full grid-cols-3 gap-2 p-4">
      {cols.map(([name, tasks]) => (
        <div key={name} className="rounded border border-bone/10 p-2">
          <span className="label !text-[9px]">{name}</span>
          {tasks.map((p, i) => (
            <div key={i} className="mt-2 rounded bg-bone/[0.06] p-2">
              <span className="block h-1.5 w-4/5 rounded bg-bone/30" />
              <span className="mt-2 block h-1 rounded bg-bone/10"><span className="block h-1 rounded bg-lime" style={{ width: `${p}%` }} /></span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

const map = { dashboard: Dashboard, listings: Listings, store: Store, board: Board }

export default function ProjectPreview({ type }) {
  const View = map[type]
  return (
    <div aria-hidden className="h-full min-h-[220px] w-full bg-panel">
      <div className="flex gap-1.5 border-b border-bone/10 px-4 py-2.5">
        {[0, 1, 2].map((i) => <span key={i} className="h-2 w-2 rounded-full bg-bone/20" />)}
      </div>
      <div className="h-[calc(100%-33px)]"><View /></div>
    </div>
  )
}
