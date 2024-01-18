import { useTranslation } from 'react-i18next';

import { Icon, Stack } from '@mui/material';

import { PhysicsUnits } from '@/config/physicsUnits';
import { UnitySettingsKeys } from '@/interfaces/settings';

import CustomCheckbox from '../components/CustomCheckbox';
import NumberInput from '../components/NumberInput';

const CentralSettings = (): JSX.Element => {
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
        path={[UnitySettingsKeys.CentralForceisActive]}
        label={t('UniformCircularMotionActive')}
        icon={<Icon />}
      />
      <CustomCheckbox
        path={[UnitySettingsKeys.CentralForceisInteractive]}
        label={t('UniformCircularMotionBtn')}
        icon={<Icon />}
      />
      <NumberInput
        path={[UnitySettingsKeys.CentralForceRadius]}
        label={t('UniformCircularMotionRadius')}
        icon={<Icon />}
        unit={PhysicsUnits.Meters}
        restricted
        divider
      />
      <CustomCheckbox
        path={[UnitySettingsKeys.CentralForceshowVector]}
        label={t('UCMVector')}
        icon={<Icon />}
      />
      <CustomCheckbox
        path={[UnitySettingsKeys.CentralForceshowLabel]}
        label={t('UCMLabel')}
        icon={<Icon />}
      />
      <CustomCheckbox
        path={[UnitySettingsKeys.CentralForceshowEquation]}
        label={t('UCMEquation')}
        icon={<Icon />}
      />
    </Stack>
  );
};
export default CentralSettings;
