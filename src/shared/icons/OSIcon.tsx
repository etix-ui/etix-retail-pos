import { SvgIconProps } from "@mui/material/SvgIcon"
import React from "react"
import { AndroidIcon } from "./AndroidIcon"
import { AppleIcon } from "./AppleIcon"
import { CentosIcon } from "./CentosIcon"
import { DebianIcon } from "./DebianIcon"
import { FedoraIcon } from "./FedoraIcon"
import { FreebsdIcon } from "./FreebsdIcon"
import { LinuxIcon } from "./LinuxIcon"
import { RedhatIcon } from "./RedhatIcon"
import { UbuntuIcon } from "./UbuntuIcon"
import { WindowsIcon } from "./WindowsIcon"

type Props = SvgIconProps & {
  os: string
}

export function OSIcon({ os, ...props }: Props) {
  let i = <AppleIcon {...props} />
  switch (os) {
    case "Mac OS":
    case "iOS":
      i = <AppleIcon {...props} />
      break
    case "Linux":
      i = <LinuxIcon {...props} />
      break
    case "Ubuntu":
      i = <UbuntuIcon {...props} />
      break
    case "Fedora":
      i = <FedoraIcon {...props} />
      break
    case "CentOS":
      i = <CentosIcon {...props} />
      break
    case "FreeBSD":
      i = <FreebsdIcon {...props} />
      break
    case "Debian":
      i = <DebianIcon {...props} />
      break
    case "RedHat":
      i = <RedhatIcon {...props} />
      break
    case "Windows":
      i = <WindowsIcon {...props} />
      break
    case "Android":
      i = <AndroidIcon {...props} />
      break
  }
  return i
}
