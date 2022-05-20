import { SvgIconProps } from "@mui/material/SvgIcon"
import React from "react"
import { ChromeIcon } from "./ChromeIcon"
import { EdgeIcon } from "./EdgeIcon"
import { FirefoxIcon } from "./FirefoxIcon"
import { InternetExplorerIcon } from "./InternetExplorerIcon"
import { SafariIcon } from "./SafariIcon"

type Props = SvgIconProps & {
  browser: string
}

export function BrowserIcon({ browser, ...props }: Props) {
  let i = <ChromeIcon {...props} />
  switch (browser) {
    case "Chrome":
      i = <ChromeIcon {...props} />
      break
    case "Edge":
      i = <EdgeIcon {...props} />
      break
    case "Safari":
      i = <SafariIcon {...props} />
      break
    case "Firefox":
      i = <FirefoxIcon {...props} />
      break
    case "IE":
      i = <InternetExplorerIcon {...props} />
      break
  }
  return i
}
