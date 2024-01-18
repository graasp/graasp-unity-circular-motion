import { UnitySettings, UnitySettingsKeys } from '../interfaces/settings';

// default settings object
export const DEFAULT_UNITY_SETTINGS: UnitySettings = {
  [UnitySettingsKeys.ShowPlayPauseButton]: true,
  [UnitySettingsKeys.ShowPauseButton]: true,
  [UnitySettingsKeys.ShowResetButton]: true,
  [UnitySettingsKeys.ShowTimeControl]: true,

  [UnitySettingsKeys.Camera]: {
    [UnitySettingsKeys.Position]: {
      [UnitySettingsKeys.X]: 0,
      [UnitySettingsKeys.Y]: 6,
      [UnitySettingsKeys.Z]: -5,
    },
    [UnitySettingsKeys.Rotation]: {
      [UnitySettingsKeys.X]: 35,
      [UnitySettingsKeys.Y]: 0,
      [UnitySettingsKeys.Z]: 0,
    },
    [UnitySettingsKeys.ShowCameraControl]: true,
    [UnitySettingsKeys.IsLockedOnObject]: true,
  },

  [UnitySettingsKeys.ShowReferenceFrame]: false,

  [UnitySettingsKeys.PhysicsObject]: {
    [UnitySettingsKeys.IsInteractiveRight]: true,
    [UnitySettingsKeys.IsInteractiveLeft]: true,
    [UnitySettingsKeys.ShowTrace]: false,
    [UnitySettingsKeys.TraceIsInteractive]: true,
    [UnitySettingsKeys.InitialPosition]: {
      [UnitySettingsKeys.X]: 0,
      [UnitySettingsKeys.Y]: 0,
      [UnitySettingsKeys.Z]: 0,
    },
    [UnitySettingsKeys.InitialRotation]: {
      [UnitySettingsKeys.X]: 90,
      [UnitySettingsKeys.Y]: 0,
      [UnitySettingsKeys.Z]: 0,
    },
    [UnitySettingsKeys.ShowVelocityVector]: true,
    [UnitySettingsKeys.InitialVelocity]: {
      [UnitySettingsKeys.X]: 0,
      [UnitySettingsKeys.Y]: 0,
      [UnitySettingsKeys.Z]: 0,
    },
    [UnitySettingsKeys.VelocityVectorIsInteractive]: false,
    [UnitySettingsKeys.ShowVelocityLabel]: true,
    [UnitySettingsKeys.ShowVelocityEquation]: false,
  },

  [UnitySettingsKeys.ThrustForce]: {
    [UnitySettingsKeys.IsActive]: false,
    [UnitySettingsKeys.IsInteractive]: true,
    [UnitySettingsKeys.ShowVector]: true,
    [UnitySettingsKeys.ShowLabel]: false,
    [UnitySettingsKeys.ShowEquation]: false,
    [UnitySettingsKeys.InitialMagnitude]: 3,
  },

  [UnitySettingsKeys.CentralForceisActive]: false,
  [UnitySettingsKeys.CentralForceisInteractive]: true,
  [UnitySettingsKeys.CentralForceRadius]: 5,
  [UnitySettingsKeys.CentralForceshowVector]: true,
  [UnitySettingsKeys.CentralForceshowLabel]: true,
  [UnitySettingsKeys.CentralForceshowEquation]: false,
  [UnitySettingsKeys.GravitationalForceIsActive]: false,
  [UnitySettingsKeys.GravitationalForceIsInteractive]: true,
  [UnitySettingsKeys.GravitationalBodyPositions]: {
    [UnitySettingsKeys.X]: 4,
    [UnitySettingsKeys.Y]: 0,
    [UnitySettingsKeys.Z]: 4,
  },
  [UnitySettingsKeys.GravitationalForceMagnitude]: 300,
  [UnitySettingsKeys.GravitationalShowEquation]: false,
  [UnitySettingsKeys.CelestialBodyIsSun]: true,
};
