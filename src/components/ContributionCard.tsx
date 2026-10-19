'use client'

import { GitMerge } from 'lucide-react'

interface Contribution {
  title: string
  description: string
  repository: string
  link: string
  mergedAt: string
  additions: number
  deletions: number
  changedFiles: number
}

// Curated merged PRs, sorted by total lines changed (additions + deletions).
// Keep these details static so the section renders without a GitHub token and
// remains available when GitHub's API is rate limited.
const contributions: Contribution[] = [
  {
    title: 'Add Antigravity ACP support to Chat',
    description: 'Added Antigravity as a Chat harness, including approvals, model controls, and Terminal ↔ Chat conversation handoff.',
    repository: 'OrchestratorInc/agent-orchestrator',
    link: 'https://github.com/OrchestratorInc/agent-orchestrator/pull/6600',
    mergedAt: 'Oct 15, 2026',
    additions: 2865,
    deletions: 20,
    changedFiles: 34,
  },
  {
    title: 'Add GitHub Copilot ACP Chat support',
    description: 'Added Copilot CLI to Chat with approval handling, model selection, history replay, and Terminal ↔ Chat handoff.',
    repository: 'OrchestratorInc/agent-orchestrator',
    link: 'https://github.com/OrchestratorInc/agent-orchestrator/pull/6662',
    mergedAt: 'Oct 16, 2026',
    additions: 1973,
    deletions: 74,
    changedFiles: 22,
  },
  {
    title: 'Continue stopped Chat turns',
    description: 'Added a Continue action that carries the original task and recent response context into a new turn.',
    repository: 'OrchestratorInc/agent-orchestrator',
    link: 'https://github.com/OrchestratorInc/agent-orchestrator/pull/6328',
    mergedAt: 'Oct 15, 2026',
    additions: 1423,
    deletions: 50,
    changedFiles: 35,
  },
  {
    title: 'Ask about selected lines in Chat',
    description: 'Added a selection action for asking Chat about code or diff lines directly from the file viewer.',
    repository: 'OrchestratorInc/agent-orchestrator',
    link: 'https://github.com/OrchestratorInc/agent-orchestrator/pull/6277',
    mergedAt: 'Oct 7, 2026',
    additions: 1190,
    deletions: 2,
    changedFiles: 27,
  },
  {
    title: 'Add AeroLeads plugin integration',
    description: 'Added a LinkedIn profile details integration with API-key authentication, validation, and error handling.',
    repository: 'corsairdev/corsair',
    link: 'https://github.com/corsairdev/corsair/pull/729',
    mergedAt: 'Aug 21, 2026',
    additions: 1124,
    deletions: 0,
    changedFiles: 17,
  },
  {
    title: 'Remember file display mode across sessions',
    description: 'Preserved a file tab’s selected preview mode when navigating between sessions and returning.',
    repository: 'OrchestratorInc/agent-orchestrator',
    link: 'https://github.com/OrchestratorInc/agent-orchestrator/pull/5997',
    mergedAt: 'Oct 3, 2026',
    additions: 358,
    deletions: 17,
    changedFiles: 10,
  },
]

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US').format(value)
}

export default function OpenSourceContributionsCard() {
  return (
    <div className="group">
      {contributions.slice(0, 3).map((contribution) => (
        <a
          key={contribution.link}
          href={contribution.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full touch-manipulation active:opacity-75"
          aria-label={`View ${contribution.title} on GitHub`}
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <article className="group/item cursor-pointer touch-manipulation border-b border-neutral-200 py-5 transition-opacity duration-300 group-has-hover:opacity-40 group-has-hover:group-hover/item:opacity-100 dark:border-neutral-800 sm:py-6">
            <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1">
              <GitMerge aria-hidden="true" className="size-4 shrink-0 text-purple-500 dark:text-purple-400" />
              <h3 className="text-sm font-medium leading-6 text-black/80 transition-colors group-has-hover:group-hover/item:text-black dark:text-white/80 dark:group-has-hover:group-hover/item:text-white sm:text-[15px]">
                {contribution.title}
              </h3>
            </div>
            <p className="mb-1 text-[11px] text-neutral-500 dark:text-neutral-400">
              {contribution.repository} <span aria-hidden="true">·</span> Merged {contribution.mergedAt}
            </p>
            <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
              {contribution.description}
            </p>
            <p className="mt-2 text-[10px] text-neutral-500 dark:text-neutral-500">
              +{formatNumber(contribution.additions)} / −{formatNumber(contribution.deletions)} lines
              <span aria-hidden="true"> · </span>{contribution.changedFiles} files changed
            </p>
          </article>
        </a>
      ))}
    </div>
  )
}
