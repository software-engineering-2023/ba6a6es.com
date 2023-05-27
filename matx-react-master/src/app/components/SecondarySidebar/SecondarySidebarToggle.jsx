import { Fab, Icon, IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import useSettings from 'app/hooks/useSettings';
import clsx from 'clsx';

const Toggle = styled('div')(() => ({
  position: 'fixed',
  right: '30px',
  bottom: '50px',
  zIndex: 99,
  transition: 'all 0.15s ease',
  '&.open': {
    right: '10px',
  },
}));

const SecondarySidebarToggle = () => {
  const { settings, updateSettings } = useSettings();

  const toggle = () => {
    updateSettings({
      secondarySidebar: { open: !settings.secondarySidebar.open },
    });
  };

  const { palette } = useTheme();
  const textColor = palette.primary.contrastText;

  return (
    <Toggle className={clsx({ open: settings.secondarySidebar.open })}>
      {settings.secondarySidebar.open && (
        <IconButton onClick={toggle} size="small" aria-label="toggle">
          <Icon sx={{ color: textColor }}>close</Icon>
        </IconButton>
      )}

      {!settings.secondarySidebar.open && (
        <Fab color="error.main" aria-label="expand" onClick={toggle}>
          <ErrorOutlineOutlinedIcon  size="medium"  sx={{ color: palette.error.main }}/>
        </Fab>
      )}
    </Toggle>
  );
};

export default SecondarySidebarToggle;
