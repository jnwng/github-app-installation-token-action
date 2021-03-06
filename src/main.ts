import {setFailed, setOutput, getInput} from '@actions/core'
import {getToken} from 'github-app-installation-token'

export async function run(): Promise<void> {
  try {
    const appId = parseInt(getInput('appId'), 10)
    const installationId = parseInt(getInput('installationId'), 10)
    const privateKey = getInput('privateKey')

    const {token} = await getToken({appId, installationId, privateKey})

    setOutput('token', token)
  } catch (error) {
    setFailed(error.message)
  }
}
