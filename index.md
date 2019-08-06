# Luogu API Documentation

## APIs

### Problems

#### List problems

##### Request

```
GET /problem/list?_contentOnly=1
```

##### Parameters

| Key | Type | Optional |
|-|-|-|
| page | `number` | ✓ |
| keyword | `string` | ✓ |
| content | `boolean` | ✓ |
| type | `string` | ✓ |
| tag | `string` | ✓ |

##### Response Type

```ts
Response<ProblemListData>
```

#### Get problem

##### Request

```
GET /problem/:pid?_contentOnly=1
```

##### Response Type

```ts
Response<ProblemData>
```

## Definitions

```ts
interface Response<T> {
  code: number;
  currentTemplate: string;
  currentData: T;
  currentTitle: string;
  currentTheme: Theme | null;
  currentUser?: UserDetails;
}

interface ProblemListData {
  page: number;
  problems: {
    count: number;
    result: Array<Problem & {
      tags: number[];
      wantsTranslation: boolean;
      difficulty: number;
      totalSubmit: string;
      totalAccepted: string;
    }>;
  };
}

interface ProblemData {
  problem: ProblemDetails;
  discussions: Array<{
    title: string;
    id: number;
  }>;
  bookmarked: boolean;
  vjudgeUsername: string | null;
  recommendations: Problem[];
  lastLanguage: string;
  lastCode: string;
}

interface Problem {
  pid: string;
  title: string;
  type: string;
  accepted: boolean;
  submitted: boolean;
}

interface ProblemDetails extends Problem {
  background: string;
  description: string;
  inputFormat: string;
  outputFormat: string;
  samples: Array<[string, string]>;
  hint: string;
  provider: User;
  canEdit: boolean;
  limits: {
    time: number[];
    memory: number[];
  };
  showScore: boolean;
  score: number;
  tags: number[];
  wantsTranslation: boolean;
  difficulty: number;
  totalSubmit: number;
  totalAccepted: number;
}

interface User {
  uid: number;
  name: string;
  badge: string | null;
  isAdmin: boolean;
  color: string;
}

interface UserDetails extends User {
  passed: string;
  rating: {
    user: User;
    rating: number;
  };
  introduce: string;
  blogAddress: string;
  background: string;
  unreadMessageCount: number;
  unreadNoticeCount: number;
  verified: boolean;
}

interface Theme {
  id: number;
  header: ThemeHeaderFooter;
  sideNav: ThemeSideNav;
  footer: ThemeHeaderFooter;
}

interface ThemeHeaderFooter {
  imagePath: string | null;
  color: Array<[number, number, number, number]>;
  blur: number;
  brightness: number;
  degree: number;
  repeat: number;
  position: [number, number];
  size: [number, number];
  type: number;
}

interface ThemeSideNav {
  logoBackgroundColor: [number, number, number, number];
  color: [number, number, number, number];
  invertColor: boolean;
}
```
