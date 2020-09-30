/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as Context from "../context"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  MatchCreateInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    date?: NexusGenScalars['DateTime'] | null; // DateTime
    field?: string | null; // String
    location?: string | null; // String
    Match_Report?: NexusGenInputs['Match_ReportCreateOneWithoutMatchInput'] | null; // Match_ReportCreateOneWithoutMatchInput
    Player_Statistics?: NexusGenInputs['Player_StatisticsCreateManyWithoutMatchInput'] | null; // Player_StatisticsCreateManyWithoutMatchInput
    Team_Match_guestIdToTeam?: NexusGenInputs['TeamCreateOneWithoutMatch_Match_guestIdToTeamInput'] | null; // TeamCreateOneWithoutMatch_Match_guestIdToTeamInput
    Team_Match_homeIdToTeam?: NexusGenInputs['TeamCreateOneWithoutMatch_Match_homeIdToTeamInput'] | null; // TeamCreateOneWithoutMatch_Match_homeIdToTeamInput
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  MatchCreateManyWithoutTeam_Match_guestIdToTeamInput: { // input type
    connect?: NexusGenInputs['MatchWhereUniqueInput'][] | null; // [MatchWhereUniqueInput!]
    create?: NexusGenInputs['MatchCreateWithoutTeam_Match_guestIdToTeamInput'][] | null; // [MatchCreateWithoutTeam_Match_guestIdToTeamInput!]
  }
  MatchCreateManyWithoutTeam_Match_homeIdToTeamInput: { // input type
    connect?: NexusGenInputs['MatchWhereUniqueInput'][] | null; // [MatchWhereUniqueInput!]
    create?: NexusGenInputs['MatchCreateWithoutTeam_Match_homeIdToTeamInput'][] | null; // [MatchCreateWithoutTeam_Match_homeIdToTeamInput!]
  }
  MatchCreateOneWithoutMatch_ReportInput: { // input type
    connect?: NexusGenInputs['MatchWhereUniqueInput'] | null; // MatchWhereUniqueInput
    create?: NexusGenInputs['MatchCreateWithoutMatch_ReportInput'] | null; // MatchCreateWithoutMatch_ReportInput
  }
  MatchCreateOneWithoutPlayer_StatisticsInput: { // input type
    connect?: NexusGenInputs['MatchWhereUniqueInput'] | null; // MatchWhereUniqueInput
    create?: NexusGenInputs['MatchCreateWithoutPlayer_StatisticsInput'] | null; // MatchCreateWithoutPlayer_StatisticsInput
  }
  MatchCreateWithoutMatch_ReportInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    date?: NexusGenScalars['DateTime'] | null; // DateTime
    field?: string | null; // String
    location?: string | null; // String
    Player_Statistics?: NexusGenInputs['Player_StatisticsCreateManyWithoutMatchInput'] | null; // Player_StatisticsCreateManyWithoutMatchInput
    Team_Match_guestIdToTeam?: NexusGenInputs['TeamCreateOneWithoutMatch_Match_guestIdToTeamInput'] | null; // TeamCreateOneWithoutMatch_Match_guestIdToTeamInput
    Team_Match_homeIdToTeam?: NexusGenInputs['TeamCreateOneWithoutMatch_Match_homeIdToTeamInput'] | null; // TeamCreateOneWithoutMatch_Match_homeIdToTeamInput
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  MatchCreateWithoutPlayer_StatisticsInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    date?: NexusGenScalars['DateTime'] | null; // DateTime
    field?: string | null; // String
    location?: string | null; // String
    Match_Report?: NexusGenInputs['Match_ReportCreateOneWithoutMatchInput'] | null; // Match_ReportCreateOneWithoutMatchInput
    Team_Match_guestIdToTeam?: NexusGenInputs['TeamCreateOneWithoutMatch_Match_guestIdToTeamInput'] | null; // TeamCreateOneWithoutMatch_Match_guestIdToTeamInput
    Team_Match_homeIdToTeam?: NexusGenInputs['TeamCreateOneWithoutMatch_Match_homeIdToTeamInput'] | null; // TeamCreateOneWithoutMatch_Match_homeIdToTeamInput
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  MatchCreateWithoutTeam_Match_guestIdToTeamInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    date?: NexusGenScalars['DateTime'] | null; // DateTime
    field?: string | null; // String
    location?: string | null; // String
    Match_Report?: NexusGenInputs['Match_ReportCreateOneWithoutMatchInput'] | null; // Match_ReportCreateOneWithoutMatchInput
    Player_Statistics?: NexusGenInputs['Player_StatisticsCreateManyWithoutMatchInput'] | null; // Player_StatisticsCreateManyWithoutMatchInput
    Team_Match_homeIdToTeam?: NexusGenInputs['TeamCreateOneWithoutMatch_Match_homeIdToTeamInput'] | null; // TeamCreateOneWithoutMatch_Match_homeIdToTeamInput
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  MatchCreateWithoutTeam_Match_homeIdToTeamInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    date?: NexusGenScalars['DateTime'] | null; // DateTime
    field?: string | null; // String
    location?: string | null; // String
    Match_Report?: NexusGenInputs['Match_ReportCreateOneWithoutMatchInput'] | null; // Match_ReportCreateOneWithoutMatchInput
    Player_Statistics?: NexusGenInputs['Player_StatisticsCreateManyWithoutMatchInput'] | null; // Player_StatisticsCreateManyWithoutMatchInput
    Team_Match_guestIdToTeam?: NexusGenInputs['TeamCreateOneWithoutMatch_Match_guestIdToTeamInput'] | null; // TeamCreateOneWithoutMatch_Match_guestIdToTeamInput
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  MatchWhereUniqueInput: { // input type
    guestId?: number | null; // Int
    homeId?: number | null; // Int
    id?: number | null; // Int
  }
  Match_ReportCreateManyWithoutTeamInput: { // input type
    connect?: NexusGenInputs['Match_ReportWhereUniqueInput'][] | null; // [Match_ReportWhereUniqueInput!]
    create?: NexusGenInputs['Match_ReportCreateWithoutTeamInput'][] | null; // [Match_ReportCreateWithoutTeamInput!]
  }
  Match_ReportCreateOneWithoutMatchInput: { // input type
    connect?: NexusGenInputs['Match_ReportWhereUniqueInput'] | null; // Match_ReportWhereUniqueInput
    create?: NexusGenInputs['Match_ReportCreateWithoutMatchInput'] | null; // Match_ReportCreateWithoutMatchInput
  }
  Match_ReportCreateWithoutMatchInput: { // input type
    result?: string | null; // String
    Team?: NexusGenInputs['TeamCreateOneWithoutMatch_ReportInput'] | null; // TeamCreateOneWithoutMatch_ReportInput
  }
  Match_ReportCreateWithoutTeamInput: { // input type
    Match: NexusGenInputs['MatchCreateOneWithoutMatch_ReportInput']; // MatchCreateOneWithoutMatch_ReportInput!
    result?: string | null; // String
  }
  Match_ReportWhereUniqueInput: { // input type
    matchId?: number | null; // Int
    winnerId?: number | null; // Int
  }
  MemberCreateManyWithoutTeamInput: { // input type
    connect?: NexusGenInputs['MemberWhereUniqueInput'][] | null; // [MemberWhereUniqueInput!]
    create?: NexusGenInputs['MemberCreateWithoutTeamInput'][] | null; // [MemberCreateWithoutTeamInput!]
  }
  MemberCreateManyWithoutUserInput: { // input type
    connect?: NexusGenInputs['MemberWhereUniqueInput'][] | null; // [MemberWhereUniqueInput!]
    create?: NexusGenInputs['MemberCreateWithoutUserInput'][] | null; // [MemberCreateWithoutUserInput!]
  }
  MemberCreateWithoutTeamInput: { // input type
    fee_status?: number | null; // Int
    role?: NexusGenEnums['Member_role'] | null; // Member_role
    User: NexusGenInputs['UserCreateOneWithoutMemberInput']; // UserCreateOneWithoutMemberInput!
  }
  MemberCreateWithoutUserInput: { // input type
    fee_status?: number | null; // Int
    role?: NexusGenEnums['Member_role'] | null; // Member_role
    Team: NexusGenInputs['TeamCreateOneWithoutMemberInput']; // TeamCreateOneWithoutMemberInput!
  }
  MemberWhereUniqueInput: { // input type
    id?: number | null; // Int
    memberId?: number | null; // Int
    teamId?: number | null; // Int
  }
  Player_StatisticsCreateManyWithoutMatchInput: { // input type
    connect?: NexusGenInputs['Player_StatisticsWhereUniqueInput'][] | null; // [Player_StatisticsWhereUniqueInput!]
    create?: NexusGenInputs['Player_StatisticsCreateWithoutMatchInput'][] | null; // [Player_StatisticsCreateWithoutMatchInput!]
  }
  Player_StatisticsCreateManyWithoutUserInput: { // input type
    connect?: NexusGenInputs['Player_StatisticsWhereUniqueInput'][] | null; // [Player_StatisticsWhereUniqueInput!]
    create?: NexusGenInputs['Player_StatisticsCreateWithoutUserInput'][] | null; // [Player_StatisticsCreateWithoutUserInput!]
  }
  Player_StatisticsCreateWithoutMatchInput: { // input type
    assist?: number | null; // Int
    score?: number | null; // Int
    User: NexusGenInputs['UserCreateOneWithoutPlayer_StatisticsInput']; // UserCreateOneWithoutPlayer_StatisticsInput!
  }
  Player_StatisticsCreateWithoutUserInput: { // input type
    assist?: number | null; // Int
    Match: NexusGenInputs['MatchCreateOneWithoutPlayer_StatisticsInput']; // MatchCreateOneWithoutPlayer_StatisticsInput!
    score?: number | null; // Int
  }
  Player_StatisticsWhereUniqueInput: { // input type
    id?: number | null; // Int
    matchId?: number | null; // Int
    playerId?: number | null; // Int
  }
  TeamCreateInput: { // input type
    description?: string | null; // String
    home?: string | null; // String
    logo: string; // String!
    loose?: number | null; // Int
    Match_Match_guestIdToTeam?: NexusGenInputs['MatchCreateManyWithoutTeam_Match_guestIdToTeamInput'] | null; // MatchCreateManyWithoutTeam_Match_guestIdToTeamInput
    Match_Match_homeIdToTeam?: NexusGenInputs['MatchCreateManyWithoutTeam_Match_homeIdToTeamInput'] | null; // MatchCreateManyWithoutTeam_Match_homeIdToTeamInput
    Match_Report?: NexusGenInputs['Match_ReportCreateManyWithoutTeamInput'] | null; // Match_ReportCreateManyWithoutTeamInput
    Member?: NexusGenInputs['MemberCreateManyWithoutTeamInput'] | null; // MemberCreateManyWithoutTeamInput
    name: string; // String!
    User: NexusGenInputs['UserCreateOneWithoutTeamInput']; // UserCreateOneWithoutTeamInput!
    win?: number | null; // Int
  }
  TeamCreateManyWithoutUserInput: { // input type
    connect?: NexusGenInputs['TeamWhereUniqueInput'][] | null; // [TeamWhereUniqueInput!]
    create?: NexusGenInputs['TeamCreateWithoutUserInput'][] | null; // [TeamCreateWithoutUserInput!]
  }
  TeamCreateOneWithoutMatch_Match_guestIdToTeamInput: { // input type
    connect?: NexusGenInputs['TeamWhereUniqueInput'] | null; // TeamWhereUniqueInput
    create?: NexusGenInputs['TeamCreateWithoutMatch_Match_guestIdToTeamInput'] | null; // TeamCreateWithoutMatch_Match_guestIdToTeamInput
  }
  TeamCreateOneWithoutMatch_Match_homeIdToTeamInput: { // input type
    connect?: NexusGenInputs['TeamWhereUniqueInput'] | null; // TeamWhereUniqueInput
    create?: NexusGenInputs['TeamCreateWithoutMatch_Match_homeIdToTeamInput'] | null; // TeamCreateWithoutMatch_Match_homeIdToTeamInput
  }
  TeamCreateOneWithoutMatch_ReportInput: { // input type
    connect?: NexusGenInputs['TeamWhereUniqueInput'] | null; // TeamWhereUniqueInput
    create?: NexusGenInputs['TeamCreateWithoutMatch_ReportInput'] | null; // TeamCreateWithoutMatch_ReportInput
  }
  TeamCreateOneWithoutMemberInput: { // input type
    connect?: NexusGenInputs['TeamWhereUniqueInput'] | null; // TeamWhereUniqueInput
    create?: NexusGenInputs['TeamCreateWithoutMemberInput'] | null; // TeamCreateWithoutMemberInput
  }
  TeamCreateWithoutMatch_Match_guestIdToTeamInput: { // input type
    description?: string | null; // String
    home?: string | null; // String
    logo: string; // String!
    loose?: number | null; // Int
    Match_Match_homeIdToTeam?: NexusGenInputs['MatchCreateManyWithoutTeam_Match_homeIdToTeamInput'] | null; // MatchCreateManyWithoutTeam_Match_homeIdToTeamInput
    Match_Report?: NexusGenInputs['Match_ReportCreateManyWithoutTeamInput'] | null; // Match_ReportCreateManyWithoutTeamInput
    Member?: NexusGenInputs['MemberCreateManyWithoutTeamInput'] | null; // MemberCreateManyWithoutTeamInput
    name: string; // String!
    User: NexusGenInputs['UserCreateOneWithoutTeamInput']; // UserCreateOneWithoutTeamInput!
    win?: number | null; // Int
  }
  TeamCreateWithoutMatch_Match_homeIdToTeamInput: { // input type
    description?: string | null; // String
    home?: string | null; // String
    logo: string; // String!
    loose?: number | null; // Int
    Match_Match_guestIdToTeam?: NexusGenInputs['MatchCreateManyWithoutTeam_Match_guestIdToTeamInput'] | null; // MatchCreateManyWithoutTeam_Match_guestIdToTeamInput
    Match_Report?: NexusGenInputs['Match_ReportCreateManyWithoutTeamInput'] | null; // Match_ReportCreateManyWithoutTeamInput
    Member?: NexusGenInputs['MemberCreateManyWithoutTeamInput'] | null; // MemberCreateManyWithoutTeamInput
    name: string; // String!
    User: NexusGenInputs['UserCreateOneWithoutTeamInput']; // UserCreateOneWithoutTeamInput!
    win?: number | null; // Int
  }
  TeamCreateWithoutMatch_ReportInput: { // input type
    description?: string | null; // String
    home?: string | null; // String
    logo: string; // String!
    loose?: number | null; // Int
    Match_Match_guestIdToTeam?: NexusGenInputs['MatchCreateManyWithoutTeam_Match_guestIdToTeamInput'] | null; // MatchCreateManyWithoutTeam_Match_guestIdToTeamInput
    Match_Match_homeIdToTeam?: NexusGenInputs['MatchCreateManyWithoutTeam_Match_homeIdToTeamInput'] | null; // MatchCreateManyWithoutTeam_Match_homeIdToTeamInput
    Member?: NexusGenInputs['MemberCreateManyWithoutTeamInput'] | null; // MemberCreateManyWithoutTeamInput
    name: string; // String!
    User: NexusGenInputs['UserCreateOneWithoutTeamInput']; // UserCreateOneWithoutTeamInput!
    win?: number | null; // Int
  }
  TeamCreateWithoutMemberInput: { // input type
    description?: string | null; // String
    home?: string | null; // String
    logo: string; // String!
    loose?: number | null; // Int
    Match_Match_guestIdToTeam?: NexusGenInputs['MatchCreateManyWithoutTeam_Match_guestIdToTeamInput'] | null; // MatchCreateManyWithoutTeam_Match_guestIdToTeamInput
    Match_Match_homeIdToTeam?: NexusGenInputs['MatchCreateManyWithoutTeam_Match_homeIdToTeamInput'] | null; // MatchCreateManyWithoutTeam_Match_homeIdToTeamInput
    Match_Report?: NexusGenInputs['Match_ReportCreateManyWithoutTeamInput'] | null; // Match_ReportCreateManyWithoutTeamInput
    name: string; // String!
    User: NexusGenInputs['UserCreateOneWithoutTeamInput']; // UserCreateOneWithoutTeamInput!
    win?: number | null; // Int
  }
  TeamCreateWithoutUserInput: { // input type
    description?: string | null; // String
    home?: string | null; // String
    logo: string; // String!
    loose?: number | null; // Int
    Match_Match_guestIdToTeam?: NexusGenInputs['MatchCreateManyWithoutTeam_Match_guestIdToTeamInput'] | null; // MatchCreateManyWithoutTeam_Match_guestIdToTeamInput
    Match_Match_homeIdToTeam?: NexusGenInputs['MatchCreateManyWithoutTeam_Match_homeIdToTeamInput'] | null; // MatchCreateManyWithoutTeam_Match_homeIdToTeamInput
    Match_Report?: NexusGenInputs['Match_ReportCreateManyWithoutTeamInput'] | null; // Match_ReportCreateManyWithoutTeamInput
    Member?: NexusGenInputs['MemberCreateManyWithoutTeamInput'] | null; // MemberCreateManyWithoutTeamInput
    name: string; // String!
    win?: number | null; // Int
  }
  TeamWhereUniqueInput: { // input type
    creatorId?: number | null; // Int
    id?: number | null; // Int
  }
  UserCreateOneWithoutMemberInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutMemberInput'] | null; // UserCreateWithoutMemberInput
  }
  UserCreateOneWithoutPlayer_StatisticsInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutPlayer_StatisticsInput'] | null; // UserCreateWithoutPlayer_StatisticsInput
  }
  UserCreateOneWithoutTeamInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutTeamInput'] | null; // UserCreateWithoutTeamInput
  }
  UserCreateWithoutMemberInput: { // input type
    email: string; // String!
    name?: string | null; // String
    password: string; // String!
    phone?: string | null; // String
    Player_Statistics?: NexusGenInputs['Player_StatisticsCreateManyWithoutUserInput'] | null; // Player_StatisticsCreateManyWithoutUserInput
    Team?: NexusGenInputs['TeamCreateManyWithoutUserInput'] | null; // TeamCreateManyWithoutUserInput
  }
  UserCreateWithoutPlayer_StatisticsInput: { // input type
    email: string; // String!
    Member?: NexusGenInputs['MemberCreateManyWithoutUserInput'] | null; // MemberCreateManyWithoutUserInput
    name?: string | null; // String
    password: string; // String!
    phone?: string | null; // String
    Team?: NexusGenInputs['TeamCreateManyWithoutUserInput'] | null; // TeamCreateManyWithoutUserInput
  }
  UserCreateWithoutTeamInput: { // input type
    email: string; // String!
    Member?: NexusGenInputs['MemberCreateManyWithoutUserInput'] | null; // MemberCreateManyWithoutUserInput
    name?: string | null; // String
    password: string; // String!
    phone?: string | null; // String
    Player_Statistics?: NexusGenInputs['Player_StatisticsCreateManyWithoutUserInput'] | null; // Player_StatisticsCreateManyWithoutUserInput
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: number | null; // Int
  }
}

