import { useState } from "react";
import { ArrowRight, Check, RotateCcw, UserRound, UsersRound } from "lucide-react";

const STAGES = ["Lead", "Qualified", "Proposal", "Partnership"] as const;
type Stage = (typeof STAGES)[number];

type DemoAccount = {
  id: string;
  name: string;
  contact: string;
  stage: Stage;
  lastActivity: string;
};

const INITIAL_ACCOUNTS: DemoAccount[] = [
  { id: "aster", name: "Aster Hotels", contact: "Maya Chen", stage: "Qualified", lastActivity: "Discovery call completed" },
  { id: "birch", name: "Birch & Co.", contact: "Noah Williams", stage: "Lead", lastActivity: "New inbound enquiry" },
  { id: "cedar", name: "Cedar Group", contact: "Sofia Martin", stage: "Proposal", lastActivity: "Proposal shared" },
  { id: "dune", name: "Dune Hospitality", contact: "Liam Smith", stage: "Partnership", lastActivity: "Partnership confirmed" },
  { id: "elm", name: "Elm Retreats", contact: "Emma Johnson", stage: "Lead", lastActivity: "Added to pipeline" },
];

const NEXT_ACTION: Record<Stage, string> = {
  Lead: "Schedule a discovery call",
  Qualified: "Prepare a tailored proposal",
  Proposal: "Follow up on the proposal",
  Partnership: "Plan the next account review",
};

function freshAccounts() {
  return INITIAL_ACCOUNTS.map((account) => ({ ...account }));
}

