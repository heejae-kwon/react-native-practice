import RNFS from 'react-native-fs'

let AssetList: RNFS.ReadDirItem[] = []
export async function prepareAssets() {
    let isExists = await RNFS.existsAssets('model/squeezenet1.1.ort');
    if (isExists) {
        await RNFS.copyFileAssets('model/squeezenet1.1.ort', RNFS.DocumentDirectoryPath + '/squeezenet1.1.ort')//.then((re) => {
    }


    isExists = await RNFS.existsAssets('model/running_1.jpg');
    if (isExists) {
        await RNFS.copyFileAssets('model/running_1.jpg', RNFS.DocumentDirectoryPath + '/running_1.jpg')//.then((re) => {
    }

    AssetList = await RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    console.log(AssetList)
}

export function getAssetPath(assetName: string) {
    return AssetList.find(value => value.name === assetName)?.path!
}

export async function readAsset(name: string, encodingOption: string) {
    return await RNFS.readFileAssets(name, encodingOption)
}

export function isAssetsPrepared() {
    return AssetList.length !== 0
}