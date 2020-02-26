export interface ProblemListRequest {
  _contentOnly: 1;
  page?: number;
  keyword?: string;
  content?: boolean;
  orderBy?: string;
  order?: string;
  type?: string;
  tag?: string;
}

export interface SubmitCodeRequest {
  code: string;
  lang?: number;
  enableO2?: number;
  verify?: string;
}

export interface EditProblemRequest {
  name: string;
  background: string;
  describes: string;
  inputformat: string;
  outputformat: string;
  hint: string;
  sample: [string, string][];
  type: string;
  provider: number;
  flag: number;
  tags: number[];
  difficulty: number;
  stdcode: string;
  showScore: number;
}

export interface RecordListRequest {
  _contentOnly: 1;
  page?: number;
  pid?: string;
  user?: string;
  status?: number;
  language?: number;
  orderBy?: number;
}

export interface GetPostsRequest {
  _contentOnly: 1;
  page?: number;
  orderBy?: string;
}

export interface BindRemoteJudgeAccountRequest {
  oj: string;
  username: string;
  password: string;
  captcha: string;
}

export interface ListThemesRequest {
  _contentOnly: 1;
  page?: number;
  orderBy?: string;
  order?: string;
  type?: string;
}

export interface EditThemeRequest {
  name: string;
  header: ThemeHeaderFooter;
  sideNav: ThemeSideNav;
  footer: ThemeHeaderFooter;
}

export interface ListImagesRequest {
  order?: string;
  bigImage?: boolean;
  page?: number;
}

export interface GetArticlesRequest {
  uid: number;
  keyword?: string;
  type?: string;
  page?: number;
}

export interface SendVerificationCodeRequest {
  endpoint: string;
  endpointType: number;
  captcha: string;
  userExist: boolean;
}

export interface RegisterRequest {
  username: string;
  password: string;
  endpoint: string;
  endpointType: number;
  verificationCode: string;
}

export interface LoginRequest {
  username: string;
  password: string;
  captcha: string;
}

export interface GetRankingListRequest {
  _contentOnly: 1;
  page?: number;
  orderBy?: number;
}

export interface GetNotificationsRequest {
  _contentOnly: 1;
  type?: number;
  page?: number;
}

export interface DataResponse<T> {
  code: number;
  currentTemplate: string;
  currentData: T;
  currentTitle: string;
  currentTheme: Theme | null;
  currentUser?: User;
}

