export interface ProblemListParams {
  page?: number;
  keyword?: string;
  content?: boolean;
  orderBy?: string;
  order?: string;
  type?: string;
  difficulty?: number;
  tag?: string;
}

export interface ProblemSetListParams {
  page?: number;
  keyword?: string;
  type?: "official" | "select";
}

export interface RecordListParams {
  page?: number;
  pid?: string;
  contestId?: number;
  user?: string;
  status?: number;
  language?: number;
  orderBy?: number;
}

export interface ThemeListParams {
  page?: number;
  orderBy?: string;
  order?: string;
  type?: string;
}

export interface ArticleListParams {
  user: number;
  page?: number;
  category?: number;
  ascending?: boolean;
  promoted?: boolean;
  title?: string;
}

export interface BlogListParams {
  uid: number;
  keyword?: string;
  type?: string;
  page?: number;
}

export interface RankingListParams {
  page?: number;
  orderBy?: number;
}

export interface NotificationsParams {
  type?: number;
  page?: number;
}

export interface SubmitCodeRequest {
  code: string;
  lang?: number;
  enableO2?: number;
}

export interface CreateProblemRequest {
  settings: ProblemSettings;
  type: string;
  providerID: number | null;
}

export interface UpdateTestCasesSettingsRequest {
  cases: TestCase[];
  subtaskScoringStrategies: { [id: number]: ScoringStrategy };
  scoringStrategy: ScoringStrategy;
  showSubtask: boolean;
}

export interface EditContestRequest {
  settings: ContestSettings;
  hostID: number | null;
}

