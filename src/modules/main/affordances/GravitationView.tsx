import { useTranslation } from 'react-i18next';

import { Icon, Stack } from '@mui/material';

import { PhysicsUnits } from '@/config/physicsUnits';
import { UnitySettingsKeys } from '@/interfaces/settings';

import CustomCheckbox from '../components/CustomCheckbox';
import NumberInput from '../components/NumberInput';
import Vector3Input from '../components/Vector3Input';

const GravitationSettings = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Stack
      direction="column"
      alignItems="center" // Alignement vertical au centre
      justifyContent="center" // Alignement horizontal au centre
      spacing={2}
      width="100%"
    >
      <CustomCheckbox
        path={[UnitySettingsKeys.GravitationalForceIsActive]}
        label={t('GravForceIsActive')}
        icon={<Icon />}
      />
      <CustomCheckbox
        path={[UnitySettingsKeys.GravitationalForceIsInteractive]}
        label={t('GravForceIsInteractive')}
        icon={<Icon />}
      />
      <Vector3Input
        path={[UnitySettingsKeys.GravitationalBodyPositions]}
        label={t('GravForcePosition')}
        unit={PhysicsUnits.Meters}
      />
      <NumberInput
        path={[UnitySettingsKeys.GravitationalForceMagnitude]}
        label={t('GravForceMagn')}
        icon={<Icon />}
        unit={PhysicsUnits.Meters}
        restricted
        divider
      />
      <CustomCheckbox
        path={[UnitySettingsKeys.GravitationalShowVector]}
        label={t('GravForceVector')}
        icon={<Icon />}
      />
      <CustomCheckbox
        path={[UnitySettingsKeys.GravitationalShowLabel]}
        label={t('GravForceLabel')}
        icon={<Icon />}
      />
      <CustomCheckbox
        path={[UnitySettingsKeys.GravitationalShowEquation]}
        label={t('GravForceEquation')}
        icon={<Icon />}
      />
      <CustomCheckbox
        path={[UnitySettingsKeys.CelestialBodyIsSun]}
        label={t('CelestialBodyIsSun')}
        icon={<Icon />}
      />
    </Stack>
  );
};
export default GravitationSettings;