export interface GenerateUploadParametersResponse {
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

export interface LoginResponse {
  username: string;
  locked: boolean;
  redirectTo: string;
}

export interface ConfigResponse {
  pageTree: PageTree;
  ws: {
    server: string;
  };
  codeLanguages: Record<number, Language>;
  contestRuleTypes: Record<number, {
    id: number;
    name: string;
    color: string;
  }>;
  recordStatus: Record<number, {
    id: number;
    name: string;
    shortName: string;
    color: string;
    filterable: boolean;
  }>;
  tags: Record<number, {
    name: string;
    type: string;
    color: string;
  }>;
  recordSortTypes: {
    id: number;
    name: string;
  }[];
  messageStatusTypes: {
    id: number;
    name: string;
  }[];
  translation: Translations;
  recordLanguageTypes: Record<number, Language>;
  problemTypes: Pick<Record<string, string>, ProblemType>;
  problemDifficulty: {
    id: number;
    name: string;
    color: string;
  }[];
  senderEndpointTypes: Record<number, {
    id: number;
    type: string;
  }>;
  contestAccessLevel: {
    id: number;
    name: string;
  }[];
  rankingSortTypes: {
    id: number;
    valueName: string;
    name: string;
  }[];
  contestVisibilityTypes: {
    id: number;
    name: string;
    color: string;
  }[];
  problemTags: {
    group: string;
    tags: number[];
  }[];
  routes: Record<string, string>;
  userRelationshipTypes: {
    id: number;
    type: string;
  }[];
  messageModeTypes: {
    id: number;
    type: string;
    name: string;
  }[];
  teamTypes: {
    id: number;
    displayName: string;
  }[];
  notificationTypes: Record<number, {
    id: number;
    type: string;
    name: string;
  }>;
  imageHostingWatermarkTypes: {
    id: number;
    name: string;
  }[];
  teamMemberPermissionTypes: Record<number, {
    id: number;
    type: string;
    name: string;
  }>;
  userPrizeShowLevelType: {
    id: number;
    type: string;
    name: string;
  }[];
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
  discussions: {
    title: string;
    id: number;
  }[];
  bookmarked: boolean;
  vjudgeUsername: string | null;
  recommendations: Problem[];
  lastLanguage: string;
  lastCode: string;
}

export interface ContestData {
  contest: ContestDetails;
  contestProblems: {
    score: number;
    problem: ProblemInfo;
    submitted: boolean;
  }[];
  accessLevel: number;
  joined: boolean;
}

export interface RecordData {
  record: RecordDetails;
  testCaseGroup: number[][];
  showStatus: boolean;
}

export interface Post {
  top: number;
  author: UserInfo;
  time: number;
  valid: boolean;
  recentReply: {
    author: UserInfo;
    time: number;
  };
  id: number;
  title: string;
  forum: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface UserData {
  user: UserDetails & {
    userRelationship: number;
    reverseUserRelationship: number;
    passedProblemCount: number;
    submittedProblemCount: number;
  };
  passedProblems: ProblemInfo[];
  submittedProblems: ProblemInfo[];
  teams: Array<{
    team: Team;
    permission: number;
  }>;
}

export interface UserSettingsData {
  userSetting: UserSettings;
  usernameUpdateTime: number;
  openSourceJoinTime: number;
  hasSet2FA: boolean;
  ccfLevelShowLevel: number;
  vjudgeAccounts: {
    AT?: string;
    CF?: string;
    SP?: string;
    UVA?: string;
  };
  prizes: any[];
  user: UserDetails;
}

export interface ChatListData {
  latestMessages: List<Message>;
  unreadMessageCount: [] | {
    [user: string]: number;
  };
}

export interface ImageListData {
  images: List<Image>;
  spaceLimit: number;
  spaceUsage: number;
}

export interface NotificationsData {
  notifications: List<Notification>;
  hasUnreadNotification: [] | {
    [type: number]: true;
  };
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

export interface ProblemInfo {
  pid: string;
  title: string;
  difficulty: number;
  type: ProblemType;
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
  provider: UserInfo;
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

export enum ProblemType {
  P = "P",
  CF = "CF",
  SP = "SP",
  AT = "AT",
  UVA = "UVA"
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
  host: UserInfo | Team;
  problemCount: number;
}

export interface ContestDetails extends Contest {
  description: string;
  totalParticipants: number;
}

export interface Score {
  details: {
    [pid: string]: {
      score: number;
      runningTime?: number;
    };
  };
  user: UserInfo;
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
  user?: UserInfo;
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

export interface Activity {
  content: string;
  id: number;
  type: number;
  time: number;
  user: UserInfo;
}

export interface UserInfo {
  uid: number;
  name: string;
  slogan: string;
  badge: string | null;
  isAdmin: boolean;
  isBanned: boolean;
  color: string;
  ccfLevel: number;
}

export interface User extends UserInfo {
  blogAddress: string;
  followingCount: number;
  followerCount: number;
  ranking: number;
  unreadMessageCount: number;
  unreadNoticeCount: number;
  verified: boolean;
}

export interface UserDetails extends User {
  email: string;
  phone: string;
  rating: Rating;
  registerTime: number;
  introduction: string;
  prize: Array<{
    contestName: string;
    year: number;
    prize: string;
  }>;
  background: string;
}

export interface UserSettings {
  openSource: number;
  learningMode: boolean;
  messageMode: number;
}

export interface Team {
  id: number;
  name: string;
}

export interface Message {
  id: number;
  sender: UserInfo;
  receiver: UserInfo;
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
  author: UserInfo;
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
  provider: UserInfo;
  uploadTime: number;
  size: number;
}

export interface Paste {
  data: string;
  id: string;
  user: UserInfo;
  time: number;
  public: boolean;
}

export interface Rating {
  user: UserInfo;
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
  Author: UserInfo;
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

export interface PageTree {
  name: string;
  template: string;
  route: string;
  children?: PageTree[];
  url?: string | null;
}

export interface Language {
  id: number;
  name: string;
  aceMode: string;
}

export interface Translations {
  [id: string]: string | Translations;
}

export interface List<T> {
  result: T[];
  count: number;
}
