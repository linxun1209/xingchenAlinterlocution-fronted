declare namespace API {
  type AiGenerateQuestionRequest = {
    appId?: number;
    optionNumber?: number;
    questionNumber?: number;
  };

  type aiGenerateQuestionSseTestUsingGETParams = {
    appId?: number;
    /** isVip */
    isVip?: boolean;
    optionNumber?: number;
    questionNumber?: number;
  };

  type aiGenerateQuestionSseUsingGETParams = {
    appId?: number;
    optionNumber?: number;
    questionNumber?: number;
  };

  type App = {
    appDesc?: string;
    appIcon?: string;
    appName?: string;
    appType?: number;
    createTime?: string;
    id?: number;
    isDelete?: number;
    reviewMessage?: string;
    reviewStatus?: number;
    reviewTime?: string;
    reviewerId?: number;
    scoringStrategy?: number;
    updateTime?: string;
    userId?: number;
  };

  type AppAddRequest = {
    appDesc?: string;
    appIcon?: string;
    appName?: string;
    appType?: number;
    scoringStrategy?: number;
  };

  type AppAnswerCountDTO = {
    answerCount?: number;
    appId?: number;
  };

  type AppAnswerResultCountDTO = {
    resultCount?: string;
    resultName?: string;
  };

  type AppEditRequest = {
    appDesc?: string;
    appIcon?: string;
    appName?: string;
    appType?: number;
    id?: number;
    scoringStrategy?: number;
  };

  type AppQueryRequest = {
    appDesc?: string;
    appIcon?: string;
    appName?: string;
    appType?: number;
    current?: number;
    id?: number;
    notId?: number;
    pageSize?: number;
    reviewMessage?: string;
    reviewStatus?: number;
    reviewerId?: number;
    scoringStrategy?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type AppUpdateRequest = {
    appDesc?: string;
    appIcon?: string;
    appName?: string;
    appType?: number;
    id?: number;
    reviewMessage?: string;
    reviewStatus?: number;
    reviewTime?: string;
    reviewerId?: number;
    scoringStrategy?: number;
  };

  type AppVO = {
    appDesc?: string;
    appIcon?: string;
    appName?: string;
    appType?: number;
    createTime?: string;
    id?: number;
    reviewMessage?: string;
    reviewStatus?: number;
    reviewTime?: string;
    reviewerId?: number;
    scoringStrategy?: number;
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };

  type BaseResponseAppVO_ = {
    code?: number;
    data?: AppVO;
    message?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseInt_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseListAppAnswerCountDTO_ = {
    code?: number;
    data?: AppAnswerCountDTO[];
    message?: string;
  };

  type BaseResponseListAppAnswerResultCountDTO_ = {
    code?: number;
    data?: AppAnswerResultCountDTO[];
    message?: string;
  };

  type BaseResponseListQuestionContentDTO_ = {
    code?: number;
    data?: QuestionContentDTO[];
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageApp_ = {
    code?: number;
    data?: PageApp_;
    message?: string;
  };

  type BaseResponsePageAppVO_ = {
    code?: number;
    data?: PageAppVO_;
    message?: string;
  };

  type BaseResponsePagePostVO_ = {
    code?: number;
    data?: PagePostVO_;
    message?: string;
  };

  type BaseResponsePageQuestion_ = {
    code?: number;
    data?: PageQuestion_;
    message?: string;
  };

  type BaseResponsePageQuestionVO_ = {
    code?: number;
    data?: PageQuestionVO_;
    message?: string;
  };

  type BaseResponsePageScoringResult_ = {
    code?: number;
    data?: PageScoringResult_;
    message?: string;
  };

  type BaseResponsePageScoringResultVO_ = {
    code?: number;
    data?: PageScoringResultVO_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponsePageUserAnswer_ = {
    code?: number;
    data?: PageUserAnswer_;
    message?: string;
  };

  type BaseResponsePageUserAnswerVO_ = {
    code?: number;
    data?: PageUserAnswerVO_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponsePostVO_ = {
    code?: number;
    data?: PostVO;
    message?: string;
  };

  type BaseResponseQuestionVO_ = {
    code?: number;
    data?: QuestionVO;
    message?: string;
  };

  type BaseResponseScoringResultVO_ = {
    code?: number;
    data?: ScoringResultVO;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserAnswerVO_ = {
    code?: number;
    data?: UserAnswerVO;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type checkUsingGETParams = {
    /** echostr */
    echostr?: string;
    /** nonce */
    nonce?: string;
    /** signature */
    signature?: string;
    /** timestamp */
    timestamp?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getAppAnswerResultCountUsingGETParams = {
    /** appId */
    appId?: number;
  };

  type getAppVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getPostVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getQuestionVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getScoringResultVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserAnswerVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type LoginUserVO = {
    createTime?: string;
    email?: string;
    gender?: string;
    id?: number;
    phone?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userCode?: string;
    userName?: string;
    userRole?: string;
    userStatus?: number;
  };

  type Option = {
    key?: string;
    result?: string;
    score?: number;
    value?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageApp_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: App[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageAppVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: AppVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PagePostVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: PostVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageQuestion_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Question[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageQuestionVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: QuestionVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageScoringResult_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ScoringResult[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageScoringResultVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ScoringResultVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserAnswer_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserAnswer[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserAnswerVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserAnswerVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PostAddRequest = {
    content?: string;
    tags?: string[];
    title?: string;
  };

  type PostEditRequest = {
    content?: string;
    id?: number;
    tags?: string[];
    title?: string;
  };

  type PostFavourAddRequest = {
    postId?: number;
  };

  type PostFavourQueryRequest = {
    current?: number;
    pageSize?: number;
    postQueryRequest?: PostQueryRequest;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type PostQueryRequest = {
    content?: string;
    current?: number;
    favourUserId?: number;
    id?: number;
    notId?: number;
    orTags?: string[];
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    tags?: string[];
    title?: string;
    userId?: number;
  };

  type PostThumbAddRequest = {
    postId?: number;
  };

  type PostUpdateRequest = {
    content?: string;
    id?: number;
    tags?: string[];
    title?: string;
  };

  type PostVO = {
    content?: string;
    createTime?: string;
    favourNum?: number;
    hasFavour?: boolean;
    hasThumb?: boolean;
    id?: number;
    tagList?: string[];
    thumbNum?: number;
    title?: string;
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };

  type Question = {
    appId?: number;
    createTime?: string;
    id?: number;
    isDelete?: number;
    questionContent?: string;
    updateTime?: string;
    userId?: number;
  };

  type QuestionAddRequest = {
    appId?: number;
    questionContent?: QuestionContentDTO[];
  };

  type QuestionContentDTO = {
    options?: Option[];
    title?: string;
  };

  type QuestionEditRequest = {
    id?: number;
    questionContent?: QuestionContentDTO[];
  };

  type QuestionQueryRequest = {
    appId?: number;
    current?: number;
    id?: number;
    notId?: number;
    pageSize?: number;
    questionContent?: string;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type QuestionUpdateRequest = {
    id?: number;
    questionContent?: QuestionContentDTO[];
  };

  type QuestionVO = {
    appId?: number;
    createTime?: string;
    id?: number;
    questionContent?: QuestionContentDTO[];
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };

  type ReviewRequest = {
    id?: number;
    reviewMessage?: string;
    reviewStatus?: number;
  };

  type ScoringResult = {
    appId?: number;
    createTime?: string;
    id?: number;
    isDelete?: number;
    resultDesc?: string;
    resultName?: string;
    resultPicture?: string;
    resultProp?: string;
    resultScoreRange?: number;
    updateTime?: string;
    userId?: number;
  };

  type ScoringResultAddRequest = {
    appId?: number;
    resultDesc?: string;
    resultName?: string;
    resultPicture?: string;
    resultProp?: string[];
    resultScoreRange?: number;
  };

  type ScoringResultEditRequest = {
    id?: number;
    resultDesc?: string;
    resultName?: string;
    resultPicture?: string;
    resultProp?: string[];
    resultScoreRange?: number;
  };

  type ScoringResultQueryRequest = {
    appId?: number;
    current?: number;
    id?: number;
    notId?: number;
    pageSize?: number;
    resultDesc?: string;
    resultName?: string;
    resultPicture?: string;
    resultProp?: string;
    resultScoreRange?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type ScoringResultUpdateRequest = {
    id?: number;
    resultDesc?: string;
    resultName?: string;
    resultPicture?: string;
    resultProp?: string[];
    resultScoreRange?: number;
  };

  type ScoringResultVO = {
    appId?: number;
    createTime?: string;
    id?: number;
    resultDesc?: string;
    resultName?: string;
    resultPicture?: string;
    resultProp?: string[];
    resultScoreRange?: number;
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };

  type SseEmitter = {
    timeout?: number;
  };

  type uploadFileUsingPOSTParams = {
    biz?: string;
  };

  type User = {
    createTime?: string;
    email?: string;
    gender?: string;
    id?: number;
    isDelete?: number;
    phone?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userCode?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
    userStatus?: number;
  };

  type UserAddRequest = {
    email?: string;
    gender?: string;
    phone?: string;
    userAccount?: string;
    userAvatar?: string;
    userCode?: string;
    userName?: string;
    userRole?: string;
    userStatus?: number;
  };

  type UserAnswer = {
    appId?: number;
    appType?: number;
    choices?: string;
    createTime?: string;
    id?: number;
    isDelete?: number;
    resultDesc?: string;
    resultId?: number;
    resultName?: string;
    resultPicture?: string;
    resultScore?: number;
    scoringStrategy?: number;
    updateTime?: string;
    userId?: number;
  };

  type UserAnswerAddRequest = {
    appId?: number;
    choices?: string[];
    id?: number;
  };

  type UserAnswerEditRequest = {
    appId?: number;
    choices?: string[];
    id?: number;
  };

  type UserAnswerQueryRequest = {
    appId?: number;
    appType?: number;
    choices?: string;
    current?: number;
    id?: number;
    notId?: number;
    pageSize?: number;
    resultDesc?: string;
    resultId?: number;
    resultName?: string;
    resultPicture?: string;
    resultScore?: number;
    scoringStrategy?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type UserAnswerUpdateRequest = {
    appId?: number;
    choices?: string[];
    id?: number;
  };

  type UserAnswerVO = {
    appId?: number;
    appType?: number;
    choices?: string[];
    createTime?: string;
    id?: number;
    resultDesc?: string;
    resultId?: number;
    resultName?: string;
    resultPicture?: string;
    resultScore?: number;
    scoringStrategy?: number;
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };

  type userLoginByWxOpenUsingGETParams = {
    /** code */
    code: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    email?: string;
    gender?: string;
    id?: number;
    pageSize?: number;
    phone?: string;
    sortField?: string;
    sortOrder?: string;
    userCode?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
    userStatus?: number;
  };

  type UserRegisterRequest = {
    checkCode?: string;
    checkPassword?: string;
    email?: string;
    userAccount?: string;
    userCode?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    email?: string;
    gender?: string;
    phone?: string;
    userAccount?: string;
    userAvatar?: string;
    userCode?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userStatus?: number;
  };

  type UserUpdateRequest = {
    email?: string;
    gender?: string;
    id?: number;
    isDelete?: number;
    phone?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userCode?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
    userStatus?: number;
  };

  type UserVO = {
    createTime?: string;
    email?: string;
    gender?: string;
    id?: number;
    phone?: string;
    userAccount?: string;
    userAvatar?: string;
    userCode?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
    userStatus?: number;
  };
}
