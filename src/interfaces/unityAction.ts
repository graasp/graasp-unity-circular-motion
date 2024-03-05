export const RATING_UNITY_TYPE = 'RATING_SIM';

export const UNITY_ACTION_TYPE = 'UNITY_ACTION';

export enum UserActionType {
  Click,
  Drag,
}

export enum UnityActionObjectId {
  Object0 = 'ResetButton',
  Object1 = 'PlayButton',
  Object2 = 'ZoomSlider',
  Object3 = 'CameraLockedToggle',
  Object4 = 'TopDownViewToggle',
  Object5 = 'TraceToggle',
  Object6 = 'VelocityVector',
  Object7 = 'ThrustVector',
  Object8 = 'ThrustButton',
  Object9 = 'RotateRocketLeft',
  Object10 = 'RotateRocketRight',
  Object11 = 'GravityFieldButton',
  Object12 = 'GravitationalSlider',
  Object13 = 'CentralForceToggle',
}

export type UnityAction = {
  time: number | Array<number>;
  objectId: UnityActionObjectId;
  actionType: UserActionType;
  extra: string | boolean | string[];
  runId: number;
};

export const emptyUnityAction: UnityAction = {
  time: 0,
  objectId: UnityActionObjectId.Object0,
  actionType: UserActionType.Click,
  extra: '',
  runId: 0,
};