export interface NexusGenEnums {
  Member_role: "MANAGER" | "MEMBER" | "PENDING"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenRootTypes {
  AuthUser: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Match: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    date?: NexusGenScalars['DateTime'] | null; // DateTime
    field?: string | null; // String
    guestId?: number | null; // Int
    homeId?: number | null; // Int
    id: number; // Int!
    location?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Mutation: {};
  Query: {};
  Team: { // root type
    creatorId: number; // Int!
    description?: string | null; // String
    home?: string | null; // String
    id: number; // Int!
    logo: string; // String!
    loose?: number | null; // Int
    name: string; // String!
    win?: number | null; // Int
  }
  User: { // root type
    email: string; // String!
    id: number; // Int!
    name?: string | null; // String
    password: string; // String!
    phone?: string | null; // String
  }
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  MatchCreateInput: NexusGenInputs['MatchCreateInput'];
  MatchCreateManyWithoutTeam_Match_guestIdToTeamInput: NexusGenInputs['MatchCreateManyWithoutTeam_Match_guestIdToTeamInput'];
  MatchCreateManyWithoutTeam_Match_homeIdToTeamInput: NexusGenInputs['MatchCreateManyWithoutTeam_Match_homeIdToTeamInput'];
  MatchCreateOneWithoutMatch_ReportInput: NexusGenInputs['MatchCreateOneWithoutMatch_ReportInput'];
  MatchCreateOneWithoutPlayer_StatisticsInput: NexusGenInputs['MatchCreateOneWithoutPlayer_StatisticsInput'];
  MatchCreateWithoutMatch_ReportInput: NexusGenInputs['MatchCreateWithoutMatch_ReportInput'];
  MatchCreateWithoutPlayer_StatisticsInput: NexusGenInputs['MatchCreateWithoutPlayer_StatisticsInput'];
  MatchCreateWithoutTeam_Match_guestIdToTeamInput: NexusGenInputs['MatchCreateWithoutTeam_Match_guestIdToTeamInput'];
  MatchCreateWithoutTeam_Match_homeIdToTeamInput: NexusGenInputs['MatchCreateWithoutTeam_Match_homeIdToTeamInput'];
  MatchWhereUniqueInput: NexusGenInputs['MatchWhereUniqueInput'];
  Match_ReportCreateManyWithoutTeamInput: NexusGenInputs['Match_ReportCreateManyWithoutTeamInput'];
  Match_ReportCreateOneWithoutMatchInput: NexusGenInputs['Match_ReportCreateOneWithoutMatchInput'];
  Match_ReportCreateWithoutMatchInput: NexusGenInputs['Match_ReportCreateWithoutMatchInput'];
  Match_ReportCreateWithoutTeamInput: NexusGenInputs['Match_ReportCreateWithoutTeamInput'];
  Match_ReportWhereUniqueInput: NexusGenInputs['Match_ReportWhereUniqueInput'];
  MemberCreateManyWithoutTeamInput: NexusGenInputs['MemberCreateManyWithoutTeamInput'];
  MemberCreateManyWithoutUserInput: NexusGenInputs['MemberCreateManyWithoutUserInput'];
  MemberCreateWithoutTeamInput: NexusGenInputs['MemberCreateWithoutTeamInput'];
  MemberCreateWithoutUserInput: NexusGenInputs['MemberCreateWithoutUserInput'];
  MemberWhereUniqueInput: NexusGenInputs['MemberWhereUniqueInput'];
  Player_StatisticsCreateManyWithoutMatchInput: NexusGenInputs['Player_StatisticsCreateManyWithoutMatchInput'];
  Player_StatisticsCreateManyWithoutUserInput: NexusGenInputs['Player_StatisticsCreateManyWithoutUserInput'];
  Player_StatisticsCreateWithoutMatchInput: NexusGenInputs['Player_StatisticsCreateWithoutMatchInput'];
  Player_StatisticsCreateWithoutUserInput: NexusGenInputs['Player_StatisticsCreateWithoutUserInput'];
  Player_StatisticsWhereUniqueInput: NexusGenInputs['Player_StatisticsWhereUniqueInput'];
  TeamCreateInput: NexusGenInputs['TeamCreateInput'];
  TeamCreateManyWithoutUserInput: NexusGenInputs['TeamCreateManyWithoutUserInput'];
  TeamCreateOneWithoutMatch_Match_guestIdToTeamInput: NexusGenInputs['TeamCreateOneWithoutMatch_Match_guestIdToTeamInput'];
  TeamCreateOneWithoutMatch_Match_homeIdToTeamInput: NexusGenInputs['TeamCreateOneWithoutMatch_Match_homeIdToTeamInput'];
  TeamCreateOneWithoutMatch_ReportInput: NexusGenInputs['TeamCreateOneWithoutMatch_ReportInput'];
  TeamCreateOneWithoutMemberInput: NexusGenInputs['TeamCreateOneWithoutMemberInput'];
  TeamCreateWithoutMatch_Match_guestIdToTeamInput: NexusGenInputs['TeamCreateWithoutMatch_Match_guestIdToTeamInput'];
  TeamCreateWithoutMatch_Match_homeIdToTeamInput: NexusGenInputs['TeamCreateWithoutMatch_Match_homeIdToTeamInput'];
  TeamCreateWithoutMatch_ReportInput: NexusGenInputs['TeamCreateWithoutMatch_ReportInput'];
  TeamCreateWithoutMemberInput: NexusGenInputs['TeamCreateWithoutMemberInput'];
  TeamCreateWithoutUserInput: NexusGenInputs['TeamCreateWithoutUserInput'];
  TeamWhereUniqueInput: NexusGenInputs['TeamWhereUniqueInput'];
  UserCreateOneWithoutMemberInput: NexusGenInputs['UserCreateOneWithoutMemberInput'];
  UserCreateOneWithoutPlayer_StatisticsInput: NexusGenInputs['UserCreateOneWithoutPlayer_StatisticsInput'];
  UserCreateOneWithoutTeamInput: NexusGenInputs['UserCreateOneWithoutTeamInput'];
  UserCreateWithoutMemberInput: NexusGenInputs['UserCreateWithoutMemberInput'];
  UserCreateWithoutPlayer_StatisticsInput: NexusGenInputs['UserCreateWithoutPlayer_StatisticsInput'];
  UserCreateWithoutTeamInput: NexusGenInputs['UserCreateWithoutTeamInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  Member_role: NexusGenEnums['Member_role'];
  String: NexusGenScalars['String'];
  Int: NexusGenScalars['Int'];
  Float: NexusGenScalars['Float'];
  Boolean: NexusGenScalars['Boolean'];
  ID: NexusGenScalars['ID'];
  DateTime: NexusGenScalars['DateTime'];
}

export interface NexusGenFieldTypes {
  AuthUser: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Match: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    date: NexusGenScalars['DateTime'] | null; // DateTime
    field: string | null; // String
    guestId: number | null; // Int
    homeId: number | null; // Int
    id: number; // Int!
    location: string | null; // String
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Mutation: { // field return type
    createOneMatch: NexusGenRootTypes['Match']; // Match!
    createOneTeam: NexusGenRootTypes['Team']; // Team!
    login: NexusGenRootTypes['AuthUser'] | null; // AuthUser
    signup: NexusGenRootTypes['AuthUser'] | null; // AuthUser
  }
  Query: { // field return type
    filterTeam: NexusGenRootTypes['Team'][]; // [Team!]!
    team: NexusGenRootTypes['Team'] | null; // Team
    teams: NexusGenRootTypes['Team'][]; // [Team!]!
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  Team: { // field return type
    creatorId: number; // Int!
    description: string | null; // String
    home: string | null; // String
    id: number; // Int!
    logo: string; // String!
    loose: number | null; // Int
    name: string; // String!
    win: number | null; // Int
  }
  User: { // field return type
    email: string; // String!
    id: number; // Int!
    name: string | null; // String
    password: string; // String!
    phone: string | null; // String
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneMatch: { // args
      data: NexusGenInputs['MatchCreateInput']; // MatchCreateInput!
    }
    createOneTeam: { // args
      data: NexusGenInputs['TeamCreateInput']; // TeamCreateInput!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    signup: { // args
      email: string; // String!
      name?: string | null; // String
      password: string; // String!
      phone?: string | null; // String
    }
  }
  Query: {
    filterTeam: { // args
      name?: string | null; // String
    }
    team: { // args
      where: NexusGenInputs['TeamWhereUniqueInput']; // TeamWhereUniqueInput!
    }
    teams: { // args
      after?: NexusGenInputs['TeamWhereUniqueInput'] | null; // TeamWhereUniqueInput
      before?: NexusGenInputs['TeamWhereUniqueInput'] | null; // TeamWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AuthUser" | "Match" | "Mutation" | "Query" | "Team" | "User";

export type NexusGenInputNames = "MatchCreateInput" | "MatchCreateManyWithoutTeam_Match_guestIdToTeamInput" | "MatchCreateManyWithoutTeam_Match_homeIdToTeamInput" | "MatchCreateOneWithoutMatch_ReportInput" | "MatchCreateOneWithoutPlayer_StatisticsInput" | "MatchCreateWithoutMatch_ReportInput" | "MatchCreateWithoutPlayer_StatisticsInput" | "MatchCreateWithoutTeam_Match_guestIdToTeamInput" | "MatchCreateWithoutTeam_Match_homeIdToTeamInput" | "MatchWhereUniqueInput" | "Match_ReportCreateManyWithoutTeamInput" | "Match_ReportCreateOneWithoutMatchInput" | "Match_ReportCreateWithoutMatchInput" | "Match_ReportCreateWithoutTeamInput" | "Match_ReportWhereUniqueInput" | "MemberCreateManyWithoutTeamInput" | "MemberCreateManyWithoutUserInput" | "MemberCreateWithoutTeamInput" | "MemberCreateWithoutUserInput" | "MemberWhereUniqueInput" | "Player_StatisticsCreateManyWithoutMatchInput" | "Player_StatisticsCreateManyWithoutUserInput" | "Player_StatisticsCreateWithoutMatchInput" | "Player_StatisticsCreateWithoutUserInput" | "Player_StatisticsWhereUniqueInput" | "TeamCreateInput" | "TeamCreateManyWithoutUserInput" | "TeamCreateOneWithoutMatch_Match_guestIdToTeamInput" | "TeamCreateOneWithoutMatch_Match_homeIdToTeamInput" | "TeamCreateOneWithoutMatch_ReportInput" | "TeamCreateOneWithoutMemberInput" | "TeamCreateWithoutMatch_Match_guestIdToTeamInput" | "TeamCreateWithoutMatch_Match_homeIdToTeamInput" | "TeamCreateWithoutMatch_ReportInput" | "TeamCreateWithoutMemberInput" | "TeamCreateWithoutUserInput" | "TeamWhereUniqueInput" | "UserCreateOneWithoutMemberInput" | "UserCreateOneWithoutPlayer_StatisticsInput" | "UserCreateOneWithoutTeamInput" | "UserCreateWithoutMemberInput" | "UserCreateWithoutPlayer_StatisticsInput" | "UserCreateWithoutTeamInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "Member_role";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}