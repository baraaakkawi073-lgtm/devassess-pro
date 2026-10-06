export default [
  {
    id: 'aspnet-01',
    topic: 'Request Pipeline',
    difficulty: 'easy',
    question:
      'What is the primary building block of the ASP.NET Core request pipeline that processes HTTP requests in sequence?',
    options: ['Servlet filters', 'Middleware components', 'Action filters only', 'gRPC interceptors'],
    answer: 1,
    explanation:
      'Middleware components run in the order they are registered in Program.cs, each able to short-circuit the request or pass it to the next component.',
  },
  {
    id: 'aspnet-02',
    topic: 'MVC & Web API',
    difficulty: 'easy',
    question: 'What does the IActionResult return type represent in a controller action?',
    options: [
      'A serialised JSON payload only',
      'An abstraction that lets an action return different results (Ok, NotFound, BadRequest, View...)',
      'A dependency-injection container registration',
      'The raw HTTP response stream',
    ],
    answer: 1,
    explanation:
      'IActionResult decouples "what to return" from "how to render it", so the framework picks the correct status code and formatter at execution time.',
  },
  {
    id: 'aspnet-03',
    topic: 'Routing',
    difficulty: 'easy',
    question:
      'Which attribute maps an ASP.NET Core controller action to the HTTP GET verb, optionally with a route template?',
    options: ['[HttpGet]', '[RouteGet]', '[MapGet]', '[ActionGet]'],
    answer: 0,
    explanation:
      '[HttpGet("api/questions")] declares both verb and route template. Convention-based and attribute routing can be combined in one application.',
  },
  {
    id: 'aspnet-04',
    topic: 'Entity Framework Core',
    difficulty: 'medium',
    question: 'What category of tool is Entity Framework Core?',
    options: [
      'An object-relational mapper (ORM)',
      'A NoSQL document database',
      'A message queue',
      'A front-end bundler',
    ],
    answer: 0,
    explanation:
      'EF Core maps CLR classes to relational tables, supports LINQ queries, change tracking, migrations and multiple relational database providers.',
  },
  {
    id: 'aspnet-05',
    topic: 'Configuration',
    difficulty: 'easy',
    question: 'Which file is the conventional source of application settings such as connection strings in ASP.NET Core?',
    options: ['web.config only', 'appsettings.json', 'Global.asax', 'packages.config'],
    answer: 1,
    explanation:
      'appsettings.json (optionally per-environment variants like appsettings.Production.json) is read through the IConfiguration system and can be overridden by environment variables.',
  },
  {
    id: 'aspnet-06',
    topic: 'Dependency Injection',
    difficulty: 'medium',
    question: 'What is the lifetime of a service registered with AddScoped in ASP.NET Core?',
    options: [
      'One instance per process (singleton)',
      'One instance per HTTP request',
      'One instance per transient resolution',
      'One instance per application pool recycle only',
    ],
    answer: 1,
    explanation:
      'Scoped services are created once per request and disposed when the request ends - the correct choice for Unit-of-Work style DbContext usage.',
  },
  {
    id: 'aspnet-07',
    topic: 'C# Language',
    difficulty: 'medium',
    question:
      'Which C# access modifier limits visibility of a type to the current assembly only?',
    options: ['public', 'protected', 'private', 'internal'],
    answer: 3,
    explanation:
      'internal is assembly-scoped. It is the default modifier for C# types and is ideal for implementation details not meant for external consumers.',
  },
  {
    id: 'aspnet-08',
    topic: 'Async Programming',
    difficulty: 'medium',
    question: 'Which return type is idiomatic for an asynchronous ASP.NET Core API action that may perform I/O?',
    options: ['void', 'Task<IActionResult>', 'IAsyncResult', 'IEnumerator'],
    answer: 1,
    explanation:
      'Returning Task<IActionResult> frees the thread pool thread while I/O completes, letting the server keep handling other requests - essential under load.',
  },
  {
    id: 'aspnet-09',
    topic: 'MVC & Web API',
    difficulty: 'easy',
    question: 'Which helper method does a controller call to return an HTTP 404 response?',
    options: ['Ok()', 'Created()', 'NotFound()', 'NoContent()'],
    answer: 2,
    explanation:
      'NotFound() produces a 404 result; Ok() returns 200, Created() returns 201 with a Location header, and NoContent() returns 204.',
  },
  {
    id: 'aspnet-10',
    topic: 'Model Validation',
    difficulty: 'hard',
    question:
      'What does the [ApiController] attribute automatically add to an ASP.NET Core Web API controller?',
    options: [
      'Automatic model-state validation that returns 400 with a ProblemDetails payload',
      'Automatic HTTPS redirection for every action',
      'Automatic response caching for GET actions',
      'Automatic OpenAPI authentication',
    ],
    answer: 0,
    explanation:
      '[ApiController] enables inferred binding sources and short-circuits invalid model state with a 400 + ProblemDetails response before the action body runs.',
  },
];
