export interface ProblemListRequest {
  _contentOnly: any;
  page?: number;
  keyword?: string;
  content?: boolean;
  orderBy?: string;
  order?: string;
  type?: PublicProblemType;
  difficulty?: number;
  tag?: string;
}

export interface SubmitCodeRequest {
  code: string;
  lang?: number;
  enableO2?: number;
  verify?: string;
}

export interface CreateProblemRequest {
  settings: ProblemSettings;
  type: ProblemType;
  providerID: number | null;
}

export interface UpdateTestCasesSettingsRequest {
  cases: TestCase[];
  subtaskScoringStrategies: {
    [id: number]: ScoringStrategy;
  };
  scoringStrategy: ScoringStrategy;
  showSubtask: boolean;
}

export interface ProblemSetListRequest {
  _contentOnly: any;
  page?: number;
  keyword?: string;
  type?: "official" | "select";
}

export interface EditProblemSetRequest {
  settings: {
    title: string;
    description: string;
    type: number;
    deadline?: number;
  };
}

export interface EditContestRequest {
  settings: ContestSettings;
  hostID: number | null;
}

export interface RecordListRequest {
  _contentOnly: any;
  page?: number;
  pid?: string;
  contestId?: number;
  user?: string;
  status?: number;
  language?: number;
  orderBy?: number;
}

export interface CreatePostRequest {
  title: string;
  forum: string;
  content: string;
  captcha: string;
}

export interface BindRemoteJudgeAccountRequest {
  oj: string;
  username: string;
  password: string;
  captcha: string;
}

export interface ManageTeamMemberRequest {
  uid: number;
  realName: string;
  group: string;
  permission: number;
}

