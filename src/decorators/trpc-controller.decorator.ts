import { PATH_METADATA } from 'src/constants'
import { isUndefined } from 'src/utils/shared.utils'

export function TrpcController(path?: string) {
  const defaultPath = ''

  const definedPath = isUndefined(path) ? path : defaultPath

  return (target: object) => {
    Reflect.defineMetadata(PATH_METADATA, definedPath, target)
  }
}