export interface CreatePostRequest {
  captcha: string;
  content: string;
  title: string;
  forum: string;
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

export interface EditArticleRequest {
  title: string;
  category: number;
  content: string;
  solutionFor: string | null;
  status: number;
}

export interface BatchEditArticleRequest {
  status: number;
  category: number;
  lids: string[];
}

export interface EditBlogRequest {
  title: string;
  content: string;
  identifier: string;
  type: string;
  top: number;
  status: number;
  "csrf-token": string;
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

export interface DataResponse<T> {
  code: number;
  currentTemplate: string;
  currentData: T;
  currentTitle: string;
  currentTheme: Theme | null;
  currentTime: number;
  currentUser?: User & Maybe<Self>;
}

export interface LentilleDataResponse<T> {
  instance: string;
  template: string;
  status: number;
  locale: string;
  data: T;
  user: (UserSummary & Maybe<SelfSummary>) | null;
  time: number;
  theme: Theme | null;
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
  userRank: number | null;
  firstBloodUID: { [pid: string]: number } | null;
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
  ws: { server: string };
  codeLanguages: {
    [id: number]: {
      name: string;
      family: string | null;
      disabled: boolean;
      canO2: boolean;
      fileExtensions: string[];
      aceMode: string;
      hljsMode: string;
      value: number;
      type: string;
      order: number;
    };
  };
  contestRuleTypes: {
    [id: number]: { id: number; name: string; color: string };
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
  recordSortTypes: { id: number; name: string }[];
  messageStatusTypes: { id: number; name: string }[];
  translation: Translations;
  problemDifficulty: { id: number; name: string; color: string }[];
  senderEndpointTypes: { [id: number]: { id: number; type: string } };
  contestAccessLevel: { id: number; name: string }[];
  rankingSortTypes: { id: number; valueName: string; name: string }[];
  openIdPlatformTypes: { [id: number]: string };
  UserPermissionType: {
    [id: number]: {
      type: string;
      id: number;
      name: string;
      role: string | null;
    };
  };
  contestVisibilityTypes: {
    id: number;
    name: string;
    color: string;
    userCreatable: boolean;
    scope: "disabled" | "global" | "team" | "personal";
    invitation: boolean;
  }[];
  userRelationshipTypes: { id: number; type: string }[];
  scoringStrategyTypes: {
    [id: number]: { id: number; type: string; name: string };
  };
  problemTypes: {
    [id: string]: {
      id: string;
      type: string;
      name: string;
      vjudge: boolean;
      userCreatable: boolean;
      searchable: boolean;
      tds: string;
    };
  };
  messageModeTypes: { id: number; type: string; name: string }[];
  TeamJoinRequestStatusTypes: { id: number; type: string; name: string }[];
  problemFlagTypes: {
    [id: number]: { id: number; type: string; name: string };
  };
  contestInvitationCodeTypes: {
    [id: number]: { id: number; type: string; name: string };
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
  teamTypes: { [id: number]: { id: number; displayName: string | null } };
  notificationTypes: {
    [id: number]: { id: number; type: string; name: string };
  };
  imageHostingWatermarkTypes: { id: number; name: string }[];
  teamMemberTypes: { [id: number]: { id: number; type: string; name: string } };
  teamMemberPermissionTypes: {
    [id: number]: { id: number; type: string; name: string };
  };
  teamJoinPermissionTypes: { id: number; type: string; name: string }[];
  userPrizeShowLevelType: { id: number; type: string; name: string }[];
  ArticleCategory: {
    [id: number]: {
      type: string;
      id: number;
      name: string;
      color: string | null;
      locked: boolean;
      listing: boolean;
    };
  };
  ArticlePromoteStatus: {
    type: string;
    id: number;
    name: string;
    canSubmit: boolean;
  }[];
  ArticleStatus: { type: string; id: number; name: string }[];
  ContestInvitationType: {
    [id: number]: { type: string; id: number; name: string };
  };
  ContestMethodType: {
    [id: number]: { type: string; id: number; name: string; color: string };
  };
  ContestPublicType: {
    type: string;
    id: number;
    name: string;
    color: string;
    scope: "disabled" | "global" | "team" | "user";
    userCreatable: boolean;
    invitation: boolean;
  }[];
  OpenIdPlatformType: {
    [id: number]: { type: string; id: number; name: string };
  };
  ProblemType: {
    [id: string]: {
      type: string;
      id: string;
      name: string;
      vjudge: boolean;
      userCreatable: boolean;
      searchable: boolean;
    };
  };
  TeamJoinPermissionType: { type: string; id: number; name: string }[];
  TeamJoinRequestStatusType: { type: string; id: number; name: string }[];
  TeamMemberType: { [id: number]: { type: string; id: number; name: string } };
  TeamType: { [id: number]: { type: string; id: number; name: string } };
  UserNotificationType: {
    [id: number]: { type: string; id: number; name: string };
  };
  UserOpenSourceType: { [id: number]: { type: string; id: number } };
  UserRelationshipType: { [id: number]: { type: string; id: number } };
  VoteType: { [id: number]: { type: string; id: number } };
  route: { [id: string]: string };
  routeAttr: { [id: string]: { instance: string } };
  _locale: string;
  _instance: string;
  routes: { [id: string]: string };
  _version_lentille: string;
  _version: number;
}

export interface TagsResponse {
  tags: { id: number; name: string; type: number; parent: number | null }[];
  types: { id: number; name: string; color: string }[];
  version: number;
}

export interface ProblemData {
  problem: ProblemDetails & Maybe<ProblemStatus>;
  contest: ContestSummary | null;
  discussions: LegacyPostSummary[];
  bookmarked: boolean;
  vjudgeUsername: string | null;
  recommendations: (LegacyProblemSummary & Maybe<ProblemStatus>)[];
  lastLanguage: number;
  lastCode: string;
  privilegedTeams: TeamSummary[];
  userTranslation: null; // TODO
}

export interface SolutionsData {
  solutions: List<ArticleDetails>;
  problem: ProblemSummary & Maybe<ProblemStatus>;
  acceptSolution: boolean;
}

export interface ProblemSetListData {
  trainings: List<ProblemSet>;
  acceptedCounts: { [id: number]: number };
}

export interface ProblemSetData {
  training: ProblemSetDetails;
  trainingProblems: { result: [][]; perPage: null; count: number };
  canEdit: boolean;
  privilegedTeams: TeamSummary[];
}

export interface ContestData {
  contest: ContestDetails;
  contestProblems: {
    score: number;
    problem: LegacyProblemSummary;
    submitted: boolean;
  }[];
  isScoreboardFrozen: boolean;
  accessLevel: number;
  joined: boolean;
  userElo: (EloRatingSummary & { previous: EloRatingSummary | null }) | null;
}

export interface CreatedContestData {
  contest: ContestDetails & { joinCode: string };
  contestProblems: { score: number; problem: LegacyProblemSummary };
  contestSetting: ContestSettings;
  privilegedTeams: TeamSummary[];
}

export interface RecordData {
  record: RecordDetails;
  testCaseGroup: number[][] | { [group: number]: number[] };
  showStatus: boolean;
}

export interface PostListData {
  forum: Forum | null;
  publicForums: Forum[];
  posts: List<PostSummary>;
  canPost: boolean;
}

export interface PostData {
  forum: Forum;
  post: Post;
  replies: List<Reply>;
  canReply: boolean;
}

export interface UserData {
  user: UserDetails & UserStats & Maybe<SelfDetails>;
  eloMax: { rating: number; time: number; latest: boolean } | null;
  passedProblems?: LegacyProblemSummary[];
  submittedProblems?: LegacyProblemSummary[];
  teams?: {
    team: TeamSummary;
    group: Group;
    user: UserSummary;
    type: number;
    permission: number;
  }[];
}

export interface UserSettingsData {
  userSetting: UserSettings;
  usernameUpdateTime: number;
  openSourceJoinTime: number;
  hasSet2FA: boolean;
  ccfLevelShowLevel: number;
  vjudgeAccounts: { oj: string; username: string }[];
  openIdAccounts: { platform: number; username: string }[];
  prizes: []; // TODO
  user: UserDetails & Maybe<SelfDetails>;
}

export interface TeamData {
  team: Team;
  currentTeamMember: TeamMember | null;
  latestDiscussions: LegacyPost[] | null;
  joinRequest: null; // TODO
  groups: Group[];
  usages: {
    problem: [number, number];
    training: [number, number];
    contest: [number, number];
    file: [number, number];
  };
}

export interface ChatListData {
  latestMessages: List<Message>;
  unreadMessageCount: { [user: number]: number } | [];
  currentChat: UserSummary | null;
}

export interface ImageListData {
  images: List<Image>;
  spaceLimit: number;
  spaceUsage: number;
}

export interface ArticleListData {
  articles: List<Article>;
  stat: { promoted: number; public: number; hidden: number };
}

export interface ArticleData {
  article: ArticleDetails;
  favored: boolean;
  voted: number | null;
  canReply: boolean;
  canEdit: boolean;
}

export interface ArticleCollectionData {
  articles: List<Article>;
  collection: ArticleCollection;
}

export interface NotificationsData {
  notifications: List<Notification>;
  hasUnreadNotification: { [type: number]: true } | [];
}

export interface ActivityData {
  uid: number;
  time: { date: string; timezone_type: number; timezone: string };
  type: number;
  comment: string;
}

export interface BaseServerboundMessage {
  channel: string;
  channel_param: string;
  type: string;
}

export interface ServerboundJoinChannelMessage extends BaseServerboundMessage {
  type: "join_channel";
  exclusive_key?: string;
}

export interface ServerboundDisconnectChannelMessage
  extends BaseServerboundMessage {
  type: "disconnect_channel";
}

export interface ServerboundDataMessage<T> extends BaseServerboundMessage {
  type: "data";
  data: T;
}

export interface BaseClientboundMessage {
  _channel: string;
  _channel_param: string;
  _ws_type: string;
}

export interface ClientboundJoinResultMessage<T>
  extends BaseClientboundMessage {
  _ws_type: "join_result";
  client_number: number;
  result: "success";
  type: "result";
  welcome_message: T;
}

export interface ClientboundHeartbeatMessage extends BaseClientboundMessage {
  _ws_type: "heartbeat";
  client_number: number;
  type: "heartbeat";
}

export interface ClientboundExclusiveKickoffMessage
  extends BaseClientboundMessage {
  _ws_type: "exclusive_kickoff";
}

export interface ClientboundServerBroadcastMessage
  extends BaseClientboundMessage {
  _ws_type: "server_broadcast";
}

export interface ClientboundInitialRecordStatusMessageData {
  detail: RecordStatus;
  memory: `${number}` | null;
  record: {
    detail: RecordStatus;
    enableO2: boolean;
    id: number;
    memory: `${number}`;
    score?: `${number}`;
    status: number;
    time: `${number}`;
  };
  score: `${number}` | null;
  status: number;
  time: `${number}` | null;
  type: "status_push";
}

export interface ClientboundUpdateRecordStatusMessageData {
  record: {
    detail: RecordStatus;
    enableO2: boolean;
    id: number;
    memory: number;
    score: number;
    status: number;
    time: number;
  };
  type: "status_push";
}

export interface ClientboundFlushRecordStatusMessageData {
  type: "flush";
}

export type ClientboundRecordStatusMessageData =
  | ClientboundUpdateRecordStatusMessageData
  | ClientboundFlushRecordStatusMessageData;

export interface ClientboundChatMessageData {
  message: {
    content: string;
    id: number;
    receiver: UserSummary;
    sender: UserSummary;
    status: number;
    time: number;
  };
}

export interface ProblemSummary {
  pid: string;
  type: string;
  title: string;
  difficulty: number;
}

export interface Problem extends LegacyProblemSummary {
  tags: number[];
  wantsTranslation: boolean;
  totalSubmit: number;
  totalAccepted: number;
  flag: number;
}

export interface ProblemDetails extends Problem {
  background: string;
  description: string;
  inputFormat: string;
  outputFormat: string;
  samples: [string, string][];
  hint: string;
  provider: UserSummary | TeamSummary;
  attachments: {
    size: number;
    uploadTime: number;
    downloadLink: string;
    id: string;
    fileName: string;
  }[];
  canEdit: boolean;
  limits: { time: number[]; memory: number[] };
  showScore: boolean;
  score: number | null;
  stdCode: string;
  vjudge?: { origin: string; link: string; id: string };
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
  tags: number[];
  difficulty: number;
  showScore: boolean;
  flag: number;
}

export interface ProblemStatus {
  submitted: boolean;
  accepted: boolean;
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
  marked: boolean;
  markCount: number;
  id: number;
  title: string;
  type: number;
  provider: UserSummary | TeamSummary;
}

export interface ProblemSetDetails extends ProblemSet {
  description: string;
  problems: { problem: Problem }[];
  userScore: {
    user: UserSummary;
    totalScore: number;
    score: { [pid: string]: number | null };
    status: { [pid: string]: boolean };
  } | null;
}

export interface ProblemSetSettings {
  title: string;
  description: string;
  type: number;
  deadline: number | null;
}

export interface ContestSummary {
  id: number;
  name: string;
  startTime: number;
  endTime: number;
}

export interface Contest extends ContestSummary {
  ruleType: number;
  visibilityType: number;
  invitationCodeType: number;
  rated: boolean;
  eloThreshold: number | null;
  host: UserSummary | TeamSummary;
  problemCount: number;
}

export interface ContestDetails extends Contest {
  description: string;
  totalParticipants: number;
  eloDone: boolean;
  canEdit: boolean;
}

export interface ContestSettings {
  name: string;
  description: string;
  visibilityType: number;
  invitationCodeType: number;
  ruleType: number;
  startTime: number;
  endTime: number;
}

export interface Score {
  details: { [pid: string]: { score: number; runningTime?: number } } | [];
  user: UserSummary;
  score: number;
  runningTime: number;
}

export interface RecordBase {
  time: number | null;
  memory: number | null;
  problem: LegacyProblemSummary;
  contest: ContestSummary | null;
  sourceCodeLength: number;
  submitTime: number;
  language: number;
  user?: UserSummary;
  id: number;
  status: number;
  enableO2: boolean;
  score?: number;
}

export interface RecordDetails extends RecordBase {
  detail: RecordStatus;
  sourceCode?: string;
}

export interface RecordStatus {
  compileResult: {
    success: boolean;
    message: string | null;
    opt2: boolean;
  } | null;
  judgeResult: {
    subtasks: SubtaskStatus[] | { [group: number]: SubtaskStatus };
    finishedCaseCount: number;
    status: 0;
    time: 0;
    memory: 0;
    score: 0;
  };
  version: number;
}

export interface SubtaskStatus {
  id: number;
  score: number;
  status: number;
  testCases: TestCaseStatus[] | { [id: number]: TestCaseStatus };
  judger: "";
  time: number;
  memory: number;
}

export interface TestCaseStatus {
  id: number;
  status: number;
  time: number;
  memory: number;
  score: number;
  signal: number | null;
  exitCode: number;
  description: string | 0;
  subtaskID: number;
}

export interface PostSummary {
  id: number;
  title: string;
  author: UserSummary;
  time: number;
  forum: Forum;
  topped: boolean;
  valid: boolean;
  replyCount: number;
  recentReply: ReplySummary | false;
}

export interface Post extends PostSummary {
  content: string;
}

export interface ReplySummary {
  id: number;
  author: UserSummary;
  time: number;
}

export interface Reply extends ReplySummary {
  content: string;
}

export interface Forum {
  name: string;
  type: number;
  slug: string;
  color: string;
}

export interface Activity {
  content: string;
  id: number;
  type: number;
  time: number;
  user: UserSummary;
}

export interface SelfSummary {
  verified: boolean;
}

export interface Self extends SelfSummary {
  unreadMessageCount: number;
  unreadNoticeCount: number;
}

export interface SelfDetails extends Self {
  organization: null; // TODO
  email: string;
  phone: string;
}

export interface UserSummary {
  uid: number;
  name: string;
  avatar: string;
  slogan: string | null;
  badge: string | null;
  isAdmin: boolean;
  isBanned: boolean;
  color: string;
  ccfLevel: number;
  background: string | null;
  isRoot?: true;
}

export interface User extends UserSummary {
  blogAddress: string | null;
  followingCount: number;
  followerCount: number;
  ranking: number | null;
  eloValue?: number | null;
}

export interface UserDetails extends User {
  rating?: Rating;
  registerTime: number;
  introduction: string | null;
  prize: { year: number; contestName: string; prize: string }[];
  elo: EloRatingSummary | null;
}

export type UserStats = Maybe<UserRelationship> & UserPractice;

export interface UserRelationship {
  userRelationship: number;
  reverseUserRelationship: number;
}

export interface UserPractice {
  passedProblemCount: number | null;
  submittedProblemCount: number | null;
}

export interface UserSettings {
  openSource: number;
  learningMode: boolean;
  messageMode: number;
  acceptPromotion: boolean;
}

export interface TeamSummary {
  id: number;
  name: string;
  isPremium: boolean;
}

export interface Team extends TeamSummary {
  createTime: number;
  master: UserSummary;
  setting: { description: string; notice?: string; joinPermission: number };
  premiumUntil?: number;
  type: number;
  memberCount: number;
}

export interface TeamMember {
  group: Group;
  user: UserSummary;
  type: number;
  permission: number;
  realName: string;
}

export interface Group {
  id: number;
  name: string;
  no: number;
}

export interface Message {
  id: number;
  sender: UserSummary;
  receiver: UserSummary;
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
  author: UserSummary;
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
  provider: UserSummary;
  uploadTime: number;
  size: number;
}

export interface Paste {
  data: string;
  id: string;
  user: UserSummary;
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
  user: UserSummary;
  rating: number;
}

export interface EloRatingSummary {
  contest: ContestSummary;
  rating: number;
  time: number;
  latest: boolean;
}

export interface EloRating extends EloRatingSummary {
  userCount: number;
  prevDiff: number;
  user: UserSummary;
}

export interface Article {
  lid: string;
  title: string;
  time: number;
  author: UserSummary & Maybe<SelfSummary>;
  upvote: number;
  replyCount: number;
  favorCount: number;
  category: number;
  status: number;
  solutionFor: (ProblemSummary & Maybe<ProblemStatus>) | null;
  promoteStatus: number;
  collection: ArticleCollectionSummary | null;
  content: string;
  promoteResult?: {
    updateAt: number | null;
    rejectReason?: string | null;
  };
  categoryOld?: string;
}

export interface ArticleDetails extends Article {
  id: number;
  contentFull: boolean;
  adminNote: string | null;
  voted?: number | null;
  canReply?: boolean;
  canEdit?: boolean;
}

export interface ArticleCollectionSummary {
  id: number;
  name: string;
}

export interface ArticleCollection extends ArticleCollectionSummary {
  opening: boolean;
  categoryLimitation: null;
}

export interface BlogSummary {
  lid: string;
  id: number;
  identifier: string;
  title: string;
}

export interface Blog extends BlogSummary {
  type: string;
  status: number;
  postTime: number;
  author: UserSummary;
  thumbUp: number;
  commentCount: number;
  currentUserVoteType: number;
  contentDescription: string;
}

export interface Comment {
  content: string;
  id: number;
  author: UserSummary;
  time: number;
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

export interface Advertisement {
  image: Image;
  imageUrl: string;
  url: string;
  id: number;
}

// deno-lint-ignore ban-types
export type Maybe<T> = {} | T;

export interface List<T> {
  result: T[] | { [index: number]: T };
  count: number;
  perPage: number | null;
}

/** @deprecated */
export interface LegacyProblemSummary extends ProblemSummary {
  fullScore: number;
}

/** @deprecated */
export interface LegacyPostSummary {
  id: number;
  title: string;
  forum: LegacyForum;
}

/** @deprecated */
export interface LegacyPost extends LegacyPostSummary {
  top: number;
  author: UserSummary;
  time: number;
  valid: boolean;
  replyCount: number;
  recentReply: ReplySummary | null;
}

/** @deprecated */
export interface LegacyForum {
  id: number;
  name: string;
  slug: string;
}

/** @deprecated */
export interface LegacyBlog {
  BlogID: number;
  Identifier: string;
  Title: string;
  Type: string;
  PostTime: number;
  // deno-lint-ignore ban-types
  Author: {};
  Status: number;
  ContentDescription: string;
  ThumbUp: number;
  Content: string;
}
