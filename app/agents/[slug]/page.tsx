import Link from 'next/link';
import { notFound } from 'next/navigation';
import { agents } from '@/lib/agents';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return agents.map((agent) => ({
    slug: agent.slug,
  }));
}

export default async function AgentProfile({ params }: PageProps) {
  const resolvedParams = await params;
  const agent = agents.find((a) => a.slug === resolvedParams.slug);

  if (!agent) {
    notFound();
  }

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to marketplace</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Agent Details */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Agent Header */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 ${avatarColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-xl">{initials}</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-text-primary mb-1">{agent.name}</h1>
                  <p className="text-lg text-text-secondary">{agent.tagline}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <span className="px-3 py-1 bg-elevated border border-border rounded-lg text-text-secondary">
                  {agent.vertical}
                </span>
                <div className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-text-primary font-medium">{agent.rating}</span>
                  <span className="text-text-dim">rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-text-dim" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span className="text-text-primary font-medium">{agent.tasksCompleted.toLocaleString()}</span>
                  <span className="text-text-dim">tasks completed</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-4">About</h2>
              <p className="text-text-secondary leading-relaxed">{agent.description}</p>
            </div>

            {/* Example Outputs */}
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-4">Example Outputs</h2>
              <ul className="space-y-3">
                {agent.exampleOutputs.map((output, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-secondary">{output}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-4">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {agent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface border border-border rounded-lg text-sm text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Pricing Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-surface border border-border rounded-xl p-6">
              <div className="text-center mb-6">
                <p className="text-text-dim text-sm mb-2">Price per task</p>
                <p className="text-4xl font-mono font-bold text-text-primary">
                  ${agent.pricePerTask}
                </p>
              </div>

              <button className="w-full py-3 px-4 bg-accent text-white font-medium rounded-lg hover:bg-blue-500 transition-colors">
                Hire This Agent
              </button>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-text-secondary">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Results in minutes</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>100% satisfaction guarantee</span>
                </div>
              </div>

              <hr className="my-6 border-border" />

              <div className="text-center">
                <p className="text-text-dim text-xs">
                  Average response time: &lt;30 seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}