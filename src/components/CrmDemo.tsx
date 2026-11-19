import { useState } from 'react';
import { ArrowRight, Check, RotateCcw, UserRound, UsersRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioCopy, type Language } from '@/lib/portfolio-copy';

type DemoAccount = { id: string; name: string; contact: string; stage: number; activity: number; moved: boolean };
const INITIAL_ACCOUNTS: DemoAccount[] = [
  { id: 'aster', name: 'Aster Hotels', contact: 'Maya Chen', stage: 1, activity: 0, moved: false },
  { id: 'birch', name: 'Birch & Co.', contact: 'Noah Williams', stage: 0, activity: 1, moved: false },
  { id: 'cedar', name: 'Cedar Group', contact: 'Sofia Martin', stage: 2, activity: 2, moved: false },
  { id: 'dune', name: 'Dune Hospitality', contact: 'Liam Smith', stage: 3, activity: 3, moved: false },
  { id: 'elm', name: 'Elm Retreats', contact: 'Emma Johnson', stage: 0, activity: 4, moved: false },
];
function freshAccounts() { return INITIAL_ACCOUNTS.map(account => ({ ...account })); }

export function CrmDemo({ lang = 'en' }: { lang?: Language }) {
  const c = portfolioCopy[lang].demo;
  const [accounts, setAccounts] = useState<DemoAccount[]>(freshAccounts);
  const [selectedId, setSelectedId] = useState('aster');
  const [announcement, setAnnouncement] = useState<{ type: 'selected' | 'moved' | 'reset'; name: string; stage: number }>({ type: 'selected', name: 'Aster Hotels', stage: 1 });
  const selected = accounts.find(account => account.id === selectedId);
  if (!selected) return null;
  const stage = c.stages[selected.stage];
  const nextStage = c.stages[selected.stage + 1];
  const advanceAccount = () => {
    if (!nextStage) return;
    setAccounts(current => current.map(account => account.id === selected.id ? { ...account, stage: account.stage + 1, moved: true } : account));
    setAnnouncement({ type: 'moved', name: selected.name, stage: selected.stage + 1 });
  };
  const resetDemo = () => { setAccounts(freshAccounts()); setSelectedId('aster'); setAnnouncement({ type: 'reset', name: 'Aster Hotels', stage: 1 }); };
  return (
    <div className="crm-demo-shell overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-secondary/50 p-4 sm:px-5"><div className="flex items-center gap-2 text-sm font-semibold"><UsersRound className="size-4 text-primary" />{c.title}</div><Button variant="outline" size="sm" onClick={resetDemo}><RotateCcw />{c.reset}</Button></div>
      <div className="grid grid-cols-3 divide-x divide-border border-b border-border text-center">
        {[[accounts.length, c.accounts], [accounts.filter(a => a.stage === 2).length, c.proposals], [accounts.filter(a => a.stage === 3).length, c.partnerships]].map(([value, label]) => <div key={label} className="min-w-0 p-3 sm:p-4"><p className="font-display text-2xl text-primary">{value}</p><p className="mt-1 break-words text-xs text-muted-foreground">{label}</p></div>)}
      </div>
      <div className="grid md:grid-cols-[0.9fr_1.1fr]">
        <div className="min-w-0 p-3 sm:p-4"><p className="mb-3 px-1 text-xs font-semibold text-muted-foreground">{c.choose}</p><div className="space-y-2">{accounts.map(account => <Button key={account.id} variant="ghost" onClick={() => { setSelectedId(account.id); setAnnouncement({ type: 'selected', name: account.name, stage: account.stage }); }} aria-pressed={account.id === selected.id} className={`demo-account h-auto min-h-16 w-full justify-between gap-3 whitespace-normal rounded-lg border p-3 text-left ${account.id === selected.id ? 'is-selected' : ''}`}><span className="min-w-0"><span className="block truncate text-sm font-semibold">{account.name}</span><span className="mt-0.5 block truncate text-xs text-muted-foreground">{account.contact}</span></span><span className={`stage-badge ${account.id === selected.id ? 'is-selected' : ''}`}>{c.stages[account.stage]}</span></Button>)}</div></div>
        <div className="demo-detail min-w-0 border-t border-border bg-background/45 p-5 md:border-l md:border-t-0">
          <div className="flex items-center gap-3"><span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-lg text-primary" aria-hidden="true">{selected.name.split(/\s+/).slice(0, 2).map(word => word[0]).join('')}</span><div className="min-w-0"><p className="text-xs text-muted-foreground">{c.selected}</p><h3 className="mt-1 truncate font-sans text-lg font-semibold">{selected.name}</h3></div></div>
          <dl className="mt-5 grid gap-4 border-y border-border py-4 sm:grid-cols-2"><div><dt className="flex items-center gap-1.5 text-xs text-muted-foreground"><UserRound className="size-3.5" />{c.contact}</dt><dd className="mt-1.5 text-sm font-medium">{selected.contact}</dd></div><div><dt className="text-xs text-muted-foreground">{c.next}</dt><dd className="mt-1.5 text-sm font-medium leading-snug">{c.actions[selected.stage]}</dd></div></dl>
          <div className="mt-5"><div className="flex flex-wrap items-center justify-between gap-2"><p className="text-xs font-semibold text-muted-foreground">{c.pipeline}</p><p className="text-xs font-semibold text-primary">{stage}</p></div><ol className="mt-3 grid grid-cols-4 gap-1" aria-label={`${selected.name}: ${stage}`}>{c.stages.map((label, i) => <li key={label} className="min-w-0 text-center"><span className={`mx-auto flex size-6 items-center justify-center rounded-full text-xs ${i <= selected.stage ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>{i < selected.stage ? <Check className="size-3" /> : i + 1}</span><span className="mt-2 block break-words text-[0.65rem] leading-tight">{label}</span></li>)}</ol></div>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground"><span className="font-medium text-foreground">{c.latest}:</span> {selected.moved ? `${c.moved} ${stage}` : c.activities[selected.activity]}</p>
          <Button onClick={advanceAccount} disabled={!nextStage} className="button-interactive cta-primary mt-5 h-auto min-h-11 w-full whitespace-normal py-3">{nextStage ? `${c.move} ${nextStage}` : c.complete}{nextStage ? <ArrowRight /> : <Check />}</Button>
        </div>
      </div>
      <p className="border-t border-border px-4 py-3 text-center text-xs leading-relaxed text-muted-foreground">{c.note}</p>
      <p className="sr-only" aria-live="polite">{announcement.type === 'reset' ? c.resetMessage : `${announcement.name} ${announcement.type === 'moved' ? `${c.moved} ${c.stages[announcement.stage]}` : c.selectedVerb}`}</p>
    </div>
  );
}