export function CrmDemo() {
  const [accounts, setAccounts] = useState<DemoAccount[]>(freshAccounts);
  const [selectedId, setSelectedId] = useState(INITIAL_ACCOUNTS[0]!.id);
  const [announcement, setAnnouncement] = useState("Aster Hotels selected");

  const selected = accounts.find((account) => account.id === selectedId) ?? accounts[0]!;
  const currentStageIndex = STAGES.indexOf(selected.stage);
  const nextStage = STAGES[currentStageIndex + 1];
  const proposals = accounts.filter((account) => account.stage === "Proposal").length;
  const partnerships = accounts.filter((account) => account.stage === "Partnership").length;
  const initials = selected.name.split(/\s+/).slice(0, 2).map((word) => word[0]).join("");

  const selectAccount = (account: DemoAccount) => {
    setSelectedId(account.id);
    setAnnouncement(`${account.name} selected`);
  };

  const advanceAccount = () => {
    if (!nextStage) return;
    setAccounts((current) =>
      current.map((account) =>
        account.id === selected.id
          ? { ...account, stage: nextStage, lastActivity: `Moved to ${nextStage} in this demo` }
          : account,
      ),
    );
    setAnnouncement(`${selected.name} moved to ${nextStage}`);
  };

  const resetDemo = () => {
    setAccounts(freshAccounts());
    setSelectedId(INITIAL_ACCOUNTS[0]!.id);
    setAnnouncement("Demo reset. Aster Hotels selected");
  };

  return (
    <div className="crm-demo-shell overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex flex-col gap-3 border-b border-border bg-secondary/50 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-card-foreground">
          <UsersRound className="size-4 text-primary" aria-hidden="true" />
          Pipeline playground
        </div>
        <button
          type="button"
          onClick={resetDemo}
          className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-card-foreground transition duration-200 hover:border-primary hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <RotateCcw className="size-3.5" aria-hidden="true" />
          Reset demo
        </button>
      </div>

      <div className="grid grid-cols-3 divide-x divide-border border-b border-border text-center">
        <div className="p-3 sm:p-4">
          <p className="font-display text-2xl text-primary">{accounts.length}</p>
          <p className="mt-1 text-[0.68rem] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs">Accounts</p>
        </div>
        <div className="p-3 sm:p-4">
          <p className="font-display text-2xl text-primary">{proposals}</p>
          <p className="mt-1 text-[0.68rem] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs">Proposals</p>
        </div>
        <div className="p-3 sm:p-4">
          <p className="font-display text-2xl text-primary">{partnerships}</p>
          <p className="mt-1 text-[0.68rem] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs">Partnerships</p>
        </div>
      </div>

      <div className="grid md:grid-cols-[0.9fr_1.1fr]">
        <div className="p-3 sm:p-4">
          <p className="mb-3 px-1 text-[0.68rem] font-semibold uppercase tracking-widest text-muted-foreground">Choose an account</p>
          <div className="space-y-2">
            {accounts.map((account) => {
              const isSelected = account.id === selected.id;
              return (
                <button
                  key={account.id}
                  type="button"
                  onClick={() => selectAccount(account)}
                  aria-pressed={isSelected}
                  className={`demo-account flex w-full items-center justify-between gap-3 rounded-lg border p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isSelected ? "is-selected" : ""}`}
                >
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-card-foreground">{account.name}</span>
                    <span className="mt-0.5 block truncate text-xs text-muted-foreground">{account.contact}</span>
                  </span>
                  <span className={`stage-badge ${isSelected ? "is-selected" : ""}`}>{account.stage}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div key={selected.id} className="demo-detail border-t border-border bg-background/45 p-5 md:border-l md:border-t-0">
          <div className="flex items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-lg text-primary" aria-hidden="true">
              {initials}
            </span>
            <div className="min-w-0">
              <p className="text-[0.68rem] font-semibold uppercase tracking-widest text-muted-foreground">Selected account</p>
              <h3 className="truncate font-sans text-lg font-semibold tracking-normal text-foreground">{selected.name}</h3>
            </div>
          </div>

          <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-secondary/60 p-3">
              <dt className="flex items-center gap-1.5 text-xs text-muted-foreground"><UserRound className="size-3.5" aria-hidden="true" /> Contact</dt>
              <dd className="mt-1.5 font-medium text-foreground">{selected.contact}</dd>
            </div>
            <div className="rounded-lg bg-secondary/60 p-3">
              <dt className="text-xs text-muted-foreground">Next action</dt>
              <dd className="mt-1.5 font-medium leading-snug text-foreground">{NEXT_ACTION[selected.stage]}</dd>
            </div>
          </dl>

          <div className="mt-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pipeline stage</p>
              <p className="text-xs font-semibold text-primary">{selected.stage}</p>
            </div>
            <ol className="mt-3 grid grid-cols-4 gap-1" aria-label={`${selected.name} is at ${selected.stage}`}>
              {STAGES.map((stage, index) => {
                const reached = index <= currentStageIndex;
                return (
                  <li key={stage} className="text-center">
                    <span className={`mx-auto flex size-6 items-center justify-center rounded-full text-[0.65rem] font-semibold ${reached ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                      {index < currentStageIndex ? <Check className="size-3" aria-hidden="true" /> : index + 1}
                    </span>
                    <span className={`mt-1.5 block text-[0.6rem] leading-tight ${reached ? "font-medium text-foreground" : "text-muted-foreground"}`}>{stage}</span>
                  </li>
                );
              })}
            </ol>
          </div>

          <p className="mt-5 text-xs text-muted-foreground"><span className="font-medium text-foreground">Latest:</span> {selected.lastActivity}</p>

          <button
            type="button"
            onClick={advanceAccount}
            disabled={!nextStage}
            className="button-interactive mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md cta-primary px-4 py-3 text-sm font-semibold text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-default disabled:opacity-70"
          >
            {nextStage ? `Move to ${nextStage}` : "Partnership complete"}
            {nextStage ? <ArrowRight className="size-4" aria-hidden="true" /> : <Check className="size-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div className="border-t border-border px-4 py-3 text-center text-xs text-muted-foreground">
        Fictional accounts · No real customer data · Changes reset on reload
      </div>
      <p className="sr-only" aria-live="polite">{announcement}</p>
    </div>
  );
}
