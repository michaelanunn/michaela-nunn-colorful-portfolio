export type Post = { slug: string; title: string; date: string; body: string[] };

export const posts: Post[] = [
  {
    slug: "emotions-are-never-irrational",
    title: "Emotions are never irrational; feelings can be",
    date: "Nov 2026",
    body: [
      "It is not possible for an emotion to be irrational. Only attempts at reasoning can be rational or irrational. It is also not possible for an emotion to be illogical. Only attempts at logic can be logical or illogical. Emotions make no claim to reason or logic, so they cannot be irrational or illogical any more than they can be rational or logical.",
      "Here is the thing: behind every emotion is a thought. I am using \"thought\" in its broadest possible sense. A thought could be a conscious cognition, an unconscious belief, a perception, or a judgment. In almost all cases, there is some form of thought that precedes the emotion. When you think something and validate it as true, the body produces the emotional correlate of that thought. In fact, this is one way to think about emotions: they are embodied cognitions.",
      "Here is the thing: not all emotions are justified. All emotions are valid, but not all emotions are justified.",
    ],
  },
];
