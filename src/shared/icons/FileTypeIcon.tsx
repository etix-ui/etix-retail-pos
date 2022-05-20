import { SvgIconProps } from "@mui/material/SvgIcon"
import React from "react"
import { GifIcon } from "./GifIcon"
import { FilePdfIcon } from "./FilePdfIcon"
import { FileImageIcon } from "./FileImageIcon"
import { FileExcelIcon } from "./FileExcelIcon"
import { FileLinesIcon } from "./FileLinesIcon"
import { FileIcon } from "./FileIcon"
import { FileWordIcon } from "./FileWordIcon"
import { FileZipperIcon } from "./FileZipperIcon"

type Props = SvgIconProps & {
  filename: string
}

export function FileTypeIcon({ filename, ...props }: Props) {
  const ext = filename
    .toLowerCase()
    .split(".")
    .pop()
  switch (ext) {
    case "pdf":
      return <FilePdfIcon {...props} />
    case "gif":
      return <GifIcon {...props} />
    case "png":
    case "jpg":
    case "jpeg":
      return <FileImageIcon {...props} />
    case "xlsx":
    case "xls":
    case "csv":
      return <FileExcelIcon {...props} />
    case "doc":
    case "docx":
      return <FileWordIcon {...props} />
    case "txt":
      return <FileLinesIcon {...props} />
    case "zip":
      return <FileZipperIcon {...props} />
    default:
      return <FileIcon {...props} />
  }
}
