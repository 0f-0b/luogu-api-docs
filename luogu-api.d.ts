export interface DataResponse<T> {
  code: number;
  currentTemplate: string;
  currentData: T;
  currentTitle: string;
  currentTheme: Theme | null;
  currentUser?: UserDetails;
}

export interface StatusResponse {
  status: number;
}

export interface APIResponse<T> extends StatusResponse {
  data: T;
}

export interface IDResponse {
  id: string;
}

export interface HTMLResponse {
  code: number;
  message: string;
  more: {
    html: string;
  };
}

export interface GetScoreboardAPIResponse {
  scoreboard: List<Score>;
  userScore: Score;
}

export interface GetUserAPIResponse {
  users: [User | null];
}

export interface MessagesAPIResponse {
  messages: List<Message>;
}

export interface GetImageAPIResponse {
  image: Image;
}

export interface GenerateUploadParametersAPIResponse {
  uploadLink: {
    host: string;
    policy: string;
    accessKeyID: string;
    callback: string;
    signature: string;
    expiredTime: number;
    dir: string;
  };
}

export interface LoginAPIResponse {
  username: string;
  locked: boolean;
  redirectTo: string;
}

export interface UnlockAPIResponse {
  redirectTo: string;
}

export interface ProblemListData {
  page: number;
  problems: List<Problem & {
    tags: number[];
    wantsTranslation: boolean;
    difficulty: number;
    totalSubmit: string;
    totalAccepted: string;
  }>;
}

export interface ProblemData {
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

export interface ContestListData {
  contests: List<Contest>;
}

export interface ContestData {
  contest: ContestDetails;
  contestProblems: Array<{
    score: number;
    problem: ProblemInfo;
    submitted: boolean;
  }>;
  accessLevel: number;
  joined: boolean;
}

export interface RecordListData {
  records: List<RecordBase>;
}

export interface RecordData {
  record: RecordDetails;
  testCaseGroup: number[][];
  showStatus: boolean;
}

export interface ChatListData {
  latestMessages: List<Message>;
  unreadMessageCount: [] | {
    [user: string]: number
  };
}

export interface ThemeListData {
  themes: List<ThemeDetails>;
}

export interface ThemeData {
  theme: ThemeDetails;
}

export interface ImageListData {
  images: List<Image>;
  spaceLimit: number;
  spaceUsage: number;
}

export interface PasteListData {
  pastes: List<Paste>;
}

export interface PasteData {
  paste: Paste;
}

export interface RankingListData {
  rankList: List<RatingDetails>;
}

export interface NotificationsData {
  notifications: List<Notification>;
}

export interface UnlockModeData {
  mode: string;
}

export interface SubmitCodeData {
  rid: number;
}

export interface ActivityData {
  uid: number;
  time: {
    date: string;
    timezone_type: number;
    timezone: string;
  };
  type: number;
  comment: string;
}

export interface UIDData {
  uid: number;
}

export interface ProblemInfo {
  pid: string;
  title: string;
  type: string;
}

export interface Problem extends ProblemInfo {
  accepted: boolean;
  submitted: boolean;
}

export interface ProblemDetails extends Problem {
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

export interface ContestInfo {
  id: number;
  name: string;
  startTime: number;
  endTime: number;
}

export interface Contest extends ContestInfo {
  ruleType: number;
  visibilityType: number;
  rated: boolean;
  host: User | Team;
  problemCount: number;
}

export interface ContestDetails extends Contest {
  description: string;
}

export interface Score {
  details: {
    [pid: string]: {
      score: number;
      runningTime?: number;
    };
  };
  user: User;
  score: number;
  runningTime: number;
}

export interface RecordBase {
  time: number | null;
  memory: number | null;
  problem: ProblemInfo;
  contest: ContestInfo | null;
  sourceCodeLength: number;
  submitTime: number;
  language: number;
  user?: User;
  id: number;
  status: number;
  score: number;
}

export interface RecordDetails extends RecordBase {
  detail: {
    message: null;
    subtasks?: Array<{
      id: number;
      time: number;
      memory: number;
      score: number;
      status: number;
      testcases: number[];
    }>;
    testcases?: {
      [id: string]: {
        id: number;
        time: number;
        memory: number;
        score: number;
        status: number;
        message: string;
      };
    };
    compile?: {
      content: string;
      success: boolean;
    };
  };
  sourceCode: string;
}

export interface User {
  uid: number;
  name: string;
  badge: string | null;
  isAdmin: boolean;
  color: string;
  ccfLevel: number;
}

export interface UserDetails extends User {
  passed: string;
  rating: Rating;
  introduce: string;
  blogAddress: string;
  background: string;
  unreadMessageCount: number;
  unreadNoticeCount: number;
  verified: boolean;
}

export interface Team {
  id: number;
  name: string;
}

export interface Message {
  id: number;
  sender: User;
  receiver: User;
  time: number;
  status: number;
  content: string;
}

export interface Notification {
  id: number;
  time: number;
  type: number;
  title: string;
  content: string;
  read: boolean;
}

export interface Theme {
  id: number;
  header: ThemeHeaderFooter;
  sideNav: ThemeSideNav;
  footer: ThemeHeaderFooter;
}

export interface ThemeDetails extends Theme {
  name: string;
  type: number;
  author: User;
  updateTime: number;
  userCount: number;
}

export interface ThemeHeaderFooter {
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

export interface ThemeSideNav {
  logoBackgroundColor: [number, number, number, number];
  color: [number, number, number, number];
  invertColor: boolean;
}

export interface Image {
  thumbnailUrl: string;
  url: string;
  id: string;
  provider: User;
  uploadTime: number;
  size: number;
}

export interface Paste {
  data: string;
  id: string;
  user: User;
  time: number;
  public: boolean;
}

export interface Rating {
  user: User;
  rating: number;
}

export interface RatingDetails extends Rating {
  contestRating: number;
  socialRating: number;
  practiceRating: number;
  basicRating: number;
  prizeRating: number;
  calculateTime: number;
}

export interface Article {
  Type: string;
  PostTime: number;
  Author: User;
  Status: number;
  ContentDescription: string;
  ThumbUp: number;
  BlogID: number;
  Identifier: string;
  Title: string;
}

export interface ArticleComment {
  Author: {
    UID: number;
    Username: string;
    isAdmin: boolean;
    isValid: boolean;
    isVerified: boolean;
    DynamicRate: number;
  };
  ReplyTime: number;
  Content: string;
}

export interface List<T> {
  result: T[];
  count: number;
}
