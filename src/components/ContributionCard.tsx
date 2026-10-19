'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronDown, ChevronUp, GitMerge } from 'lucide-react'

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
  const [showAll, setShowAll] = useState(false)
  const displayedContributions = showAll ? contributions : contributions.slice(0, 3)

  return (
    <div className="rounded-lg bg-white p-3 dark:bg-zinc-900 sm:p-6">
      <div className="space-y-4">
        {displayedContributions.map((contribution, index) => (
          <div key={contribution.link}>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <GitMerge aria-hidden="true" className="size-4 shrink-0 text-purple-500 dark:text-purple-400" />
                  <h3 className="text-sm font-medium leading-6 text-black/85 dark:text-white/85 sm:text-[15px]">
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
              </div>
              <a
                href={contribution.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${contribution.title} on GitHub`}
                className="mt-1 shrink-0 rounded-lg border-2 border-neutral-500 bg-neutral-200 p-2 transition-colors hover:bg-neutral-300 dark:border-neutral-500 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <ArrowUpRight aria-hidden="true" className="size-4 text-neutral-600 dark:text-neutral-300" />
              </a>
            </div>
            {index < displayedContributions.length - 1 ? (
              <div className="mt-4 border-b border-neutral-300 dark:border-[#2E2E2E]" />
            ) : null}
          </div>
        ))}
      </div>

      {contributions.length > 3 ? (
        <div className="mt-4 border-t border-neutral-300 pt-4 dark:border-[#2E2E2E]">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
            aria-expanded={showAll}
          >
            <span>{showAll ? 'Show less' : `Show all ${contributions.length} contributions`}</span>
            {showAll ? (
              <ChevronUp aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown aria-hidden="true" className="size-4 transition-transform group-hover:translate-y-0.5" />
            )}
          </button>
        </div>
      ) : null}
    </div>
  )
}
