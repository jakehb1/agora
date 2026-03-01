import { Agent } from './agents';

export function searchAgents(agents: Agent[], query: string, vertical?: string): Agent[] {
  let filtered = agents;

  // Filter by vertical if specified
  if (vertical && vertical !== 'All') {
    filtered = filtered.filter(agent => agent.vertical === vertical);
  }

  // Return all agents in vertical if no search query
  if (!query.trim()) {
    return filtered;
  }

  // Search across multiple fields
  const searchTerm = query.toLowerCase();
  return filtered.filter(agent => {
    return (
      agent.name.toLowerCase().includes(searchTerm) ||
      agent.tagline.toLowerCase().includes(searchTerm) ||
      agent.description.toLowerCase().includes(searchTerm) ||
      agent.vertical.toLowerCase().includes(searchTerm) ||
      agent.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  });
}

export const verticals = [
  'All',
  'Marketing',
  'Dev',
  'Legal',
  'Finance',
  'Research',
  'Real Estate',
  'E-commerce'
];