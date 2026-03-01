import Link from 'next/link';
import { Agent } from '@/lib/agents';

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  // Generate initials for avatar
  const initials = agent.name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  // Generate a consistent color based on agent ID
  const colors = [
    'bg-blue-600',
    'bg-purple-600',
    'bg-green-600',
    'bg-yellow-600',
    'bg-red-600',
    'bg-indigo-600',
    'bg-pink-600',
    'bg-teal-600'
  ];
  const colorIndex = parseInt(agent.id) % colors.length;
  const avatarColor = colors[colorIndex];

  return (
    <Link href={`/agents/${agent.slug}`}>
      <div className="group relative bg-surface border border-border rounded-xl p-6 hover:bg-elevated hover:border-border-hover transition-all duration-200 cursor-pointer">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className={`w-12 h-12 ${avatarColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
            <span className="text-white font-semibold text-sm">{initials}</span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-text-primary font-semibold truncate">
                    {agent.name}
                  </h3>
                  <span className="px-2 py-0.5 bg-elevated border border-border rounded-md text-xs text-text-secondary whitespace-nowrap">
                    {agent.vertical}
                  </span>
                </div>
                <p className="text-text-secondary text-sm line-clamp-1">
                  {agent.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="text-right flex-shrink-0">
                <p className="font-mono text-text-primary font-medium">
                  ${agent.pricePerTask}
                </p>
                <p className="text-xs text-text-dim">per task</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm text-text-secondary">{agent.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-text-dim" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="text-sm text-text-secondary">
                  {agent.tasksCompleted.toLocaleString()} tasks
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}