type AgentType = {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags?: string[];
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait?: string;
  fullPortrait?: string;
  fullPortraitV2?: string;
  killfeedPortrait: string;
  background?: string;
  backgroundGradientColors: string[];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role?: AgentRole;
  abilities: AgentAbility[];
  voiceLine: AgentVoiceLine;
};

type AgentRole = {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
};

type AgentAbility = {
  slot: string;
  displayName: string;
  description: string;
  displayIcon?: string;
};

type AgentVoiceLine = {
  minDuration: number;
  maxDuration: number;
  mediaList: AgentVoiceLineMediaList[];
};

type AgentVoiceLineMediaList = {
  id: number;
  wwise: string;
  wave: string;
};

type UseGetAgentsResponseType = ApiResponseType<AgentType[]>;

type UseGetAgentDetailsResponseType = ApiResponseType<AgentType>;

type ApiResponseType<T> = {
  status: number;
  data: T;
};

export type {
  AgentType,
  AgentRole,
  AgentAbility,
  AgentVoiceLine,
  AgentVoiceLineMediaList,
  UseGetAgentsResponseType,
  UseGetAgentDetailsResponseType,
};
