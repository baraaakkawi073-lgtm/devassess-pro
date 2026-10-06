export default [
  {
    id: 'oop-01',
    topic: 'The Four Pillars',
    difficulty: 'easy',
    question:
      'Which OOP pillar describes bundling data and the methods that operate on it while hiding internal state behind a public interface?',
    options: ['Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction'],
    answer: 2,
    explanation:
      'Encapsulation groups state and behaviour in one unit and restricts direct access to internal fields, exposing only controlled public methods.',
  },
  {
    id: 'oop-02',
    topic: 'Inheritance',
    difficulty: 'easy',
    question:
      'Which feature allows a subclass to provide a specific implementation of a method already defined in its parent class?',
    options: ['Method overloading', 'Method overriding', 'Composition', 'Aggregation'],
    answer: 1,
    explanation:
      'Overriding replaces the inherited implementation in the subclass and is resolved at runtime. Overloading instead adds several signatures of the same name.',
  },
  {
    id: 'oop-03',
    topic: 'Polymorphism',
    difficulty: 'medium',
    question:
      'A class defines calculate(int, int) and calculate(double, double). Which concept does this demonstrate?',
    options: [
      'Method overriding',
      'Method overloading',
      'Multiple inheritance',
      'Information hiding',
    ],
    answer: 1,
    explanation:
      'The same method name with different parameter lists in the same class is overloading (compile-time polymorphism).',
  },
  {
    id: 'oop-04',
    topic: 'Polymorphism',
    difficulty: 'medium',
    question:
      'Which form of polymorphism is decided at compile time rather than at runtime?',
    options: [
      'Dynamic dispatch of virtual methods',
      'Runtime method overriding',
      'Method overloading',
      'Duck typing through interfaces',
    ],
    answer: 2,
    explanation:
      'Overloading resolution happens during compilation because the compiler can pick the correct signature from the static argument types. Runtime polymorphism requires dynamic dispatch.',
  },
  {
    id: 'oop-05',
    topic: 'Abstraction',
    difficulty: 'easy',
    question: 'Which keyword prevents a class from being instantiated directly?',
    options: ['static', 'final', 'abstract', 'private'],
    answer: 2,
    explanation:
      'An abstract class cannot be instantiated; it can only be subclassed, and any abstract methods it declares must be implemented by those subclasses.',
  },
  {
    id: 'oop-06',
    topic: 'SOLID',
    difficulty: 'medium',
    question:
      'Which SOLID principle states that a class should have only one reason to change?',
    options: [
      'Open/Closed Principle',
      'Liskov Substitution Principle',
      'Interface Segregation Principle',
      'Single Responsibility Principle',
    ],
    answer: 3,
    explanation:
      'The Single Responsibility Principle keeps one axis of change per class, which keeps modules small, testable and easy to refactor safely.',
  },
  {
    id: 'oop-07',
    topic: 'SOLID',
    difficulty: 'hard',
    question:
      'Which design guideline is summarised by the phrase "favour object composition over class inheritance"?',
    options: [
      'The Dependency Inversion Principle',
      'Composition over inheritance',
      'The Interface Segregation Principle',
      'The Open/Closed Principle',
    ],
    answer: 1,
    explanation:
      'Composition assembles objects from collaborating parts, avoiding the tight coupling and fragile base-class problems that deep inheritance hierarchies create.',
  },
  {
    id: 'oop-08',
    topic: 'Polymorphism',
    difficulty: 'medium',
    question:
      'A reference of base type calls a method that is redefined by the actual object at runtime. What is this called?',
    options: [
      'Static binding',
      'Dynamic dispatch (late binding)',
      'Operator overloading',
      'Method hiding',
    ],
    answer: 1,
    explanation:
      'The virtual method table (or equivalent) resolves the call from the concrete runtime type, which is dynamic dispatch - the mechanism behind runtime polymorphism.',
  },
  {
    id: 'oop-09',
    topic: 'The Four Pillars',
    difficulty: 'medium',
    question:
      'Which OOP concept means exposing only the essential details of a system while hiding the implementation?',
    options: ['Abstraction', 'Encapsulation', 'Coupling', 'Cohesion'],
    answer: 0,
    explanation:
      'Abstraction focuses on WHAT an object does (public contract), while encapsulation focuses on HOW the state is protected internally. They are related but distinct.',
  },
  {
    id: 'oop-10',
    topic: 'Inheritance',
    difficulty: 'medium',
    question:
      'In Java and C#, a class can extend only one base class but can implement multiple what?',
    options: ['Constructors', 'Interfaces', 'Abstract classes', 'Static blocks'],
    answer: 1,
    explanation:
      'Languages without class-level multiple inheritance use interfaces to gain multiple contract inheritance while keeping a single class hierarchy.',
  },
];