export interface ListThemesRequest {
  _contentOnly: any;
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

export interface IDESubmitRequest {
  code: string;
  lang: number;
  input?: string;
  o2?: boolean;
  "csrf-token": string;
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
  _contentOnly: any;
  page?: number;
  orderBy?: number;
}

export interface GetNotificationsRequest {
  _contentOnly: any;
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

export interface UpdateTestCasesSettingsResponse {
  problem: ProblemDetails;
  testCases: TestCase[];
  scoringStrategy: ScoringStrategy;
  subtaskScoringStrategies: ScoringStrategy[];
}

export interface GetScoreboardResponse {
  scoreboard: List<Score>;
  userScore: Score | null;
  firstBloodUID: { [pid: string]: number; } | null;
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
  syncToken: string;
  locked: boolean;
  redirectTo: string;
}

export interface ConfigResponse {
  pageTree: PageTree;
  ws: {
    server: string;
  };
  codeLanguages: {
    [id: number]: {
      aceMode: string;
      hljsLang: string;
      name: string;
      fileExtensions: string;
      id: number;
    };
  };
  contestRuleTypes: {
    [id: number]: {
      id: number;
      name: string;
      color: string;
    };
  };
  recordStatus: {
    [id: number]: {
      id: number;
      name: string;
      shortName: string;
      color: string;
      filterable: boolean;
    };
  };
  tags: {
    [id: number]: {
      name: string;
      type: string;
      color: string;
    };
  };
  recordSortTypes: {
    id: number;
    name: string;
  }[];
  messageStatusTypes: {
    id: number;
    name: string;
  }[];
  translation: Translations;
  recordLanguageTypes: {
    [id: number]: {
      id: number;
      name: string;
      aceMode: string;
    };
  };
  problemDifficulty: {
    id: number;
    name: string;
    color: string;
  }[];
  senderEndpointTypes: {
    [id: number]: {
      id: number;
      type: string;
    };
  };
  contestAccessLevel: {
    id: number;
    name: string;
  }[];
  rankingSortTypes: {
    id: number;
    valueName: string;
    name: string;
  }[];
  openIdPlatformTypes: {
    [id: number]: string;
  };
  contestVisibilityTypes: {
    id: number;
    name: string;
    color: string;
    userCreatable: boolean;
    scope: "disabled" | "global" | "team" | "personal";
  }[];
  problemTags: {
    group: string;
    tags: number[];
  }[];
  routes: {
    [id: string]: string;
  };
  userRelationshipTypes: {
    id: number;
    type: string;
  }[];
  scoringStrategyTypes: {
    [id: number]: {
      id: number;
      type: string;
      name: string;
    };
  };
  problemTypes: {
    [id in ProblemType]: {
      id: ProblemType;
      type: string;
      name: string;
      vjudge: boolean;
      userCreatable: boolean;
      searchable: boolean;
    };
  };
  messageModeTypes: {
    id: number;
    type: string;
    name: string;
  }[];
  problemFlagTypes: {
    [id: number]: {
      id: number;
      type: string;
      name: string;
    };
  };
  contestInvitationCodeType: {
    [id: number]: {
      id: number;
      type: string;
      name: string;
    };
  };
  trainingTypes: {
    [id: number]: {
      id: number;
      type: string;
      name: string;
      public: boolean;
      select: boolean;
      scope: "hidden" | "global" | "team" | "user";
      userCreatable: boolean;
      color: string;
    };
  };
  teamTypes: {
    [id: number]: {
      id: number;
      displayName: string | null;
    };
  };
  notificationTypes: {
    [id: number]: {
      id: number;
      type: string;
      name: string;
    };
  };
  imageHostingWatermarkTypes: {
    id: number;
    name: string;
  }[];
  teamMemberPermissionTypes: {
    [id: number]: {
      id: number;
      type: string;
      name: string;
    };
  };
  teamJoinPermissionTypes: {
    id: number;
    type: string;
    name: string;
  }[];
  userPrizeShowLevelType: {
    id: number;
    type: string;
    name: string;
  }[];
}

export interface PageTree {
  name: string;
  template: string;
  route: string;
  children?: PageTree[];
  url?: string | null;
}

export interface Translations {
  [id: string]: string | Translations;
}

export interface ProblemData {
  problem: ProblemDetails & ProblemStatus;
  contest: ContestInfo | null;
  discussions: {
    id: number;
    title: string;
    forum: Forum;
  }[];
  bookmarked: boolean;
  vjudgeUsername: string | null;
  recommendations: (ProblemInfo & ProblemStatus)[];
  lastLanguage: false;
  lastCode: string;
}

export interface SolutionsData {
  solutions: List<ArticleDetails>;
  problem: ProblemInfo;
  acceptSolution: boolean;
}

export interface ProblemSetListData {
  trainings: List<ProblemSet>;
  acceptedCounts: {
    [id: number]: number;
  };
}

export interface ProblemSetData {
  training: ProblemSetDetails;
  trainingProblems: {
    result: [][];
    perPage: null;
    count: number;
  };
  canEdit: boolean;
  privilegedTeams: TeamInfo[];
}

export interface ContestData {
  contest: ContestDetails;
  contestProblems: {
    score: number;
    problem: ProblemInfo;
    submitted: boolean;
  }[];
  isScoreboardFrozen: boolean;
  accessLevel: number;
  joined: boolean;
}

export interface CreatedContestData {
  contest: ContestDetails & { joinCode: string; };
  contestProblems: {
    score: number;
    problem: ProblemInfo;
  };
  contestSetting: ContestSettings;
  privilegedTeams: TeamInfo[];
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
  } | null;
  id: number;
  title: string;
  forum: Forum;
}

export interface Forum {
  id: number;
  name: string;
  slug: string;
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
  teams?: {
    team: TeamInfo;
    permission: number;
  }[];
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

export interface TeamData {
  team: Team;
  currentTeamMember: {
    type: string;
    realName: string;
    user: UserInfo;
    permission: number;
  } | null;
  latestDiscussions: Post[] | null;
}

export interface ChatListData {
  latestMessages: List<Message>;
  unreadMessageCount: [] | {
    [user: number]: number;
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
  fullScore: number;
  type: ProblemType;
}

export interface Problem extends ProblemInfo {
  tags: number[];
  wantsTranslation: boolean;
  totalSubmit: number;
  totalAccepted: number;
}

export interface ProblemDetails extends Problem {
  background: string;
  description: string;
  inputFormat: string;
  outputFormat: string;
  samples: [string, string][];
  hint: string;
  provider: UserInfo | TeamInfo;
  attachments: {
    size: number;
    uploadTime: number;
    downloadLink: string;
    id: string;
    fileName: string;
  }[];
  canEdit: boolean;
  limits: {
    time: number[];
    memory: number[];
  };
  showScore: boolean;
  score: number | null;
  stdCode: string;
  vjudge?: {
    origin: string;
    link: string;
    id: string;
  };
  translation?: string;
}

export interface ProblemSettings {
  title: string;
  background: string;
  description: string;
  inputFormat: string;
  outputFormat: string;
  samples: [string, string][];
  hint: string;
  translation: string;
  needsTranslation: boolean;
  acceptSolution: boolean;
  allowDataDownload: boolean;
  difficulty: number;
  showScore: boolean;
  flag: number;
  tags: number[];
}

export type PublicProblemType = "P" | "CF" | "SP" | "AT" | "UVA";
export type ProblemType = PublicProblemType | "T" | "U";

export interface ProblemStatus {
  accepted: boolean;
  submitted: boolean;
}

export interface TestCase {
  upid: number;
  inputFileName: string;
  outputFileName: string;
  timeLimit: number;
  memoryLimit: number;
  fullScore: number;
  isPretest: boolean;
  subtaskId: number;
}

export interface ScoringStrategy {
  type: number;
  script: string;
}

export interface ProblemSet {
  createTime: number;
  deadline: number | null;
  problemCount: number;
  markCount: number;
  id: number;
  title: string;
  type: number;
  provider: UserInfo | TeamInfo;
}

export interface ProblemSetDetails extends ProblemSet {
  description: string;
  marked: boolean;
  problems: { problem: Problem; }[];
  userScore: {
    user: UserInfo;
    totalScore: number;
    score: {
      [pid: string]: number | null;
    };
    status: {
      [pid: string]: boolean;
    };
  } | null;
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
  invitationCodeType: number;
  rated: boolean;
  host: UserInfo | TeamInfo;
  problemCount: number;
}

export interface ContestDetails extends Contest {
  description: string;
  totalParticipants: number;
  canEdit: boolean;
}

export interface ContestSettings {
  name: string;
  description: string;
  visibilityType: number;
  ruleType: number;
  startTime: number;
  endTime: number;
}

export interface Score {
  details: {
    [pid: string]: {
      score: number;
      runningTime?: number;
    };
  } | [];
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
  enableO2: boolean;
  score: number;
}

export interface RecordDetails extends RecordBase {
  detail: {
    compileResult: {
      success: boolean;
      message: string | null;
    };
    judgeResult: {
      subtasks: {
        [id: number]: {
          id: number;
          score: number;
          status: number;
          testCases: {
            [id: number]: {
              id: number;
              status: number;
              time: number;
              memory: number;
              score: number;
              signal: number | null;
              exitCode: number;
              description: string;
              subtaskID: number;
            };
          };
          judger: null;
          time: number;
          memory: number;
        };
      }[];
      finishedCaseCount: number;
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
  prize: {
    year: number;
    contestName: string;
    prize: string;
  }[];
  background: string;
}

export interface UserSettings {
  openSource: number;
  learningMode: boolean;
  messageMode: number;
  acceptPromotion: boolean;
}

export interface TeamInfo {
  id: number;
  name: string;
}

export interface Team extends TeamInfo {
  introduction: string;
  createTime: number;
  joinPermission: number;
  master: UserInfo;
  notice: string;
  type: number;
  memberCount: number;
}

export interface TeamMember {
  type: string;
  realName: string;
  user: UserInfo;
  permission: number;
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
  color: [number, number, number, number][];
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
  contestRating: number;
  socialRating: number;
  practiceRating: number;
  basicRating: number;
  prizeRating: number;
  calculateTime: number;
  user: UserInfo;
  rating: number;
}

export interface Article {
  type: string;
  status: number;
  postTime: number;
  author: UserInfo;
  thumbUp: number;
  commentCount: number;
  currentUserVoteType: number;
  contentDescription: string;
  id: number;
  identifier: string;
  title: string;
}

export interface ArticleDetails extends Article {
  content: string;
}

export interface List<T> {
  result: T[];
  count: number;
  perPage: number;
}

export interface LPost {
  PostID: number;
  Title: string;
  Author: LUser;
  Forum: {
    ForumID: number;
    Name: string;
    InternalName: string;
  };
  Top: number;
  SubmitTime: number;
  isValid: boolean;
  LatestReply: LReply;
  RepliesCount: number;
}

export interface LPostDetails extends LPost {
  Content: string;
}

export interface LReply {
  Author: LUser;
  ReplyTime: number;
  Content: string;
}

export interface LUser {
  UID: number;
  Username: string;
  isAdmin: boolean;
  isValid: boolean;
  isVerified: boolean;
}

export interface LList<T> {
  count: number;
  result: T[];
}
