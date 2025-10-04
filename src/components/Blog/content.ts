export interface BlogPost {
  title: string;
  slug: string;
  content: string;
}

const posts: BlogPost[] = [
  {
    title: "Building Deja Do: A Time-Based Todo App",
    slug: "deja-do-project",
    content: "# Building Deja Do\n\nA detailed look at how I built a todo list app where lists reset hourly or daily using React, TypeScript, and Tailwind CSS."
  },
  {
    title: "Creating Money Talks: Real-Time Task Management",
    slug: "money-talks-project",
    content: "# Money Talks Project\n\nExploring the development of a real-time task management system with team collaboration features using TypeScript, Next.js, PostgreSQL, and Socket.io."
  },
  {
    title: "Developing an AI Chat Interface",
    slug: "ai-chat-project",
    content: "# AI Chat Interface\n\nBuilding a modern chat interface powered by machine learning algorithms using Python, TensorFlow, React, and FastAPI."
  },
  {
    title: "[WIP] The Renewal",
    slug: "the-renewal",
    content: `# The Renewal

## A Fresh Start in Software Development

Sometimes the best way forward is to start fresh. This post explores the concept of **renewal** in software projects and why it's often necessary.

### Why Renewal Matters

Renewal isn't just about rewriting code—it's about:

1. **Rethinking architecture** with new insights
2. **Applying lessons learned** from past mistakes  
3. **Embracing modern tools** and practices
4. **Removing technical debt** that's been accumulating

### The Challenge

> "The hardest part of renewal is letting go of what you've built, even when you know it needs to change." 

Here's what makes renewal difficult:

- **Emotional attachment** to existing code
- **Fear of losing progress** made so far
- **Time investment** required to rebuild
- **Uncertainty** about the new approach

### Code Example

Here's a simple example of refactoring for renewal:

\`\`\`javascript
// Old approach
function processData(data) {
  // Complex, nested logic
  if (data) {
    if (data.items) {
      return data.items.map(item => item.value);
    }
  }
  return [];
}

// Renewed approach
const processData = (data) => 
  data?.items?.map(item => item.value) ?? [];
\`\`\`

### Moving Forward

The key to successful renewal is *balance*—knowing when to preserve what works and when to rebuild what doesn't.

**Next steps:**
- Evaluate current architecture
- Identify core pain points
- Plan the renewal strategy
- Execute incrementally`
  },
  {
    title: "[WIP] The Blueprint",
    slug: "the-blueprint",
    content: `# The Blueprint

## Designing Software That Scales

A blueprint is more than a plan—it's a vision for how your software will grow and evolve.

### Core Principles

Every great blueprint starts with solid principles:

1. **Modularity**: Keep components independent
2. **Scalability**: Design for growth from day one
3. **Maintainability**: Write code others can understand
4. **Performance**: Optimize without premature optimization

### Architecture Layers

Our blueprint consists of three main layers:

#### 1. Presentation Layer
- User interface components
- State management
- Client-side routing

#### 2. Business Logic Layer  
- API services
- Data transformation
- Validation rules

#### 3. Data Layer
- Database models
- Caching strategies
- Data access patterns

### Technology Stack

Here's our chosen stack:

| Layer | Technology | Why |
|-------|-----------|-----|
| Frontend | React + TypeScript | Type safety & component reusability |
| Backend | Node.js | JavaScript everywhere |
| Database | PostgreSQL | Relational data with JSON support |

### Best Practices

> "A blueprint is only as good as the team's commitment to following it."

Key practices we follow:

- Write **tests first** (TDD approach)
- Document as you code
- Review all pull requests
- Maintain consistent code style
- Refactor regularly

### Implementation

Here's a sample of our base component structure:

\`\`\`typescript
interface ComponentProps {
  title: string;
  data: DataType[];
  onUpdate: (id: string) => void;
}

export const BaseComponent: React.FC<ComponentProps> = ({
  title,
  data,
  onUpdate
}) => {
  // Component logic here
  return (
    <div>
      <h2>{title}</h2>
      {/* Render data */}
    </div>
  );
};
\`\`\`

### Conclusion

A well-designed blueprint saves countless hours of debugging and refactoring down the line. Take the time to plan, and your future self will thank you!

*Check out [The Renewal](/blog/the-renewal) for thoughts on when to rebuild your blueprint.*`
  }
];

export default posts;
