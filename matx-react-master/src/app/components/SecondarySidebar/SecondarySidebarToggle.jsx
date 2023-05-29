import { Fab, Icon, IconButton } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import useSettings from "app/hooks/useSettings";
import clsx from "clsx";
import CurrentUserType from "app/CurrentUserType";
import ReportButtonDialog from "app/views/material-kit/dialog/ReportButtonDialog";

const SecondarySidebarToggle = () => {
  const { settings, updateSettings } = useSettings();

  const toggle = () => {
    //call a new page that you can report
    updateSettings({
      secondarySidebar: { open: !settings.secondarySidebar.open },
    });
  };

  const { palette } = useTheme();
  const textColor = palette.primary.contrastText;

  return <ReportButtonDialog />;
};

export default SecondarySidebarToggle;
